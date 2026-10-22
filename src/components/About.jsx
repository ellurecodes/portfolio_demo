import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { achievments, services, personalInfo } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, subtitle, icon }) => (
    <Tilt className="xs:w-[260px] w-full">
        <motion.div
            variants={fadeIn("right", "spring", index * 0.4, 0.75)}
            className="w-full bg-gradient-to-r from-[#00f090] via-[#00d2ff] to-[#ff2a44] p-[1px] rounded-[22px] shadow-card hover:shadow-[0_0_25px_rgba(0,240,144,0.3)] transition-all"
        >
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-[#0e1322] rounded-[21px] py-6 px-6 min-h-[280px] flex justify-evenly items-center flex-col text-center"
            >
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-3 shadow-inner">
                    <img
                        src={icon}
                        alt={title}
                        className="w-full h-full object-contain"
                    />
                </div>

                <div className="mt-4">
                    <h3 className="text-white text-[19px] font-bold tracking-tight">
                        {title}
                    </h3>
                    {subtitle && (
                        <p className="text-xs text-secondary mt-2 font-mono leading-relaxed">
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>
        </motion.div>
    </Tilt>
);

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-[#00f090] font-mono tracking-widest`}>
                    // 01. PROFILE OVERVIEW
                </p>
                <h2 className={styles.sectionHeadText}>About Me.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[16px] sm:text-[17px] max-w-4xl leading-[30px]"
            >
                I am a second-year <strong className="text-white">B.E. Computer Science and Engineering</strong> student at{" "}
                <span className="text-[#00f090] font-semibold">RV College of Engineering (RVCE), Bengaluru</span> with an academic CGPA of <strong className="text-white">9.28</strong>.
                My work centers around software engineering, embedded systems, intelligent transportation architectures (V2X), and AI/ML workflows.
                I thrive on architecting real-world deployed solutions—from the{" "}
                <span className="text-[#00f090] font-semibold">Syntrix V2X</span> emergency vehicle clearance engine that applies Kalman and Particle filtering for live traffic preemption, to{" "}
                <span className="text-[#ff2a44] font-semibold">Lakshya 2.0</span>, a full-stack event platform built for NCC RVCE x GARE with QR authentication and live leaderboards.
            </motion.p>

            {/* Service & Expertise Cards */}
            <div className="mt-14 flex flex-wrap gap-7 justify-center sm:justify-start">
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.title}
                        index={index}
                        {...service}
                    />
                ))}
            </div>

            {/* Education, Highlights, Stats & Languages */}
            <div className="mt-20 pt-10 border-t border-white/10 grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Academic Background */}
                <div className="bg-[#0b101d]/80 border border-white/10 rounded-2xl p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#00f090]/10 rounded-full blur-2xl pointer-events-none" />
                    <span className="text-xs font-mono text-[#00f090] uppercase tracking-wider block mb-1">
                        Academic Standing
                    </span>
                    <h3 className="text-white text-xl font-bold">
                        RV College of Engineering
                    </h3>
                    <p className="text-sm text-secondary mt-1">
                        B.E. Computer Science & Engineering (2025 - 2029)
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                        <div className="px-3 py-1.5 rounded-lg bg-[#00f090]/15 border border-[#00f090]/30 text-[#00f090] text-sm font-bold font-mono">
                            CGPA: 9.28
                        </div>
                        <span className="text-xs text-secondary">
                            Bengaluru, Karnataka
                        </span>
                    </div>

                    <div className="mt-6">
                        <span className="text-xs text-secondary font-mono uppercase tracking-wider block mb-2">
                            Languages Spoken
                        </span>
                        <div className="flex flex-wrap gap-2">
                            {personalInfo.languages.map((lang, idx) => (
                                <span
                                    key={idx}
                                    className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white font-medium"
                                >
                                    {lang}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Key Highlights */}
                <div className="bg-[#0b101d]/80 border border-white/10 rounded-2xl p-6 lg:col-span-2">
                    <span className="text-xs font-mono text-[#00d2ff] uppercase tracking-wider block mb-1">
                        Core Highlights & Certifications
                    </span>
                    <h3 className="text-white text-xl font-bold mb-4">
                        Key Engineering Milestones
                    </h3>

                    <ul className="space-y-2.5">
                        {achievments.map((point, index) => (
                            <li
                                key={`achievment-${index}`}
                                className="flex items-start gap-3 text-sm text-secondary"
                            >
                                <span className="text-[#00f090] font-bold mt-0.5">▹</span>
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Stats Metric Row */}
                    <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                            <span className="text-2xl font-extrabold text-[#00f090] font-mono">9.28</span>
                            <p className="text-[11px] text-secondary mt-1 uppercase font-semibold">RVCE CGPA</p>
                        </div>
                        <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                            <span className="text-2xl font-extrabold text-[#00d2ff] font-mono">2+</span>
                            <p className="text-[11px] text-secondary mt-1 uppercase font-semibold">Live Systems</p>
                        </div>
                        <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                            <span className="text-2xl font-extrabold text-[#ff2a44] font-mono">100%</span>
                            <p className="text-[11px] text-secondary mt-1 uppercase font-semibold">Real-Time Sync</p>
                        </div>
                        <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                            <span className="text-2xl font-extrabold text-white font-mono">2x</span>
                            <p className="text-[11px] text-secondary mt-1 uppercase font-semibold">Google Certified</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
