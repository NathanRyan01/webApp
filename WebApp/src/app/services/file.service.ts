import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { map } from "rxjs/operators";
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

@Injectable()
export class XMLService {

    headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.headers });

    constructor(private _http: Http) {}

    URL = "http://localhost/file.php";

    public getXMLData(value) {
        return this._http.post(this.URL,{value},this.options)
          .pipe(map(rep => rep.json()));          
    }


}