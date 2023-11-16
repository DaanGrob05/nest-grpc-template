import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Hero, HeroById } from 'interfaces/hero';

@Controller()
export class HeroesController {
  heroes: Hero[] = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Doe' },
  ];

  @GrpcMethod('HeroService', 'FindOne')
  findOne(data: HeroById) {
    return this.heroes.find(({ id }) => id === data.id);
  }
}
