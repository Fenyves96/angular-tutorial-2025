import { Component, signal } from '@angular/core';
import { SimpleComponent } from './simple-component/simple-component';

@Component({
  selector: 'app-root',
  imports: [SimpleComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('example-for-view-checking');
}
