import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})
export class SectionComponent{
  @Input({required: true}) title!: string;
  @Input() colorClass?: string;

}
