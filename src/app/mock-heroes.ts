
import { Hero } from './hero';
// Hero 객체의 배열을 정의하기 위해서
// hero 모듈에서 Hero 클래스를 import함.

export const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 20, name: 'Tornado' }
];
// Hero 컴포넌트 여러 개 이므로
// Hero 컴포넌트를 등록해야 함. 
