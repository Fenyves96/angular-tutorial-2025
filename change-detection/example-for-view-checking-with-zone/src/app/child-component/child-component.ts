import { AfterViewChecked, Component } from '@angular/core';

@Component({
  selector: 'app-child-component',
  imports: [],
  template: '<p>simple child component</p>',
})
export class ChildComponent implements AfterViewChecked {
  ngAfterViewChecked(): void {
    console.log('app-child-component view checked');
  }
}
