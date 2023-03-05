import { ConsoleLogger, Injectable, NotFoundException } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import { User } from './user.entity';
import { Word } from 'src/wordlist/words.entity';
import { CreateUserDto } from './users.dtos';
import { JwtService } from '@nestjs/jwt';
import { UserWord } from 'src/user_word.entity';


@Injectable()
export class UsersService {

      constructor (
      @InjectRepository(User) 
      private readonly userRepository:Repository<User>,
      @InjectRepository(UserWord) 
      private readonly userWordRepository:Repository<UserWord>,
      @InjectRepository(Word) 
      private readonly wordRepository:Repository<Word>
      ) {}
    
      async createUser (createUserDto:CreateUserDto):Promise<string | {}> {
        const {email, username} = createUserDto;
        const userEmail = await this.userRepository.findOne({where:{email}})
        const userName = await this.userRepository.findOne({where:{username}})
        if (userEmail) {return JSON.stringify({message:"Email is existed"})}
        if (userName) {return JSON.stringify({message:"Username is existed"})}
        const newUser = this.userRepository.create(createUserDto);
        this.userRepository.save(newUser)
        return {message:"logged"}
      }

        async createUserWord (createUserWord:{userId:number, wordId:number}):Promise<void>{
          const user = await this.userRepository.findOne({where:{id:createUserWord.userId}})
          if (!user) throw  new NotFoundException();
        await this.userWordRepository.save(createUserWord);
        }

      async findUsersById (id:any) {
         const user = await this.userRepository.findOne({where:{id}, relations:['words']});
         return user; 
      }

      async deleteUser (id:number) {return await this.userRepository.delete(id)};
      

      async findUsersByUserName (username:any) {return await this.userRepository.findOne({where:{username}})}

      async findUsersByUserEmail (email:any) {return await this.userRepository.findOne({where:{email}})}

      async getUsers () {return await this.userRepository.find()};


      async findUsersWords (userId:any) {return await this.userWordRepository.find(
        {relations:['words'],
        where:{userId}}
      )};
     

}
