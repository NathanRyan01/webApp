import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { map } from "rxjs/operators";
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

@Injectable()
export class LogoutMysqlService {

    constructor(private _http: Http) {}

    URL = "http://localhost/update.php"

    headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.headers });

    public updateData(team,wrestler,capital,user) {
        return this._http.post(this.URL,{team,wrestler,capital,user},this.options)
          .pipe(map(rep => rep.json()));         
    }
}