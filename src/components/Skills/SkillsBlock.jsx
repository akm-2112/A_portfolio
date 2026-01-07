import {skillsData} from "./skillsData.js";
import SkillCard from "./SkillCard.jsx";
import {motion} from "framer-motion";

const MotionSkillCard = motion(SkillCard);
const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function SkillsBlock({id}) {
    const skills = skillsData[id];

    return (
        <div id={id} className="skills-block">

                <motion.div
                    className="skills-grid"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    {skills.map((skill, index) => (
                        <MotionSkillCard
                            key={skill.name}
                            skill={skill}
                            index={index}
                            variants={item}
                        />
                    ))}
                </motion.div>

        </div>
    )
}