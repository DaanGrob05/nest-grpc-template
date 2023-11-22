import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Hero, HeroById } from 'interfaces/src/hero/hero';
import { Observable, from } from 'rxjs';

@Controller('hero')
export class HeroesController {
  heroes: Hero[] = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Doe' },
  ];

  @GrpcMethod('HeroesService')
  findOne(data: HeroById): Hero {
    const result = this.heroes.find(({ id }) => id === data.id);

    if (result) {
      return result;
    } else {
      return { id: 0, name: 'Not Found' };
    }
  }

  @GrpcMethod('HeroesService')
  findAll(): Observable<Hero> {
    return from(this.heroes);
  }
}
