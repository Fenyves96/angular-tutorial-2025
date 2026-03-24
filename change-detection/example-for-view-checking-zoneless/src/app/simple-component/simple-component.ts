import { ChangeDetectorRef, Component, ChangeDetectionStrategy } from '@angular/core';
import { ChildComponent } from '../child-component/child-component';

@Component({
  selector: 'app-simple-component',
  imports: [ChildComponent],
  //All bindings interested in data changing
  template: `
    <h2>{{ topicName }}</h2>
    @if (isVisible) {
      <div>{{ getInfo() }}</div>
    }
    <app-child-component />
  `,
  styleUrl: './simple-component.scss'
})
export class SimpleComponent {
  topicName = 'Decoded frontend';
  isVisible = true;

  getInfo() {
    console.log('getInfo function has been called');
    return 'random info';
  }

  constructor(private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.topicName = 'new topic name after timeout';
      console.log('Topic name changed to', this.topicName);
      cdr.detectChanges(); // we have to run this manually if we do not have zone.js
    }, 3000);
  }
}
