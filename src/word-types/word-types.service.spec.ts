import { Test, TestingModule } from '@nestjs/testing';
import { WordTypesService } from './word-types.service';

describe('WordTypesService', () => {
  let service: WordTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WordTypesService],
    }).compile();

    service = module.get<WordTypesService>(WordTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
