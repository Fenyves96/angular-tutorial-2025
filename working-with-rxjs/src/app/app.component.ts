import {
  Component,
  DestroyRef,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  clickCount = signal(0);
  private destoyRef = inject(DestroyRef);

  constructor() {
    effect(() => {
      console.log(`Clicked button ${this.clickCount()} times`);
    });
  }

  ngOnInit(): void {
    const subscrition = interval(1000)
      .pipe(map((val) => val * 2))
      .subscribe({
        next: (val) => console.log(val),
        complete: () => {},
      });

    this.destoyRef.onDestroy(() => {
      subscrition.unsubscribe();
    });
  }

  onClick() {
    this.clickCount.update((prevCount) => prevCount + 1);
  }
}
