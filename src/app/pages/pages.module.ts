import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';


const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    AuthModule,
    RouterModule   
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}