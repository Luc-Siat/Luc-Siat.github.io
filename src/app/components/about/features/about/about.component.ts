import { ReturnStatement } from '@angular/compiler';
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
  selectedHobby = '';


  public setScrollYOffset(e : MouseEvent) {
    this.top = `${+(e.offsetY)}px`;
  }

  public handleHobbySelection(hobby : string) {
    console.log(this.selectedHobby == hobby);
    if (this.selectedHobby == hobby) {
      this.selectedHobby = '';
      return;
    }
    this.selectedHobby = hobby;
  }
}
