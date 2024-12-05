import { Component } from '@angular/core';
import { IProject, ProjectsConstant } from '../shared/projects.constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false,
})
export class HomeComponent {
  recentWork: IProject[];
  landingText = `My name's Nick. I'm a software developer with a passion for pushing boundaries on the trail, and on the web. I've worked with a variety of leading technologies to create beautiful progressive web apps, static sites, internal dev tools, and back-end systems. When I'm not coding I spend my time hiking, cycling, or building things out of wood. I live in upstate New York, and work remotely for American Express. I'm creating loan products for individuals and businesses across the country, and the world. I can't share any of that code with you, but check out some of my side projects!`;

  constructor() {
    this.recentWork = [
      ...ProjectsConstant.software.slice(0, 2),
      ...ProjectsConstant.wood.slice(0, 1),
    ];
  }
}
