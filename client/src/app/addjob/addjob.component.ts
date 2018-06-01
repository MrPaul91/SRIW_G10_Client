import { Component, OnInit } from '@angular/core';
import { generalService } from '../generalService';

@Component({
  selector: 'app-addjob',
  templateUrl: './addjob.component.html',
  styleUrls: ['./addjob.component.css']
})
export class AddjobComponent implements OnInit {

  //companyId, jobPosition, jobName, description

  private companyId: string;
  private jobPosition: string;
  private jobName: string;
  private description: string;

  constructor(
    private service: generalService,
  ) { 
    
   this.companyId = this.service.companyLogged;

    
  }

  ngOnInit() {
  }
  anadirPosicion(){
   
     this.service.insertJobPosition(this.companyId, this.jobPosition, this.jobName, this.description).subscribe(

       data =>{

        if(data == true){
          alert("Se ha añadido la posicion de trabajo");
        }
        else{
          alert("Error");
        }
       }

     )
  }

}
