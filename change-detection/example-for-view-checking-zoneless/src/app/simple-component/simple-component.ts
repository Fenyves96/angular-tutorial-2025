import {
  ChangeDetectorRef,
  Component,
  ChangeDetectionStrategy,
  AfterViewInit,
  inject,
  DestroyRef,
} from '@angular/core';
import { ChildComponent } from '../child-component/child-component';
import { interval, map } from 'rxjs';

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
  styleUrl: './simple-component.scss',
})
export class SimpleComponent implements AfterViewInit {
  topicName = 'Decoded frontend';
  isVisible = true;
  destroyRef = inject(DestroyRef);

  ngAfterViewInit(): void {
    const subscription = interval(1000)
      .pipe(map((val) => val * 2))
      .subscribe({
        next: (val) => console.log(val),
      });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

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
