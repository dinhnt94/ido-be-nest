import { Injectable } from '@nestjs/common';
import { getTets, CommMerkleTree, StakeMerkleTree } from "./utils/merkleTree";

const WhiteListType = {
  Community: 'Community',
  Stake: 'Stake'
}

@Injectable()
export class AppService {
  getSignature(userAdd: string): string {
    // getClaimming(userAdd, WhiteListType.Community);
    // getTets();
    const rt = CommMerkleTree.getRootHash();
    CommMerkleTree.verifyLeaf(rt, userAdd);
    // CommMerkleTree.getClaimming(userAdd);
    // StakeMerkleTree.getClaimming(userAdd);
    return 'Hello World!';
  }
}
