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
        const {email} = createUserDto;
        const user = await this.userRepository.findOne({where:{email}})
        // console.log(user)
        if (user) {return JSON.stringify({message:"The email is existed"})}
        const newUser = this.userRepository.create(createUserDto);
        return this.userRepository.save(newUser)}

      async findUsersById (id:any) {return await this.userRepository.findOne({where:{id}})};

      async deleteUser (id:number) {return await this.userRepository.delete(id)};
      

      async findUsersByUserName (username:any) {return await this.userRepository.findOne({where:{username}})}

      async findUsersByUserEmail (email:any) {return await this.userRepository.findOne({where:{email}})}

      async getUsers () {return await this.userRepository.find()};


      findUser () {}

}
