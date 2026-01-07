import {motion} from "framer-motion";

const sectionVariants = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.9,
            ease: "easeOut",
        },
    },
};

export default function Section({id,children}) {
    return (
        <motion.section
            id={id}
            className="relative min-h-screen flex items-center justify-center"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
        >
            {children}
        </motion.section>
    )
}