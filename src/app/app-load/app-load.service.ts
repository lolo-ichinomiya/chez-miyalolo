import { Injectable } from '@angular/core';

@Injectable()
export class AppLoadService {

  constructor() { }

  // Initialize the application
  initializeApp(): Promise<any> {

    /*if (environment.easters) {
      console.log('Mother of Dragons!');
    } else {
      console.log('Application Initializing');
    }*/

    return new Promise((resolve, reject) => {

      // Initialize application data
      console.log('Initialization');
    });
  }

}