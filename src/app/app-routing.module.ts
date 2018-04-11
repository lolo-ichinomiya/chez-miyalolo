import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';


const routes: Routes = [
  // Common routes
  { path: '', component: HomeComponent },
  
];

@NgModule({
  imports: [ 
    
    RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }