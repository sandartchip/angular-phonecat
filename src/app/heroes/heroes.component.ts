import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
//import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes', //HTML에서 호출할 때 쓰는 이름.
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // 영웅 관련 

  // 변수 선언을 안 하고 바로 받아올 수 있는 듯.
  // mock-heroes에서 클래스로 선언된 HEROES
  // 앵귤러의 특이한 점?
  // 변수 타입, 함수 타입을

  //heroes = HEROES;
  //HEROES 클래스의 내용을 heroes2 변수에 넣음.

  // selected_hero: Hero;
  // assign 시킴.
  /*
   export class Hero {
   id: number;
   name: string;
  }
   */
  selected_hero: Hero;

  heroes: Hero[]; // 여러 hero를 담는 배열.

  getHeroes(): void {

    this.heroes = this.heroService.getHeroes();
  }
  // add the private heroService 파라미터
  constructor(private heroService: HeroService) { }
  
  
  ngOnInit() { //lifecycle hook
    this.getHeroes();
  }
  onSelect(clicked_hero: Hero): void {
    this.selected_hero = clicked_hero;
  }
}
