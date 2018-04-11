import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [ ];

@NgModule({
  imports: [
    CommonModule,

    SharedModule,

    RouterModule.forRoot(routes, {useHash: true}),
  ],
  declarations: [HeaderComponent, FooterComponent, HomeComponent],
  exports: [ HeaderComponent, FooterComponent ]
})
export class LayoutModule { }
