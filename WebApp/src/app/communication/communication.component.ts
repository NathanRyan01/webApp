import { Component, OnInit, NgZone  } from '@angular/core';
import { Router } from "@angular/router";
import { Database }    from '../Database';
import { Injectable } from "@angular/core";
import { CommunicationService } from '../services/communication.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BluetoothCore } from '@manekinekko/angular-web-bluetooth';

@Component({
   selector: 'app-communication',
   templateUrl: './communication.component.html',
   styleUrls: [ './communication.component.css' ]
 })

@Injectable()
export class CommunicationComponent { 
   arr: Database[]
   constructor(public _zone: NgZone, public chat: CommunicationService) { }
   support = "Bluetooth is supported by this browser"

 getDeviceStatus() {
    if (!navigator.bluetooth) {
      this.support = 'Web Bluetooth API is not available in browser.';
      return
    }
    navigator.bluetooth.requestDevice({
      acceptAllDevices: true,
    })
    .then(device => {
      console.log(device);
      connect(device);
    })
    .then(server => { /* ... */ })
    .catch(error => { console.log(error); });

    function connect(d){
      console.log('Connecting to Bluetooth Device...');
      return d.gatt.connect().then(server => {
        console.log('> Bluetooth Device connected');
      });
    }
 }


}

