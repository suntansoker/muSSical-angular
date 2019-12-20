import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lesson1_3',
  templateUrl: './lesson1_3.component.html',
  styleUrls: ['./lesson1.component.css']
})
export class LessonOneThreeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoLessonTwo(){
    this.router.navigate(['lesson2']);
  }

}
