import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HeaderComponent } from "./component";
import { SampleLayoutComponent } from "./layout/sample/sample.layout";
import { RouterModule } from "@angular/router";
import { AlertComponent } from "./component/alert";



const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule, RouterModule];

const NB_MODULES = [];
const COMPONENTS = [
    HeaderComponent,
    SampleLayoutComponent,
    AlertComponent
];
const PIPES = [];

const NB_THEME_PROVIDERS = [];

@NgModule({
    imports: [...BASE_MODULES, ...NB_MODULES],
    exports: [...BASE_MODULES, ...NB_MODULES, ...COMPONENTS, ...PIPES],
    declarations: [...COMPONENTS, ...PIPES],
  })
  export class ThemeModule {
    static forRoot(): ModuleWithProviders {
      return <ModuleWithProviders>{
        ngModule: ThemeModule,
        providers: [...NB_THEME_PROVIDERS],
      };
    }
  }