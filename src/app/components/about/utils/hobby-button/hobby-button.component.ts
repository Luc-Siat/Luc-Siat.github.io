import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Hobby } from '../../data-access/hobby.model';

@Component({
  selector: 'app-hobby-button',
  templateUrl: './hobby-button.component.html',
  styleUrl: './hobby-button.component.css'
})
export class HobbyButtonComponent implements OnChanges{
  @Input({required: true}) selectedHobby! : string;
  @Output() hobbySelectionEvent = new EventEmitter<string>();
  @Input({required: true}) hobby!: Hobby;
  hobbyPosition = '';
  isSelected = false;
  // onClickClasses = ""
  
  ngOnChanges(changes: SimpleChanges): void {
    this.isSelected = this.selectedHobby == this.hobby.name;
  }
 
  handleHobbySelection(hobby : string) {
  this.hobbySelectionEvent.emit(hobby);
  }

  togglePosition(){
    if (this.hobbyPosition === '') {
      this.hobbyPosition = 'absolute'
      return 
    }
    if (window.innerWidth>= 1280) {
      this.hobbyPosition = '';
      return;
    }
      
    setTimeout(() => this.hobbyPosition = '', 100);
  }
}
