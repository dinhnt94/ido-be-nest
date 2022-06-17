import { Module } from '@nestjs/common';
import { IdoUserController } from './controllers/ido-user/ido-user.controller';
import { IdoUserService } from './services/ido-user/ido-user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserJoinIdo } from 'src/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserJoinIdo])],
  controllers: [IdoUserController],
  providers: [IdoUserService]
})
export class IdoUserModule {}
