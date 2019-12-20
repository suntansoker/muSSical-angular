import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lesson2',
  templateUrl: './lesson2.component.html',
  styleUrls: ['./lesson2.component.css']
})
export class LessonTwoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoLessonTwoTwo(){
    this.router.navigate(['lesson2_2']);
  }

}
