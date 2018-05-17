import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Logout } from '../Logout';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LogoutMysqlService } from '../services/logout.service';

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrls: [ './logout.component.css' ]
  })


export class LogoutComponent {
  usersMysql: Logout[];
  checked = false;
  user;
  constructor(private logout: LogoutMysqlService, private router: Router, private activatedRoute: ActivatedRoute) { }

      // get the parameter from the url
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
        this.user = params.user;
    });
   
 }

  updateClick(userLogin: any) {
    const team = userLogin.form.value.team;
    const wrestler = userLogin.form.value.wrestler;
    const capital = userLogin.form.value.capital = true ? 'Y' : 'N';
    console.log(this.user);
     this.logout.updateData(team,wrestler,capital,this.user)
     .subscribe(
       res => {this.usersMysql = res,console.log(this.usersMysql);},
       err => {
      }
    );
    if(this.usersMysql){
      alert("Information has been updated.");
      // clear form
    }
    else{
      alert("Information was not updated.");
    }
  }

  onLogout(){
    this.router.navigate(['login']);
  }
}