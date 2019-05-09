import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  heroes$: Observable<Hero[]>;
  // heroess$는 옵저버블형.

  private searchTerms = new Subject<string>();
  constructor(private heroService: HeroService) { }

  // push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      
      //wait 300ms after keystroke before considering
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      //switch to new search observable each time the term change
      switchMap( (term: string) => this.heroService.searchHeroes(term)),
    );
  }
}
