import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
    LoadingModule
  ]
})
export class SharedModule {
  static forRoot(/*culture: string*/) {
    return {
      ngModule: SharedModule,
      providers: [
        /*{
          provide:
            ModalService,
        },*/
      ]
    }
  }
}

