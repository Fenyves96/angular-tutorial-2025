import { AsyncPipe } from '@angular/common';
import {
  Component,
  ChangeDetectionStrategy,
  AfterViewInit,
  signal,
  inject,
  DestroyRef,
  ChangeDetectorRef,
} from '@angular/core';
import { BehaviorSubject, interval, map } from 'rxjs';

@Component({
  selector: 'app-simple-component-with-on-push-strategy',
  imports: [AsyncPipe],
  template: `
    <p>observable variable value: {{ observableVariable$ | async }}</p>
    <p>signal variable value: {{ signalVariable() }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleComponentWithOnPushStrategy implements AfterViewInit {
  observableVariable$ = new BehaviorSubject<number>(0);
  signalVariable = signal<number>(0);
  destroyRef = inject(DestroyRef);
  cdRef = inject(ChangeDetectorRef);

  ngAfterViewInit(): void {
    const subscription = interval(1000)
      .pipe(map((val) => val + 1))
      .subscribe({
        next: (val) => {
          this.observableVariable$.next(val);
          this.signalVariable.set(val);
          this.cdRef.markForCheck;
        },
      });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });

    setInterval(() => {
      this.signalVariable.update((val) => val + 1);
    }, 1000);
  }
}
