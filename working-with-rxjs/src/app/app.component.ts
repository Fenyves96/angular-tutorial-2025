import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  private destoyRef = inject(DestroyRef);
  ngOnInit(): void {
    const subscrition = interval(1000).subscribe({
      next: (val) => console.log(val),
      complete: () => {},
    });

    this.destoyRef.onDestroy(() => {
      subscrition.unsubscribe();
    });
  }
}
