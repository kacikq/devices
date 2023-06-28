import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConnectedDevicesComponent} from "./components/connected-devices/connected-devices.component";
import {DevicesComponent} from "./components/devices/devices.component";

const routes: Routes = [
  {path: 'connected-devices', component: ConnectedDevicesComponent},
  {path: 'devices', component: DevicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
