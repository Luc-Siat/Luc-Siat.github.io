import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar-settings',
  templateUrl: './navbar-settings.component.html',
  styleUrl: './navbar-settings.component.css'
})
export class NavbarSettingsComponent {

  @Output() setThemeLibraryEvent = new EventEmitter<boolean>();
  @Input({required: true}) themes!: string[];
  @Input({required: true}) isOnMobile!: boolean;


  themesDropdownLeave(input : HTMLInputElement) {
    input.checked = false 
  }
}
