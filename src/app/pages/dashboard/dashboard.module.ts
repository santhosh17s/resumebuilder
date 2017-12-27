
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { DashboardComponent } from './dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
      NgbModule,
      RouterModule
    ],
    declarations: [DashboardComponent],
  })
  export class DashboardModule {
  }