import { Component, EventEmitter, Output } from '@angular/core';
import { isOnMobile, scrollToId, toggleOverflow } from 'src/app/shared/helper-functions/helper';

@Component({
  selector: 'app-side-drawer',
  templateUrl: './side-drawer.component.html',
  styleUrl: './side-drawer.component.css'
})
export class SideDrawerComponent{

  public toggleOverflow = toggleOverflow;
  public closeThemeDropdownEvent = new EventEmitter<boolean>();
  public isOnMobile = isOnMobile;
  public scrollToId = scrollToId;
  public top = `0px`;
  @Output() isDarkEvent = new EventEmitter<boolean>();
}
