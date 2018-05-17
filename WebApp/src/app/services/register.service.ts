import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { map } from "rxjs/operators";
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

@Injectable()
  
export class RegisterMysqlService {

    URL = "http://localhost/register.php"

    headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.headers });

    constructor(private _http:Http) { }

    public insertUsersData(user,pass,first,sur,shift) {
        return this._http.post(this.URL,{first,sur,user,pass,shift},this.options)
          .pipe(map(rep => rep.json()));         
    }
}
