import { NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading } from '@angular/router';

import { HomeComponent } from './home.component';
import { LessonOneComponent } from '../lessons/lesson1/lesson1.component';
import { LessonTwoComponent } from '../lessons/lesson2/lesson2.component';

const homeRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lesson1', component: LessonOneComponent },
  { path: 'lesson2', component: LessonTwoComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(homeRoutes,{
        scrollPositionRestoration: 'enabled'
      })
  ],
  exports: [ RouterModule ]
})

export class HomeRoutingModule { }
