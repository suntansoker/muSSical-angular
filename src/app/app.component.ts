import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('dropdown', {static: false}) dropdown:any;
  @ViewChild('lessons', {static: false}) lessons:any;
  @ViewChild('menu', {static: false}) menu:any;
  @ViewChild('nav', {static: false}) nav:any;
  dropDisplay:boolean;
  toggleMenu:boolean;

  constructor(){
    this.dropDisplay=false;
    this.toggleMenu=false;
  }

  showMenu(){
    this.toggleMenu=!this.toggleMenu;
    if(this.toggleMenu){
      this.nav.nativeElement.style.transform="translateX(0%)";
      this.menu.nativeElement.style.display="block"
    }
    else
      this.nav.nativeElement.style.transform="translateX(110%)";
      this.nav.nativeElement.style.transition= "transform 0.5s ease-in";
      this.menu.nativeElement.classList.toggle('toggle');
    
  }

  showDropdown(){
    this.dropDisplay=!this.dropDisplay;
    if(this.dropDisplay===true)
      this.lessons.nativeElement.style.display="block";
    else
      this.lessons.nativeElement.style.display="none";
  }

  closeMenu(){
    if(this.menu.nativeElement.style.display=="block"){
        this.showMenu();
      }
  }
    


}

// const dropdown=document.querySelector('.dropdown');
// const ele=document.getElementById("lesson-list");
// const hamburger =document.querySelector('.hamburger-menu');
// const nav=document.querySelector('.nav-links');

// window.addEventListener('load',()=>{
//     ele.style.display="none";
// });

// dropdown.addEventListener('click',()=>{
    
//     if(ele.style.display==="none")
//     {
//         ele.style.display="block";
//     }else{
//         ele.style.display="none";
//     }

// });
    
// hamburger.addEventListener('click',()=>{
//     if(nav.style.transform==="translateX(0%)"){
//         nav.style.transform="translateX(110%)";
//     }else
//         nav.style.transform="translateX(0%)";

//     nav.style.transition= "transform 0.5s ease-in";
//     hamburger.classList.toggle('toggle');
    
// });

