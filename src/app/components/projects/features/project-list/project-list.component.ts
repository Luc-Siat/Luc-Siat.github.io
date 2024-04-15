import { Component, OnInit } from '@angular/core';
import data from '../../data-access/projects.json'
import { Project } from '../../data-access/project.model';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent{
  projects? : Project[] = data.projects;

}
