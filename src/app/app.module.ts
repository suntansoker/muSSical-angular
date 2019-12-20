import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { LessonOneModule } from './lessons/lesson1/lesson1.module';
import { LessonOneComponent } from './lessons/lesson1/lesson1.component';
import { LessonTwoModule } from './lessons/lesson2/lesson2.module';
import { LessonTwoComponent } from './lessons/lesson2/lesson2.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    LessonOneModule,
    LessonTwoModule
  ],
  providers: [],
  bootstrap: [AppComponent,
    AboutComponent,
    ContactComponent,
    LessonOneComponent,
    LessonTwoComponent]
})
export class AppModule { }
