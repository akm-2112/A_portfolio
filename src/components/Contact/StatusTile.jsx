import GlassTile from "./GlassTile";
import {HiOutlineSparkles} from "react-icons/hi";
import {Dot, DotIcon, DotSquare} from "lucide-react";
import React from "react";


export default function StatusTile() {
    return (
        <GlassTile>
            <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-bold uppercase text-gray-400">Current Status</span>
            </div>
            <div className="contact-status">
                <p className="font-bold text-sm">Open to</p>
                <p className="text-sm font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Freelance<span className="text-white"> & </span>Job Opportunities</p>
            </div>
        </GlassTile>
    );
}
