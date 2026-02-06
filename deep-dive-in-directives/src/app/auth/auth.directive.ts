import { Directive, effect, inject, input } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true,
})
export class AuthDirective {
  userType = input.required<Permission>({ alias: 'appAuth' });
  authService = inject(AuthService);

  constructor() {
    effect(() => {
      if (this.authService.activePermission() == this.userType()) {
        console.log('show element');
      } else {
        console.log('DO NOT SHOW ELEMENT');
      }
    });
  }
}
