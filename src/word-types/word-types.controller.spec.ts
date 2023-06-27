import { Test, TestingModule } from '@nestjs/testing';
import { WordTypesController } from './word-types.controller';

describe('WordTypesController', () => {
  let controller: WordTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WordTypesController],
    }).compile();

    controller = module.get<WordTypesController>(WordTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
