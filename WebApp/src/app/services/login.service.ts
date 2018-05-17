import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { map } from "rxjs/operators";
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

@Injectable()
  
export class LoginMysqlService {

    URL = "http://localhost/userauth.php"

    headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.headers });

    constructor(private _http:Http) { }

    public getMysqlUsersDatas(user,pass) {
        return this._http.post(this.URL,{user,pass},this.options)
          .pipe(map(rep => rep.json()));         
    }
}
