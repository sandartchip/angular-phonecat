import { Component } from '@angular/core';
import { MessageService } from './message.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Heroes App";
  title_number = "v3";
  
  constructor(private messageService: MessageService) {
  } //의존성 주입
}
