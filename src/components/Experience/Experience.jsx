import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experiences } from "./experienceData";

export default function Experience() {
    return (
        <section id="experience" className="section relative py-20 px-4 md:px-0">
            <div className="max-w-4xl mx-auto w-full relative">

                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
                        Work Experience
                    </h2>
                    <p className="text-slate-400 text-lg">My professional journey so far.</p>
                </motion.div>

                {/* Vertical Timeline Container */}
                <div className="relative">

                    {/* The Glowing Line */}
                    <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-blue-500/20 via-emerald-500/40 to-transparent -translate-x-1/2 rounded-full hidden md:block" />
                    <div className="absolute left-8 md:hidden top-4 bottom-4 w-px bg-gradient-to-b from-blue-500/20 via-emerald-500/40 to-transparent -translate-x-1/2 rounded-full" />

                    {/* Experience Items */}
                    <div className="flex flex-col gap-12">
                        {experiences.map((exp, index) => (
                            <ExperienceCard key={exp.id} experience={exp} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function ExperienceCard({ experience, index }) {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, amount: 0.3 });

    // Determine if card should be on left or right for desktop (alternating)
    const isEven = index % 2 === 0;

    return (
        <div
            ref={cardRef}
            className={`relative flex flex-col md:flex-row items-center w-full ${isEven ? 'md:justify-start' : 'md:justify-end'}`}
        >

            {/* Glowing Dot on the Timeline */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="absolute left-8 md:left-1/2 w-4 h-4 bg-emerald-400 rounded-full -translate-x-1/2 shadow-[0_0_15px_rgba(52,211,153,0.8)] z-10 hidden md:block"
            />
            {/* Mobile dot */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="absolute left-8 md:hidden w-4 h-4 bg-emerald-400 rounded-full -translate-x-1/2 shadow-[0_0_15px_rgba(52,211,153,0.8)] z-10"
            />

            {/* Content Card container - 50% width on Desktop, full width with padding on Mobile */}
            <div className={`w-full md:w-5/12 ml-16 md:ml-0 pl-0 mt-8 md:mt-0 ${isEven ? 'md:pr-12 lg:pr-16 text-left' : 'md:pl-12 lg:pl-16 text-left'}`}>
                <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                    animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                    className="group relative p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:-translate-y-1"
                >

                    {/* Header: Role & Date */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition-all">
                            {experience.role}
                        </h3>
                        <span className="text-sm font-medium text-emerald-400/80 bg-emerald-500/10 px-3 py-1 rounded-full w-fit">
                            {experience.date}
                        </span>
                    </div>

                    {/* Company */}
                    <div className="text-lg font-medium text-blue-300/90 mb-4">
                        {experience.company}
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                        {experience.description}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {experience.technologies.map(tech => (
                            <span
                                key={tech}
                                className="px-3 py-1 text-xs font-medium rounded-md bg-white/5 border border-white/10 text-slate-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                </motion.div>
            </div>

        </div>
    );
}
