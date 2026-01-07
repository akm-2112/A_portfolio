import "../styles/navigation.css";
import {Home} from "lucide-react";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";


const navItems = [
    {id: "hero", label: "Home", icon: Home},
    {id: "skills", label: "Skills"},
    {id: "projects", label: "Projects"},
    {id: "contact", label: "Contact"},
]
export default function Navigation() {
    const [active, setActive] = useState("hero")

    useEffect(() => {
        const sections = navItems.map((item) => {
            return document.getElementById(item.id)
        });

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            {
                root: null,
                rootMargin: "-40% 0px -40% 0px",
                threshold: 0,
            }
        );
        sections.forEach(section => {
            if (section) observer.observe(section);
        });
        return () => observer.disconnect();
    }, [])
    return (
        <nav className="navigation">
            <ul className="nav-list">
                {navItems.map(item => {
                    const Icon = item.icon;

                    return (
                        <li key={item.id} className="nav-item-wrapper">
                            {/* ACTIVE GLASS INDICATOR (next step) */}
                            {active === item.id && (
                                <motion.div
                                    layoutId="active-pill"
                                    className="nav-active-pill"
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 25,
                                    }}
                                />
                            )}

                            <a
                                href={`#${item.id}`}
                                className={`nav-item ${active === item.id ? "active" : ""}`}
                                onClick={() => {
                                    setActive(item.id)
                                }}
                            >
                                {Icon ? <Icon size={20}/> : item.label}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    )
}