import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SimpleComponent } from './simple-component/simple-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SimpleComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('example-for-view-checking');
}
