import { Controller, Post, Get, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local.auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { GoogleOauthGuard } from './auth/google.auth.guard';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {

  constructor (){}

 
}

