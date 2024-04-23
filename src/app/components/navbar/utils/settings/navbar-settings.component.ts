import { Component, ElementRef, EventEmitter, Input, OnInit,  Output,  ViewChild } from '@angular/core';
import { capitalize, toggleLanguage} from 'src/app/shared/helper-functions/helper';

@Component({
  selector: 'app-navbar-settings',
  templateUrl: './navbar-settings.component.html',
  styleUrl: './navbar-settings.component.css'
})
export class NavbarSettingsComponent implements OnInit{
  @Input() drawerEvent? : EventEmitter<boolean>;
  @ViewChild('themesInput') themesInput!: ElementRef<HTMLInputElement>;
  @Input({required:true}) isOnMobile! : boolean;
  @Output() isDarkEvent = new EventEmitter<boolean>(false);
  toggleLanguage = toggleLanguage;

  
  public darkThemes = ['coffee','darkroast', 'dim','luxury','forest','halloween', 'black','dracula',
  'business', 'night', 'dark', 'synthwave'
  ];
  
  public lightThemes =  ['retro','homebrew', 'cyberpunk',  'valentine',   'garden',  'aqua',  'lofi',  'pastel', 'fantasy',  'wireframe',  'cmyk',  'autumn',
    'acid',  'lemonade', 'winter',  'nord', 
    'light', 'cupcake', 'bumblebee',  'emerald',  'corporate'
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
      this.isDarkEvent.emit(true);
      this.themes = this.darkThemes;
      return;
    } 
    this.isDarkEvent.emit(false);
    this.themes = this.lightThemes;
  }

  getThemeName(theme : string) {
    if (theme === 'homebrew' || theme === 'darkroast') {
      return 'Luc\'s ' + capitalize(theme);
    }
    return capitalize(theme);
  }

}

