import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login-company',
  templateUrl: './login-company.component.html',
  styleUrls: ['./login-company.component.css']
})
export class LoginCompanyComponent implements OnInit {

  private idcompany: string;
  private password: string;

  constructor(private router: Router) {
  
  }

  ngOnInit() {
  }
  postLogInData(){
     
    console.log(this.idcompany);

    console.log(this.password);

    this.router.navigateByUrl('/company');
    

  

    


    

  }

}
