import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-landscape-css',
  templateUrl: './landscape-css.component.html',
  styleUrl: './landscape-css.component.scss'
})
export class LandscapeCssComponent implements AfterViewInit {

  @ViewChild('canvas')  canvas!: ElementRef<HTMLCanvasElement>;
 
  ngAfterViewInit(): void {

    fromEvent(window, 'resize').subscribe(event => {
      this.canvas.nativeElement.height = window.outerHeight;
      this.canvas.nativeElement.width = document.body.clientWidth;
    })

    this.canvas.nativeElement.height = window.outerHeight;
    this.canvas.nativeElement.width = document.body.clientWidth;
    



  
  if (this.canvas!.nativeElement.getContext !== undefined){
      const context = this.canvas?.nativeElement.getContext("2d");
      var radius = 2;

      for(var star = 0; star < 80; star++){ 
          var min = ( Math.random() * 10 + 5 ) / 10;
          var max = this.canvas.nativeElement.width - radius;
  
          var centerX = Math.floor(Math.random() * (max - min + 1)) + min;
          var centerY = Math.floor(Math.random() * (max - min + 1)) + min;

          if (context) {
            context.beginPath();
            context.arc(centerX, centerY, min, 0, 2 * Math.PI);
    
            context.fillStyle = "rgb(255, 255, 255)";
            context.fill();
          }
  
      }
  }
  }

// let isDragging = false
// let click = { x: 0, y: 0 }
// let drag = { x: 0, y: 0 }

// /* Helper functions */
// const clamp = (val, min, max) => (
//   Math.min(Math.max(min, val), max)
// )

// const rand = (min, max) => (
//   Math.floor((Math.random() * (max - min + 1)) + min)
// )

// /* Element classes */
// class Circle {
//   constructor(x, y, r, c) {
//     this.r = r
//     this.color = c || 'orange'
//     this.x = x; this.y = y
//     this.vx = this.vy = 0
//   }
  
//   draw() {
//     const { x, y, r, color } = this
//     ctx.beginPath()
//     ctx.arc(x, y, r, 0, Math.PI * 2)
//     ctx.fillStyle = color
//     ctx.fill()
//     ctx.closePath()
//   }
  
//   update(fn) {
//     if (fn) fn.call(this)    
//     this.draw()
//   }
// }

// /* canvas elements */
// const circ = new Circle(width/6, height/4, 30)
// const center = new Circle(0, 0, 2, '#d3d3d3')

// /* environmental params */
// let angle = -45
// let gravity = 0.5,
//     fric = 0.5

// /* Initial set-up */
// function init() {
//   // apply initial force to ball
//   angle *= Math.PI / 80
//   circ.vx = Math.cos(angle) * .1
//   circ.vy = Math.sin(angle) * .5
// }

// /* Main animation routine */
// function animate() {
//   requestAnimationFrame(animate)
//   ctx.clearRect(0, 0, width, height)
  
//   // draw bouncy circle
//   circ.update(function() {
//     // update position
//     this.x += this.vx
//     this.y += this.vy
    
//     // update velocity
//     this.vx -= (this.vx * 0.005)
//     this.vy += gravity
    
//     // check bounds
//     if (this.x-this.r < 0 || this.x+this.r > width) {
//       this.x = clamp(this.x, this.r, width-this.r)
//       this.vx *= -fric // apply friction on bounce
//     }
    
//     if (this.y-this.r < 0 || this.y+this.r > height) {
//       this.y = clamp(this.y, this.r, height-this.r)
//       this.vy *= -fric
//     }
//   })
  
//   // draw line reticule
//   if (isDragging) {
//     center.update(function() {
//       this.x = click.x
//       this.y = click.y
      
//       ctx.beginPath()
//       ctx.moveTo(this.x, this.y)
//       ctx.lineTo(drag.x, drag.y)
//       ctx.strokeStyle = this.color
//       ctx.lineWidth = 2
//       ctx.stroke()
//       ctx.closePath()
//     })
    
//     // to-do: create a Line class
//     ctx.beginPath()
//     ctx.moveTo(circ.x, circ.y)
//     ctx.lineTo(
//       circ.x + (click.x-drag.x)/1.75, 
//       circ.y + (click.y-drag.y)/1.75
//     )
//     ctx.strokeStyle = 'darkslategray'
//     ctx.lineWidth = 2
//     ctx.stroke()
//     ctx.closePath()
//   }
// }

// init()
// animate()

// /* Event Listeners */
// window.addEventListener('resize', () => {
//   width = canvas.width = window.innerWidth
//   height = canvas.height = window.innerHeight
// })

// window.addEventListener('mousedown', ({ clientX, clientY }) => {
//   addEventListener('mousemove', setDragPos)
//   addEventListener('mouseup', onMouseUp)
  
//   // on mouse down
//   click.x = clientX
//   click.y = clientY
// })

// function setDragPos({ clientX, clientY }) {
//   isDragging = true

//   // on mouse dragging
//   drag.x = clientX
//   drag.y = clientY
// }

// function onMouseUp(e) {
//   isDragging = false
//   removeEventListener('mousemove', setDragPos)
//   removeEventListener('mouseup', onMouseUp)
  
//   // on mouse up
//   const dx = click.x - drag.x,
//         dy = click.y - drag.y
  
//   angle = Math.atan2(dy, dx)
//   circ.vx = Math.cos(angle) * Math.abs(dx/16)
//   circ.vy = Math.sin(angle) * Math.abs(dy/16)
// }
  

}
