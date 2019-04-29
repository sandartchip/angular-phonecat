import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

//라우터에서 dashboard
const route_info: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
  // 주소창의 브라우저 URL이랑 매칭되는 string
]; // Spring의 request mapping과 비슷한 개념.
@NgModule({
  exports: [
    RouterModule
  ],
  imports:
  [RouterModule.forRoot(route_info)],
  //라우터 모듈의
  //forRoot 함수 : 해당 변수의 값으로
  // 라우터를 초기화.

  declarations: []
})
export class AppRoutingModule {
   
}
