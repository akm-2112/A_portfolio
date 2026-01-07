import {useIntersection} from "../utils/useIntersection.js";
import {motion} from "framer-motion";

export default function ScrollReveal({children, className = ""}) {
    const {elementRef, isVisible, scrollDir} = useIntersection({threshold: 0.15});
    const initialY = scrollDir === "down" ? 300 : -300;
    return (
        <div ref={elementRef} className={`reveal-wrapper ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: initialY, scale:0.85 }}
                animate={isVisible
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 100, scale: 0.85 }
                }
                transition={{
                    duration: 4,
                    ease: [0.22, 1, 0.36, 1]
                }}
            >
                {children}
            </motion.div>
        </div>
    )
}