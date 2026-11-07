import {
    SiComposer, SiGit, SiGithub, SiLaravel, SiMysql, SiPhp, SiPostman, SiReact, SiTailwindcss,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { MdApi } from "react-icons/md";
import { Bot, FlaskConical, Sparkles } from "lucide-react";

export const skillsData = {
    tech: [
        { name: "PHP", detail: "Server-side booking and pricing logic", icon: SiPhp, color: "#A8ADE7" },
        { name: "Laravel", detail: "Production APIs, Eloquent, and migrations", icon: SiLaravel, color: "#FF6B63" },
        { name: "MySQL", detail: "Schema design, indexing, and transactions", icon: SiMysql, color: "#80B7DB" },
        { name: "REST APIs", detail: "Booking, payment, and supplier integrations", icon: MdApi, color: "#FF8C58" },
        { name: "AI Agents", detail: "Tool calling and workflows with the Laravel AI SDK", icon: Bot, color: "#A7F3D0" },
        { name: "React & Inertia", detail: "Interfaces for Laravel applications", icon: SiReact, color: "#61DAFB" },
        { name: "Tailwind CSS", detail: "Responsive layouts and components", icon: SiTailwindcss, color: "#67E8F9" },
    ],
    tools: [
        { name: "Git", detail: "Version control and branch workflows", icon: SiGit, color: "#FF806A" },
        { name: "GitHub", detail: "Repositories and pull requests", icon: SiGithub, color: "#FFFFFF" },
        { name: "Composer", detail: "PHP dependencies and framework upgrades", icon: SiComposer, color: "#E9B77E" },
        { name: "PHPUnit", detail: "Regression and feature tests", icon: FlaskConical, color: "#A7F3D0" },
        { name: "Postman", detail: "API requests and integration checks", icon: SiPostman, color: "#FF8C58" },
        { name: "VS Code", detail: "Editing and debugging", icon: DiVisualstudio, color: "#75BAF4" },
        { name: "AI Coding Assistants", detail: "Turn technical designs into implementation drafts", icon: Sparkles, color: "#C4B5FD" },
    ],
};
