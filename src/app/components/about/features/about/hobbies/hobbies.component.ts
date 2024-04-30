import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hobby } from '../../../data-access/hobby.model';
import data from '../../../data-access/hobbies.json'
import { scrollToId, toggleOverflow } from 'src/app/shared/helper-functions/helper';


@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.css'
})
export class HobbiesComponent {
  @Input({required:true}) hobbiesInput! : HTMLInputElement;
  @Output() hobbySelectionEvent = new EventEmitter<string>();
  hobbies  = data.hobbies as Hobby[];
  toggleOverflow = toggleOverflow;
  scrollToId = scrollToId;
  selectedHobby = '';


  handleHobbySelection(hobby : string) {
    if (this.selectedHobby == hobby) {
      this.selectedHobby = '';
      return;
    }
    this.selectedHobby = hobby;
  }
}
