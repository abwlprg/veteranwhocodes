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
  paragraphOne: 'My name is Adrian Calvache, and I am a Software Engineer.',
  paragraphTwo:
    'I was a Aerographers Mate Third Class in the U.S.Navy. I served honorably for 6 years.',
  paragraphThree:
    'Graduated John Jay College of Criminal Justice but learned Web Development from General Assembly. I also took Computer Science Classes at BMCC just for the hell of it.',
  paragraphFour: 'I am  employed at J.P. Morgan & Chase as a Data Engineer working with Amazon Web Services and Pyspark on a daily basis.',
  paragraphFive: 'In my spare time I love to do photography and do compete in weightlifting.',
  resume: '/static/35e73e00cc8459ebb2415902787edcf3/AdrianCalvacheResume2023.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'pathfinder.png',
    title: 'Pathfinder',
    info:
      'I use Node.js with a Micro-Service Architecture and MongoDB to help veterans rate and rank services through out the U.S.',
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
export const jpmcSkillsData = [
  {
    id: uuidv1(),
    title: 'Python',
    img: 'python.png',
    info: '3 Years',
  },
  {
    id: uuidv1(),
    title: 'Java',
    img: 'java.png',
    info: '1 Year',
  },

];

export const skillsData = [
  {
    id: uuidv1(),
    title: 'Amazon Web Services',
    img: 'aws.png',
    info: '2 Years',
  },
  {
    id: uuidv1(),
    title: 'Python',
    img: 'python.png',
    info: '3 Years',
  },
  {
    id: uuidv1(),
    title: 'Pyspark',
    img: 'pyspark.png',
    info: '1 Year',
  },
  {
    id: uuidv1(),
    title: 'Java',
    img: 'java.png',
    info: '1 Year',
  },
  {
    id: uuidv1(),
    title: 'HTML5',
    img: 'html5.png',
    info: '3 Years',
  },
  {
    id: uuidv1(),
    title: 'CSS3',
    img: 'css3.png',
    info: '3 Years',
  },
  {
    id: uuidv1(),
    title: 'Javascript',
    img: 'javascript.png',
    info: '3 Years',
  },
  {
    id: uuidv1(),
    title: 'React.Js',
    img: 'react.png',
    info: '2 Years',
  },
  {
    id: uuidv1(),
    title: 'MongoDB',
    img: 'mongodb.png',
    info: '2 Years',
  },
  {
    id: uuidv1(),
    title: 'Node.Js',
    img: 'node.png',
    info: '2 Years',
  },
  {
    id: uuidv1(),
    title: 'MYSQL',
    img: 'mysql.png',
    info: '2 Years',
  },
  {
    id: uuidv1(),
    title: 'Graphql',
    img: 'graphql.png',
    info: '1.5 Years',
  },
  {
    id: uuidv1(),
    title: 'Bootstrap',
    img: 'bootstrap.png',
    info: '3 Years',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Email Me',
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
