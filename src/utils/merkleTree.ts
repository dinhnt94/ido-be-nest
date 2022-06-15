import { MerkleTree } from 'merkletreejs';
const keccak256 = require('keccak256');
// const whiteList = require('./whiteList')
const whiteList = [
    "0xc70369cBF8c4Fa43221D4D74e6EC2530D03A599D"
]

export function getRootHash() {
    // 4. Get root hash of the `merkleeTree` in hexadecimal format (0x)
    // Print out the Entire Merkle Tree.
    // const rootHash = merkleTree.getHexRoot();
    // // console.log('Whitelist Merkle Tree\n', merkleTree.toString());
    // console.log("Root Hash: ", merkleTree.getHexRoot());
    // return rootHash;
}

export function getClaimming(userAddress: string) {
    // CLIENT-SIDE: Use `msg.sender` address to query and API that returns the merkle proof
    // required to derive the root hash of the Merkle Tree
    // The leaves, merkleTree, and rootHas are all PRE-DETERMINED prior to whitelist claim
    const leafNodes = whiteList.map(addr => keccak256(addr));
    const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true});
    // get index of userAddress
    const indexAdd = whiteList.indexOf(userAddress)
    console.log(indexAdd, leafNodes);
    if ( indexAdd == -1) return [];

    // ✅ Positive verification of address
    const claimingAddress = leafNodes[indexAdd];
    console.log(claimingAddress);
    // ❌ Change this address to get a `false` verification
    // const claimingAddress = keccak256("0X5B38DA6A701C568545DCFCB03FCB875F56BEDDD6");

    // `getHexProof` returns the neighbour leaf and all parent nodes hashes that will
    // be required to derive the Merkle Trees root hash.
    // const hexProof = merkleTree.getHexProof(claimingAddress);
    const hexProof = merkleTree.getProof(claimingAddress);
    console.log(hexProof);

    // ✅ - ❌: Verify is claiming address is in the merkle tree or not.
    // This would be implemented in your Solidity Smart Contract
    // console.log(merkleTree.verify(hexProof, claimingAddress, rootHash));
    return hexProof
}