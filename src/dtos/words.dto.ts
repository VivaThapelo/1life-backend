import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Words')
export class Words {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  words: string;
}
