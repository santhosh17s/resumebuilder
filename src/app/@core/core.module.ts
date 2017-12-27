import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { throwIfAlreadyLoaded } from './module-import-guard';

const NB_CORE_PROVIDERS = [];

@NgModule({
    imports: [
      CommonModule,
    ],
    exports: [  ],
    declarations: [],
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
      throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }

    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{
          ngModule: CoreModule,
          providers: [
            ...NB_CORE_PROVIDERS,
          ],
        };
      }
}    