import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild, viewChild } from '@angular/core';
import { capitalize } from 'src/app/utils/helper-functions/helper';

@Component({
  selector: 'app-navbar-settings',
  templateUrl: './navbar-settings.component.html',
  styleUrl: './navbar-settings.component.css'
})
export class NavbarSettingsComponent implements OnInit, OnDestroy{
  @Input() drawerEvent? : EventEmitter<boolean>;
  @Input({required: true}) isOnMobile!: boolean;
  @ViewChild('themesInput') themesInput!: ElementRef<HTMLInputElement>;
  public capitalize = capitalize;
  
  public darkThemes = ['coffee','darkroast', 'dim','sunset','luxury','forest','halloween', 'black','dracula',
  // 'business', 'night', 'dark', 'synthwave'
  ];
  
  public lightThemes =  ['retro','homebrew', 'cyberpunk',  'valentine',   'garden',  'aqua',  'lofi',  'pastel', 'fantasy',  'wireframe',  'cmyk',  'autumn',
    'acid',  'lemonade', 'winter',  'nord', 
    // 'light', 'cupcake', 'bumblebee',  'emerald',  'corporate'
  ];

  public currentDarkTheme = 'coffee';
  public currentLightTheme = 'retro';
  public themes : string[] = [];


  
  ngOnInit(): void {

    this.themes = this.lightThemes;

    this.drawerEvent?.subscribe(event => {
      this.themesInput.nativeElement.checked = false;
    })
  }

  ngOnDestroy(): void {
   this.drawerEvent?.unsubscribe();
  }
  

  themesDropdownLeave(input : HTMLInputElement) {
    input.checked = false 
  }

  setCurrentTheme(isDark: boolean, theme: string) {
    if (isDark) {
      this.currentDarkTheme = theme;
      return
    }
    this.currentLightTheme = theme;
  }

  setThemeLibrary(isDark : boolean) {
    if (isDark) {
      this.themes = this.darkThemes;
      return;
    } 
    this.themes = this.lightThemes;
  }

}

