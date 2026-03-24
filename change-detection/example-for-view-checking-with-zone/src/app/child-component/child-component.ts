import { AfterViewChecked, Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child-component',
  imports: [],
  template: '<p>Some child component with a console log function.</p>'
})
export class ChildComponent implements AfterViewChecked {
  ngAfterViewChecked(): void {
    console.log("child component's view checked");
  }
}
