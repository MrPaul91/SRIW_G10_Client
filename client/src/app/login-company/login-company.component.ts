import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { generalService } from '../generalService';

@Component({
  selector: 'app-login-company',
  templateUrl: './login-company.component.html',
  styleUrls: ['./login-company.component.css']
})
export class LoginCompanyComponent implements OnInit {

  private idcompany: string;
  private password: string;


  constructor(private router: Router, private service: generalService,
 ) {

  }

  ngOnInit() {
  }
  postLogInData() {


    this.service.login(this.idcompany, this.password).subscribe(data => {

      if (typeof data[0].name === "undefined") {
        alert("Id de compañia invalida o contraseña invalida.");
      }
      else{
        
        this.service.setCompanyLogged(this.idcompany);

        this.service.companyName = data[0].name;

        this.service.companySector = data[0].sector;

        this.service.companyDireccion = data[0].direccion;

        

        alert("Bienvenido al recomendador");

        this.service.initialNavBar = true;
        
        this.router.navigateByUrl('/company');
      }
  
     
    },
    error => {

      console.log(error);
    }
  
  );





  }

}
