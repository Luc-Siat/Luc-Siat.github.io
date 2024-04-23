import { Component } from '@angular/core';
import data from '../../data-access/jobs.json'
import { Job } from '../../data-access/job.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experiences-list.component.html',
  styleUrl: './experiences-list.component.css'
})
export class ExperiencesListComponent {
  public jobs : Job[] = data.jobs;
}
