import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-heroes', //HTML에서 호출할 때 쓰는 이름.
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroService: HeroService) { }
  // constructor(private heroService: HeroService) { }
  // 생성자를 통해서 HeroService 클래스를 가져 옴.
  // 변수명은 heroService로.

  public ngOnInit() {
    this.getHeroes();
  }
  
  public getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
  // Hero service의 getHeroes()의 리턴형인
  // Observable이 방출한 Hero[]을 컴포넌트에서 구독한다.

  public add(name: string): void {
    name = name.trim();
    if (!name) { return; }

    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      })
  }

  public delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
