import { Test, TestingModule } from '@nestjs/testing';
import { WordlistService } from './wordlist.service';

describe('WordlistService', () => {
  let service: WordlistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WordlistService],
    }).compile();

    service = module.get<WordlistService>(WordlistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
