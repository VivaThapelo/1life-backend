import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WordTypes } from 'src/dtos/word-types.dto';
import { Repository } from 'typeorm';

@Injectable()
export class WordTypesService {
  constructor(
    @InjectRepository(WordTypes)
    private readonly typeRepository: Repository<WordTypes>,
  ) {}

  async getWordTypes() {
    try {
      return (await this.typeRepository.find()).flatMap(
        (wordTypes) => wordTypes.type,
      );
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }
}
