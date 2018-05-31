import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterializeModule } from 'angular2-materialize';
import { LoginCompanyComponent } from './login-company/login-company.component';
import { InitialBarComponent } from './initial-bar/initial-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginCompanyComponent,
    InitialBarComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }