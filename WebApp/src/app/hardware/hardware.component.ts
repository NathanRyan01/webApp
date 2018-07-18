// http://www.angulartutorial.net/2018/01/show-preview-image-while-uploading.html
// https://material.angular.io/components/select/examples
// https://stackblitz.com/edit/angular-prjqlt?file=app%2Fapp.component.ts
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { Hardware } from '../hardware';
import { NgForm } from "@angular/forms";


@Component({
    selector: 'app-hardware',
    templateUrl: './hardware.component.html',
    styleUrls: [ './hardware.component.css' ]
  })


export class HardwareComponent {
  image;
  lat;
  lon;
  location: Array<Hardware> = [];
  localUrl;
  message;
  width;
  height;
  orientation;
  device;
  stream: MediaStream;
  locationTime;
  imageTime;
  windowTime;
  recordStartTime;
  recordStopTime;
  
  @ViewChild('videoElement') videoElement: any;

  play() {
    var start = performance.now();
    this.startRecording({ video: true, audio: true, maxLength: 10, debug: true, time: start });
  }
  startRecording(config) {
    var browser = <any>navigator;
    browser.getUserMedia = (browser.getUserMedia ||
      browser.webkitGetUserMedia ||
      browser.mozGetUserMedia ||
      browser.msGetUserMedia);
    if (browser.mediaDevices && browser.mediaDevices.getUserMedia) {
      browser.mediaDevices.getUserMedia(config)
        .then(stream => {
          var videoTracks = stream.getVideoTracks();
          var options = {
            mimeType: 'video/webm',
            audioBitsPerSecond: 128000,
            videoBitsPerSecond: 128000,
            bitsPerSecond: 128000 // if this line is provided, skip above two
          };
          this.stream = stream;
          let video: HTMLVideoElement = this.videoElement.nativeElement;
          video.src = window.URL.createObjectURL(stream);
          video.play();
        });
    } else {
      alert("Video is not supported");
    }
    var begin = Number(config.time)
    var end = performance.now();
    console.log(config.time)
    console.log(end)
    this.recordStartTime = end - begin;
  }
  stop() {
    var start = performance.now();
    let stream = this.stream;
    stream.getAudioTracks().forEach(track => track.stop());
    stream.getVideoTracks().forEach(track => track.stop());
    var end = performance.now();
    this.recordStopTime = end - start;
  }
  

  getLocation() {
    var start = performance.now();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    }else{
      alert("Geolocation is not supported by your browser");
    }
    this.displayLocation();
    var end = performance.now();
    this.locationTime = end - start;
  }


  showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude
    ELEMENT_DATA.push({lat: latitude, long: longitude, date : new Date()}) 
  }

  displayLocation(){
    this.location = ELEMENT_DATA;
   
  }

  showImage(event: any) {
    var start = performance.now();
    if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        if (!this.validateFile(event.target.files[0].name)) {
            this.localUrl = '';
            this.message = 'Selected file format is not supported';
            return false;
        }
        else{
        reader.onload = (event: any) => {
            this.localUrl = event.target.result;
            this.message = 'Image Displayed';
        }
        reader.readAsDataURL(event.target.files[0]);
      }
    }
    var end = performance.now();
    this.imageTime = end - start;
  }

  validateFile(name: String) {
    var ext = name.substring(name.lastIndexOf('.') + 1);
    if( (ext.toLowerCase() == 'png') || (ext.toLowerCase() == 'jpeg')) {
        return true;
    }
    else {
        return false;
    }
  }
  
}
  export interface Element {
    lat: number;
    long: number;
    date: Date;
  }
  
  const ELEMENT_DATA: Element[] = [
  
  ];

