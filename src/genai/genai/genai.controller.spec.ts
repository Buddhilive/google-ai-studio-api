import { Test, TestingModule } from '@nestjs/testing';
import { GenaiController } from './genai.controller';

describe('GenaiController', () => {
  let controller: GenaiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GenaiController],
    }).compile();

    controller = module.get<GenaiController>(GenaiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
