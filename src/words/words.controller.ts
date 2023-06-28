import { Controller, Get, HttpStatus, Param, Query, Res } from '@nestjs/common';
import { WordsService } from './words.service';
import { Response } from 'express';
import { WordTypes } from 'src/dtos/word-types.dto';

@Controller('api/words')
export class WordsController {
  constructor(private readonly wordsService: WordsService) {}

  @Get('/:type')
  async getWords(
    @Param('type') type,
    @Res() res: Response,
  ): Promise<Response<string[]>> {
    console.log(type);
    return res
      .status(HttpStatus.OK)
      .send(await this.wordsService.getWords(type));
  }
}
