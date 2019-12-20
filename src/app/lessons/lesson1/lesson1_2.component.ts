import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lesson1_2',
  templateUrl: './lesson1_2.component.html',
  styleUrls: ['./lesson1.component.css']
})
export class LessonOneTwoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoLessonOneThree(){
    this.router.navigate(['lesson1_3']);
  }
}
