import { Component } from '@angular/core';
import { IProject, ProjectsConstant } from '../shared/projects.constant';

interface IProjects {
  wood: IProject[];
  software: IProject[];
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projects: IProjects = {
    wood: ProjectsConstant.wood,
    software: ProjectsConstant.software
  };

  selected: any = {
    web: undefined,
    wood: undefined
  };

  constructor() {
  }

  setSelected(column: string, index: number) {
    if (this.isSelected(column, index)) {
      this.selected[column] = undefined;
    } else {
      this.selected[column] = index;
    }
  }

  isSelected(column: string, index: number) {
    return this.selected[column] === index;
  }

}
