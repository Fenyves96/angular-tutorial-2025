import { Input } from './../../../../node_modules/@sigstore/protobuf-specs/dist/__generated__/sigstore_verification.d';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';

  ngOnInit() {
    setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus = 'offline';
      }
      if (rnd < 0.9) {
        this.currentStatus = 'unknown';
      }
    }, 5000);
  }
}
