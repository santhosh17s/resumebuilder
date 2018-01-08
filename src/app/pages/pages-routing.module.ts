import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../@core/data/guards';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
 {
     path:'', 
     component:PagesComponent,
     children: [
          { path: 'dashboard', component: DashboardComponent, canActivate: [ AuthGuard ]},
          { path: 'login', component: LoginComponent },
          { path: 'register', component: RegisterComponent},
        //   { path: 'auth', loadChildren: 'app/pages/auth/auth.module#AuthModule' },
          { path: '', redirectTo: 'dashboard', pathMatch: 'full',
      }]
 }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class PagesRoutingModule {
  }