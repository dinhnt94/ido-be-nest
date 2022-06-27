import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateIdoUser } from 'src/ido-user/dtos/CreateIdoUser.dto';
import { IdoUserService } from 'src/ido-user/services/ido-user/ido-user.service';
import { UserJoinIdo } from 'src/typeorm';

@Controller('ido-user')
export class IdoUserController {
  constructor(private readonly userService: IdoUserService) { }

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  async createUsers(@Body() createUser: any, @Res() res: Response) {  // require : address, typeStake
    let timeNow = (new Date().valueOf() / 1000).toString(); //seconds
    let createUsers: CreateIdoUser = { ...createUser, ts: parseInt(timeNow) };
    let newUser: UserJoinIdo;
    try {
      newUser = await this.userService.createUser(createUsers);
    } catch (error) {
      return res.status(200).send("User already added.")
    }
    return newUser;
  }

  @Get(`address/:address`)
  async getUserByAddress(@Param('address') address: string) {
    return await this.userService.findUserByAddress(address);
  }
}
