import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { UsersService } from 'src/users/users.service';
import { UsersController } from 'src/users/users.controller';
import { AuthController } from './auth.controller';

@Module({
  imports:[UsersModule,PassportModule, JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60s' },
  }), ],
  providers: [AuthService, LocalStrategy, JwtStrategy], 
  controllers:[AuthController],
})
export class AuthModule {}
