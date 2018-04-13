/* tslint:disable:member-ordering no-unused-variable */
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ApplicationService } from '../services/application.service';
import { MiyaloloApiService } from 'app/services/miyalolo-api.service';
import { AuthentificationService } from '../services/authentification.service';
import { ImageService } from '../services/image.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [  ],
    exports: [  ],
    providers: [
        ApplicationService,
        MiyaloloApiService,
        AuthentificationService,
        ImageService
    ]
})
export class CoreModule {

    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }

    /*static forRoot(config: UserServiceConfig): ModuleWithProviders {
      return {
        ngModule: CoreModule,
        providers: [
          {provide: UserServiceConfig, useValue: config }
        ]
      };
    }*/
}