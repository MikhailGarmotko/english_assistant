import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/user.entity';
import { CreateUserDto } from 'src/users/users.dtos';

@Injectable()
export class AuthService {
    constructor (private usersService:UsersService, private jwtService: JwtService, ) {}

    async validateUser (username:string, pass:string):Promise<any> {
        console.log(username,pass);
        const user = await this.usersService.findUsersByUserName(username);
        // console.log(user);
        if (user && user.password === pass) {
            const {password, ...result} = user;
            return result;
        }
        return null;
    }

    async login (user:any) {
        const payload = {username:user.username, email:user.email, id:user.id}
        return {access_token:this.jwtService.sign(payload), payload}
    }

    async loginWithGoogle (createUserDto:CreateUserDto) {
        const {email} = createUserDto;
        const user = await this.usersService.findUsersByUserEmail(email);
        if (user) {const payload = {username:user.username, email:user.email, id:user.id}; return this.login(payload); }
        const newUser =this.usersService.createUser(createUserDto);
        this.login(newUser);
        return newUser;
      }
}
