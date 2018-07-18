import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import {OrderListModule} from 'primeng/orderlist';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { File } from '../file';
import { XMLService } from '../services/file.service';

@Component({
    selector: 'app-list',
    templateUrl: './file.component.html',
    styleUrls: [ './file.component.css' ]
  })


export class FileComponent{
  data: Array<File> = [];
  listTime;

  constructor(private xml: XMLService) { 

  }

  ngOnInit() {
    
  }

  getXMLParser(value){
    var start = performance.now();
    this.xml.getXMLData(value).subscribe(
      res => {
            var end = performance.now();
            this.listTime = end - start;
            this.data = res.WRESTLER
          },
      err => {
      }
    );
  } 
}
