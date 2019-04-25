
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [ //컴포넌트 등록.
    AppComponent,
    HeroesComponent
  ],
  imports: [      // 모듈 등록.
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
    //app-routing.module.ts에서 AppRoutingModule 클래스가 정의
    //되어 있었어서 해당 모듈이름 바로 import 가능
