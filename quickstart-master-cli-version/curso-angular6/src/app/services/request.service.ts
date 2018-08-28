import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
/*import 'rxjs/add/operator/map';*/
import {map} from 'rxjs/operators';
/*import 'rxjs';*/
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RequestService{

    public url: string; 

    constructor(private _http:Http){
        this.url = "https://jsonplaceholder.typicode.com/posts";
    }

    getTest(){
        return 'Hello World from the RequestService';
    }

    getProducts(){
        return this._http.get(this.url)
                         .pipe(map(res => res.json()));
    }
}