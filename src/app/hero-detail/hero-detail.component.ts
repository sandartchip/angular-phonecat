
import { Component, OnInit, Input } from '@angular/core';
// Hero 심볼 import

import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

//@Input() 데코레이터가 있는 hero 프로퍼티추가.

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero; //Hero에서 hero 

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService
  ) { }

  public ngOnInit(): void {
    this.getHero();
  }

  public getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log('id: ' + id);
    //map방식으로! 라우팅 정보 받아와서! id 먼지 가져 옴.

    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  public goBack(): void {
    this.location.back();
  }

  public save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}
