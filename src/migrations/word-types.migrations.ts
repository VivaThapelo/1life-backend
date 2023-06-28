import { QueryRunner, Table, MigrationInterface } from 'typeorm/browser';

export class WordTypes1687891304 implements MigrationInterface {
  name: 'WordTypes';
  async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'WordTypes',
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
        ],
      }),
    );

    await queryRunner.query(`INSERT INTO WordTypes (id, type)
    VALUES
      (1, 'Noun'),
      (2, 'Verb'),
      (3, 'Adjective'),
      (4, 'Adverb'),
      (5, 'Pronoun'),
      (6, 'Preposition'),
      (7, 'Conjunction'),
      (8, 'Determiner'),
      (9, 'Exclamation');`);
  }
  async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('WordTypes');
  }
}
