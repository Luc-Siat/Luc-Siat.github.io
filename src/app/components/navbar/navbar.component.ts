import { Component, EventEmitter, OnInit } from '@angular/core';
import {toggleOverflow } from 'src/app/utils/helper-functions/helper';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public toggleOverflow = toggleOverflow;
  public closeThemeDropdownEvent = new EventEmitter<boolean>();

}

