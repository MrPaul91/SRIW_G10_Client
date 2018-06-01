import {     Injectable  } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

 @Injectable()
export class generalService {  
    private apiURL = 'http://localhost:8008';


    public companyLogged: string;
    initialNavBar:Boolean = false;
   
    public companyName: string;

    public companySector: string;

    public companyDireccion: string;


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


   setCompanyLogged(idCompany: string){
      this.companyLogged = idCompany;
   }

   getCompanyLogged(){
      return this.companyLogged;

   }

   login(companyId, password) {
    return this.http.post(this.apiURL+"/login",
      JSON.stringify({ companyId: companyId, password: password }), generalService.httpOptions);
   }

   insertJobPosition(companyId, jobPosition, jobName, description){
    return this.http.post(this.apiURL+"/insertjobPosition",
    JSON.stringify({ companyId: companyId, jobPosition: jobPosition, jobName,description  }), generalService.httpOptions);

   }
             


   viewJob(companyId){
     console.log(companyId);
    return this.http.post(this.apiURL+"/getJobsPosition",
    JSON.stringify({ companyId: companyId }), generalService.httpOptions);

   }
   


} 