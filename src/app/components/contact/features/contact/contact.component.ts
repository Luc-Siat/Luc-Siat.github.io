import { Component } from '@angular/core';
import { scrollToId } from 'src/app/shared/helper-functions/helper';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  public scrollToId = scrollToId;
}
