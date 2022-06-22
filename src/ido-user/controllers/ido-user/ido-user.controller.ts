import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateIdoUser } from 'src/ido-user/dtos/CreateIdoUser.dto';
import { IdoUserService } from 'src/ido-user/services/ido-user/ido-user.service';

@Controller('ido-user')
export class IdoUserController {
  constructor(private readonly userService: IdoUserService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createUsers(@Body() createUser: any) {  // require : address, typeStake
    let timeNow = (new Date().valueOf() / 1000).toString(); //seconds
    let createUsers: CreateIdoUser = { ...createUser, ts: parseInt(timeNow)};
    return this.userService.createUser(createUsers);
  }

  @Get(`address/:address`)
  async getUserByAddress(@Param('address') address: string) {
    return await this.userService.findUserByAddress(address);
  }
}
