import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('WordTypes')
export class WordTypes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;
}
