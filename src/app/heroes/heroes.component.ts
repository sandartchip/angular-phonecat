import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes', //HTML에서 호출할 때 쓰는 이름.
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
   
  selected_hero: Hero;

  heroes: Hero[]; // 여러 hero를 담는 배열.
  
  /*
  getHeroes: void {
    this.heroes = this.heroService.getHeroes();
  }*/
  //서버가 heroes 리턴할 때 까지 기다림.
  //(동기)
  /*
  getHeroes(): void {
    this.heroService.getHeroes().
      subscribe(heroes => this.heroes = heroes);
  }*/
  //비동기적으로 결과 받음.
  constructor(private heroService: HeroService) { }
  
  
  ngOnInit() { //lifecycle hook
    //this.getHeroes();
  }
  onSelect(clicked_hero: Hero): void {
    this.selected_hero = clicked_hero;
  }
}
