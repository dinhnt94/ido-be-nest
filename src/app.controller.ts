import { Controller, Get, Param, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('')
export class AppController {
  constructor() {}

  // Helth check
  @Get()
  getDummy(): string {
    return 'Hello, Dummy!!!';
  }
}
