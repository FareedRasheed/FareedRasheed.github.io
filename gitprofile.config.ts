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
          title: 'Sign Language Interpreter',
          description:
            'Developed a Sign Language Interpreter Glove using Arduino, MPU-6050, and ML to detect and translate gestures into digital signals.',
          imageUrl:
            'https://github.com/FareedRasheed/FareedRasheed.github.io/blob/main/public/SignGlove.jpg?raw=true',
          link: 'https://github.com/FareedRasheed/Sign-Language-Interpreter',
        },
        {
          title: 'Arduino Robot Arm',
          description:
            '3-axis robot arm using Arduino and C++; designed and 3D printed in OnShape',
          imageUrl:
            'https://github.com/FareedRasheed/FareedRasheed.github.io/blob/main/public/Assembly%201.png?raw=true',
          link: 'https://github.com/FareedRasheed/Robot-Arm',
        },
         {
          title: 'CNC Milling machine',
          description:
            '3-axis CNC foam milling machine built entirely of Legos, programmed in C',
          imageUrl:
            'https://github.com/FareedRasheed/FareedRasheed.github.io/blob/main/public/LegoCNC2.jpg?raw=true',
          link: 'https://github.com/FareedRasheed/CNC-Mill',
        },
         {
          title: 'EnerPro',
          description:
            'HVAC and Energy auditing software to assist energy consultants with on-site data collection; Android Studio and Java',
          imageUrl:
            'https://github.com/FareedRasheed/FareedRasheed.github.io/blob/main/public/bolt.jpg?raw=true',
          link: 'https://github.com/FareedRasheed/EnerPro-Demo',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Fareed Rasheed',
    description: '',
    imageURL: 'https://github.com/FareedRasheed/FareedRasheed.github.io/raw/main/public/FareedRasheedResume.pdf',
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
      'https://github.com/FareedRasheed/FareedRasheed.github.io/blob/574559bfd14f361f3bc9be22dd70981e34b6cf03/public/F2025_Resume_external.pdf', // Empty fileUrl will hide the `Download Resume` button.
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
    'Android Studio'
  ],
  experiences: [
    {
      company: 'Swish Solar',
      position: 'Engineering Assistant',
      from: 'January 2025',
      to: 'May 2025',
      companyLink: 'https://swishsolar.framer.website/',
    },
  ],
  certifications: [
    {
      name: '',
      body: '',
      year: '',
      link: '',
    },
  ],
 
  publications: [
    {
      title: 'Hi, I\'m Fareed Rasheed, a Mechatronics Engineering Student at the University of Waterloo. I\'ve got a passion for robotics and creating. I\'m currently working with Swish Solar, a startup focused on developing more efficient and sustainable solar energy using self-cleaning technology. In my free time, I\'ve been developing some projects of my own exploring robotics, control systems, AI, computer vision, and software development. Take a look!',
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
  footer: `Get the details on GitHub!`,

  enablePWA: true,
};

export default CONFIG;
