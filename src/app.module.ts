import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { WordTypesModule } from './word-types/word-types.module';
import { WordsModule } from './words/words.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    WordTypesModule,
    WordsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'c-one-life.folzyk65r6mwvs.postgres.cosmos.azure.com',
      port: 5432,
      username: 'citus',
      password: 'Menu@#384',
      database: 'citus',
      entities: [
        '/src/entities/word-types.entities.ts',
        '/src/entities/words.entities.ts',
      ],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
