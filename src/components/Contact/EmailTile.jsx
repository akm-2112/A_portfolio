import {motion} from 'framer-motion';
import { useState } from "react";
import {Check, Copy} from "lucide-react";
import {FaEnvelope} from "react-icons/fa";

export function EmailTile() {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText("akyawmoe394@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (

            <div className="tile-split">

                <div className="contact-pill">
                    <FaEnvelope size="25" />
                    <span className="underline">akyawmoe394@gmail.com</span>
                </div>

                <motion.button
                    whileHover={{scale: 1.15, y: -2}}
                    whileTap={{scale: 0.9, y: 1}}
                    transition={{type: 'spring', stiffness: 300, damping: 15}}
                    onClick={handleCopy}
                    className="circle-icon"
                >
                    {copied ? <Check /> : <Copy />}
                </motion.button>
            </div>
    );
}
