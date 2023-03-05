import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { WordlistService } from './wordlist.service';
import { WordlistController } from './wordlist.controller';
import { Word } from './words.entity';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/user.entity';
import { UserWordService } from 'src/user_word.service';
import { UserWord } from 'src/user_word.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Word, User, UserWord])],
  providers: [WordlistService, UsersService, UserWordService],
  controllers: [WordlistController],
  exports:[WordlistService]
})
export class WordlistModule {}
