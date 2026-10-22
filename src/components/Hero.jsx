import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { personalInfo } from "../constants";

const Hero = () => {
    return (
        <section className={`relative w-full h-screen mx-auto overflow-hidden`}>
            {/* Top Hero Text Container */}
            <div
                className={`absolute inset-0 top-[110px] sm:top-[125px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 pointer-events-none z-10`}
            >
                {/* Visual Line Indicator with Emerald-Cyan Gradient */}
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#00f090] shadow-[0_0_15px_#00f090]" />
                    <div className="w-1 sm:h-80 h-44 bg-gradient-to-b from-[#00f090] via-[#00d2ff] to-transparent" />
                </div>

                {/* Hero Content */}
                <div className="pointer-events-auto max-w-3xl">
                    {/* Status Pill */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f090]/10 border border-[#00f090]/30 text-[#00f090] text-xs font-mono tracking-wider mb-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f090] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f090]"></span>
                        </span>
                        <span>Available for Internships & Projects</span>
                    </div>

                    <h1 className={`${styles.heroHeadText} text-white tracking-tight`}>
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f090] via-[#00d2ff] to-[#38bdf8] drop-shadow-[0_0_25px_rgba(0,240,144,0.3)]">Vishal Ellure</span>
                    </h1>

                    <p className="text-secondary text-sm sm:text-base font-medium mt-1 tracking-wide">
                        B.E. Computer Science & Engineering @ <span className="text-white font-semibold">RV College of Engineering (RVCE), Bengaluru</span>
                    </p>

                    <p className={`${styles.heroSubText} mt-2 text-[#cbd5e1] max-w-2xl`}>
                        Architecting <span className="text-[#00f090] font-semibold">software-defined V2X emergency clearance systems</span>, high-concurrency event platforms, and real-time telemetry pipelines.
                    </p>

                    {/* Quick Badges */}
                    <div className="flex flex-wrap gap-2 mt-4">
                        <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-white/90 text-xs font-mono">
                            🎓 CGPA: <strong className="text-[#00f090]">9.28</strong>
                        </span>
                        <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-white/90 text-xs font-mono">
                            🛰️ Syntrix V2X
                        </span>
                        <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-white/90 text-xs font-mono">
                            🎯 Lakshya 2.0
                        </span>
                        <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-white/90 text-xs font-mono">
                            ⚡ Google AI Certified
                        </span>
                    </div>

                    {/* Quick Action CTAs */}
                    <div className="flex flex-wrap items-center gap-3 mt-6">
                        <a
                            href="#projects"
                            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00f090] to-[#00d2ff] text-[#050816] font-bold text-sm shadow-[0_0_20px_rgba(0,240,144,0.35)] hover:scale-105 transition-transform flex items-center gap-2"
                        >
                            <span>Explore Projects</span>
                            <span>→</span>
                        </a>

                        <a
                            href={personalInfo.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 rounded-xl bg-tertiary/80 hover:bg-tertiary border border-white/15 hover:border-[#00f090]/50 text-white font-semibold text-sm transition-all flex items-center gap-2"
                        >
                            <svg className="w-4 h-4 text-[#00f090]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span>View Resume</span>
                        </a>

                        <a
                            href="#contact"
                            className="px-4 py-2.5 rounded-xl text-secondary hover:text-white text-sm font-medium transition-colors"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>

            {/* 3D Computer Canvas */}
            <ComputersCanvas />

            {/* Scroll Indicator */}
            <div className="absolute xs:bottom-8 bottom-20 w-full flex justify-center items-center z-20">
                <a href="#about" aria-label="Scroll down to About section">
                    <div className="w-[32px] h-[56px] rounded-3xl border-2 border-[#00f090]/40 flex justify-center items-start p-1.5 hover:border-[#00f090] transition-colors">
                        <motion.div
                            animate={{
                                y: [0, 20, 0],
                            }}
                            transition={{
                                duration: 1.8,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className="w-2.5 h-2.5 rounded-full bg-[#00f090] shadow-[0_0_8px_#00f090]"
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
