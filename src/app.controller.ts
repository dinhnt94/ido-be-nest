import { Controller, Get, Param, Put } from '@nestjs/common';
import { AppService } from './app.service';

type GetUserInfo = {
  name: string,
  token: string,
  type: string,
  timeStart: number,
  status: boolean
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id/:type')
  getSignature(@Param() params): string[] {
    //TODO: remove this log
    console.log('getSignature', params.id, params.type);
    return this.appService.getSignature(params.id, params.type);
  }

  @Put(':id')
  getUserInWhiteList(@Param() params): GetUserInfo[] {
    //TODO: remove this log
    console.log('getUserInWhiteList', params.id);
    return this.appService.getUserInWhiteList(params.id);
  }

  @Get()
  getDummy(): string {
    return 'Hello, Dummy!!!';
  }
}