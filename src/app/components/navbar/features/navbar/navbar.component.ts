import { Component, EventEmitter, OnInit } from '@angular/core';
import { toggleOverflow } from 'src/app/shared/helper-functions/helper';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {
  public scrollYOffset = '0';
  public toggleOverflow = toggleOverflow;
  public isDark = false;
  

  public handleIsDarkEvent(isDark : boolean) {
    this.isDark = isDark;
  }
}

