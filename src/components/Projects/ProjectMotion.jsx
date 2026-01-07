import {motion,useTransform} from "framer-motion";


export default function ProjectMotion({children,index,scrollYProgress,}) {

    const start = index * 0.18;
    const mid = start + 0.18;
    const end = start + 0.3;

    const scale = useTransform(
        scrollYProgress,
        [start,mid,end],
        [0.9,1,0.9],

    );

    const opacity = useTransform(
        scrollYProgress,
        [start,mid,end],

        [0.8, 1, 0.8]
    );

    return (
        <motion.div
            className="project-wrapper"
            style={{scale, opacity}}
        >
            {children}
        </motion.div>
    )
}