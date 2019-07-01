import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const PROJECTS = [
  {
    id: 1,
    title: "Contact Manager",
    description: "A react project involving React js full crud app",
    link: "https://lastsaintcrucified.github.io/react-contact-manager",
    image: project1
  },
  {
    id: 2,
    title: "Music Master",
    description: "A react project to search info about your favourite musician",
    link: `${window.location.href}music-master`,
    image: project2
  },
  {
    id: 3,
    title: "Landing Page",
    description:
      "A landing page created using HTML5,CSS3,BOOTSTRAP,JS and Jquery",
    link: "https://lastsaintcrucified.github.io/landing-page1/",
    image: project3
  }
];
export default PROJECTS;
