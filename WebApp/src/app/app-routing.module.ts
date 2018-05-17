import { NgModule, Component }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent }   from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SchedulerComponent }  from './scheduler/scheduler.component';
import { HomeComponent }  from './home/home.component';
import { InternetComponent }  from './internet/internet.component';
import { HardwareComponent }  from './hardware/hardware.component';
import { CommunicationComponent }  from './communication/communication.component';
import { UpdateComponent }  from './update/update.component';
import { LogoutComponent }  from './logout/logout.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent,
      children: [
          {path: 'scheduler', component: SchedulerComponent},
          {path: 'internet', component: InternetComponent},
          {path: 'hardware', component: HardwareComponent},
          {path: 'communication', component: CommunicationComponent},
          {path: 'update', component: UpdateComponent},
          {path: 'logout', component: LogoutComponent},
        ]
    }  
 ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}