import {
    SiExpress, SiFigma, SiGit, SiGithub,
    SiJavascript,
    SiLaravel, SiMamp,
    SiMongodb, SiMysql,
    SiNextdotjs,
    SiNodedotjs,
    SiPhp, SiPostman,
    SiReact, SiRedux, SiTailwindcss, SiTypescript, SiWebstorm, SiXampp
} from "react-icons/si";
import {DiDatabase, DiVisualstudio} from "react-icons/di";
import {MdApi, MdOutlineApi, MdWeb} from "react-icons/md";
import {HiOutlineLightBulb, HiOutlineUserGroup} from "react-icons/hi";
import {Code, Terminal} from "lucide-react";

export const skillsData = {
    tech: [
        { name: "JavaScript", level: 85, icon: SiJavascript, color: "#F7DF1E" },
        { name: "React.js", level: 75, icon: SiReact, color: "#61DAFB" },
        { name: "Node.js", level: 60, icon: SiNodedotjs, color: "#339933" },
        { name: "Express.js", level: 60, icon: SiExpress, color: "#ffffff" },
        { name: "TypeScript", level: 55, icon: SiTypescript, color: "#3178C6" },
        { name: "Next.js", level: 55, icon: SiNextdotjs, color: "#ffffff" },
        { name: "PHP", level: 80, icon: SiPhp, color: "#777BB4" },
        { name: "Laravel", level: 85, icon: SiLaravel, color: "#FF2D20" },
        { name: "Tailwind", level: 80, icon: SiTailwindcss, color: "#06B6D4" },
        { name: "MySQL", level: 85, icon: SiMysql, color: "#4479A1" },
        { name: "MongoDB", level: 70, icon: SiMongodb, color: "#47A248" },
        { name: "Redux", level: 55, icon: SiRedux, color: "#764ABC" },

    ],
    tools: [
        { name: "Git", level: 85, icon: SiGit, color: "#F05032" },
        { name: "GitHub", level: 90, icon: SiGithub, color: "#ffffff" },
        { name: "VS Code", level: 95, icon: DiVisualstudio, color: "#007ACC" },
        { name: "WebStorm", level: 90, icon: SiWebstorm, color: "#ffffff" },
        { name: "Postman", level: 85, icon: SiPostman, color: "#FF6C37" },
        { name: "Figma", level: 60, icon: SiFigma, color: "#F24E1E" },
        { name: "XAMPP", level: 75, icon: SiXampp, color: "#FB7A24" },
        { name: "MAMP", level: 70, icon: SiMamp, color: "#027494" },
    ],
    experience: [
        { name: "Web Projects", level: 85, icon: Code, color: "#0d58fb" },
        { name: "Rest APIs", level: 80, icon: MdApi, color: "#FF6C37"},
        { name: "Databases", level: 80, icon: DiDatabase, color: "" },
        { name: "Team Work", level: 90, icon: HiOutlineUserGroup, color: "#38BDF8" },
        { name: "Problem Solving", level: 95, icon: HiOutlineLightBulb, color: "#FDE047" },
    ],
};
