<<<<<<< HEAD
import { MessagesService } from './../message.service';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';
=======
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
>>>>>>> c5f5d683d522b1b44e893834cecdaca75cf5892c

@Component({
  selector: 'app-messages-list',
  standalone: true,
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesListComponent implements OnInit {
  messages: string[] = [];
  private destoryRef = inject(DestroyRef);

  ngOnInit(): void {
    const subscription = this.messagesService.messages$.subscribe(
      (messages) => {
        this.messages = messages;
        this.cdRef.markForCheck();
      },
    );
    this.destoryRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
  private messagesService = inject(MessagesService);
  private cdRef = inject(ChangeDetectorRef);

  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
