import { Controller, Get, Param, Put, Req, Res,  } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor() {}

  // Helth check
  @Get()
  getDummy(@Req() req, @Res() res: Response) {
    console.log("Hello dummy")
    return res.status(200).send("Hello dummy");
  }
}
