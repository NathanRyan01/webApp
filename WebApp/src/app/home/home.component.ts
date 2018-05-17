import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.css' ]
  })

export class HomeComponent implements OnInit{
    title
    constructor(private router:Router, private _route: ActivatedRoute){}
    ngOnInit() {
        this._route.queryParams.subscribe((params)=>{
            this.title = params.user;
        })      
    }
}