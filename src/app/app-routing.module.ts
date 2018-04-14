import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './layout/home/home.component';
import { CarineComponent } from './modules/timeline/carine/carine.component';
import { TimelineModule } from './modules/timeline/timeline.module';
import { MarriageComponent } from './modules/timeline/marriage/marriage.component';


const routes: Routes = [
    // Common routes
    { path: '', component: HomeComponent },

    // Timeline routes
    { path: 'timeline/carine', component: CarineComponent },
    { path: 'timeline/marriage', component: MarriageComponent },

];

@NgModule({
    imports: [

        TimelineModule,

        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }