import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";



@Component({
    selector: 'app-hardware',
    templateUrl: './hardware.component.html',
    styleUrls: [ './hardware.component.css' ]
  })


export class HardwareComponent {
  
  getLocation(value1: any, value2: any) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    }else{
      alert("Geolocation is not supported by your browser");
    }
    ELEMENT_DATA[(ELEMENT_DATA.length)-1].lat1 = Number(value1);
    ELEMENT_DATA[(ELEMENT_DATA.length)-1].long1 = Number(value2);
  }

  showPosition(position) {
    const location = Number(this.getJourney(ELEMENT_DATA[(ELEMENT_DATA.length)-1].lat1, ELEMENT_DATA[(ELEMENT_DATA.length)-1].long1, position.coords.latitude, position.coords.longitude));
    ELEMENT_DATA.push({long1: ELEMENT_DATA[(ELEMENT_DATA.length)-1].long1, lat1: ELEMENT_DATA[(ELEMENT_DATA.length)-1].lat1,
      long2: position.coords.longitude, lat2: position.coords.latitude,
      distance: 0.0})  
  }

  Deg2Rad(deg) {
    return deg * Math.PI / 180;
  }
  
  getJourney(lat1, lon1, lat2, lon2) {
    lat1 = this.Deg2Rad(lat1);
    lat2 = this.Deg2Rad(lat2);
    lon1 = this.Deg2Rad(lon1);
    lon2 = this.Deg2Rad(lon2);
    var R = 6371; // km
    var x = (lon2 - lon1) * Math.cos((lat1 + lat2) / 2);
    var y = (lat2 - lat1);
    var d = Math.sqrt(x * x + y * y) * R;
    return d;
  }
}

export interface Element {
  long1: number;
  lat1: number;
  long2: number;
  lat2: number;
  distance: number;
}

const ELEMENT_DATA: Element[] = [

];

const lat2 = 0.0;
const long2 = 0.0;