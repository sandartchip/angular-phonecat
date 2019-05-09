import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { catchError, map, tap } from "rxjs/operators";
// rest api에서 data를 읽어오기 위해 Http 패키지 필요.
// header는 Http Header를 작성하기 위해 불러 옴.
// service .

// HeroService 클래스는 주입가능한 service를 제공할 것이고,
// 주입된 의존성을 가지게 될 것이다.

/*
error handling 
*/

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
/* Log a HeroService message with the MessageService */

// 이 클래스가 dependency 주입 시스템에 참여한다는걸 알림

// 새로운 service는
// Angular Injectable symbol을 import 했고
// @Injectable() 데코레이터로 해당 클레스에 알림

@Injectable({
  providedIn: 'root',
})

export class HeroService {
  private heroesUrl = 'api/heroes'; //URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  // GET heroes from the server
  // http 통신을 통해서 서버에서 hero 목록 가져 옴.

  // Observable<T>은
  // 관찰 가능한 observable에 여러 가지 타입이 올 수 있으므로

  // 
  public getHeroes(): Observable<Hero[]> { //리스트 출력
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }
  /*
  GET hero by id. Return 'undefined' when id not found
   */

  public getHeroNo404<Data>(id: number): Observable<Hero> {
    const url = '${this.heroesUrl}/?id=${id}';
    return this.http.get<Hero[]>(url)
      .pipe(
      map(heroes => heroes[0]), //returns a {0|1} element array
      tap(h => {
        const outcome = h ? 'fetched' : 'did not find';
        this.log('${outcome} hero id=${id}');
      }),
      catchError(this.handleError<Hero>('getHero id=${id}'))
    );
  }
  public getHero(id: number): Observable<Hero> {
    //Hero 객체에 대한 observable

    const url = `${this.heroesUrl}/${id}`;

//    const url2 = '${this.heroesUrl}/${id}';
    console.log('emit url is: ' + url);

    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log('fetched hero id=${id}')),
      // don't care
      // httpClient.get
      catchError(this.handleError<Hero>('getHero id=${id}'))
    );    //  catchError:
    // Catches errors on the ""observable"" to be handled
    // by returning a new observable or throwing an error.
  }
  ////////// save methods ////////////////

  // POST: add a new hero to the server

  public addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
      tap((newHero: Hero) => this.log('added hero w/id=${newHero.id}')),
      catchError(this.handleError<Hero>('addHero'))

      // api/heroes로 추가할 hero를 post로 요청해서 inmemory DB로 요청 쏨.

      // http.post는 옵저버블을 리턴함.

      //서버 실패를 캐치하고 error handler에 전달한다.
    );
  } /* POST 방식으로 Hero를 heroesUrl */

  // PUT : 이름 변경 기능
  public updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe
      (
      tap(_ => this.log('updated hero id=${hero.id}')),
      catchError(this.handleError<any>('updateHero'))
      );
  }

  // DELETE: delete the hero from the server
  public deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = '${this.heroesUrl}/${id}';

    return this.http.delete<Hero>(url, httpOptions).pipe(
      tap(_ => this.log('deleted hero id =${id}')),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  } 
  public searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }
  //get방식으로 Hero배열 받아와서 옵저버블을 통해 방출 한 다음 
  // 에러를 잡음.
  //컴포넌트에서 옵저버블로 방출한 Hero[]을
  // heroese component에서 subscribe. 

  //의존성 주입을 통해 http Client와
  // message service를 받아 옴.

  // Http operation 실패한거 제어.
  private handleError<T>(operation = 'operation', result?: T) {

    return (error: any): Observable<T> => {
      return of(result as T);
    }
  }

   /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('heroService: ${message}');
  }
  //http.get은 RxJS Observable을 반환
}
