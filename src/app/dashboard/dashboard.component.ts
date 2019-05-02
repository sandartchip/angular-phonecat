import { Component, OnInit } from '@angular/core';
import { HeroesComponent } from '../heroes/heroes.component';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor() { }

  ngOnInit() {
  }
}
