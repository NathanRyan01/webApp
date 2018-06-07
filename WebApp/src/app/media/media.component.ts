// https://github.com/netdeamon/angular-chat-ui/blob/master/src/app/chatbox/chatbox.component.css
// https://github.com/AhsanAyaz/angular4-rockstar-chat/blob/master/src/app/components/chat/chat.component.ts
// http://jasonwatmore.com/post/2016/12/01/angular-2-communicating-between-components-with-observable-subject
import { Component, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'app-media',
    templateUrl: './media.component.html',
    styleUrls: [ './media.component.css' ]
  })

export class MediaComponent implements OnInit{  
    audio = new Audio();
    startSong;
    stopSong;
    startVideo;
    stopVideo;

    videoSource = "../assets/QueensAudio.mp4";

    @ViewChild('videoPlayer') videoplayer: any;

    ngOnInit() { 
      
    }

    playAudio(){
      var start = performance.now();
      this.audio.src = "../assets/Queens.mp3";
      this.audio.load();
      this.audio.play();
      var end = performance.now();
      this.startSong = end - start;
    }

    pauseAudio(){
      var start = performance.now();
      this.audio.pause();
      var end = performance.now();
      this.stopSong = end - start;
    }
    
    playVideo(){
      var start = performance.now();
      this.videoplayer.nativeElement.play();
      var end = performance.now();
      this.startVideo = end - start;
    }

    pauseVideo(){
      var start = performance.now();
      this.videoplayer.nativeElement.pause();
      var end = performance.now();
      this.stopVideo = end - start;
    }

}

