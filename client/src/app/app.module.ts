import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterializeModule } from 'angular2-materialize';
import { LoginCompanyComponent } from './login-company/login-company.component';
import { InitialBarComponent } from './initial-bar/initial-bar.component';
import { routing } from './app.routes';
import { RouterModule, Routes }   from '@angular/router';
import { MenucompanyComponent } from './menucompany/menucompany.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginCompanyComponent,
    InitialBarComponent,
    MenucompanyComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    RouterModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
