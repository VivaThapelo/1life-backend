import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Sentences')
export class Sentences {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column()
  sentence: string;
}
