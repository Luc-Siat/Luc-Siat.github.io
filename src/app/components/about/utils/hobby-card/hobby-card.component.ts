import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Hobby } from '../../data-access/hobby.model';

@Component({
  selector: 'app-hobby-card',
  templateUrl: './hobby-card.component.html',
  styleUrl: './hobby-card.component.css'
})
export class HobbyCardComponent implements OnChanges {
  @Input({required: true}) selectedHobby! : string;
  @Output() hobbySelectionEvent = new EventEmitter<string>();
  @Input({required: true}) hobby!: Hobby;
  hobbyPosition = '';
  isSelected = false;

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
