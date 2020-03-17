export interface IProject {
  title: string;
  summary: string;
  description: string;
  technologies?: string[];
  links?: ILink[];
  images?: IImage[];
}

export interface IImage {
  src: string;
  thumb: string;
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
      description: `Just as I found myself in need of a new coffee table, I met a man who runs a sawmill for discarded wood. Cedar doesn't usually make for the best furnature, because it's so soft, but this has been holding up wonderfully.`,
      images: [
        {
          src: 'assets/projects/table-1.jpg',
          thumb: 'assets/projects/table-1-thumb.jpg'
        },
        {
          src: 'assets/projects/table-2.jpg',
          thumb: 'assets/projects/table-2-thumb.jpg'
        },
        {
          src: 'assets/projects/table-3.jpg',
          thumb: 'assets/projects/table-3-thumb.jpg'
        }
      ]
    },
    {
      title: 'Steamer trunk restoration',
      summary:
        'An old steamer trunk found in an attic, fully restored with all original hardware',
      description: `Based one some rough estimates it's approximately 100 years old. Using a wire wheel and some other abrasives I managed to strip off all those years of decay. A fresh coat of tinted sealer and a new fabric lining brought this beautiful piece back to life.`,
      images: [
        {
          src: 'assets/projects/trunk-1.jpg',
          thumb: 'assets/projects/trunk-1-thumb.jpg'
        },
        {
          src: 'assets/projects/trunk-2.jpg',
          thumb: 'assets/projects/trunk-2-thumb.jpg'
        },
        {
          src: 'assets/projects/trunk-3.jpg',
          thumb: 'assets/projects/trunk-3-thumb.jpg'
        }
      ]
    },
    {
      title: 'Drafting table',
      summary: 'Fully restored, American made drafting table',
      description: `I found this drafting table on Craigslist for pennies. Half a gallon of paint stripper and many hours of sanding later it was restored to it's former beauty. It's all original american hardwood and hardware, I only added the aluminum foot support.`,
      images: [
        {
          src: 'assets/projects/draft-table-1.jpg',
          thumb: 'assets/projects/draft-table-1-thumb.jpg'
        },
        {
          src: 'assets/projects/draft-table-2.jpg',
          thumb: 'assets/projects/draft-table-2-thumb.jpg'
        },
        {
          src: 'assets/projects/draft-table-3.jpg',
          thumb: 'assets/projects/draft-table-3-thumb.jpg'
        }
      ]
    },
    {
      title: 'Open wardrobe',
      summary: 'My bedroom is a weird shape, so I made this to hold my cloths',
      description: `My new apartment is rather small, and since most of my stuff belongs in a garage anyway, I needed something more space efficient to hold my cloths so my bike parts could fit in the closet. Constructed of common pine, I build it with re-usable hardware so it can be easily disassembled and moved.`,
      images: [
        {
          src: 'assets/projects/wardrobe-1.jpg',
          thumb: 'assets/projects/wardrobe-1-thumb.jpg'
        },
        {
          src: 'assets/projects/wardrobe-2.jpg',
          thumb: 'assets/projects/wardrobe-2-thumb.jpg'
        },
        {
          src: 'assets/projects/wardrobe-3.jpg',
          thumb: 'assets/projects/wardrobe-3-thumb.jpg'
        }
      ]
    },
    {
      title: 'Tiny desk',
      summary: `The world's smallest computer desk, to fit in my tiny bedroom`,
      description: `I needed a place to work, but my bedroom is so small. This little guy is only 14" deep and 30" wide, a perfect fit! Hardware store copper tubing is used for hardware.`,
      images: [
        {
          src: 'assets/projects/desk-1.jpg',
          thumb: 'assets/projects/desk-1-thumb.jpg'
        },
        {
          src: 'assets/projects/desk-2.jpg',
          thumb: 'assets/projects/desk-2-thumb.jpg'
        },
        {
          src: 'assets/projects/desk-3.jpg',
          thumb: 'assets/projects/desk-3-thumb.jpg'
        }
      ]
    }
  ];

  static software: IProject[] = [
    {
      title: 'Top Secret',
      summary: 'For prying eyes only',
      description: `You know how it is, they always make you sign an NDA for the fun stuff. All of my recent professional work is closed source and vital company IP, so I can't share it with you here, but you can go check out the fruits of my labor at ADP.com`,
      technologies: [
        'Angular',
        'TypeScript',
        'rxJs',
        'AngularJS',
        'Jenkins CI',
        'Jasmine',
        'Karma',
        'ESLint',
        'Node',
        'MongoDB'
      ],
      links: [
        {
          title: 'ADP',
          href: 'https://adp.com'
        }
      ]
    },
    {
      title: 'TRT Bicycles Website',
      summary: 'Billboard site for a local bike shop',
      technologies: ['React', 'Bulma', 'Heroku', 'Travis CI'],
      description: `Recently re-built in react for better maintainability. The client wanted minimal upfront cost, and a modern look to represent their small business`,
      links: [
        {
          title: 'Check it out',
          href: 'https://trtbicycles.com'
        },
        {
          title: 'Source',
          href: 'https://github.com/BearAlliance/TRT'
        }
      ]
    },
    {
      title: 'Ops Starter',
      summary:
        'A starter repository, meant to be forked for easy CI/CD project generation',
      description: `I got tired of writing boilerplate code for Continuous integration/deployment, so I made this blank slate. It's just a basic express webserver with basic db CRUD operations, a good starting point for most projects.`,
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
      description: `It was time for a new site, and I wanted to play with the (then) new angular@5. I'm using formspree.io for the contact page so I don't have to maintain a backend to handle email requests, sorry about the reCaptcha`,
      technologies: [
        'Angular',
        'Travis CI',
        'Bulma',
        'Amazon AWS',
        'formspree.io'
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
      summary: `Should I take the L or the M to work today? A simple project to consume the MTA's public API`,
      description: `You know how it goes. Every morning at least one of them is delayed. This is actually running on a raspberryPi in my apartment right by the front door. It's too bad the description of the delays isn\'t codified, or I could have built in some value judgement based on the severity or type of delay.`,
      technologies: ['Node', 'Express', 'Pug', 'Jasmine'],
      links: [
        {
          title: 'Source',
          href: 'https://github.com/BearAlliance/lorm'
        }
      ]
    }
  ];
}
