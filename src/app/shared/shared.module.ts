import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalGalleryModule } from 'angular-modal-gallery';
import { NgxGalleryModule } from 'ngx-gallery';

import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

@NgModule({
  imports: [
    CommonModule,
    ModalGalleryModule.forRoot(),
    ScrollToModule.forRoot()
  ],
  declarations: [],
  exports: [
    LoadingModule,
    ModalGalleryModule,
    NgxGalleryModule,
    ScrollToModule
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

