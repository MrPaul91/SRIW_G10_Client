import {     Injectable  } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

 @Injectable()
export class generalService {  
    private apiURL = 'http://localhost:8008';

    constructor(public http: HttpClient) { }

    static httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
 
   getApp(): string { 
      return "Hello world"; 
   } 

   sent() {
    return this.http.get(this.apiURL+'/lista');
   }  
} 