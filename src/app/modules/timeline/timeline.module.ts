import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from 'app/shared/shared.module';
import { CarineComponent } from './carine/carine.component';

const routes: Routes = [ ];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  declarations: [CarineComponent],
  exports: [ CarineComponent ]

})
export class TimelineModule { }
