import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserJoinIdo } from 'src/typeorm';
import { IdoBeController } from './controllers/ido-be.controllers';
import { IdoBeService } from './services/ido-be.services';

@Module({
  imports: [TypeOrmModule.forFeature([UserJoinIdo])],
  controllers: [IdoBeController],
  providers: [IdoBeService],
})
export class IdoBeModule {}
