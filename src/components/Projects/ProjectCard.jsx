import {ExternalLink, Github} from "lucide-react";
import "../../styles/projects.css"
import {motion} from "framer-motion";

export default function ProjectCard({
                                        title,
                                        image,
                                        description,
                                        tech,
                                        links,
                                    }
) {
    return (
        <motion.div
            className="project-card"
            whileHover={{scale:1.04, y: -1}}
            transition={{type: 'spring', stiffness: 300, damping: 15}}
        >
            <div className="project-image">
                <img src={image} alt={title}/>
            </div>

            <h3 className="project-title">{title}</h3>

            <div className="project-tech">
                {tech.map((item, i) => (
                    <span key={i} className="tech-pill">
                        {item}
                    </span>
                ))}
            </div>

            <p className="project-description">{description}</p>

            <div className="project-links">
                {links.github && (
                    <motion.a
                        whileHover={{scale: 1.18, y: -2}}
                        whileTap={{scale: 0.9, y: 1}}
                        transition={{type: 'spring', stiffness: 300, damping: 15}}
                        href={links.github}
                        target="_blank"
                    >
                        <Github size={24}/>
                    </motion.a>
                )}
                {links.live && (
                    <motion.a
                        whileHover={{scale: 1.18, y: -2}}
                        whileTap={{scale: 0.9, y: 1}}
                        transition={{type: 'spring', stiffness: 300, damping: 15}}
                        href={links.live}
                        target="_blank"

                    >
                        <ExternalLink size={24}/>
                    </motion.a>
                )}
            </div>
        </motion.div>)
}