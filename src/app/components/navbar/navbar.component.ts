import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  public darkThemes = ["coffee","dark","synthwave","forest","halloween","black","dracula","business","night","dim","sunset","luxury"]
    
  public lightThemes =  ["luc's homebrew", "light", "cupcake", "bumblebee",  "emerald",  "corporate",   "retro",
    "cyberpunk",  "valentine",   "garden",  "aqua",  "lofi",  "pastel",
    "fantasy",  "wireframe",  "cmyk",  "autumn",  "acid",  "lemonade",
    "winter",  "nord",
  ]
  
  public themes = this.lightThemes;

  ngOnInit(): void {
  }

  setThemeLibrary(isDark : boolean) {
    console.log(isDark);
    if (isDark) {
      this.themes = this.darkThemes;
      return;
    } 
    this.themes = this.lightThemes;
  }

}
