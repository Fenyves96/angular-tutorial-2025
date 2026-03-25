import {
  ChangeDetectorRef,
  Component,
  ChangeDetectionStrategy,
  AfterViewInit,
  inject,
  DestroyRef,
  signal,
} from '@angular/core';
import { ChildComponent } from '../child-component/child-component';
import { BehaviorSubject, interval, map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-simple-component',
  imports: [ChildComponent, AsyncPipe],
  //All bindings interested in data changing
  template: `
    <h2>{{ topicName }}</h2>
    @if (isVisible) {
      <div>{{ getInfo() }}</div>
    }
    <app-child-component />
  `,
  styleUrl: './simple-component.scss',
})
export class SimpleComponent {
  topicName = 'Decoded frontend';
  isVisible = true;
  destroyRef = inject(DestroyRef);
  cdRef = inject(ChangeDetectorRef);

  getInfo() {
    console.log('getInfo function has been called');
    return 'random info';
  }

  constructor() {
    setTimeout(() => {
      this.topicName = 'new topic name after timeout';
      console.log('Topic name changed to', this.topicName);
      this.cdRef.detectChanges(); // we have to run this manually if we do not have zone.js
    }, 3000);
  }
}
