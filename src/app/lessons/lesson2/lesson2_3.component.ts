import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lesson2_3',
  templateUrl: './lesson2_3.component.html',
  styleUrls: ['./lesson2.component.css']
})
export class LessonTwoThreeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoLessonTwoFour(){
    this.router.navigate(['lesson2_4']);
  }

}
