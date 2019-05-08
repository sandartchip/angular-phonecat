import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  // DB 만드는 함수
  public createDb() {
    const heroes = [
      { id: 11, name: 'Mr.nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'SpiderMan' },
    ];
    return { heroes };
  }
  public genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero =>
      hero.id)) + 1 : 11;
  }
}
