import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { Database }    from '../Database';
import { DatabaseMysqlService } from '../services/database.service';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

@Component({
    selector: 'app-database',
    templateUrl: './database.component.html',
    styleUrls: [ './database.component.css' ]
  })


export class DatabaseComponent{
   usersMysql: Database[];
   message;
   selectOneTime;
   updateTime;
   insertTime;
   selectAllTime;
   selectAllJoinTime;
   deleteTime;
   time;

   constructor(private query: DatabaseMysqlService) { }
   onSelectAll(){
    var start = performance.now();
      this.query.selectAllData()
      .subscribe(
        res => {
          var end = performance.now();
          this.selectAllTime = end - start;
          this.usersMysql = res;         
        },
        err => {
      }     
    );
  }

   onSelectOne(id1){
    var start = performance.now();
    this.query.selectData(id1)
      .subscribe(
        res => {
          var end = performance.now();
          this.selectOneTime = end - start;
          this.usersMysql = res;         
        },
        err => {
      }
    );
   }

   onUpdate(id2,updateValue){
    var start = performance.now();
    this.query.updateData(id2,updateValue)
    .subscribe(
      res => {
        var end = performance.now();
        this.updateTime = end - start;
        this.usersMysql = res;},
      err => {
    }
  );
   }

   onDelete(){
    var start = performance.now();
    this.query.deleteData()
      .subscribe(
        res => {
        var end = performance.now();
        this.deleteTime = end - start; 
        this.usersMysql = res;},
        err => {
      }
    );
   }

   onInsert(insertValue){
    var start = performance.now();
    this.query.insertData(insertValue)
      .subscribe(
        res => {
        var end = performance.now();
        this.insertTime = end - start;  
        this.usersMysql = res;},
        err => {
      }
    );
   }

   onSelectAllJoin(){
    var start = performance.now();
    this.query.selectAllJoinData()
      .subscribe(
        res => {
        var end = performance.now();
        this.selectAllJoinTime = end - start; 
        this.usersMysql = res;},
        err => {
      }
    );
   }
}