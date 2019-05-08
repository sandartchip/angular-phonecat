
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessageComponent } from './message/message.component';
import { DashboardComponent } from './dashboard/dashboard.component'; 

import { HttpClientModule } from '@angular/common/http';

import { HeroService } from './hero.service';

// HTTP에서 원격 서버와 통신한다.

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';

@NgModule({
  declarations: [ //컴포넌트 등록.
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessageComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [      // 모듈 등록.
    BrowserModule,
    FormsModule, 
    AppRoutingModule
  ],
  providers: [],
  //의존성 주입을 위해서 Angular에 주입 대상 인스턴스를
  bootstrap: [AppComponent]
})
export class AppModule { }
    //app-routing.module.ts에서 AppRoutingModule 클래스가 정의
    //되어 있었어서 해당 모듈이름 바로 import 가능
