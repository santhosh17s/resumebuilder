import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertService } from './alert.service';
import { AuthGuard } from './guards';
import { AuthenticationService } from './authentication.service';
import { fakeBackendProvider } from './helper';

const SERVICES = [
    AlertService,
    AuthGuard,
    AuthenticationService,
    fakeBackendProvider
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