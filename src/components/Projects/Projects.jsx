import { useRef } from "react";
import {motion, useInView, useScroll, useSpring, useTransform} from "framer-motion";
import { projectsData } from "./projectsData";
import ProjectCard from "./ProjectCard";
import ProjectMotion from "./ProjectMotion";
import "../../styles/projects.css";

export default function Projects() {
    const sectionRef = useRef(null);

    const isInView = useInView(sectionRef, {
        amount: 0.3,
        once: false,
    });

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    const x = useTransform(
        scrollYProgress,
        [0.2, 0.5, 0.9, 1],
        ["0%", "-20%", "-70%", "-70%"]
    );

    const isMobile = window.matchMedia("(max-width: 600px)").matches;

    return (
        <section
            ref={sectionRef}
            id="projects"
            className="projects-section"
        >
            <motion.div className="projects-sticky">
                <motion.div
                    className="projects-pin"
                    animate={{
                        opacity: isInView ? 1 : 0,
                        pointerEvents: isInView ? "auto" : "none",
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                    <motion.div
                        className={`projects-track ${isMobile ? "mobile" : ""}`}
                        style={isMobile ? {}:{ x }}
                    >
                        {projectsData.map((project, index) => (
                            <ProjectMotion
                                key={project.id}
                                index={index}
                                scrollYProgress={scrollYProgress}
                            >
                                <ProjectCard {...project} />
                            </ProjectMotion>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
