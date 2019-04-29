import { Injectable } from '@angular/core';

/* annotation 관련 설정 */
@Injectable({
  providedIn: 'root'
})

/* 클래스 관련 설정 (함수, 변수 정의)*/
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
