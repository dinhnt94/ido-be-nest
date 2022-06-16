import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  getSignature(@Param() params): string {
    console.log('getSignature', params.id);
    return this.appService.getSignature(params.id);
  }

  @Get('check/:id')
  getUserInWhiteList(@Param() params): string {
    console.log('getUserInWhiteList', params.id);
    return this.appService.getUserInWhiteList(params.id);
  }
}
