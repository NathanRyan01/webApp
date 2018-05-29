import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { InternetMysqlService } from '../services/internet.service';
import { Internet }    from '../Internet';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';


@Component({
    selector: 'app-internet',
    templateUrl: './internet.component.html',
    styleUrls: [ './internet.component.css' ]
  })


export class InternetComponent {
  usersMysql: Internet[];
  message;
  getTime;
  postTime;
  constructor(private query: InternetMysqlService) { }
  GetRequest(){
    var start = performance.now();
    this.query.getWikiData()
      .subscribe(
        res => {
          var end = performance.now();
          this.getTime = end - start;
          this.usersMysql = res;},
        err => {
      }
    );
   }

   PostRequest(){
    var start = performance.now();
    this.query.postEmail()
      .subscribe(
        res => {
          var end = performance.now();
          this.postTime = end - start;
          this.usersMysql = res;},
        err => {
      }
    );
   }
}