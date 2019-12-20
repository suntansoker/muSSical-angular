import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.css']
})
export class LessonOneComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoLessonOneTwo(){
    this.router.navigate(['lesson1_2']);
  }
}
