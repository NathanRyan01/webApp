import { Component, NgZone  } from '@angular/core';
import { Router } from "@angular/router";
import { Database }    from '../Database';
import { CommunicationService } from '../services/communication.service';


@Component({
    selector: 'app-communication',
    templateUrl: './communication.component.html',
    styleUrls: [ './communication.component.css' ]
  })

export class CommunicationComponent {  
  arr: Database[];
  constructor(public chat: CommunicationService) { }


  getDevices(){
    
  }

  turnOnBT(){


  }

  makeVisible(){


  }

  connect(){


  }

}

