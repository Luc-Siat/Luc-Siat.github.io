import { Component, Input } from '@angular/core';
import { scrollToId, toggleOverflow } from 'src/app/shared/helper-functions/helper';

@Component({
  selector: 'app-backstory',
  templateUrl: './backstory.component.html',
  styleUrl: './backstory.component.css'
})
export class BackstoryComponent {
  @Input({required:true}) backstoryInput! : HTMLInputElement;
  toggleOverflow = toggleOverflow;
  scrollToId = scrollToId;
}
