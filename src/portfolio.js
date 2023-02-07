import aboutpic from "./components/Access/mePhoto.jpg"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://morganbb104.github.io/HW_20_Portfolio_withReact/',
  title: '.JS',
}

const about = {
  photo:aboutpic,
  // all the properties are optional - can be left empty or deleted
  name: 'Nehad Awad',
  role: 'Full stack developer',
  description:
    'I am a full-stack software engineer especially interested in building web applications, scaling systemsup, and shipping reliable applications.I have a keen interest in the latest technologies and the right tools, and thus I am open to learning and working with new ones.',
  resume: 'https://drive.google.com/drive/folders/14eaKggrElS5yEHhP9X71qta_khg4sAVK?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/nehadawad/',
    github: 'https://github.com/NehadAwad',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'FileMyVisa',
    description:
      'Website to prepare U.S. immigration paperwork. It is easy for anyone to understand and complete the United States Immigration Application in their native language.',
    stack: ['Node.js', 'React.js', 'GCP', 'MySQL'],
    livePreview: 'https://www.filemyvisa.com/',
  },
  {
    name: 'Chat Application (Socket.io)',
    description:
      'Real time chat application created with soket.io. It allows multiple users to have a private and public chat. This app allows one to one chat online and its fast and easy to use.',
    stack: ['Node.js', 'Socket.io', 'MongoDB', 'ejs'],
    sourceCode: 'https://github.com/NehadAwad/chat-application-soket-io',
  },
  {
    name: 'Fitness Tracker',
    description:
      'Its a workout tracker application focusing on simplicity and a clean design.',
    stack: ['Node.js', 'React.js', 'MondoDB', 'Mongoose', 'context-api'],
    sourceCode: 'https://github.com/stone-com/Resource-Planner',
    livePreview: 'https://mern-top-g-fitness.herokuapp.com/',
  },
  {
    name: 'Weather App',
    description:
      'A weather forecasting app built on node.js.',
    stack: ['Node.js', 'Weather-api'],
    sourceCode: 'https://github.com/NehadAwad/weather-app-nodejs',
    livePreview: 'https://weather-app-node-01.herokuapp.com/',
    
  },
  {
    name: 'Music Store(back end)',
    description:
      'MusicStore is able to direct user to the desired page based on its endpoints by track, album,artist and label',
    stack: ['html-css-javascript', 'sequelize', 'React'],
    sourceCode: 'https://github.com/Morganbb104/M7-project2-musictore-recommendations-Huang_Chengchien',
    livePreview: 'https://cheng32-musicstore-catalog.herokuapp.com/track',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'JavaScript',
  'TypeScript',
  'Node.js',
  'Express',
  'MySQL',
  'MongoDB',
  'React',
  'Redis',
  'Jest',
  'Git',
  'PHP',
  'C/C++',
  'Heroku',
  'Bootstrap',
  'Axios'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'nehadakash622@gmail.com',
}

export { header, about, projects, skills, contact }
