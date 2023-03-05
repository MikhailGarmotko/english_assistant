import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { User } from './users/user.entity';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { WordlistModule } from './wordlist/wordlist.module';
import { Word } from './wordlist/words.entity';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'build'),
    }),
    ConfigModule.forRoot({
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
        autoLoadEntities: true,
        synchronize: false,
      }),
      inject:[ConfigService],
    }), 
    UsersModule, AuthModule, WordlistModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
