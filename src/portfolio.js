import livePreviewImg from "./assets/documents/project-preview.png";
import html from "./assets/images/html-5.png";
import css from "./assets/images/css-3.png";
import javascript from "./assets/images/js.png";
import react from "./assets/images/react.ico";
import redux from "./assets/images/redux.png";
import nodeJs from "./assets/images/nodejs.png";
import expressJs from "./assets/images/express.jfif";
import mongodb from "./assets/images/mongodb.png";
import typescript from "./assets/images/typescript.jfif";
import gitHub from "./assets/images/github.png";

const header = {
  portfolioCode: "https://github.com/sars723/portfolio-sara-salomon.git",
  title: "Sara.",
};

const about = {
  name: "Sara Salomon",
  description:
    "Hey, I'm a Junior Full Stack Web Developer. Recently graduated from Strive School European online tech school, I am looking for a great company where I keep developing my skills.",
  social: {
    linkedin: "https://linkedin.com/in/sara-salomon-hailu",
    github: "https://github.com/sars723",
  },
  socials: [
    {
      name: "linkedin",
      url: "https://linkedin.com/in/sara-salomon-hailu",
      className: "fab fa-linkedin",
    },

    {
      name: "github",
      url: "https://github.com/sars723",
      className: "fab fa-github",
    },
  ],
};

const projects = [
  {
    name: "Help Desk Ticketing System",
    description: (
      <div>
        {" "}
        <p>
          <strong>ADMIN</strong>:- elias@gmail.com
        </p>{" "}
        <p>
          <strong>USER</strong>:- naomi@gmail.com
        </p>{" "}
        <p>
          {" "}
          <strong>PASSWORD</strong>:- 12345
        </p>
      </div>
    ),
    usedTec: ["Javascript", "React", "Node.js", "Express", "Redux"],
    sourceCodeBE: "https://github.com/sars723/helpDesk-ticketingSystem-BE.git",
    sourceCodeFE:
      "https://github.com/sars723/helpDesk-ticketingSystem-FE-Customer.git",

    livePreview: "https://helpdesk-ts.vercel.app/login",
    livePreviewImg: livePreviewImg,
  },
  {
    name: "Project 2",
    description: "",
    stack: ["SASS", "TypeScript", "React"],
    sourceCodeBE: "https://github.com",
    sourceCodeFE: "https://github.com",
    livePreview: "https://github.com",
  },
  {
    name: "Project 3",
    description: "",
    stack: ["SASS", "TypeScript", "React"],
    sourceCodeBE: "https://github.com",
    sourceCodeFE: "https://github.com",
    livePreview: "https://github.com",
  },
];

const skills = [
  html,
  css,
  javascript,
  react,
  redux,
  nodeJs,
  expressJs,
  mongodb,
  typescript,
  gitHub,
];

const contact = {
  email: "sarasalomonn@gmail.com",
};

export { header, about, projects, skills, contact };
