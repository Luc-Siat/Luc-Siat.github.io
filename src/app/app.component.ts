import { AfterViewInit, Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  
  title = 'portfolio';
  cursorTop: string  = '';
  cursorLeft: string = '';
  dotTop: string = '';
  dotLeft: string = '';
  lastScrollY: number = 0;

  ngAfterViewInit(): void {
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
  onWindowScroll() {
    const currentScroll = window.scrollY;
    const navbar = document.querySelector('.navbar');

    if (currentScroll < this.lastScrollY - 165) {
      setTimeout(() => navbar?.classList.remove('opacity-0'), 500)
      navbar?.classList.remove('hidden')
      this.lastScrollY = currentScroll;

    } else if (currentScroll > 3000 && currentScroll > this.lastScrollY + 500) {

     navbar?.classList.add('opacity-0');
     setTimeout(() => navbar?.classList.add('hidden'), 500)
     this.lastScrollY = currentScroll;
    }
    
    if (currentScroll > window.innerHeight - 50) {
      navbar?.classList.add('navbar-negative-colors');
    }

    if (currentScroll < window.innerHeight - 50) {
      navbar?.classList.remove('navbar-negative-colors');
    } 
  }
}


