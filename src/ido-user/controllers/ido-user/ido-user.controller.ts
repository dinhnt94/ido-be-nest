import {
    Body,
    Controller,
    Get,
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
    createUsers(@Body() createUser: CreateIdoUser) {
        return this.userService.createUser(createUser);
    }
}