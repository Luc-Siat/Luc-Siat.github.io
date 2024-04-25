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

// isDragging = false
// click = { x: 0, y: 0 }
// drag = { x: 0, y: 0 }

// /* Helper functions */
// clamp = (val : number, min : number, max : number) => (
//   Math.min(Math.max(min, val), max)
// )

// rand = (min : number, max : number) => (
//   Math.floor((Math.random() * (max - min + 1)) + min)
// )

// /* Element classes */

  
//   draw() {
//     const { x, y, r, color } = this
//     ctx.beginPath()
//     ctx.arc(x, y, r, 0, Math.PI * 2)
//     ctx.fillStyle = color
//     ctx.fill()
//     ctx.closePath()
//   }
  
//   update(fn : Function) {
//     if (fn) fn.call(this)    
//     this.draw()
//   }


// /* canvas elements */
// circ = new Circle(window.outerWidth/2, window.outerHeight/4, 30, '#d3d3d3')
// center = new Circle(0, 0, 2, '#d3d3d3')

// /* environmental params */
// angle = -45
// gravity = 0.5;
// fric = 0.8
// width = window.outerWidth;
// height = window.outerHeight;

// /* Initial set-up */
// init() {
//   // apply initial force to ball
//   this.angle *= Math.PI / 180
//   this.circ.vx = Math.cos(this.angle) * 20
//   this.circ.vy = Math.sin(this.angle) * 20
// }

// /* Main animation routine */
// animate() {
//   requestAnimationFrame(this.animate)
//   ctx.clearRect(0, 0, this.width, this.height)
  
//   // draw bouncy circle
//   this.circ.update(function() {
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
  
//   this.angle = Math.atan2(dy, dx)
//   circ.vx = Math.cos(this.angle) * Math.abs(dx/8)
//   circ.vy = Math.sin(this.angle) * Math.abs(dy/8)
// }
}
