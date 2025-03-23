// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'FareedRasheed', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Gesture recognition glove',
          description:
            'Used ML to identify gestures performed using Arduino and C++ ',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Robot Arm',
          description:
            '3-axis robot arm using Arduino and C++; designed and 3D printed in OnShape',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
         {
          title: 'CNC Milling machine',
          description:
            '3-Axis  CNC foam milling machine built using C++ and LegoMindstorm',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
         {
          title: 'EnerPro; Energy and HVAC Auditing',
          description:
            'An app to assist energy consultants with on-site data collection',
          imageUrl:
            'https://github.com/FareedRasheed/FareedRasheed.github.io/blob/ab7d2ba0c5c91a78c7928a3f74bbb63dab826f15/public/bolt.jpg',
          link: 'https://github.com/FareedRasheed/EnerPro-Demo',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Fareed Rasheed',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'Fareed-Rasheed',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '226-218-6772',
    email: 'fsrasheed2017@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
   educations: [
    {
      institution: 'University of Waterloo',
      degree: 'Mechatronics Engineering',
      from: '2024',
      to: '2029',
    },
   
  ],
  skills: [
    'Arduino',
    'ESP32',
    'SolidWorks',
    'Fusion360',
    'AutoCAD',
    '3D Printing',
    'Rapid Prototyping',
    'Python',
    'Java',
    'C++',
    'Circuitry',
    'App Dev',
  ],
  experiences: [
    {
      company: 'Swish Solar',
      position: 'Engineering Assistant',
      from: 'January 2025',
      to: 'May 2025',
      companyLink: 'https://example.com',
    },
  ],
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
 
  publications: [
    {
      title: 'Hi, I\'m Fareed Rasheed, a Mechatronics Engineering Student at the University of Waterloo. I\'ve got a passion for robotics and creating. I\'m currently working with Swish Solar, a startup focused on developing more efficient and sustainable solar energy using self-cleaning technology. In my free time, I\'ve been developing some projects of my own exploring robotics, control systems, AI, computer vision, and software development. Take a look! ',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: 'https://www.linkedin.com/in/fareed-rasheed',
      description:
        '',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
/*  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 0, // How many articles to display. Max is 10.
  },
  */
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: ``,

  enablePWA: true,
};

export default CONFIG;
