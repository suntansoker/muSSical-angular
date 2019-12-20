import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lesson2_2',
  templateUrl: './lesson2_2.component.html',
  styleUrls: ['./lesson2.component.css']
})
export class LessonTwoTwoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoLessonTwoThree(){
    this.router.navigate(['lesson2_3']);
  }

}
