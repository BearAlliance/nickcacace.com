import { Component, OnInit } from '@angular/core';

interface IProjects {
  wood: IProject[];
  software: IProject[];
}

interface IProject {
  title: string;
  summary: string;
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

  projects: IProjects = {
    wood: [
      {
        title: 'Cedar slab coffee table',
        summary: 'I made this thing, it\'s really great, took me a long time',
        description: '',
        links: [
          {
            title: 'look at it on instagram',
            href: 'http://google.com'
          }
        ]
      },
      {
        title: 'Steamer trunk restoration',
        summary: 'An old steamer trunk found in an attic, fully restored witn all origional hardware',
        description: 'asdfasdf'
      },
      {
        title: 'Open wardrobe',
        summary: 'My bedroom is a weird shape, so I made this to hold my cloths',
        description: ''
      }
    ],
    software: [
      {
        title: 'Ops Starter',
        summary: 'A starter repository, meant to be forked for easy CI/CD project generation',
        description: 'I got tired of writing boilerplate code for Continuous integration/deployment, so I made this blank slate',
        links: [
          {
            title: 'github',
            href: 'https://github.com/BearAlliance/ops-starter'
          }
        ]
      },
      {
        title: 'NickCacace.com',
        summary: 'This site is open source!',
        description: 'It was time for a new site, and I wanted to play with the (then) new angular@5',
        links: [
          {
            title: 'github',
            href: 'https://github.com/BearAlliance/nickcacace.com'
          }
        ]
      },
      {
        title: 'lorm',
        summary: 'Should I take the L or the M to work today? A simple project to consume the MTA\'s public API',
        description: 'Should I take the L or the M to work today? A simple project to consume the MTA\'s public API',
        links: [
          {
            title: 'github',
            href: 'https://github.com/BearAlliance/lorm'
          }
        ]
      },
      {
        title: 'TRT bicycles website',
        summary: 'Billboard site for a local bike shop built with only html + bootstrap.',
        description: 'Client wanted minimal upfront cost, and small hosting fees. Currently served out of an s3 bucket,' +
        ' it\'s very cost efficient',
        links: [
          {
            title: 'Check it out',
            href: 'http://trtbicycles.com'
          },
          {
            title: 'github',
            href: 'https://github.com/BearAlliance/TRT'
          }
        ]
      }
    ]
  };

  constructor() {
  }

  ngOnInit() {
  }

}
