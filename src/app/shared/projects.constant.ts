export interface IProject {
  title: string;
  summary: string;
  description: string;
  technologies?: string[];
  links?: ILink[];
}

interface ILink {
  title: string;
  href: string;
}

export class ProjectsConstant {
  static wood: IProject[] = [
    {
      title: 'Cedar Slab Coffee Table',
      summary: 'A coffee table made from salvaged cedar wood',
      description: 'Just as I found myself in need of a new coffee table, I met a man who runs a sawmill for discarded wood.' +
      ' Cedar doesn\'t usually make for the best furnature, because it\'s so soft, but this has been holding up wonderfully.' +
      ' Photos coming soon!',

    },
    {
      title: 'Steamer trunk restoration',
      summary: 'An old steamer trunk found in an attic, fully restored with all original hardware',
      description: 'Based one some rough estimates it\'s approximately 100 years old.' +
      ' Using a wire wheel and some other abrasives I managed to strip off all those years of decay.' +
      ' A fresh coat of tinted sealer and a new fabric lining brought this beautiful piece back to life.' +
      ' Photos coming soon!'
    },
    {
      title: 'Open wardrobe',
      summary: 'My bedroom is a weird shape, so I made this to hold my cloths',
      description: 'My new apartment is rather small, and since most of my stuff belongs in a garage anyway,' +
      ' I needed something more space efficient to hold my cloths so my bike parts could fit in the closet.' +
      ' Constructed of common pine, I build it with re-usable hardware so it can be easily disassembled and moved' +
      ' Photos coming soon!'
    }
  ];

  static software: IProject[] = [
    {
      title: 'Ops Starter',
      summary: 'A starter repository, meant to be forked for easy CI/CD project generation',
      description: 'I got tired of writing boilerplate code for Continuous integration/deployment, so I made this blank slate.' +
      ' It\'s just a basic express webserver with basic db CRUD operaions, a good starting point for most projects.',
      technologies: [
        'Node',
        'MongoDB',
        'Travis CI',
        'Chai',
        'Jasmine',
        'Mocha'
      ],
      links: [
        {
          title: 'Source',
          href: 'https://github.com/BearAlliance/ops-starter'
        }
      ]
    },
    {
      title: 'NickCacace.com',
      summary: 'This site is open source!',
      description: 'It was time for a new site, and I wanted to play with the (then) new angular@5.' +
      ' I\'m using formspree.io for the contact page so I don\'t have to maintain a backend to handle' +
      'email requests, sorry about the reCaptcha',
      technologies: [
        'Angular',
        'Travis CI',
        'Bootstrap',
        'Amazon AWS'
      ],
      links: [
        {
          title: 'Source',
          href: 'https://github.com/BearAlliance/nickcacace.com'
        }
      ]
    },
    {
      title: 'L or M Train',
      summary: 'Should I take the L or the M to work today? A simple project to consume the MTA\'s public API',
      description: 'You know how it goes. Every morning at least one of them is delayed. This is actually running on a raspberryPi' +
      ' in my apartment right by the front door.' +
      ' It\'s too bad the description' +
      ' of the delays isn\'t codified, or I could have built in some value judgement based on the severity or type of delay.',
      technologies: [
        'Node',
        'Express',
        'Pug',
        'Jasmine'
      ],
      links: [
        {
          title: 'Source',
          href: 'https://github.com/BearAlliance/lorm'
        }
      ]
    },
    {
      title: 'TRT Bicycles Website',
      summary: 'Billboard site for a local bike shop built with only html + bootstrap.',
      technologies: [
        'HTML',
        'Twitter Bootstrap',
        'Amazon AWS'
      ],
      description: 'The client wanted minimal upfront cost, and small hosting fees. Using AWS to serve the static site',
      links: [
        {
          title: 'Check it out',
          href: 'http://trtbicycles.com'
        },
        {
          title: 'Source',
          href: 'https://github.com/BearAlliance/TRT'
        }
      ]
    }
  ];
}
