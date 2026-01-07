import GlassTile from "./GlassTile";
import {FaDiscord, FaEnvelope, FaGithub, FaLinkedin, FaTelegram, FaTelegramPlane} from "react-icons/fa";
import {Github, GithubIcon, Linkedin} from "lucide-react";
import {SiTelegram} from "react-icons/si";

export default function SocialTile() {
    return (
        <GlassTile className="social-tile">

            <div className="socialCircle-icon github">
                <a href="https://github.com/akm-2112" target="_blank">
                    <GithubIcon size={32} className="social-icon" />
                </a>
            </div>
            <div className="socialCircle-icon linkedin">
                <a href="https://www.linkedin.com/in/aung-kyaw-moe-9a4868380/" target="_blank">
                    <Linkedin size={32} className="social-icon " />
                </a>
            </div>
            <div className="socialCircle-icon telegram">
                <a href="https://telegram.me/AuKM2112" target="_blank">
                    <FaTelegramPlane size={32} className="social-icon " />
                </a>
            </div>
            <div className="socialCircle-icon discord">
                <a href="" target="_blank">
                    <FaDiscord size={32} className="social-icon " />
                </a>
            </div>
        </GlassTile>
    );
}
