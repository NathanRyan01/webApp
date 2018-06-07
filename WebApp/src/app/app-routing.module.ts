import { NgModule, Component }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabaseComponent }  from './database/database.component';
import { InternetComponent }  from './internet/internet.component';
import { HardwareComponent }  from './hardware/hardware.component';
import { MediaComponent }  from './media/media.component';
import { FileComponent }  from './file/file.component';
import { ComputationComponent }  from './computation/computation.component';

const routes: Routes = [
    {path: 'database', component: DatabaseComponent},
    {path: 'internet', component: InternetComponent},
    {path: 'hardware', component: HardwareComponent},
    {path: 'media', component: MediaComponent},
    {path: 'file', component: FileComponent},
    {path: 'computation', component: ComputationComponent},
 ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}