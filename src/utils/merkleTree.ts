import { MerkleTree } from 'merkletreejs';
import {whiteListComm, whiteListBCOINStake, whiteListSENStake } from './whiteList';
const keccak256 = require('keccak256');

const WhiteListType = {
    Community: 'Community',
    StakeBcoin: 'StakeBcoin',
    StakeSen: 'StakeSen'
}

export class MerkleTreeSupport {

    private whiteList: Array<string>;
    private leafNodes: Array<Buffer>;
    private merkleTree: MerkleTree;

    constructor(typeWhiteList: string) {
        if(typeWhiteList == WhiteListType.Community) this.whiteList = whiteListComm;
        if(typeWhiteList == WhiteListType.StakeBcoin) this.whiteList = whiteListBCOINStake;
        if(typeWhiteList == WhiteListType.StakeSen) this.whiteList = whiteListSENStake;
        this.leafNodes = this.whiteList.map(addr => keccak256(addr));
        this.merkleTree = new MerkleTree(this.leafNodes, keccak256, { sortPairs: true});
    }

    public getRootHash() {
        try {
            const rootHash = this.merkleTree.getHexRoot();
            console.log("Root Hash New: ", this.merkleTree.getHexRoot());
            return rootHash;
        } catch(e) {
            console.error('getRootHash', e);
            return '';
        }
    }

    public getClaimming(userAdd: string) {
        try {
            // get index of userAddress
            const indexAdd = this.whiteList.indexOf(userAdd);
            // console.log(indexAdd, this.leafNodes);
            if ( indexAdd == -1 ) return [];

            // ✅ Positive verification of address
            const claimingAddress = this.leafNodes[indexAdd];
            console.log(claimingAddress);
            // ❌ Change this address to get a `false` verification
            // const claimingAddress = keccak256("0X5B38DA6A701C568545DCFCB03FCB875F56BEDDD6");

            // `getHexProof` returns the neighbour leaf and all parent nodes hashes that will
            // be required to derive the Merkle Trees root hash.
            const hexProof = this.merkleTree.getHexProof(claimingAddress);
            console.log(typeof (hexProof), hexProof.values());

            // ✅ - ❌: Verify is claiming address is in the merkle tree or not.
            // This would be implemented in your Solidity Smart Contract
            // console.log(merkleTree.verify(hexProof, claimingAddress, rootHash));
            return hexProof
        } catch(e) {
            console.error('getClaimming', e);
            return []
        }
    }

    public verifyLeaf(rootHash: any, userAdd: string) {
        const hexProof = this.getClaimming(userAdd)
        const indexAdd = this.whiteList.indexOf(userAdd);
        const claimingAddress = this.leafNodes[indexAdd];
        console.log(this.merkleTree.verify(hexProof, claimingAddress, rootHash));
    }
}

// export 2 const as 2 type of whitelist
export const CommMerkleTree = new MerkleTreeSupport(WhiteListType.Community);
export const StakeBCOINMerkleTree = new MerkleTreeSupport(WhiteListType.StakeBcoin);
export const StakeSENMerkleTree = new MerkleTreeSupport(WhiteListType.StakeSen)