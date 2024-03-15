import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, viewChild } from '@angular/core';
import { capitalize } from 'src/app/utils/helper-functions/helper';

@Component({
  selector: 'app-navbar-settings',
  templateUrl: './navbar-settings.component.html',
  styleUrl: './navbar-settings.component.css'
})
export class NavbarSettingsComponent implements OnInit{
  
  @Output() setThemeLibraryEvent = new EventEmitter<boolean>();
  @Input() drawerEvent? : EventEmitter<boolean>;
  @Input({required: true}) themes!: string[];
  @Input({required: true}) isOnMobile!: boolean;
  @ViewChild('themesInput') themesInput!: ElementRef<HTMLInputElement>;
  public capitalize = capitalize;
  public currentDarkTheme = 'coffee';
  public currentLightTheme = 'retro';


  
  ngOnInit(): void {
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
}

