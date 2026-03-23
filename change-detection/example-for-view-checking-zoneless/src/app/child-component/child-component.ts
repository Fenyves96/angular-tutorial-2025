import { Component } from '@angular/core';

@Component({
  selector: 'app-child-component',
  imports: [],
  template:
    '<p>Some child component with a function which returns with value: {{getRandomNumber()}}</p>',
})
export class ChildComponent {
  getRandomNumber() {
    return Math.random();
  }
}
