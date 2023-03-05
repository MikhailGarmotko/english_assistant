import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { UserWord } from 'src/user_word.entity';
import { UserWordService } from 'src/user_word.service';
import { WordlistService } from 'src/wordlist/wordlist.service';
import { Word } from 'src/wordlist/words.entity';
import { User } from './user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports:[TypeOrmModule.forFeature([User, UserWord, Word])],
  providers: [UsersService, UserWordService, WordlistService],
  controllers:[UsersController],
  exports:[UsersService]
})
export class UsersModule {}
