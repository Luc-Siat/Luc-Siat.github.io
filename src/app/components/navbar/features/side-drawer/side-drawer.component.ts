import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, input } from '@angular/core';
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
  @Output() isDarkEvent = new EventEmitter<boolean>();
  

  public setScrollYOffset(e : MouseEvent) {
    console.log(e.offsetY, e.pageY, e.screenY);
    this.top = `${+(e.pageY - 42 )}px`;
  }


  public scrollTo(element : string) {
    let target = document.getElementById(element);
    setTimeout(() => target?.scrollIntoView(), 50);
  }

}
