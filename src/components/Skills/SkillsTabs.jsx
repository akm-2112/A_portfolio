import {motion} from "framer-motion";

const tabs = [
    {id: "tech", label: "Tech Stack"},
    {id: "tools", label: "Tools"},
    {id: "experience", label: "Experience"},
];

export default function SkillsTabs({ activeTab, onTabClick }) {
    return (
        <nav
            className="skills-tabs"

        >
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => onTabClick(tab.id)}
                    className={`skills-tab ${activeTab === tab.id ? "active" : ""}`}
                >
                    {/* Active glass pill */}
                    {activeTab === tab.id && (
                        <motion.div
                            layoutId="skills-active-pill"
                            className="skills-active-pill"

                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30,
                                mass:0.8
                            }}
                        />
                    )}

                    <span className="skills-tab-label">{tab.label}</span>
                </button>
            ))}
        </nav>
    );
}
