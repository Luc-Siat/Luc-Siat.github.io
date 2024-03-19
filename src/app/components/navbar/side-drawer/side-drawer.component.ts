import { Component, EventEmitter } from '@angular/core';
import { isOnMobile, toggleOverflow } from 'src/app/utils/helper-functions/helper';

@Component({
  selector: 'app-side-drawer',
  templateUrl: './side-drawer.component.html',
  styleUrl: './side-drawer.component.css'
})
export class SideDrawerComponent {
  public toggleOverflow = toggleOverflow;
  public closeThemeDropdownEvent = new EventEmitter<boolean>();
  public isOnMobile = isOnMobile;
}
