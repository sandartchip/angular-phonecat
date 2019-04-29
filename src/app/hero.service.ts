//import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
//import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

// service .
// 이 클래스가 dependency 주입 시스템에 참여한다는걸 알림
 
// 새로운 service는
// Angular Injectable symbol을 import 했고
// @Injectable() 데코레이터로 해당 클레스에 알림

// HeroService 클래스는 주입가능한 service를 제공할 것이고,
// 주입된 의존성을 가지게 될 것이다.
export class HeroService {
 // constructor(public messageService: MessageService) { } //생성자

  //함수
  /*
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('Hero Service: fetched heroes');
    return of(HEROES);
  }*/
}
