import { AppService } from './app.service';
import { Response } from 'express';
import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';

@Controller('api/sentence')
export class AppController {
  constructor(private readonly AppService: AppService) {}

  @Post('')
  async postSentence(@Body() body: string, @Res() res: Response) {
    return res
      .status(HttpStatus.ACCEPTED)
      .send(await this.AppService.storeSentence(body));
  }

  @Get('')
  async getAllSentences(@Res() res: Response) {
    return res
      .status(HttpStatus.ACCEPTED)
      .send(await this.AppService.getAllSentences());
  }
}
