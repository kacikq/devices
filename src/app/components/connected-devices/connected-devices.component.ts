import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-connected-devices',
  templateUrl: './connected-devices.component.html',
  styleUrls: ['./connected-devices.component.css']
})
export class ConnectedDevicesComponent {
  @Input() isConnected: boolean[] = [false, false, false];
}
