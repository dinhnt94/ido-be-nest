import { Injectable } from '@nestjs/common';
import {
  AutionIDOInfo,
  CommunityIDOInfo,
  StakeSENIDOInfo,
  StakeBCOINIDOInfo,
} from 'src/utils/config';
import {
  CommMerkleTree,
  StakeBCOINMerkleTree,
  StakeSENMerkleTree,
} from 'src/utils/merkleTree';
import {
  whiteListComm,
  whiteListBCOINStake,
  whiteListSENStake,
} from 'src/utils/whiteList';

const WhiteListType = {
  Community: 'Community',
  StakeBcoin: 'StakeBcoin',
  StakeSen: 'StakeSen',
};

type GetUserInfo = {
  name: string;
  token: string;
  type: string;
  timeStartIDO: Array<number>,
  timeWhileList: Array<number>,
  timeClaimIDO: number,
  status: boolean;
  event: number;
};

@Injectable()
export class IdoBeService {
  constructor() { }

  getSignature(userAdd: string, typeWhiteList: string): string[] {
    if (typeWhiteList == WhiteListType.Community)
      return CommMerkleTree.getClaimming(userAdd);
    if (typeWhiteList == WhiteListType.StakeBcoin)
      return StakeBCOINMerkleTree.getClaimming(userAdd);
    if (typeWhiteList == WhiteListType.StakeSen) {
      return StakeSENMerkleTree.getClaimming(userAdd);
    }

    return [''];
  }

  getUserInWhiteList(userAdd: string): GetUserInfo[] | [] {
    try {
      let stakeBcoinData = StakeBCOINIDOInfo;
      let stakeSenData = StakeSENIDOInfo;
      let communityData = CommunityIDOInfo;
      let autionData = AutionIDOInfo;

      if (whiteListComm.includes(userAdd)) communityData.status = true;
      if (whiteListBCOINStake.includes(userAdd)) stakeBcoinData.status = true;
      if (whiteListSENStake.includes(userAdd)) stakeSenData.status = true;
      autionData.status = true;
      return [stakeBcoinData, stakeSenData, communityData, autionData];
    } catch (e) {
      return [];
    }
  }

  // getPastEvent(): Object {

  //   return {

  //   }
  // }
}
