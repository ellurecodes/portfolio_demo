import React from "react";
import { logo, github } from "../assets";
import { personalInfo, navLinks } from "../constants";

const Footer = () => {
    return (
        <footer className="w-full bg-[#050816] border-t border-white/10 py-10 px-6 sm:px-16 relative z-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                {/* Brand */}
                <div className="flex items-center gap-3">
                    <img
                        src={logo}
                        alt="Vishal Ellure"
                        className="w-8 h-8 object-contain"
                    />
                    <div className="flex flex-col">
                        <span className="text-white font-bold text-base tracking-wide">
                            {personalInfo.name}
                        </span>
                        <span className="text-xs text-secondary font-mono">
                            RV College of Engineering (RVCE), Bengaluru
                        </span>
                    </div>
                </div>

                {/* Quick Nav Links */}
                <ul className="flex flex-wrap justify-center items-center gap-6 list-none">
                    {navLinks.map((nav) => (
                        <li key={`footer-${nav.id}`}>
                            <a
                                href={`#${nav.id}`}
                                className="text-secondary hover:text-[#00f090] text-xs font-mono transition-colors"
                            >
                                {nav.title}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href={personalInfo.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#00d2ff] hover:underline text-xs font-mono font-semibold"
                        >
                            Resume PDF ↗
                        </a>
                    </li>
                </ul>

                {/* Social links */}
                <div className="flex items-center gap-4">
                    <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/5 hover:bg-[#00f090]/20 border border-white/10 hover:border-[#00f090]/40 transition-all text-secondary hover:text-white"
                        title="GitHub"
                    >
                        <img src={github} alt="GitHub" className="w-4 h-4 invert" />
                    </a>
                    <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/5 hover:bg-[#00d2ff]/20 border border-white/10 hover:border-[#00d2ff]/40 transition-all text-secondary hover:text-[#00d2ff] text-xs font-mono font-bold"
                        title="LinkedIn"
                    >
                        IN
                    </a>
                    <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-xs font-mono text-secondary hover:text-white transition-colors"
                    >
                        {personalInfo.email}
                    </a>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-secondary text-[11px] font-mono gap-2">
                <span>© {new Date().getFullYear()} Vishal Ellure. All rights reserved.</span>
                <span className="text-[#00f090]">Syntrix V2X • Lakshya 2.0 • Embedded Systems</span>
            </div>
        </footer>
    );
};

export default Footer;
