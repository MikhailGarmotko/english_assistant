import { Controller, Post, Get, Body, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { LocalAuthGuard } from './local.auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';
import { CreateUserDto } from 'src/users/users.dtos';

@Controller('auth')
export class AuthController {

  constructor (private authService:AuthService, private usersService:UsersService){}

  @UseGuards(LocalAuthGuard)
  @Post('login') 
  async login(@Request() req) {console.log(req.user); return this.authService.login(req.user)}
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
  @Post('google')
  async google_login(@Body() createUsersDto:CreateUserDto) {
    return this.authService.loginWithGoogle(createUsersDto)} 
};