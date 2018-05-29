import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';


@Injectable()
export class NetworkService {

    chatSelectURL = "http://localhost/chatSelect.php";
    chatDeleteURL = "http://localhost/chatDelete.php";
    chatInsertURL = "http://localhost/chatInsert.php";

    headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.headers });
    evt

    constructor(private _http: Http) {}

    private subject = new Subject<any>();
 
    getAllMessages(): Observable<any> {
        return this.subject.asObservable();
    }

    returnAllMessages(){
        return this._http.get(this.chatSelectURL,{})
        .pipe(map(rep => rep.json()));
    }

    addMessages(id : string, text: string,){
        this.subject.next({id,text});
        return this._http.post(this.chatInsertURL,{id,text})
        .pipe(map(rep => rep.json()));
    }

    clearMessage() {
        return this._http.post(this.chatDeleteURL,{},this.options)
        .pipe(map(rep => rep.json()));
    }

    check() : Observable<string> {
        return new Observable<string>(obs => {
           const es = new EventSource(this.chatSelectURL);
            es.addEventListener('message', (evt) => {
                this.evt = evt
                obs.next(this.evt.data);
            });
            return () => es.close();
        });       
    }
}