import { WordTypesService } from './word-types.service';
import { Controller, Get } from '@nestjs/common';

@Controller('api/wordtypes')
export class WordTypesController {
  constructor(private readonly wordTypesService: WordTypesService) {}

  @Get('')
  async getWordTypes() {
    return await this.wordTypesService.getWordTypes();
  }
}
