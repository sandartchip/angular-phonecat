import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-heroes', //HTML에서 호출할 때 쓰는 이름.
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
//  heroes = HEROES; // heroes : hero array를 저장하고 있는 배열
  selected_hero: Hero; // Hero 타입 바인딩.
  heroes: Hero[];
  heroes2: Hero[];

  constructor(private heroService: HeroService){ }
  // constructor(private heroService: HeroService) { }
  // 생성자를 통해서 HeroService 클래스를 가져 옴.
  // 변수명은 heroService로.
  
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
    //서비스의 subscribe 함수를
    /*

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('hero service test!!');
    this.messageService.add('hero message test!!');
    return of(HEROES); //
  }
    */
  }
  
  getHeroes2(): void {
    this.heroes2 = this.heroService.getHeroes2();
  }
  /* heroService의 getHeroes 함수를  

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  } 기존에는 heroService의 getHeroes함수 리턴값을
  hero Component의
  heroes 변수에 넣음
   */
  /*
    hero component의 getHeroes() 함수에는
    hero service의 getHeroes() 함수를 
   */

  ngOnInit() {
    this.getHeroes();
//    this.getHeroes2();
  }

  onSelect(hero: Hero): void {
    this.selected_hero = hero;
  }
}
