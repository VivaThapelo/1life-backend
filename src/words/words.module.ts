import { Module } from '@nestjs/common';
import { Words } from 'src/dtos/words.dto';
import { WordsService } from './words.service';
import { WordsController } from './words.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Words])],
  providers: [WordsService],
  controllers: [WordsController],
})
export class WordsModule {}
