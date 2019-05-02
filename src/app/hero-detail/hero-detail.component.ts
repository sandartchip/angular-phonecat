
import { Component, OnInit, Input } from '@angular/core';
// Hero 심볼 import

import { Hero } from '../hero';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
//import { HeroService } from '../hero.service';

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
    private location: Location
  ) { }

  ngOnInit() {
  }
}
