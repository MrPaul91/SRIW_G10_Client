import { Component, OnInit } from '@angular/core';
import { generalService } from '../generalService';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-menucompany',
  templateUrl: './menucompany.component.html',
  styleUrls: ['./menucompany.component.css']
})
export class MenucompanyComponent implements OnInit {

  private name: string;
  private sector: string;
  private direccion: string;
  private id: string;


  constructor(private service: generalService,
    private router: Router,
  ) { 
   
    this.name = this.service.companyName;
    this.direccion = this.service.companyDireccion;
    this.sector = this.service.companySector;
    this.id = this.service.companyLogged;

  }

  ngOnInit() {

     

  }

  agregarTrabajo(){
     
    this.router.navigateByUrl('/addjob');

  }

  mirarTrabajos(){
    this.router.navigateByUrl('/viewjob');
  }

}
