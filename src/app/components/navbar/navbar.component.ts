import { ReturnStatement } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { capitalize, isOnMobile, toggleOverflow } from 'src/app/utils/helper-functions/helper';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  // PUT THE THEMES INSIDE THE NAV SETTINGS 
  public darkThemes = ["coffee","lucDarkroast", "dark","dim","sunset","luxury",
  "synthwave","forest","halloween",
  "black","dracula","business",
  "night"]
    
  public lightThemes =  ["retro","lucHomebrew", "light", "cupcake", "bumblebee",  "emerald",  "corporate", 
"cyberpunk",  "valentine",   "garden",  "aqua",  "lofi",  "pastel",
    "fantasy",  "wireframe",  "cmyk",  "autumn",  "acid",  "lemonade",
    "winter",  "nord",
  ]
  public themes : string[] = [];
  public toggleOverflow = toggleOverflow;
  public isOnMobile = isOnMobile;
  public closeThemeDropdownEvent = new EventEmitter<boolean>();



  ngOnInit(): void {
    this.themes = this.lightThemes;
  }

  setThemeLibrary(isDark : boolean) {
    if (isDark) {
      this.themes = this.darkThemes;
      return;
    } 
    this.themes = this.lightThemes;
  }

}

