import { Entity } from 'typeorm';

@Entity()
class Words {
  type: string;
  words: string[];
}
