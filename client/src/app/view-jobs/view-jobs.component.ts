import { Component, OnInit,  Pipe, PipeTransform } from '@angular/core';
import { generalService } from '../generalService';

@Component({
  selector: 'app-view-jobs',
  templateUrl: './view-jobs.component.html',
  styleUrls: ['./view-jobs.component.css']
})
export class ViewJobsComponent implements OnInit {


  public array;

  constructor(
    private service: generalService
  ) { 
    

    this.service.viewJob(this.service.companyLogged).subscribe(
       data =>{
          //var i = 0;

          //this.array = data;

          //console.log(typeof this.array);

         /* for (let index in data){
            this.array.push({id: data[index].id, jobposition: data[index].jobposition});

          }*/

         this.array = data;

        /*  for (let index in data) {
            console.log("id" + data[index].id);
            console.log("job position" + data[index].jobposition);
            
            this.array[index].id = "hola";
          
            //this.array[index].id = data[index].jobposition;
            //this.array[index].jobName = data[index].id;
         
          }*/

       }

    )
  }

  ngOnInit() {

    


  }


}
