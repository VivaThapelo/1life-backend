import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Words1687888319 implements MigrationInterface {
  name: 'Words';
  async up(queryRunner: QueryRunner) {
    await queryRunner.createTable(
      new Table({
        name: 'Words',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'type',
            type: 'varchar',
          },
          {
            name: 'words',
            type: 'array',
          },
        ],
      }),
    );

    await queryRunner.query(`INSERT INTO Words (id, type, words)
    VALUES
      (1, 'Noun', {cat, dog, house, car, book}),
      (2, 'Verb', {'run', 'eat', 'sleep', 'jump', 'talk'}),
      (3, 'Adjective', {'happy', 'big', 'red', 'beautiful', 'clever'}),
      (4, 'Adverb', {'quickly', 'happily', 'loudly', 'quietly', 'carefully'}),
      (5, 'Pronoun', {'I', 'you', 'he', 'she', 'they'}),
      (6, 'Preposition', {'in', 'on', 'at', 'under', 'behind'}),
      (7, 'Conjunction', {'and', 'but', 'or', 'because', 'although'}),
      (8, 'Determiner', {'the', 'a', 'this', 'that', 'some'}),
      (9, 'Exclamation', {'wow', 'awesome', 'fantastic', 'amazing', 'incredible'});`);
  }

  async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('Words');
  }
}
