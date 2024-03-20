import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'portfolio';
  cursorTop: any;
  cursorLeft: any;
  dotTop: any;
  dotLeft: any;

  ngOnInit(): void {
    this.handleSlidingElements();

  }

  handleSlidingElements() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('shown-in-view');
        } else {
          entry.target.classList.remove('shown-in-view')
        }
      })
    });

    const slidingElements= document.querySelectorAll('.slide-in-view')
    slidingElements.forEach(el => observer.observe(el));
  }

  @HostListener('document:mousemove', ['$event'])
  onMousemove($event : any) {
    setTimeout(() => {
      this.cursorTop=($event.pageY - 13)+ "px";
      this.cursorLeft= ($event.pageX - 13)+ "px";
    }, 100)
    this.dotTop=($event.pageY - 3)+ "px";
    this.dotLeft= ($event.pageX - 3)+ "px";
  }

  @HostListener('document:click', ['$event'])
  onClick() {
    const cursor = document.querySelector('.cursor');

    cursor?.classList.add("expand");
    setTimeout(() => cursor?.classList.remove("expand"), 400) 
  }

  @HostListener('document:scroll', ['$event'])
  onWindowScroll($event : any) {
    const currentScroll = window.scrollY;
    const navbar = document.querySelector('.navbar');
    const menu = document.querySelector('.menu');


     if (currentScroll > 100) {
       navbar?.classList.add('navbar-negative-colors');

     }
     if (currentScroll < 100) {
      navbar?.classList.remove('navbar-negative-colors');

     }
  }
}
