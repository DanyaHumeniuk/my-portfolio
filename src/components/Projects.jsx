import { PROJECTS } from "../constants"
import {motion} from "framer-motion"
import {useState} from "react"

const Projects = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalImage, setModalImage] = useState(null)

    const openModal = (image) => {
        setModalImage(image)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setModalImage(null)
    }

  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h2 whileInView={{opacity: 1, y:0}} initial={{opacity: 0, y: -100}} transition={{duration: 1.5}} className="my-20 text-center text-4xl">Projects</motion.h2>
        <div className="">
            {PROJECTS.map((project, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}} className="w-full lg:w-1/4 ">
                        <img src={project.image} width={150} height={1} alt={project.title} className="mb-6 rounded w-48 h-auto cursor-pointer" onClick={() => 
                            openModal(project.image)
                        }/>
                    </motion.div>
                    <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: 100}} transition={{duration: 1}} className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">{project.title}</h6>
                        <p className="mb-4 text-neutral-400">{project.description}</p>
                        {project.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="mr-2 rounded bg-neutral-900 py-1 px-2 text-small font-medium text-red-500">{tech}</span>
                        ))}
                    </motion.div>
                    
                </div>
            ))}
        </div>
        {isModalOpen && modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={closeModal}
        >
          <img
            src={modalImage}
            alt="Full preview"
            className="max-w-full max-h-[90vh] rounded-lg"
          />
        </div>
      )}
    </div>
  )
}

export default Projects