import logo from "../assets/projects/logo1.png"
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between">
        <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="logo" className="h-20 w-20 scale-125 mx-2"/>
        </div>
        <div className="flex justify-center items-center gap-4 text-2xl m-8 text-neutral-400">
            <a href="https://www.linkedin.com/in/danylo-humeniuk-aba4a8257/">
              <FaLinkedin className="hover:text-orange-400 hover:drop-shadow-[0_0_10px_#fb923c]"/>
            </a>
            <a href="https://github.com/DanyaHumeniuk">
              <FaGithub className="hover:text-orange-400 hover:drop-shadow-[0_0_10px_#fb923c]"/>
            </a>
            <a href="mailto:dgumenuk076@gmail.com">
              <FaEnvelope className="hover:text-orange-400 hover:drop-shadow-[0_0_10px_#fb923c]"/>
            </a>
            {/* <a href="">
              
              <FaFileAlt className="hover:text-orange-400 hover:drop-shadow-[0_0_10px_#fb923c]"/>
            </a> */}
            
            
        </div>
    </nav>
  )
}

export default Navbar