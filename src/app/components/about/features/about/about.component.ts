import { Component } from '@angular/core';
import { toggleOverflow } from 'src/app/shared/helper-functions/helper';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  toggleOverflow = toggleOverflow;
  top = '0px';


  public setScrollYOffset(e : MouseEvent) {
    this.top = `${+(e.clientY)}px`;
  }
}
