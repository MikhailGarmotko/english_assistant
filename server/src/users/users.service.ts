import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './users.dtos';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class UsersService {

      constructor (@InjectRepository(User) private readonly userRepository:Repository<User>) {}
    
      async createUser (createUserDto:CreateUserDto) {
        const {email, username} = createUserDto;
        const userEmail = await this.userRepository.findOne({where:{email}})
        const userName = await this.userRepository.findOne({where:{username}})
        if (userEmail) {return JSON.stringify({message:"Email is existed"})}
        if (userName) {return JSON.stringify({message:"Username is existed"})}
        const newUser = this.userRepository.create(createUserDto);
        this.userRepository.save(newUser)
        return {message:"logged"}}

      async findUsersById (id:any) {return await this.userRepository.findOne({where:{id}})};

      async deleteUser (id:number) {return await this.userRepository.delete(id)};
      

      async findUsersByUserName (username:any) {return await this.userRepository.findOne({where:{username}})}

      async findUsersByUserEmail (email:any) {return await this.userRepository.findOne({where:{email}})}

      async getUsers () {return await this.userRepository.find()};


      findUser () {}

}
