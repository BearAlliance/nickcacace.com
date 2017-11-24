import { Component, OnInit } from '@angular/core';

interface IProjects {
  wood: IProject[];
  software: IProject[];
}

interface IProject {
  title: string;
  description: string;
  links?: ILink[];
}

interface ILink {
  title: string;
  href: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: IProjects =  {
    wood: [
      {
        title: 'Cedar slab coffee table',
        description: 'I made this thing, it\'s really great, took me a long time',
        links: [
          {
            title: 'look at it on instagram',
            href: 'http://google.com'
          }
        ]
      }
    ],
    software: [
      {
        title: 'lorm',
        description: 'Should I take the L or the M to work today? A simple project to consume the MTA\'s public API'
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
