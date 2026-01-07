import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  output,
  viewChild,
  ViewChild,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements AfterViewInit {
  @ViewChild('form') form?: ElementRef<HTMLFormElement>; //acess only after viewInit (ngAfterViewInit) (cannot be used in onInit)

  enteredTitle = '';
  enteredText = '';

  add = output<{ title: string; text: string }>();

  sameForm = viewChild.required<ElementRef<HTMLFormElement>>('form');
  onSubmit() {
    this.add.emit({ title: this.enteredTitle, text: this.enteredText });

    this.enteredTitle = '';
    this.enteredText = '';
  }

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
}
