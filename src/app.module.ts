import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

import {TypeOrmModule} from '@nestjs/typeorm';
import { IdoUserModule } from './ido-user/ido-user.module';
import entities from './typeorm';
import { IdoBeModule } from './ido-be/ido-be.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: +configService.get<number>('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DB'),
        entities: entities,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    IdoUserModule,
    IdoBeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
