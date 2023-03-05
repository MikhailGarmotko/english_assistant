import { Test, TestingModule } from '@nestjs/testing';
import { WordlistController } from './wordlist.controller';

describe('WordlistController', () => {
  let controller: WordlistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WordlistController],
    }).compile();

    controller = module.get<WordlistController>(WordlistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
