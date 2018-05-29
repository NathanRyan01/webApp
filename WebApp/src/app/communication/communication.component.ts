// https://github.com/netdeamon/angular-chat-ui/blob/master/src/app/chatbox/chatbox.component.css
// https://github.com/AhsanAyaz/angular4-rockstar-chat/blob/master/src/app/components/chat/chat.component.ts
// http://jasonwatmore.com/post/2016/12/01/angular-2-communicating-between-components-with-observable-subject
import { Component, OnInit, } from '@angular/core';
import { CommunicationService } from '../services/communication.service';
import { Communication } from '../communication';
import { Subscription, Observable } from 'rxjs';


@Component({
    selector: 'app-communication',
    templateUrl: './communication.component.html',
    styleUrls: [ './communication.component.css' ]
  })

export class CommunicationComponent implements OnInit{  

    chatMessages: Array<Communication> = [];
    x = [];

    replyMessage = "";
    response;
    subscription: Subscription;
    latest;
    total;
    source = new EventSource("http://localhost/notifications.php");

    constructor(private chat: CommunicationService) { 
      this.subscription = this.chat.getAllMessages().subscribe(x => { this.x.push(x); });  
    }

    ngOnInit() { 
      this.chat.returnAllMessages().subscribe(
          res => {
            this.chatMessages = res
          },
          err => {
          }
      );
      this.source.addEventListener('message', this.handleCallback, false);
    }

    handleCallback(event) {
      var x = []; 
      var array = event.data.split(':');
      x.push({id : array[0], text : array[1]});      
      this.chatMessages = x;
      
    }

    ngOnDestroy() {
      this.source.close();
      this.subscription.unsubscribe();
    }

    sendMessage(userName,replyMessage){
      // send message to subscribers via observable subject
      var length = this.x.length;
      this.chat.addMessages(userName,replyMessage).subscribe(
        res => {this.response = res},
        err => {
        }
      );
      this.chatMessages.push(
          this.x[length]
      )

    } 
   
    clear(){
      this.chatMessages = [];
      this.x = [];  
      this.chat.clearMessage().subscribe(
        res => {this.response = res},
        err => {
        }
      );
    }

}

