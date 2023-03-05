import { Controller } from '@nestjs/common';
import { WordlistService } from './wordlist.service';
import { Get, Post, Body, Param} from "@nestjs/common";
import { CreateWordDto } from './word.dtos';

@Controller('wordlist')
export class WordlistController {
    constructor (private readonly wordsService:WordlistService) {}

    @Get()
    getWords() {return this.wordsService.getWords()}

    @Get (':id')
    findUsersById(@Param('id') id:number) {return this.wordsService.findWordById(id)}

    @Post('create')
    createWord(@Body() createWordDto:CreateWordDto) {return this.wordsService.createWord(createWordDto)}

}
