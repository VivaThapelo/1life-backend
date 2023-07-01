import { Injectable } from '@nestjs/common';
import { Sentences } from './dtos/sentence.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Sentences)
    private readonly sentenceRepository: Repository<Sentences>,
  ) {}

  async storeSentence(sentence: string) {
    console.log(sentence);
    const newSentence: Sentences = { sentence: sentence };
    this.sentenceRepository.save(newSentence);
  }

  async getAllSentences(): Promise<string[]> {
    return (await this.sentenceRepository.find()).flatMap(
      (newSentence) => newSentence.sentence,
    );
  }
}
