import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { generalService } from '../generalService';

@Component({
  selector: 'app-login-company',
  templateUrl: './login-company.component.html',
  styleUrls: ['./login-company.component.css']
})
export class LoginCompanyComponent implements OnInit {

  private idcompany: string;
  private password: string;

  constructor(private router: Router, private service: generalService) {

  }

  ngOnInit() {
  }
  postLogInData() {

    console.log(this.idcompany);

    console.log(this.password);

    console.log(this.service.getApp());

    this.service.sent().subscribe(data => {

      console.log(data);
      /*const dataJson = JSON.parse(JSON.stringify(data));

      console.log(dataJson.data);*/

    }
    );


    this.router.navigateByUrl('/company');









  }

}
