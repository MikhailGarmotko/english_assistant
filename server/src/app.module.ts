import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { User } from './users/user.entity';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal:true}),
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      useFactory: (configService:ConfigService) => ({
        type:'postgres',
        host:configService.get('DB_HOST'), 
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [User],
        synchronize: true,
      }),
      inject:[ConfigService],
    }), UsersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
