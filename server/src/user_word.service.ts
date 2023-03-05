import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { UserWord } from './user_word.entity';
import {Repository} from 'typeorm';

@Injectable()
export class UserWordService {

      constructor (
      @InjectRepository(UserWord) 
      private readonly userWordRepository:Repository<UserWord>
      ) {}
}