import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { map } from "rxjs/operators";
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

@Injectable()
export class DatabaseMysqlService {

    constructor(private _http: Http) {}

    selectOneURL = "http://localhost/selectOne.php"
    selectAllURL = "http://localhost/selectAll.php"
    selectJoinAllURL = "http://localhost/selectAllJoin.php"
    insertURL = "http://localhost/insert.php"
    updateURL = "http://localhost/update.php"
    deleteURL = "http://localhost/delete.php"

    headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.headers });

    public insertData(value) {
        return this._http.post(this.insertURL,{value},this.options)
          .pipe(map(rep => rep.json()));         
    }

    public updateData(id,value) {
        return this._http.post(this.updateURL,{id,value},this.options)
          .pipe(map(rep => rep.json()));         
    }

    public selectData(id) {
        return this._http.post(this.selectOneURL,{id},this.options)
          .pipe(map(rep => rep.json()));         
    }

    public selectAllData() {
        return this._http.get(this.selectAllURL,{})
          .pipe(map(rep => rep.json()));         
    }

    public deleteData() {
        return this._http.post(this.deleteURL,{},this.options)
          .pipe(map(rep => rep.json()));         
    }

    public selectAllJoinData() {
        return this._http.get(this.selectJoinAllURL,{})
          .pipe(map(rep => rep.json()));         
    }
}