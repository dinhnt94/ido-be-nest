import { Injectable } from '@nestjs/common';
import { AutionIDOInfo, CommunityIDOInfo, StakeIDOInfo } from './utils/config';
import { CommMerkleTree, StakeMerkleTree } from "./utils/merkleTree";
import {whiteListComm, whiteListStake } from './utils/whiteList';

const WhiteListType = {
  Community: 'Community',
  Stake: 'Stake'
}

type GetUserInfo = {
  name: string,
  token: string,
  type: string,
  timeStart: number,
  status: boolean
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

  getUserInWhiteList(userAdd: string): GetUserInfo[] | []{
    try {
      let stakeData = StakeIDOInfo;
      let communityData = CommunityIDOInfo;
      let autionData = AutionIDOInfo;
      // console.log(stakeData, communityData, autionData)

      if (whiteListComm.includes(userAdd))
        communityData.status = true;
      if (whiteListStake.includes(userAdd))
        stakeData.status = true;
      return [stakeData, communityData, autionData]
    } catch(e) {
      return []
    }
  }
}
