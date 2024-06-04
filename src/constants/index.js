import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import rocehImg from "../assets/RocheNew.png";
import unitedAirline from "../assets/unitedAirlines.png";
import Aviana from "../assets/TCS Aviana.jpeg";
import Travelport from "../assets/Travelport.png";

export const HERO_CONTENT = `Senior front-end developer with 9.2 years of experience designing and building responsive web design and mobile apps in the financial industry.
Proficient with CSS and JS Frameworks, with extensive knowledge,
Proficient in building Web User Interface(UI) using the latest W3C/WCAG web standards that are cross-browser compatible. 
Main areas of focus are in HTML5/CSS3 (Sass), React.js, Redux, sage, typescript, JavaScript Development.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Senior front-end developer with a passion for creating efficient and user-friendly web applications. With 9.2 years of professional experience, I have worked with a variety of technologies, including React, Redux & Saga, Node.js, AWS, GraphQL, RESTApi, MySQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "Techincal Lead",
    company: "HCL Tech",
    description: `Worked on ERS medical domain (client) Roche, mostly worked on six web applications as senior frontend developer, Worked most new UI features as per client requirements using react js functional components with Redux and GraphQL implementation. Developed reusable and scalable components. Trained and guided team juniors for UI development using ReactJS, ES6/Typescript, css3/sass html5, JSX and having hands on experience in Cloud search implementation.`,
    technologies: ["React", "Redux & thunk","ES6/Typescript", "CouchBase", "HTML5/Css3"],
  },
  {
    year: "2018 - 2022",
    role: "Senior Frontend Developer",
    company: "TCS",
    description: `Worked on Flight Alert messaging (Aviana eventing engine for United Airlines) web application with dynamic rendering using WebSockets implementation. ReactJS with Redux and saga  with Rest API’s/GraphQL implementation, Developed reusable, scalable, and secure solutions for our Web application. Assisting with a team member in code reviews, implementation design, and back-end integration. writing Reacts, ES6/Typescript, Css3/Sass, HTML5, and JSX. Hands-on experience with AWS cloud S3, EC2, and IAM. Partially worked on Smart Turn Mobile application using React Native with Redux and saga implementation.`,
    technologies: ["React/Typescript", "Node.js", "Css3/SASS", "HTML5", "mySQL", "GraphQL"],
  },
  {
    year: "2017 - 2018",
    role: "Frontend Developer",
    company: "TCS",
    description: `Developed and maintained Flight booking Status web application. using javascript, Html5, Bootstrap, Jquery, and CSS.  Experienced in working software development tools used by Agile teams - JIRA and TFS.`,
    technologies: ["Javascript", "HTML5/CSS", "Bootstrap", "Jquery", "MongoDB"],
  },
  {
    year: "2015 - 2017",
    role: "Trainee, System Engineer",
    company: "TCS",
    description: `Contributed to the ddesktop and web applications, created automation scripts to test functionality. using react.js, JavaScript, node.js, Nightwatch.js with cucumber. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Javascript", "React", "node.js", "Nightwatch.js"],
  },
];

export const PROJECTS = [
  {
    title: "Roche DigitalLab Web App",
    image: rocehImg,
    description:
      "Digital Lab web application, comes under ERS medical domain, Roche scientists using it for their medial digonsis purposes.",
    technologies: ["HTML", "CSS", "React", "Typescript", "Redux"],
  },
  {
    title: "IAO Web Application",
    image: Aviana,
    description:
      "TCS Aviana is Flight Alert messaging (Aviana eventing engine for United Airlines) IAO(Intelligent Airline Operation) web application and mobile applications.",
    technologies: ["Typescript", "Node.js", "Css3", "HTML5", "mySQL", "GraphQL"],
  },
  {
    title: "United Airline Ticket Booking Status App",
    image: unitedAirline,
    description:
      "Web Application to maintain the Flight booking status, ticket update status to end users.",
    technologies: ["Javascript", "HTML5/CSS", "Bootstrap", "Jquery", "MongoDB"],
  },
  {
    title: "Travel Angency Web App",
    image: Travelport,
    description:
      "Travelport modern travel angecy web application to maintain user travel details.",
    technologies: ["HTML", "CSS", "React","Javascript", "Express"],
  },
];

export const CONTACT = {
  address: "S1, Thirumali flats, mithun builder, vignrajapuram 2nd cross st, extension vengaivasal medavakkam Chennai-600073 ",
  phoneNo: "+91-9791032059",
  email: "chandrunana@gmail.com",
};
