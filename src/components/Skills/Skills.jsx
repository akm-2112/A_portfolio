import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import SkillsTabs from "./SkillsTabs";
import SkillsBlock from "./SkillsBlock";
import "../../styles/skills.css";


const blocks = [
    { id: "tech", label: "Tech Stack" },
    { id: "tools", label: "Tools" },
    { id: "experience", label: "Experience" },
];

export default function SkillsSection() {
    const sectionRef = useRef(null);
    const [activeTab, setActiveTab] = useState("tech");
    const [scrollDir, setScrollDir] = useState("down");
    const lastScrollY = useRef(0);


    const isInView = useInView(sectionRef, { amount: 0.2, once: false });

    // Track scroll direction for the "Up/Down" pop effect
    useEffect(() => {
        const updateScrollDir = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY.current) {
                setScrollDir("down");
            } else {
                setScrollDir("up");
            }
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", updateScrollDir);
        return () => window.removeEventListener("scroll", updateScrollDir);
    }, []);


    const initialY = scrollDir === "down" ? 300 : -300;

    return (
        <section id="skills" className="section skills-section" ref={sectionRef}>
            <motion.div
                className="skills-glass"
                initial={{ opacity: 0, y: initialY, scale:0.85 }}
                animate={isInView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 100, scale: 0.85 }
                }
                transition={{
                    duration: 4,
                    ease: [0.22, 1, 0.36, 1]
                }}
            >
                {/* Tabs */}
                <SkillsTabs
                    activeTab={activeTab}
                    onTabClick={setActiveTab}
                />

                {/* Tab Content */}
                <div className="skills-inner">
                    <AnimatePresence mode="wait">
                        {blocks.map(
                            (block) =>
                                block.id === activeTab && (
                                    <motion.div
                                        key={block.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <SkillsBlock
                                            id={block.id}
                                            title={block.label}
                                        />
                                    </motion.div>
                                )
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </section>
    );
}