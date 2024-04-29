import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-landscape-css',
  templateUrl: './landscape-css.component.html',
  styleUrl: './landscape-css.component.scss'
})
export class LandscapeCssComponent implements AfterViewInit {

  @ViewChild('canvas')  canvas!: ElementRef<HTMLCanvasElement>;

 
  ngAfterViewInit(): void {
    this.canvas.nativeElement.height = window.outerHeight / 1.75;
    this.canvas.nativeElement.width = window.outerWidth * 2;
    
    this.createStars();
  }

  createStars() {
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
}
