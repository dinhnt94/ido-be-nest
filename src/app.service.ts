import { Injectable } from '@nestjs/common';
import { CommMerkleTree, StakeMerkleTree } from "./utils/merkleTree";
import {whiteListComm, whiteListStake } from './utils/whiteList';

const WhiteListType = {
  Community: 'Community',
  Stake: 'Stake'
}

@Injectable()
export class AppService {
  getSignature(userAdd: string, typeWhiteList: string): string[] {
    if (typeWhiteList == WhiteListType.Community)
      return CommMerkleTree.getClaimming(userAdd);
    if (typeWhiteList == WhiteListType.Stake)
      return StakeMerkleTree.getClaimming(userAdd);
    return [''];
  }

  getUserInWhiteList(userAdd: string): string {
    if (whiteListComm.includes(userAdd)) return 'Community'
    if (whiteListStake.includes(userAdd)) return 'Stake'
    return "No"
  }
}
