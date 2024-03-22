import { Component } from '@angular/core';
import data from './data-access/jobs.json'
import { Job } from './data-access/job.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  public jobs : Job[] = data.jobs;
}
