import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule }     from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DatabaseMysqlService } from './services/database.service';
import { InternetMysqlService } from './services/internet.service';
import { NetworkService } from './services/network.service';
import { XMLService } from './services/file.service';
import { CommunicationService } from './services/communication.service';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { WebBluetoothModule } from '@manekinekko/angular-web-bluetooth';
import { DatabaseComponent } from './database/database.component';
import { InternetComponent }  from './internet/internet.component';
import { HardwareComponent }  from './hardware/hardware.component';
import { CommunicationComponent }  from './communication/communication.component';
import { MediaComponent }  from './media/media.component';
import { FileComponent }  from './file/file.component';
import { ComputationComponent }  from './computation/computation.component';
import {CdkTableModule} from '@angular/cdk/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,} from '@angular/material';

  export const MaterialModules = [
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule
  ];

@NgModule({
  declarations: [
    AppComponent,
    DatabaseComponent,
    InternetComponent,
    HardwareComponent,
    MediaComponent,
    FileComponent,
    ComputationComponent,
    CommunicationComponent,
  ],
    entryComponents: [
      CommunicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    MaterialModules,
    CdkTableModule,
    BrowserAnimationsModule,
    WebBluetoothModule.forRoot(
      {enableTracing: true}
    )
  ],
  providers: [
    DatabaseMysqlService,
    InternetMysqlService,
    NetworkService,
    XMLService,
    CommunicationService
  ],
  bootstrap: [AppComponent,
  ]
})
export class AppModule { }
