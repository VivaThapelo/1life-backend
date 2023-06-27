import { Response } from 'express';
import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';

@Controller('api/sentence')
export class AppController {
  @Post('')
  postSentence(@Body() sentence: string, @Res() res: Response): Response {
    return res
      .status(HttpStatus.ACCEPTED)
      .json({ status: '200', body: 'Success' });
  }
}
