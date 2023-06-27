import { Module } from '@nestjs/common';
import { WordTypesController } from './word-types.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WordTypes } from 'src/dtos/word-types.dto';
import { WordTypesService } from './word-types.service';

@Module({
  imports: [TypeOrmModule.forFeature([WordTypes])],
  providers: [WordTypesService],
  controllers: [WordTypesController],
})
export class WordTypesModule {}
