import {motion} from "framer-motion";

export default function SkillCard({skill, index}) {

    const Icon = skill.icon;

    return (
        <motion.div
            className="skill-card"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: "-100px"}}
            transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: "easeOut",
            }}
        >
            <div className=" flex items-center gap-3">
                <div className="skill-icon">
                    <Icon color={skill.color}/>
                </div>
                <div className="skill-name">{skill.name}</div>
            </div>
            <div className=" flex justify-around items-center gap-5">
                <div className="skill-bar">
                    <motion.div
                        className="skill-bar-fill"
                        initial={{width: 0}}
                        whileInView={{width: `${skill.level}%`}}
                        viewport={{once: true}}
                        transition={{duration: 1, ease: "easeInOut"}}
                    />
                </div>


                <span className="skill-level">{skill.level}%</span>
            </div>
        </motion.div>
    );
}
