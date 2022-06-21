import { Controller, Get, Param, Put } from '@nestjs/common';
import { AppService } from './app.service';

type GetUserInfo = {
  name: string,
  token: string,
  type: string,
  timeStart: number,
  status: boolean,
  event: number
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hashleaf/:id/:type')
  getSignature(@Param() params): string[] {
    //TODO: remove this log
    console.log('getSignature', params.id, params.type);
    return this.appService.getSignature(params.id, params.type);
  }

  @Get('check/:id')
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