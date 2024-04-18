import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hobby } from '../../data-access/hobby.model';
import data from '../../data-access/hobbies.json'
import { toggleOverflow } from 'src/app/shared/helper-functions/helper';


@Component({
  selector: 'app-about-hobbies',
  templateUrl: './about-hobbies.component.html',
  styleUrl: './about-hobbies.component.css'
})
export class AboutHobbiesComponent {
  @Input({required:true}) hobbiesInput! : HTMLInputElement;
  @Output() hobbySelectionEvent = new EventEmitter<string>();
  hobbies  = data.hobbies as Hobby[];
  toggleOverflow = toggleOverflow;
  selectedHobby = '';



  handleHobbySelection(hobby : string) {
    if (this.selectedHobby == hobby) {
      this.selectedHobby = '';
      return;
    }
    this.selectedHobby = hobby;
  }
}
