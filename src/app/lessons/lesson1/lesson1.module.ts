import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LessonOneRoutingModule } from './lesson1-routing.module';
import { LessonOneComponent } from './lesson1.component';
import { LessonOneTwoComponent } from './lesson1_2.component';
import { LessonOneThreeComponent } from './lesson1_3.component';
import { LessonTwoModule } from '../lesson2/lesson2.module';

@NgModule({
  declarations: [
    LessonOneComponent,
    LessonOneTwoComponent,
    LessonOneThreeComponent
  ],
  imports: [
    BrowserModule,
    LessonOneRoutingModule,
    LessonTwoModule
  ],
  providers: []
})

export class LessonOneModule { }
