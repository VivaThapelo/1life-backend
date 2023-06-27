import { Response } from 'express';
import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  RawBodyRequest,
  Req,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';
import { WordType } from './types/word.types';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/wordtypes')
  getWordTypes(): string[] {
    return this.appService.getWordTypes();
  }

  @Get('/words')
  getWords(
    @Param() wordType: WordType,
    @Res() res: Response,
  ): Response<string[]> {
    return res
      .status(HttpStatus.OK)
      .send(this.appService.getWords(wordType.toString()));
  }

  @Post('/sentence')
  postSentence(@Body() sentence: string, @Res() res: Response): Response {
    return res
      .status(HttpStatus.ACCEPTED)
      .json({ status: '200', body: 'Success' });
  }
}
