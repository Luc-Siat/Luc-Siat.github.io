import { Component, EventEmitter, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { isOnMobile, toggleOverflow } from 'src/app/shared/helper-functions/helper';

@Component({
  selector: 'app-side-drawer',
  templateUrl: './side-drawer.component.html',
  styleUrl: './side-drawer.component.css'
})
export class SideDrawerComponent{
  public toggleOverflow = toggleOverflow;
  public closeThemeDropdownEvent = new EventEmitter<boolean>();
  public isOnMobile = isOnMobile;
  public top = `0px`;
  

  public setScrollYOffset(e : MouseEvent) {
    this.top = `${+(e.offsetY)}px`;
  }
}
