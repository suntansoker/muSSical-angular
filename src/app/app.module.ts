import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { LessonOneModule } from './lessons/lesson1/lesson1.module';
import { LessonTwoModule } from './lessons/lesson2/lesson2.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent
    // Lesson1Component,
    // Lesson2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    LessonOneModule,
    LessonTwoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
