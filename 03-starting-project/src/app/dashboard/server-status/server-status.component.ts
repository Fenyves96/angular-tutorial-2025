import { Input } from './../../../../node_modules/@sigstore/protobuf-specs/dist/__generated__/sigstore_verification.d';
import { Component } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent {
  currentStatus = 'online';
}
