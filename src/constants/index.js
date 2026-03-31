import project1 from "../assets/projects/project-1.png";
import danland from "../assets/projects/danland.png"
import freelance from "../assets/projects/freelance.png"
import danland1 from "../assets/projects/danland1.png"
import findmefood from "../assets/projects/findmefood.png"
import mentalhealthapp from "../assets/projects/MentalHealthJournalApp.png"
import data from "../assets/projects/data_analysis.png"

export const HERO_CONTENT = `I am a versatile technologist specializing in the intersection of full-stack web development and data analytics. My expertise lies in engineering robust applications with the MERN stack and transforming complex datasets into strategic insights using Python, SQL, and R. By combining technical precision with an understanding of user psychology, I build secure, high-performance systems that don't just function, they provide the actionable intelligence needed to drive high-level business decisions. From architecting backend APIs to automating enterprise data pipelines, I craft digital experiences that are as analytical as they are intuitive.`;

export const ABOUT_TEXT = `I am a creative developer and dedicated analyst driven by the challenge of where human-centered design meets powerful, scalable technology. With a background that spans the full technology spectrum, I focus on building tools that solve real-world organizational friction.

On the application front, I specialize in constructing captivating client-side interfaces using React and Tailwind, underpinned by reliable server-side architecture. My experience with the MERN stack emphasizes fortified user access control (JWT) and seamless usability, ensuring that complex tools remain accessible and secure.

On the analytical front, I manage the entire data lifecycle. I structure complex datasets through precise schema definition (SQL), perform rigorous data cleaning and ETL (Pandas), and employ statistical modeling (R clustering) to unearth hidden patterns and KPIs. My recent work focuses heavily on systems integration, bridging the gap between CRMs like Salesforce, marketing automation tools, and web portals to create unified, automated data ecosystems.

Whether I am optimizing code performance for a member portal or interpreting large data volumes for predictive outcomes, I am perpetually driven to elevate project quality through collaboration and technical curiosity.`;

export const EXPERIENCES = [
  {
  year: "Jan 2026 - Present",
  role: "Software Engineering Intern",
  company: "BC Greens",
  description: "Architecting a secure Member Portal and automating data pipelines between Salesforce, Marketing Cloud, and WordPress. Developed custom SQL-based data extensions for targeted marketing segmentation and implemented robust API integrations for donor tracking and electoral data. Optimized CRM workflows by engineering automated synchronization between 123FormBuilder and Salesforce, significantly reducing manual data entry.",
  technologies: ["Salesforce", "Marketing Cloud", "SQL", "PHP", "WordPress", "WP Fusion", "DonorDrive"],
  },
  {
    year: "2022 - Present",
    role: "Digital Editor/Salesperson",
    company: "Artina's Jewellery",
    description: `Work as a digital editor at a jewellery store, responsible for photographing and editing product images for the website. Ensure that all jewellery listings are accurate and up to date. On select days, assist customers and sell jewellery in the store.`,
    technologies: ["Photoshop", "Shopify Liquid"],
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
