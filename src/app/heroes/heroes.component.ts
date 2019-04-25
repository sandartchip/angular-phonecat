import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes', //HTML에서 호출할 때 쓰는 이름.
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  // 변수 선언을 안 하고 바로 받아올 수 있는 듯.
  // mock-heroes에서 클래스로 선언된 HEROES
  // 앵귤러의 특이한 점?
  // 변수 타입, 함수 타입을
  
  heroes2 = HEROES; //HEROES 클래스의 내용을 heroes2 변수에 넣음.
  selectedHero: Hero; // Hero를 selectedHero에 넣응ㅁ.
  /*
  export class Hero {
  id: number;
  name: string;
}

  */
  constructor() { }

  ngOnInit() { //lifecycle hook

  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

