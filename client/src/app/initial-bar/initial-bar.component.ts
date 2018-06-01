import { Component, OnInit } from '@angular/core';

import { generalService } from '../generalService';

@Component({
  selector: 'app-initial-bar',
  templateUrl: './initial-bar.component.html',
  styleUrls: ['./initial-bar.component.css']
})
export class InitialBarComponent implements OnInit {

  constructor(private generalService: generalService) { }

  ngOnInit() {
  }


  changeBarLogOut(){

    this.generalService.setCompanyLogged("");
    this.generalService.initialNavBar = false;

    alert("Session Finalizada");

  
  }

}
