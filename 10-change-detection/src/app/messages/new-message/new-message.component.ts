import {
  ChangeDetectionStrategy,
  Component,
<<<<<<< HEAD
  inject,
=======
>>>>>>> c5f5d683d522b1b44e893834cecdaca75cf5892c
  output,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessagesService } from '../message.service';

@Component({
  selector: 'app-new-message',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-message.component.html',
  styleUrl: './new-message.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewMessageComponent {
  private messagesService = inject(MessagesService);
  enteredText = '';

  get debugOutput() {
    console.log('[NewMessage] "debugOutput" binding re-evaluated.');
    return 'NewMessage Component Debug Output';
  }

  onSubmit() {
    this.messagesService.addMessage(this.enteredText);
    this.enteredText = '';
  }
}
