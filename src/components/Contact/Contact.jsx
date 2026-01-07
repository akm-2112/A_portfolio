import {motion, useInView} from "framer-motion";
import {useRef} from "react";
import ContactGrid from "./ContactGrid";
import "../../styles/contact.css";
import ScrollReveal from "../ScrollReveal.jsx";
import ContactMotion from "./ContactMotion.jsx";

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, {amount: 0.3});

    return (
        <section id="contact" ref={ref} className="contact-section">
            <ScrollReveal>

                <motion.div
                    className="contact-container"
                    initial={{opacity: 0, y: 120}}
                    animate={isInView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 1.2, ease: [0.22, 1, 0.36, 1]}}
                >
                    <h2 className="contact-title">
                        <span>Let’s </span><span className="hero-name text-4xl">Connect!</span>
                    </h2>
                    <ContactGrid/>
                </motion.div>
            </ScrollReveal>
        </section>
    );
}
