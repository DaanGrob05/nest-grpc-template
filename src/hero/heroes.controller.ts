import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Hero, HeroById } from 'interfaces/hero';
import { Observable, from } from 'rxjs';

@Controller('hero')
export class HeroesController {
  heroes: Hero[] = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Doe' },
  ];

  @GrpcMethod('HeroService', 'FindOne')
  findOne(data: HeroById): Hero {
    console.log(data);

    return this.heroes.find(({ id }) => id === data.id);
  }

  @GrpcMethod('HeroService', 'FindAll')
  findAll(): Observable<Hero> {
    return from(this.heroes);
  }
}
