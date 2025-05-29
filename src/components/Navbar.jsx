import logo from "../assets/projects/logo1.png"
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="h-20 w-20 scale-125 mx-2"/>
      </div>
      <div className="flex justify-center items-center gap-4 text-2xl m-8 text-neutral-400">
        <a href="https://www.linkedin.com/in/danylo-humeniuk-aba4a8257/" className="nav-item relative flex flex-col items-center group hover:drop-shadow-[0_0_10px_#fb923c]">
          <FaLinkedin className="nav-icon transition-transform duration-300 group-hover:text-orange-400 group-hover:-translate-y-1"/>
          <span className="nav-text absolute mt-8 text-xs opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">LinkedIn</span>
        </a>
        <a href="https://github.com/DanyaHumeniuk" className="nav-item relative flex flex-col items-center group hover:drop-shadow-[0_0_10px_#fb923c]">
          <FaGithub className="nav-icon transition-transform duration-300 group-hover:text-orange-400 group-hover:-translate-y-1"/>
          <span className="nav-text absolute mt-8 text-xs opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">Github</span>
        </a>
        <a href="mailto:dgumenuk076@gmail.com" className="nav-item relative flex flex-col items-center group hover:drop-shadow-[0_0_10px_#fb923c]">
          <FaEnvelope className="nav-icon transition-transform duration-300 group-hover:text-orange-400 group-hover:-translate-y-1"/>
          <span className="nav-text absolute mt-8 text-xs opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">Contact</span>
        </a>
       
        <a href="/Resume_Web_DH.pdf" target="_blank" rel="noopener noreferrer" className="nav-item relative flex flex-col items-center group hover:drop-shadow-[0_0_10px_#fb923c]">
          <FaFileAlt className="nav-icon transition-transform duration-300 group-hover:text-orange-400 group-hover:-translate-y-1"/>
          <span className="nav-text absolute mt-8 text-xs opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">Resume</span>
        </a>
        
      </div>
    </nav>
  )
}

export default Navbar