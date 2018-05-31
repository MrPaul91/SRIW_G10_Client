import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { LoginCompanyComponent } from './login-company/login-company.component';


const app_routes: Routes = [
  { path: 'login', component: LoginCompanyComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(app_routes);