import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { WordTypesModule } from './word-types/word-types.module';
import { WordsModule } from './words/words.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NestTypeOrmCommandsModule } from 'nestjs-typeorm-commands';
import { DataSource } from 'typeorm';
import { Sentences } from './dtos/sentence.dto';
import { RawBodyMiddleware } from 'RawBodyMiddleware';
import { RouteInfo } from '@nestjs/common/interfaces';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    WordTypesModule,
    WordsModule,
    TypeOrmModule.forFeature([Sentences]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'c-one-life.folzyk65r6mwvs.postgres.cosmos.azure.com',
      port: 5432,
      username: 'citus',
      password: 'Menu@#384',
      database: 'citus',
      entities: ['/src/entities/*.entities.ts'],
      migrations: ['/src/migrations/*.entities.ts'],
      ssl: true,
      autoLoadEntities: true,
    }),
    NestTypeOrmCommandsModule.forRoot({
      migrationsDir: 'src/migrations',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}

  public configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    consumer
      .apply(RawBodyMiddleware)
      .forRoutes(...this.rawBodyParsingRoutes, '*', {
        path: '*',
        method: RequestMethod.ALL,
      });
  }

  rawBodyParsingRoutes: Array<RouteInfo> = [
    {
      path: '/api/sentence',
      method: RequestMethod.POST,
    },
  ];
}
