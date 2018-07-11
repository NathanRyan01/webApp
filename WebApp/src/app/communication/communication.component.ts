import { Component, OnInit, NgZone  } from '@angular/core';
import { Router } from "@angular/router";
import { Database }    from '../Database';
import { CommunicationService } from '../services/communication.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BluetoothCore } from '@manekinekko/angular-web-bluetooth';

@Component({
   selector: 'app-communication',
   templateUrl: './communication.component.html',
   styleUrls: [ './communication.component.css' ]
 })

export class CommunicationComponent implements OnInit { 
   arr: Database[];
   constructor(public _zone: NgZone, public chat: CommunicationService) { }

   batteryLevel: string = '--';
   device: any = {};

ngOnInit() {
   this.getDeviceStatus();
   this.streamValues();
}

streamValues() {
   this.chat.streamValues().subscribe(this.showBatteryLevel.bind(this));
 }

 getDeviceStatus() {
   this.chat.getDevice().subscribe(
     (device) => {

       if(device) {
         this.device = device;
       }
       else {
         // device not connected or disconnected
         this.device = null;
         this.batteryLevel = '--';
       }
     }
   );
 }

 getFakeValue() {
   this.chat.getFakeValue();
 }

 getBatteryLevel() {
   return this.chat.getBatteryLevel().subscribe(this.showBatteryLevel.bind(this));
 }

 showBatteryLevel(value: number) {

   // force change detection
   this._zone.run( () =>  {
     console.log('Reading battery level %d', value);
     this.batteryLevel = ''+value;
   });
}

}

