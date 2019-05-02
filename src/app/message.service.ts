import { Injectable } from '@angular/core';

/* annotation 관련 설정 */
@Injectable({
  providedIn: 'root'
})

/* 클래스 관련 설정 (함수, 변수 정의)*/
export class MessageService {
  private messages: string[] = [];

  public add(message: string) {
    this.messages.push(message); 
  }
  public clear() {
    this.messages = [];
  }
}
