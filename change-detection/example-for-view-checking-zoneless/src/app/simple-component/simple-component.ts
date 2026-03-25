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
    <p>observable variable value: {{ observableVariable$ | async }}</p>
    <p>signal variable value: {{ signalVariable() }}</p>
    <app-child-component />
  `,
  styleUrl: './simple-component.scss',
})
export class SimpleComponent implements AfterViewInit {
  topicName = 'Decoded frontend';
  isVisible = true;
  destroyRef = inject(DestroyRef);
  cdRef = inject(ChangeDetectorRef);
  observableVariable$ = new BehaviorSubject<number>(0);
  signalVariable = signal<number>(0);

  ngAfterViewInit(): void {
    const subscription = interval(1000)
      .pipe(map((val) => val + 1))
      .subscribe({
        next: (val) => {
          this.observableVariable$.next(val);
          this.signalVariable.set(val);
          this.cdRef.detectChanges;
        },
      });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });

    setInterval(() => {
      this.signalVariable.update((val) => val + 1);
    }, 1 * 1000);
  }

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
