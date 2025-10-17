import project1 from "../assets/projects/project-1.png";
import danland from "../assets/projects/danland.png"
import freelance from "../assets/projects/freelance.png"
import danland1 from "../assets/projects/danland1.png"
import findmefood from "../assets/projects/findmefood.png"
import mentalhealthapp from "../assets/projects/MentalHealthJournalApp.png"
import data from "../assets/projects/data_analysis.png"

export const HERO_CONTENT = `I am a versatile technologist specializing in the intersection of full-stack web development and data analysis. My expertise includes engineering robust applications with the MERN stack and transforming raw data into strategic insights using Python, SQL, and R. I combine strong problem-solving skills with an understanding of user psychology to not only build functional, secure systems but also to derive actionable intelligence that drives business decisions. My goal is to craft highly functional digital experiences, from the backend API to the final analytical report.`;

export const ABOUT_TEXT = `I am a creative developer and dedicated analyst whose curiosity lies where human-centered design meets powerful technology. My history spans the entire technology spectrum:

On the application front, I specialize in constructing captivating client-side interfaces (React, Tailwind) and underpinning them with reliable server-side architecture. My background encompasses MERN technologies, emphasizing fortified user access control and seamless usability.

On the analytical front, my capabilities manage the data lifecycle. I structure datasets using schema definition (SQL), prep data rigorously (Pandas), and employ statistical methods (R clustering) to unearth hidden market patterns and key performance metrics (KPIs).

Fueled by a passion for aesthetics and efficiency, I embrace complex challenges, whether optimizing code performance or interpreting large data volumes for predictive outcomes. I am perpetually driven to learn and thrive when collaborating with teams to elevate project quality.`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "Digital Editor/Salesperson",
    company: "Artina's Jewellery",
    description: `Work as a digital editor at a jewellery store, responsible for photographing and editing product images for the website. Ensure that all jewellery listings are accurate and up to date. On select days, assist customers and sell jewellery in the store.`,
    technologies: ["Photoshop"],
  }
];

export const PROJECTS = [
  {
    title: "Mental Health Journal",
    image: mentalhealthapp,
    description: "Engineered a secure, full-stack journaling application (MERN stack) providing users with a private, authenticated platform for thought management. Implemented JWT authentication with seamless auto-login, designed full CRUD functionality for journal entries, and secured the system by refactoring component structure and revoking exposed credentials.",
    link: "https://mental-health-journal-psi.vercel.app", 
    technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT"],
  },
  {
    title: "E-Commerce Data Analysis Pipeline",
    image: data,
    description: "Engineered a full end-to-end data pipeline: built a Star Schema (SQL) for efficient querying, performed ETL and data cleaning (Python/Pandas), and executed k-means clustering (R) on customer RFM metrics. Delivered actionable KPIs and customer segmentation insights via a professional Tableau dashboard.",
    link: "https://public.tableau.com/app/profile/danylo.humeniuk/viz/ECommerceSalesPerformanceAnalysis-CustomerRFM/E-CommerceSalesPerformanceCustomerAnalysis?publish=yes", 
    technologies: ["Python", "SQL", "R", "Tableau", "Pandas", "Looker (Conceptual)"],
  },
  {
    title: "FindMeFood",
    image: findmefood,
    description: "Designed and prototyped a responsive restaurant filtering website for users in Victoria, BC, allowing them to search by dietary preferences, cuisine, price, and ratings. Conducted user interviews, ethnographic research, and usability testing to inform the design. Built a medium-fidelity prototype emphasizing intuitive filtering, mobile accessibility, and visual clarity.",
    link: "https://seng310-dietary-filter-app.vercel.app",
    technologies: ["HTML", "Tailwind CSS", "React", "Figma"],
  },
  {
    title: "Freelance Landing Page",
    image: freelance,
    description: "Designed and developed a responsive landing page for a holistic healing practitioner, focused on promoting theta healing services and client engagement. Built with React and Tailwind CSS, the site features smooth scroll navigation, animated content transitions, and a custom contact section. Prioritized performance, accessibility, and mobile optimization. Integrated modern UX patterns and subtle visual effects to create a warm, professional user experience.",
    link: "https://www.olhavityuk.com",
    technologies: ["HTML", "Tailwind CSS", "React", "Figma","Framer Motion"],
  },
  {
    title: "DanLand Interactive Map Game",
    image: danland,
    description: "Collaborated on the development of an interactive map-based web game where players select a Pokémon avatar and navigate across predefined map points. Built using React, Tailwind CSS, and PokeAPI to dynamically fetch and display Pokémon characters. Emphasized responsive design, clean UI layout, and smooth user interaction. Applied Git and GitHub for version control and team collaboration, following best practices for branching, merging, and live updates.",
    link: "https://danland.vercel.app",
    technologies: ["HTML", "Tailwind CSS", "React", "Framer Motion"],
  },
  {
    title: "Interactive Campus Map Web App (VikeEats)",
    image: project1,
    description:
      "Contributed to the frontend of a web application that displays an interactive map of campus cafeterias. Designed and implemented a responsive Contact Us page using React and Tailwind CSS, ensuring clean layout, accessibility, and mobile compatibility.",
    technologies: ["HTML", "Tailwind CSS", "React", "Figma"],
  },
];

export const CONTACT = {
  address: "Victoria, BC",
  phoneNo: "+1 778 966 3661 ",
  email: "dgumenuk076@gmail.com",
};
