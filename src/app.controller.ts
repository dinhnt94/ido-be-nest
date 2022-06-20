import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id/:type')
  getSignature(@Param() params): string[] {
    //TODO: remove this log
    console.log('getSignature', params.id, params.type);
    return this.appService.getSignature(params.id, params.type);
  }

  @Get('check/:id')
  getUserInWhiteList(@Param() params): string {
    //TODO: remove this log
    console.log('getUserInWhiteList', params.id);
    return this.appService.getUserInWhiteList(params.id);
  }
}
