import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LessonOneModule } from '../lessons/lesson1/lesson1.module';
import { LessonTwoModule } from '../lessons/lesson2/lesson2.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HomeRoutingModule,
    LessonOneModule,
    LessonTwoModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }