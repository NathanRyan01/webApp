import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { map } from "rxjs/operators";
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

@Injectable()
export class InternetMysqlService {

    constructor(private _http: Http) {}

    GetURL = "http://localhost/wiki.php";
    EmailUrl = "http://localhost/email.php";

    public getWikiData() {
        return this._http.get(this.GetURL,{})
          .pipe(map(rep => rep.json()));         
    }

    public postEmail() {
        return this._http.get(this.EmailUrl,{})
          .pipe(map(rep => rep.json()));         
    }
}