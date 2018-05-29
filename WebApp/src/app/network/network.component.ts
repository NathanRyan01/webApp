// https://github.com/netdeamon/angular-chat-ui/blob/master/src/app/chatbox/chatbox.component.css
// https://github.com/AhsanAyaz/angular4-rockstar-chat/blob/master/src/app/components/chat/chat.component.ts
// http://jasonwatmore.com/post/2016/12/01/angular-2-communicating-between-components-with-observable-subject
import { Component, OnInit, } from '@angular/core';
import { NetworkService } from '../services/network.service';
import { Network } from '../network';
import { Subscription, Observable } from 'rxjs';


@Component({
    selector: 'app-network',
    templateUrl: './network.component.html',
    styleUrls: [ './network.component.css' ]
  })

export class NetworkComponent implements OnInit{  

    chatMessages: Array<Network> = [];
    x = [];

    replyMessage = "";
    response;
    subscription: Subscription;
    latest;
    total;
    //source = new EventSource("http://localhost/notifications.php");

    constructor(private net: NetworkService) { 
      this.subscription = this.net.getAllMessages().subscribe(x => { this.x.push(x); });  
    }

    ngOnInit() { 
      this.net.returnAllMessages().subscribe(
          res => {
            this.chatMessages = res
          },
          err => {
          }
      );
    //  this.source.addEventListener('message', this.handleCallback, false);
    }

    handleCallback(event) {
      var x = []; 
      var array = event.data.split(':');
      x.push({id : array[0], text : array[1]});      
      this.chatMessages = x;
      
    }

    ngOnDestroy() {
    //  this.source.close();
      this.subscription.unsubscribe();
    }

    sendMessage(userName,replyMessage){
      // send message to subscribers via observable subject
      var length = this.x.length;
      this.net.addMessages(userName,replyMessage).subscribe(
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
      this.net.clearMessage().subscribe(
        res => {this.response = res},
        err => {
        }
      );
    }

}

