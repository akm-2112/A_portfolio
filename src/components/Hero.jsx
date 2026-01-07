import {motion} from 'framer-motion';
import "../styles/hero.css";
import astronaut from "../assets/astronaut.png"
import ScrollReveal from "./ScrollReveal.jsx";
import myCV from '../assets/AungKyawMoeCV.pdf';

// const heroTitle = {
//     hidden: {opacity: 0, y: -100},
//     visible: {
//         opacity: 1, y: 0,
//         transition: {duration: 1.5, ease: 'easeInOut'}
//     },
// }

export default function Hero() {
    return (
        <motion.section
            id='hero'
            className="section hero-section h-screen flex items-center justify-center"
            // variants={heroTitle} initial='hidden' animate='visible'
        >
            <motion.div
                className="astronaut-layer"
                animate={{
                    y: [0, -20, 15, 0, 30],
                    rotate: [0, 15, 0, -15, 0, 20],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatType: "reverse",
                    repeatDelay: 2,

                }}
            >
                <img src={astronaut} alt="Astronaut" className="astronaut-img"/>
            </motion.div>
            <ScrollReveal>

                <motion.div className='hero-content'>
                    <motion.p className='hero-welcome'>
                        Welcome
                    </motion.p>
                    <motion.h1
                        className=" hero-title">
                        <motion.span className='hero-line'>Hi, I'm</motion.span>
                        <motion.span
                            className=" hero-line hero-name"
                            inherit={false}
                            initial={{scale: 1}}
                            animate={{scale: [1, 1.1, 1]}}
                            transition={{
                                duration: 1.3,
                                repeat: Infinity,
                                repeatDelay: 2,
                                ease: "easeInOut",
                                delay: 2.5,
                            }}
                        >
                            Aung Kyaw Moe
                        </motion.span>

                    </motion.h1>
                    <motion.p className='hero-subtitle'>
                        Junior Web Developer
                    </motion.p>
                    <div className='flex items-center justify-around gap-3'>
                        <motion.a
                            whileHover={{scale: 1.18, y: -2}}
                            whileTap={{scale: 0.9, y: 1}}
                            transition={{type: 'spring', stiffness: 300, damping: 15}}
                            className='hero-btn primary'
                            href="#contact"
                        >
                            Let's Connect
                        </motion.a>
                        <motion.a
                            href={myCV}
                            download="AungKyawMoeCV.pdf"
                            whileHover={{scale: 1.18, y: -2}}
                            whileTap={{scale: 0.9, y: 1}}
                            transition={{type: 'spring', stiffness: 300, damping: 15}}
                            className='hero-btn primary'
                        >
                            Download CV
                        </motion.a>
                    </div>

                </motion.div>
            </ScrollReveal>
        </motion.section>
    )
}