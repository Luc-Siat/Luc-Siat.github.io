import { Component } from '@angular/core';
import { toggleOverflow } from 'src/app/shared/helper-functions/helper';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  toggleOverflow = toggleOverflow;
}
