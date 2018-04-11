/* Angular Imports */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    CoreModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
