import {
  Component,
  HostBinding,
  HostListener,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control', //adds class = "control" to the component's html tag
    '(click)': 'onClick()',
  },
})
export class ControlComponent {
  @HostBinding('class') className = 'control';

  label = input.required<string>();

  // @HostListener('click') would do the same thing as '(click)' : 'onClick()'
  onClick() {
    console.log('clicked');
  }
}
