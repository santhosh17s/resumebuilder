import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertService } from './alert.service';

const SERVICES = [
    AlertService
];

@NgModule({
    imports: [ CommonModule ],
    providers:[ ...SERVICES ]
})
export class DataModule {
  static forRoot():ModuleWithProviders {
      return <ModuleWithProviders> {
          ngModule: DataModule,
          providers: [ ...SERVICES ]
      };
  }
}