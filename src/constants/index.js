import project1 from "../assets/projects/project-1.png";
import danland from "../assets/projects/danland.png"
import freelance from "../assets/projects/freelance.png"
import danland1 from "../assets/projects/danland1.png"

export const HERO_CONTENT = `I am passionate about front-end development and enjoy combining creativity with technology to build visually appealing, accessible, and highly functional websites. With a background in psychology, I have a deep understanding of user behavior, which allows me to create intuitive and engaging digital experiences. My focus is on front-end development, problem-solving, and designing interfaces that are both aesthetically pleasing and easy to navigate, ensuring seamless interactions for users.`;

export const ABOUT_TEXT = `I am a dedicated and creative student interested in front-end development with a passion for building visually appealing, accessible, and user-friendly web experiences. With experience in React, Tailwind, JavaScript, HTML, CSS, Python, Java, and C, I enjoy blending design and functionality to craft seamless digital interactions. My journey into web development started with a love for art and technology, which naturally led me to front-end development, where I bring both creativity and problem-solving together. I have also worked with data structures and unit testing, developing test cases to improve efficiency and reliability in software. I thrive in collaborative environments and am always eager to learn new tools and frameworks. Outside of coding, I love exploring design, staying creative, and continuously pushing my skills to the next level.`;

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
    title: "Interactive Campus Map Web App (VikeEats)",
    image: project1,
    description:
      "Contributed to the frontend of a web application that displays an interactive map of campus cafeterias. Designed and implemented a responsive Contact Us page using React and Tailwind CSS, ensuring clean layout, accessibility, and mobile compatibility.",
    technologies: ["HTML", "Tailwind CSS", "React"],
  },
  {
    title: "DanLand Interactive Map Game",
    image: danland,
    description: "Collaborated on the development of an interactive map-based web game where players select a Pokémon avatar and navigate across predefined map points. Built using React, Tailwind CSS, and PokeAPI to dynamically fetch and display Pokémon characters. Emphasized responsive design, clean UI layout, and smooth user interaction. Applied Git and GitHub for version control and team collaboration, following best practices for branching, merging, and live updates.",
    link: "https://danland.vercel.app",
    technologies: ["HTML", "Tailwind CSS", "React", "Framer Motion"],
  },
  {
    title: "Freelance Landing Page",
    image: freelance,
    description: "Designed and developed a responsive landing page for a holistic healing practitioner, focused on promoting theta healing services and client engagement. Built with React and Tailwind CSS, the site features smooth scroll navigation, animated content transitions, and a custom contact section. Prioritized performance, accessibility, and mobile optimization. Integrated modern UX patterns and subtle visual effects to create a warm, professional user experience.",
    link: "https://www.olhavityuk.com",
    technologies: ["HTML", "Tailwind CSS", "React", "Framer Motion"],
  }
];

export const CONTACT = {
  address: "Victoria, BC",
  phoneNo: "+1 778 966 3661 ",
  email: "dgumenuk076@gmail.com",
};
