import { Component, Input, OnInit } from '@angular/core';
import { toggleOverflow } from 'src/app/utils/helper-functions/helper';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  public darkThemes = ["coffee","dark","dim","sunset","luxury",
  "synthwave","forest","halloween",
  "black","dracula","business",
  "night"]
    
  public lightThemes =  ["luc's homebrew", "light", "cupcake", "bumblebee",  "emerald",  "corporate", "retro",
"cyberpunk",  "valentine",   "garden",  "aqua",  "lofi",  "pastel",
    "fantasy",  "wireframe",  "cmyk",  "autumn",  "acid",  "lemonade",
    "winter",  "nord",
  ]
  public themes : string[] = [];
  public toggleOverflow = toggleOverflow;

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

  test(boo: boolean){
    console.log(boo)
  }

  themesDropdownLeave(input : HTMLInputElement) {
    setTimeout(() => {
      input.checked = false 
      // doing some other stuff...
  }, 300);
  }


}
