import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MiyaloloApiService {

  public static LOCAL_CARINE_IMAGES = './assets/data/timeline/carine.json';
  public static LOCAL_MARRIAGE_IMAGES = './assets/data/timeline/marriage.json';

  constructor(private http: Http) { }

  public localResource(path: string): Promise<any> {
    return this.http.get(path)
      .toPromise()
      .then(this.handleSuccess)
      .catch(this.handleError);
  }

  public httpGet(endpoint: string, params: any): Promise<any> {
    return this.http.get(endpoint, { params: params })
      .toPromise()
      .then(this.handleSuccess)
      .catch(this.handleError);
  }

  public httpPost(endpoint: string, params: any, returnJson: boolean = true): Promise<any> {

    // Create a formData for the body
    let formData: FormData = new FormData();
    for (let key in params) {
      formData.append(key, params[key]);
    }

    return this.http.post(endpoint, formData)
      .toPromise()
      .then(returnJson ? this.handleSuccess : this.handleSuccessRawData)
      .catch(this.handleError);
  }

  /** Local functions */
  private handleSuccess(result) {
    let data = result.json();
    return data || {};
  }

  private handleSuccessRawData(result) {
    return result;
  }

  private handleError(error: any) {
    console.log('An error occurred')
    console.log(error);
    return { error: true, message:  error.json() } //Promise.reject(error.json()); // TODO: create and return an Error object
  }

}
