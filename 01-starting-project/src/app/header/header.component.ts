import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false, //in agular 19 or higher versions true value is the default
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {}
