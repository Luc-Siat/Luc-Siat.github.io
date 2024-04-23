import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { toggleOverflow } from 'src/app/shared/helper-functions/helper';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  toggleOverflow = toggleOverflow;
  top = '0px';

  
  ngOnInit(): void {

  }

  public setScrollYOffset(e : MouseEvent) {
    this.top = `${+(e.offsetY)}px`;
  }

}
