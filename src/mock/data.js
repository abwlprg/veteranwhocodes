import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Adrian Calvache | Developer', // e.g: 'Name | Developer'
  lang: 'English', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'My name is',
  name: 'Adrian Calvache.',
  subtitle: 'I am a Veteran Who Codes.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'My name is Adrian Calvache, and I am a Junior Developer at Pathfinder.Vet.',
  paragraphTwo: 'I was a Aerographers Mate Third Class in the U.S.Navy. I served honorably for 6 years.',
  paragraphThree: 'Graduated John Jay College of Criminal Justice but learned Web Development from General Assembly. I also took Computer Science Classes at BMCC.',
  paragraphFour: '',
  resume: 'src/pages/Adrian_Calvache_Resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'pathfinder.png',
    title: 'Pathfinder',
    info: 'I use Node.js with a Micro-Service Architecture and MongoDB to help veterans rate and rank services through out the U.S.',
    info2: 'Work remotely and have two interns working under me.',
    url: 'https://www.pathfinder.vet/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'vumbua.jpg',
    title: 'Vumbua Prototype',
    info: 'Python 2.7 Application while using JS in the Front-End',
    info2: '',
    url: 'https://vumbua.netlify.app/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'cuisinie.png',
    title: 'Cuisine',
    info: 'Ruby on Rails Group Project using the Zamato API.',
    info2: 'Group Project at General Assembly',
    url: 'https://cuisinie.herokuapp.com/',
    repo: 'https://github.com/abwlprg/Cuisinie', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'bah.jpg',
    title: 'BAH Map for Operation Code Hackathon',
    info: 'Using a BAH API with D3 and Javasrcipt.',
    info2: 'Group Hackathon Project',
    url: 'https://bahmap.com/',
    repo: 'https://github.com/abwlprg/bahmap', // if no repo, the button will not show up
  },
];

export const skillsData = [
  {
    img: 'html5.png',
    title: 'HTML5',
    info: '',
  },

];


// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'r',
  email: 'adrian.calvache1@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/adriancalvache/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/abwlprg',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
