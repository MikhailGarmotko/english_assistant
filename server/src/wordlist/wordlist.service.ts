import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import { CreateWordDto } from './word.dtos';
import { Word } from './words.entity';
import { User } from 'src/users/user.entity';
import { UserWord } from 'src/user_word.entity';

@Injectable()
export class WordlistService {
    constructor(@InjectRepository(Word) private readonly wordRepository:Repository<Word>,
    @InjectRepository(User) 
    private readonly userRepository:Repository<User>,
    @InjectRepository(UserWord) 
    private readonly userWordRepository:Repository<UserWord>
    ){}

    async getWords () {return this.wordRepository.find()}
    async createWord (createWordDto:CreateWordDto) {
        const {word, userId} = createWordDto;
        const newWord = new Word();
        newWord.word = word;
        const {id} = await this.wordRepository.save(newWord);
        const createUserWord ={userId, wordId:id}
        await this.userWordRepository.save(createUserWord);
        return newWord;
    }
    async findWordById (id:any) {
        const word = await this.wordRepository.findOne({where:{id}, relations:['user']});
        console.log(word);
        return word; 
     }
}
