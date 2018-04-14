import { Injectable } from '@angular/core';
import { MiyaloloApiService } from './miyalolo-api.service';

@Injectable()
export class ImageService {

  constructor(private api:MiyaloloApiService) { }

  public getCarineImages(): Promise<any> {
    return this.api.localResource(MiyaloloApiService.LOCAL_CARINE_IMAGES).then(data => {
      return data;
    })
  }

  public getMarriageImages(): Promise<any> {
    return this.api.localResource(MiyaloloApiService.LOCAL_MARRIAGE_IMAGES).then(data => {
      return data;
    })
  }

}
