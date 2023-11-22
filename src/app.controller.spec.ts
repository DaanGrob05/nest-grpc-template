import { Test, TestingModule } from '@nestjs/testing';
import { HeroModule } from './hero/hero.module';
import { GrpcReflectionModule } from 'nestjs-grpc-reflection';
import { grpcClientOptions } from './grpc-client.options';
import { HeroesController } from './hero/heroes.controller';

describe('AppController', () => {
  let heroesController: HeroesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [HeroModule, GrpcReflectionModule.register(grpcClientOptions)],
    }).compile();

    heroesController = app.get<HeroesController>(HeroesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(heroesController.findAll()).toBe([
        { id: 1, name: 'John' },
        { id: 2, name: 'Doe' },
      ]);
    });
  });
});
