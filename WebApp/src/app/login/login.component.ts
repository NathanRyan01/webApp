import { Component, OnInit } from '@angular/core';
import { Login }    from '../Login';
import { NgForm } from "@angular/forms";
import { LoginMysqlService } from '../services/login.service';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { Router } from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.css' ]
  })


export class LoginComponent{

    usersMysql: Login[];

    constructor(private login: LoginMysqlService, private router: Router) { }

    loginClick(myForm: NgForm) {
       const user = myForm.value.username
       const pass = myForm.value.password
       this.login.getMysqlUsersDatas(user,pass)
       .subscribe(
         res => {this.usersMysql = res,console.log(this.usersMysql);},
         err => {
        }
      );
      if(this.usersMysql){
        this.router.navigate(['home'],{ queryParams: { user: user }});
      }
      else{
        alert("There is an issue with the login, either the user does not exist or the password is incorrect.");
      }
    }
}
