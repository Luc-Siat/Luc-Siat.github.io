import { Component, Input } from '@angular/core';
import { Job } from '../../data-access/job.model';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.css'
})
export class ExperienceCardComponent {
  @Input({required: true}) job! : Job;
}
