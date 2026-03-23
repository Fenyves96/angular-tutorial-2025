import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-simple-component',
  imports: [],
  //All bindings interested in data changing
  template: `
    <h2>{{ topicName }}</h2>
    @if (isVisible) {
      <div>{{ getInfo() }}</div>
    }
  `,
  styleUrl: './simple-component.scss',
})
export class SimpleComponent {
  topicName = 'Decoded frontend';
  isVisible = true;

  getInfo() {
    return 'random info';
  }

  constructor(private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.topicName = 'new topic name after timeout';
      console.log('Topic name changed to', this.topicName);
    }, 3000);
  }
}
