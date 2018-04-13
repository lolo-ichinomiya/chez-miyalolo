/* Angular Imports */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

/* App Routing */
import { AppRoutingModule } from './app-routing.module';

/* App Imports */
import { AppComponent } from './app.component';

/* App Initialization */
import { AppLoadModule } from './app-load/app-load.module';

/* Custom Modules */
import { CoreModule } from 'app/core/core.module';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,

    CoreModule,
    LayoutModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
