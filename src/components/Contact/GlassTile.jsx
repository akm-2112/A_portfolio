import { motion } from "framer-motion";

export default function GlassTile({ children, className = "" }) {
    return (
        <motion.div
            className={`glass-tile ${className}`}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
            {children}
        </motion.div>
    );
}
