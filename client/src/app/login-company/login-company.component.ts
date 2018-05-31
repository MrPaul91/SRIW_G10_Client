import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-company',
  templateUrl: './login-company.component.html',
  styleUrls: ['./login-company.component.css']
})
export class LoginCompanyComponent implements OnInit {

  username: string;
  password: string;

  constructor() { }

  ngOnInit() {
  }
  postLogInData(){

  }

}
