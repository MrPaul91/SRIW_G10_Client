import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MaterializeModule } from 'angular2-materialize';
import { LoginCompanyComponent } from './login-company/login-company.component';
import { InitialBarComponent } from './initial-bar/initial-bar.component';
import { routing } from './app.routes';
import { RouterModule, Routes }   from '@angular/router';
import { MenucompanyComponent } from './menucompany/menucompany.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
//Servicios

import {generalService} from './generalService';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AddjobComponent } from './addjob/addjob.component';
import { ViewJobsComponent } from './view-jobs/view-jobs.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginCompanyComponent,
    InitialBarComponent,
    MenucompanyComponent,
    SignUpComponent,
    AddjobComponent,
    ViewJobsComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    RouterModule,
    FormsModule,
    routing,
    HttpModule,
    HttpClientModule
  ],
  providers: [HttpClientModule,
              generalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
