import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  output,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  //@Output() select = new EventEmitter();
  select = output<string>(); //this line does tha same thing as the code above it,
  // it does not create any signal or something like that!

  imagePath = computed(() => {
    return 'assets/users/' + this.avatar;
  });

  onSelectUser() {
    this.select.emit(this.id);
  }
}
