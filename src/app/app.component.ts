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
    this.cursorTop=($event.pageY - 13)+ "px";
    this.cursorLeft= ($event.pageX - 13)+ "px";
    this.dotTop=($event.pageY - 2)+ "px";
    this.dotLeft= ($event.pageX - 2)+ "px";
  }
  @HostListener('document:click', ['$event'])
  on() {
    const cursor = document.querySelector('.cursor');

    cursor?.classList.add("expand");
    setTimeout(() => cursor?.classList.remove("expand"), 400) 
  }
}
