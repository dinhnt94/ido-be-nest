import { Test, TestingModule } from '@nestjs/testing';
import { IdoUserController } from './ido-user.controller';

describe('IdoUserController', () => {
  let controller: IdoUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IdoUserController],
    }).compile();

    controller = module.get<IdoUserController>(IdoUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
