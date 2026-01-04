import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
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
export class NewTicketComponent {
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;

  sameForm = viewChild.required<ElementRef<HTMLFormElement>>('form');
  onSubmit(title: string, request: string) {
    //console.dir(titleElement);
    console.log(title);
    console.log(request);

    //this.form!.nativeElement.reset();
    this.sameForm().nativeElement.reset();
  }
}
