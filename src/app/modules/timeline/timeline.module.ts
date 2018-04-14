import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from 'app/shared/shared.module';
import { CarineComponent } from './carine/carine.component';
import { MarriageComponent } from './marriage/marriage.component';

const routes: Routes = [ ];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  declarations: [CarineComponent, MarriageComponent],
  exports: [ CarineComponent ]

})
export class TimelineModule { }
