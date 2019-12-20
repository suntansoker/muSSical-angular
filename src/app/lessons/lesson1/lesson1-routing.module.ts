import { NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading } from '@angular/router';

import { LessonOneComponent } from './lesson1.component';
import { LessonOneTwoComponent } from './lesson1_2.component';
import { LessonOneThreeComponent } from './lesson1_3.component';
import { LessonTwoComponent } from '../lesson2/lesson2.component';

const lessonOneRoutes: Routes = [
  { path: 'lesson1', component: LessonOneComponent },
  { path: 'lesson1_2', component: LessonOneTwoComponent },
  { path: 'lesson1_3', component: LessonOneThreeComponent },
  { path: 'lesson2', component: LessonTwoComponent }
  // { path: 'customers', 
  //   loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule),
  //   canLoad: [ CustomersLoadGuardService ]
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(lessonOneRoutes,{
        scrollPositionRestoration: 'enabled'
      })
  ],
  exports: [ RouterModule ]
})

export class LessonOneRoutingModule { }
