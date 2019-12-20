import { NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LessonOneComponent } from './lessons/lesson1/lesson1.component';
import { LessonTwoComponent } from './lessons/lesson2/lesson2.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'lesson1', component: LessonOneComponent },
  { path: 'lesson2', component: LessonTwoComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,{
      scrollPositionRestoration: 'enabled',
      useHash:true
    })
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
