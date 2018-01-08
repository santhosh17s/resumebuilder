
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { DashboardComponent } from './dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
      CommonModule,
      NgbModule,
      RouterModule,
      FormsModule
    ],
    declarations: [
      DashboardComponent,
    ],
  })
  export class DashboardModule {
  }