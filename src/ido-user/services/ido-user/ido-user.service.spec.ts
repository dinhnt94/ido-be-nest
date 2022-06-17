import { Test, TestingModule } from '@nestjs/testing';
import { IdoUserService } from './ido-user.service';

describe('IdoUserService', () => {
  let service: IdoUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IdoUserService],
    }).compile();

    service = module.get<IdoUserService>(IdoUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
