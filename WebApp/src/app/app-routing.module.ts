import { NgModule, Component }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabaseComponent }  from './database/database.component';
import { InternetComponent }  from './internet/internet.component';
import { HardwareComponent }  from './hardware/hardware.component';
import { CommunicationComponent }  from './communication/communication.component';
import { UiComponent }  from './ui/ui.component';
import { ComputationComponent }  from './computation/computation.component';

const routes: Routes = [
    {path: 'database', component: DatabaseComponent},
    {path: 'internet', component: InternetComponent},
    {path: 'hardware', component: HardwareComponent},
    {path: 'communication', component: CommunicationComponent},
    {path: 'ui', component: UiComponent},
    {path: 'computation', component: ComputationComponent},
 ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}