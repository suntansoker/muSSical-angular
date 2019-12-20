import { NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading } from '@angular/router';

import { LessonTwoComponent } from './lesson2.component';
import { LessonTwoTwoComponent } from './lesson2_2.component';
import { LessonTwoThreeComponent } from './lesson2_3.component';
import { LessonTwoFourComponent } from './lesson2_4.component';
// import { LessonTwoComponent } from '../lesson2/lesson2.component';

const lessonTwoRoutes: Routes = [
  { path: 'lesson2', component: LessonTwoComponent },
  { path: 'lesson2_2', component: LessonTwoTwoComponent },
  { path: 'lesson2_3', component: LessonTwoThreeComponent },
  { path: 'lesson2_4', component: LessonTwoFourComponent }
//   { path: 'lesson2', component: LessonTwoComponent }
  // { path: 'customers', 
  //   loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule),
  //   canLoad: [ CustomersLoadGuardService ]
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(lessonTwoRoutes,{
        scrollPositionRestoration: 'enabled'
      })
  ],
  exports: [ RouterModule ]
})

export class LessonTwoRoutingModule { }
