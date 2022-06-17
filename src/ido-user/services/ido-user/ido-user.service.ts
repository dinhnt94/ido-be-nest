import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserJoinIdo } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateIdoUser } from 'src/ido-user/dtos/CreateIdoUser.dto';

@Injectable()
export class IdoUserService {
  constructor(
    @InjectRepository(UserJoinIdo) private readonly userRepository: Repository<UserJoinIdo>,
  ) {}

  createUser(createUser: CreateIdoUser) {
    const newUser = this.userRepository.create(createUser);
    return this.userRepository.save(newUser);
  }

  getUsers() {
    return this.userRepository.find();
  }

//   findUsersById(id: number) {
//     return this.userRepository.findOne(id);
//   }
}
