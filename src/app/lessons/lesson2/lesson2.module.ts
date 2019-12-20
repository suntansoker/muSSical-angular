import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LessonTwoRoutingModule } from './lesson2-routing.module';
import { LessonTwoComponent } from './lesson2.component';
import { LessonTwoTwoComponent } from './lesson2_2.component';
import { LessonTwoThreeComponent } from './lesson2_3.component';
import { LessonTwoFourComponent } from './lesson2_4.component';

@NgModule({
  declarations: [
    LessonTwoComponent,
    LessonTwoTwoComponent,
    LessonTwoThreeComponent,
    LessonTwoFourComponent
  ],
  imports: [
    BrowserModule,
    LessonTwoRoutingModule
  ],
  providers: [],
  bootstrap: [LessonTwoComponent]
})
export class LessonTwoModule { }