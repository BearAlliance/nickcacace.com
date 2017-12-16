import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProject } from '../projects/projects.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

  @Input() project: IProject;
  @Input() selected: boolean;
  @Output() selectClick = new EventEmitter<void>();
  constructor() { }

  onClicked() {
    this.selectClick.emit();
  }

}
