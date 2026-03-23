<<<<<<< HEAD
import { ChangeDetectionStrategy, Component } from '@angular/core';
=======
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
>>>>>>> c5f5d683d522b1b44e893834cecdaca75cf5892c

import { MessagesListComponent } from './messages-list/messages-list.component';
import { NewMessageComponent } from './new-message/new-message.component';

@Component({
  selector: 'app-messages',
  standalone: true,
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css',
  imports: [MessagesListComponent, NewMessageComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesComponent {
  get debugOutput() {
    console.log('[Messages] "debugOutput" binding re-evaluated.');
    return 'Messages Component Debug Output';
  }
}
