import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { WordsService } from './words.service';
import { Response } from 'express';
import { WordTypes } from 'src/dtos/word-types.dto';

@Controller('api/words')
export class WordsController {
  constructor(private readonly wordsService: WordsService) {}

  @Get('/words')
  getWords(
    @Param() wordType: WordTypes,
    @Res() res: Response,
  ): Response<string[]> {
    return res
      .status(HttpStatus.OK)
      .send(this.wordsService.getWords(wordType.toString()));
  }
}
