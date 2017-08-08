import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpTestService {

  constructor(private http: Http) { }

  getText() {
    // let headers = new Headers({'Content-Type' : 'application/json'});
    // let options = new RequestOptions({headers : headers});
    // let body = JSON.stringify({});
    return this.http.get('http://localhost:8000/api/list/?format=json').map(response => response.json());
  }
}
