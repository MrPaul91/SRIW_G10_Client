import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { LoginCompanyComponent } from './login-company/login-company.component';
import { MenucompanyComponent } from './menucompany/menucompany.component';

import { SignUpComponent } from './sign-up/sign-up.component';
import { AddjobComponent } from './addjob/addjob.component';
import { ViewJobsComponent } from './view-jobs/view-jobs.component';


const app_routes: Routes = [
  { path: 'company', component:  MenucompanyComponent },
  { path: 'login', component: LoginCompanyComponent },
  { path: 'SignUp', component: SignUpComponent },
  { path: 'logout', component: LoginCompanyComponent },
  { path: 'addjob', component: AddjobComponent },
  { path: 'viewjob', component: ViewJobsComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(app_routes);