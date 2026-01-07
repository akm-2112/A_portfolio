import {motion} from 'framer-motion';
import { Download} from "lucide-react";
import myCV from '../../assets/AungKyawMoeCV.pdf'

export default function CVTile() {
    return (
        // <GlassTile>
            <motion.a
                href={myCV}
                download
                className=" flex justify-evenly items-center hero-btn primary"
                whileHover={{scale: 1.05, y: -2}}
                whileTap={{scale: 0.9, y: 1}}
                transition={{type: 'spring', stiffness: 300, damping: 15}}
            >
                <div className=" flex flex-col justify-center items-center">
                    <span>Download CV</span>
                    <p className="tile-sub">PDF · 118KB</p>
                </div>

                <Download/>
            </motion.a>
        // </GlassTile>
    );
}
