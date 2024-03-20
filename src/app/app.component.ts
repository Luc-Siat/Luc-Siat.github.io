import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'portfolio';

  ngOnInit(): void {
    this.handleSlidingElements();

    this.handleCursor();
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

  handleCursor() {
    const cursor = document.querySelector('.cursor');
    const cursorDot = document.querySelector('.cursor-dot');


    document.addEventListener('mousemove', e => {
      cursor?.setAttribute("style", `top: ${(+e.pageY) - 13}px; left: ${(+e.pageX) - 13}px;`)
    })

    document.addEventListener('click', e => {
      cursor?.classList.add("expand");
      setTimeout(() => cursor?.classList.remove("expand"), 400) 
    })
  
    document.addEventListener('mousemove', e => {
      cursorDot?.setAttribute("style", `top: ${(+e.pageY)-2 }px; left: ${(+e.pageX)- 2}px;`)
    })

    
  }

}
