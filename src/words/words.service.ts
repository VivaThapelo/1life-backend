import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Words } from 'src/dtos/words.dto';
import { Repository } from 'typeorm';

@Injectable()
export class WordsService {
  constructor(
    @InjectRepository(Words)
    private readonly wordsRepository: Repository<Words>,
  ) {}

  async getWords(wordType: string) {
    try {
      return (
        await this.wordsRepository.findOne({
          where: { type: wordType },
        })
      ).words;
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }
}
