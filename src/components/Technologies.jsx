import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { 
    FaHtml5, 
    FaCss3Alt, 
    FaJsSquare, 
    FaPython, 
    FaJava, 
    FaGitAlt, 
    FaPhp 
} from "react-icons/fa";
import { 
    DiNodejsSmall, 
    DiMongodb 
} from "react-icons/di";
import { 
    SiTailwindcss, 
    SiExpress, 
    SiTableau, 
    SiFigma, 
    SiSalesforce, 
    SiShopify, 
    SiR, 
    SiMysql 
} from "react-icons/si";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
});

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h2 
                whileInView={{ opacity: 1, y: 0 }} 
                initial={{ opacity: 0, y: -100 }} 
                transition={{ duration: 1.5 }} 
                className="my-20 text-center text-4xl"
            >
                Technologies
            </motion.h2>
            
            <motion.div 
                whileInView={{ opacity: 1, x: 0 }} 
                initial={{ opacity: 0, x: -100 }} 
                transition={{ duration: 1.5 }} 
                className="flex flex-wrap items-center justify-center gap-4"
            >
                {/* --- Web Development Core --- */}
                <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400" title="React"/>
                </motion.div>
                <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiNodejsSmall className="text-7xl text-green-500" title="Node.js"/>
                </motion.div>
                <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiExpress className="text-7xl text-white" title="Express.js"/>
                </motion.div>
                <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiMongodb className="text-7xl text-green-700" title="MongoDB"/>
                </motion.div>
                <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiTailwindcss className="text-7xl text-cyan-500" title="Tailwind CSS"/>
                </motion.div>
                <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaJsSquare className="text-7xl text-yellow-400" title="JavaScript"/>
                </motion.div>

                {/* --- Data & Enterprise (Internship Focused) --- */}
                <motion.div variants={iconVariants(3.2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiSalesforce className="text-7xl text-blue-500" title="Salesforce / CRM Automation"/>
                </motion.div>
                <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaPython className="text-7xl text-blue-600" title="Python / Pandas"/>
                </motion.div>
                <motion.div variants={iconVariants(5.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiR className="text-7xl text-blue-500" title="R (Statistics)"/>
                </motion.div>
                <motion.div variants={iconVariants(2.8)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMysql className="text-7xl text-cyan-600" title="SQL / MySQL"/>
                </motion.div>
                <motion.div variants={iconVariants(4.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiTableau className="text-7xl text-red-700" title="Tableau"/>
                </motion.div>

                {/* --- Backend & Automation --- */}
                <motion.div variants={iconVariants(2.2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaPhp className="text-7xl text-indigo-400" title="PHP / WordPress"/>
                </motion.div>
                <motion.div variants={iconVariants(4.8)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiShopify className="text-7xl text-green-400" title="Shopify Liquid"/>
                </motion.div>
                <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaJava className="text-7xl text-red-600" title="Java"/>
                </motion.div>

                {/* --- Tools & Foundations --- */}
                <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaHtml5 className="text-7xl text-orange-500" title="HTML5"/>
                </motion.div>
                <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaCss3Alt className="text-7xl text-blue-400" title="CSS3"/>
                </motion.div>
                <motion.div variants={iconVariants(6.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaGitAlt className="text-7xl text-orange-600" title="Git"/>
                </motion.div>
                <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiFigma className="text-7xl text-pink-500" title="Figma"/>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Technologies;