import { Component, OnInit, NgModule, VERSION } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';

import 'hammerjs'; // <------ mandatory dependency for angular-modal-gallery
import 'mousetrap'; // <------ mandatory dependency for angular-modal-gallery

import {
  AccessibilityConfig, Action, AdvancedLayout, ButtonEvent, ButtonsConfig, ButtonsStrategy, ButtonType, Description, DescriptionStrategy,
  DotsConfig, GridLayout, Image, ImageModalEvent, LineLayout, PlainGalleryConfig, PlainGalleryStrategy, PreviewConfig
} from 'angular-modal-gallery';


import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import { ImageService } from 'app/services/image.service';

@Component({
  selector: 'app-carine',
  templateUrl: './carine.component.html',
  styleUrls: ['./carine.component.css']
})
export class CarineComponent implements OnInit {

  public isPageLoaded = false;
  public nbImagesToDisplay = 3;
  images: Image[] = [];

  plainGalleryGrid: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.GRID,
    layout: new GridLayout({ width: '80px', height: '80px' }, { length: 5, wrap: true })
  };

  customPlainGalleryRowConfig: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.CUSTOM,
    layout: new AdvancedLayout(-1, true)
  };

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[] = [];

  constructor(private imagesService: ImageService) {
  }

  ngOnInit() {

    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        /*"previewFullscreen": true,*/
        "previewZoom": true,
        "previewRotate": true,
        "imageArrowsAutoHide": true, 
        "thumbnailsArrowsAutoHide": true,
        "rotateRightIcon": "fas fa-redo",
        imageAnimation: NgxGalleryAnimation.Zoom
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        "imageArrowsAutoHide": true, 
        "thumbnailsArrowsAutoHide": true,
        preview: true
      }
    ];

    // Loads images
    this.getData().subscribe(data => {

      const [imagesData] = data;

      imagesData.map((image, index) => {
        /*this.images.push(new Image(
          index,
          { // modal
            img: '/assets/images/timeline/carine/' + image.img,
            description: image.description,
            title: image.title
          }
        ));*/
        this.galleryImages.push({
          small: '/assets/images/timeline/carine/' + image.img,
          medium: '/assets/images/timeline/carine/' + image.img,
          big: '/assets/images/timeline/carine/' + image.img,
          description: image.description
        });
      });

      this.isPageLoaded = true;

    });
  }

  public openImageModalRow(image: Image) {
    console.log('Opening modal gallery from custom plain gallery row, with image: ', image);
    const index: number = this.getCurrentIndexCustomLayout(image, this.images);
    this.customPlainGalleryRowConfig = Object.assign({}, this.customPlainGalleryRowConfig, { layout: new AdvancedLayout(index, true) });
  }

  private getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
    return image ? images.indexOf(image) : -1;
  }

  private getData() {
    return Observable.forkJoin(
      this.imagesService.getCarineImages(),
    );
  }

}
