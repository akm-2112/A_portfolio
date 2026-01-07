import { motion } from "framer-motion";

export default function ContactMotion({ children, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay,
            }}
            className="contact-motion"
        >
            {children}
        </motion.div>
    );
}
