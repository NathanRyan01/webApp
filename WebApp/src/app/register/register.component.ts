import { Component, OnInit } from '@angular/core';
import { Register }    from '../Register';
import {NgForm} from "@angular/forms";
import { RegisterMysqlService } from '../services/register.service';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import {Router} from "@angular/router";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: [ './register.component.css' ]
  })


export class RegisterComponent{
    usersMysql: Register[];

    constructor(private register: RegisterMysqlService, private router: Router) { }

    registerClick(regForm: NgForm) {
       
       const first = regForm.value.firstname
       const sur = regForm.value.surname
       const user = regForm.value.username
       const pass = regForm.value.password
       const shift = regForm.value.shift
       this.register.insertUsersData(user,pass,first,sur,shift)
       .subscribe(
         res => {this.usersMysql = res,console.log(this.usersMysql);},
         err => {
        }
      );
      if(this.usersMysql){
        this.router.navigate(['home']);
      }
      else{
        this.router.navigate(['/register']);
        alert("The user was not added, it either exists already or there was an issue with the insertion.");
      }
    }
}