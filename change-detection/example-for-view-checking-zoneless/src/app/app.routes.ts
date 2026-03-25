import { Routes } from '@angular/router';
import { SimpleComponent } from './simple-component/simple-component';
import { SimpleComponentWithOnPushStrategy } from './simple-component-with-on-push-strategy/simple-component-with-on-push-strategy';

export const routes: Routes = [
  { path: '', redirectTo: 'old-way', pathMatch: 'full' },
  { path: 'old-way', component: SimpleComponent },
  { path: 'new-way', component: SimpleComponentWithOnPushStrategy },
];
