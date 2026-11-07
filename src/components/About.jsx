//
//
// export default function About() {
//     return (
//         <section id="about" className="min-h-screen">About</section>
//     )
// }

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
    Code2,
    Globe,
    Terminal,
    Database,
    CheckCircleIcon,
    MessageCircleCodeIcon
} from 'lucide-react';
import { LiaLaravel, LiaReact } from "react-icons/lia";
import ScrollReveal from "./ScrollReveal.jsx";

// --- Reusable Tilt Card Component ---
const TiltCard = ({ children, className }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className={`relative ${className}`}
        >
            <div style={{ transform: "translateZ(50px)" }} className="h-full">
                {children}
            </div>
        </motion.div>
    );
};

const About = () => {
    const skills = [
        { name: "PHP", icon: <Terminal size={16} />, color: "text-blue-500" },
        { name: "Laravel", icon: <LiaLaravel size={16} />, color: "text-red-400" },
        { name: "MySQL", icon: <Database size={16} />, color: "text-emerald-400" },
        { name: "React", icon: <LiaReact size={16} />, color: "text-blue-400" },
        { name: "Tailwind", icon: <Globe size={16} />, color: "text-cyan-400" },
        { name: "JavaScript", icon: <Code2 size={16} />, color: "text-yellow-400" },

    ];

    return (
        <section id="about" className="relative py-24 px-6 max-w-7xl mx-auto text-white overflow-hidden">
            <ScrollReveal>
                {/* Background Nebula Effects */}
                {/*<div className="absolute top-0 -left-20 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />*/}
                <div
                    className="absolute bottom-0 -right-20 w-96 h-96 rounded-full pointer-events-none" />

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl font-extrabold tracking-tight bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent mb-4">
                        About Me
                    </h2>
                    <p className="text-gray-400 font-mono text-sm tracking-widest uppercase italic">
                        Laravel development for travel and reservations
                    </p>
                </motion.div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-full">

                    {/* Main Bio Card */}
                    <TiltCard className="md:col-span-2 md:row-span-2">
                        <div
                            className="h-full p-8 rounded-3xl bg-white/[0.003] border border-white/10 backdrop-blur-0 flex flex-col justify-between group overflow-hidden">
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 bg-white/10 rounded-lg text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                                        <MessageCircleCodeIcon size={20} />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-tighter text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">What I Do</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-6 leading-tight">
                                    I build and maintain travel booking systems.
                                </h3>
                                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                    I'm <span className="text-white font-bold text-xl">Aung Kyaw Moe</span>, a Full Stack Developer at GMBF Group.
                                    I work mainly with PHP, Laravel, and MySQL on booking, pricing, and payment flows.
                                    I currently own the database and API design for a new hotel booking module and guide its implementation.
                                </p>
                            </div>

                            <div className="flex gap-6 relative z-10">
                                <div className="flex flex-col">
                                    <span className="text-xl font-bold text-white">Production systems</span>
                                    <span className="text-[12px] text-gray-500 uppercase tracking-widest">Booking and payments</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xl font-bold text-white">System design</span>
                                    <span
                                        className="text-[12px] text-gray-500 uppercase tracking-widest">Databases and APIs</span>
                                </div>
                            </div>

                        </div>
                    </TiltCard>

                    {/* Tech Stack Card */}
                    <TiltCard className="md:col-span-2">
                        <div
                            className="h-full p-8 rounded-3xl bg-white/[0.003] border border-white/10 backdrop-blur-1 group">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-white/10 rounded-lg text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                                    <CheckCircleIcon size={20} />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-tighter text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">My Current Stack</span>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {skills.map((skill, i) => (
                                    <div key={i}
                                        className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/5 hover:border-white/40 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all">
                                        <span className={skill.color}>{skill.icon}</span>
                                        <span className="text-xs font-medium">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </TiltCard>

                    {/* Philosophy Card */}
                    <TiltCard className="md:col-span-1">
                        <div
                            className="h-full p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl flex flex-col items-center justify-center text-center">
                            {/* <div
                                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 p-[1px] mb-4">
                                <div
                                    className="w-full h-full rounded-2xl bg-[#0a0a0a] flex items-center justify-center">
                                    <User size={30} className="text-white"/>
                                </div>
                            </div> */}
                            <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">Approach</p>
                            <p className="text-sm italic text-gray-300">Keep pricing and inventory rules consistent across booking channels.</p>
                        </div>
                    </TiltCard>

                    {/* Status Card */}
                    <TiltCard className="md:col-span-1">
                        <div
                            className="h-full p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl flex flex-col  justify-center">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-[10px] font-bold uppercase text-gray-400">Availability</span>
                            </div>
                            <p className="text-sm font-bold text-white">
                                <span className="text-sm font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                                    job opportunities
                                </span> & <span className="text-sm font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                                    freelance
                                </span>
                            </p>
                        </div>
                    </TiltCard>

                </div>
            </ScrollReveal>
        </section>
    );
};

export default About;