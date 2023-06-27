import { Injectable } from '@nestjs/common';
import { error } from 'console';
import { throwError } from 'rxjs';

@Injectable()
export class AppService {
  getWordTypes(): string[] {
    return [
      'Noun',
      'Verb',
      'Adjective',
      'Adverb',
      'Pronoun',
      'Preposition',
      'Conjunction',
      'Determiner',
      'Exclamation',
    ];
  }

  getWords(wordType: string): string[] {
    if (wordType == undefined || null) throwError(error);
    return wordType && ['John', 'Jane', 'I', 'You', 'They', 'We'];
  }
}
