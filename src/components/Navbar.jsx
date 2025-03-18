import logo from "../assets/projects/logo.png"
import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between">
        <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="logo" className="h-20 w-20 scale-125 mx-2"/>
        </div>
        <div className="flex justify-center items-center gap-4 text-2xl m-8 text-neutral-400">
            <FaLinkedin className="hover:text-orange-400 hover:drop-shadow-[0_0_10px_#fb923c]"/>
            <FaGithub className="hover:text-orange-400 hover:drop-shadow-[0_0_10px_#fb923c]"/>
            <FaTwitterSquare className="hover:text-orange-400 hover:drop-shadow-[0_0_10px_#fb923c]"/>
            <FaInstagram className="hover:text-orange-400 hover:drop-shadow-[0_0_10px_#fb923c]"/>
        </div>
    </nav>
  )
}

export default Navbar