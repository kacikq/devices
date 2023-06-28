import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent {

  isConnected: boolean[] = [false, false, false];
  @Output() devicesChanged = new EventEmitter<boolean[]>();

  handleClick(index: number) {
    this.isConnected[index] = !this.isConnected[index];
    this.devicesChanged.emit(this.isConnected);
  }
}
