import { Component, Input } from '@angular/core';
import { Project } from '../../../data-access/project.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input({required: true}) project!: Project;
}
