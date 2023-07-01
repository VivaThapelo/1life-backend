import { Response } from 'express';
import { WordTypesService } from './word-types.service';
import { Controller, Get, HttpStatus, Res } from '@nestjs/common';

@Controller('api/wordtypes')
export class WordTypesController {
  constructor(private readonly wordTypesService: WordTypesService) {}

  @Get('')
  async getWordTypes(@Res() res: Response) {
    return res
      .status(HttpStatus.OK)
      .send(await this.wordTypesService.getWordTypes());
  }
}
