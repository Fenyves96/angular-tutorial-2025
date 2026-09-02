import { Component, signal } from '@angular/core';
import { SimpleComponent } from './simple-component/simple-component';
import { SimpleComponentWithOnPushStrategy } from './simple-component-with-on-push-strategy/simple-component-with-on-push-strategy';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('example-for-view-checking');
}
