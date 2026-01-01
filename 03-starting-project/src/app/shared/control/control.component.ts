import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
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
  private el = inject(ElementRef);

  // @HostListener('click') would do the same thing as '(click)' : 'onClick()'
  onClick() {
    console.log('clicked');
    console.log(this.el);
  }
}
