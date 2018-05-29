import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import {OrderListModule} from 'primeng/orderlist';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { File } from '../file';
import { XMLService } from '../services/file.service';

@Component({
    selector: 'app-ui',
    templateUrl: './ui.component.html',
    styleUrls: [ './ui.component.css' ]
  })


export class UiComponent{
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  max = 100;
  min = 0;
  step = 1;
  value = 0;
  data: Array<File> = [];
  listTime;
   
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private xml: XMLService) { 

  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  getList(){
    var start = performance.now();
    this.xml.getXMLData().subscribe(
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

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
  {position: 21, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 22, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 23, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 24, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 25, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 26, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 27, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 28, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 29, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 30, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 31, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 32, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 33, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 34, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 35, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 36, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 37, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 38, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 39, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 40, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];