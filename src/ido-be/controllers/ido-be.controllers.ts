import { Controller, Get, Param } from '@nestjs/common';

import { IdoBeService } from '../services/ido-be.services';

type GetUserInfo = {
  name: string;
  token: string;
  type: string;
  timeStart: number;
  status: boolean;
  event: number;
};

@Controller('idobe')
export class IdoBeController {
  constructor(private readonly idoBeService: IdoBeService) {}

  @Get('hashleaf/:id/:type')
  getSignature(@Param() params): string[] {
    //TODO: remove this log
    console.log('getSignature', params.id, params.type);
    return this.idoBeService.getSignature(params.id, params.type);
  }

  @Get('check/:id')
  getUserInWhiteList(@Param() params): GetUserInfo[] {
    //TODO: remove this log
    console.log('getUserInWhiteList', params.id);
    return this.idoBeService.getUserInWhiteList(params.id);
  }
  
  // @Get('past-event')
  // async getPastEvent(){
  //   // return await this.appService.getPastEvent();
  // }
}
