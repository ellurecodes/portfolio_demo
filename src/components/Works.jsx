import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
    index,
    name,
    subtitle,
    description,
    tags,
    image,
    source_code_link,
    live_demo_link,
    featured,
    badge,
    status,
}) => {
    return (
        <div variants={fadeIn("up", "spring", index * 0.4, 0.75)} className="w-full lg:w-[48%] flex">
            <Tilt
                options={{
                    max: 20,
                    scale: 1.01,
                    speed: 400,
                }}
                className={`bg-[#0d1322] p-5 sm:p-6 rounded-2xl w-full flex flex-col justify-between border transition-all duration-300 ${
                    featured
                        ? "border-[#00f090]/30 hover:border-[#00f090] shadow-[0_10px_35px_-10px_rgba(0,240,144,0.15)]"
                        : "border-white/10 hover:border-white/30"
                }`}
            >
                <div>
                    {/* Header with status badge */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00f090]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00f090] animate-pulse"></span>
                            <span>{status || "Project Showcase"}</span>
                        </span>

                        {badge && (
                            <span className="text-[11px] font-mono text-secondary hidden sm:block">
                                {badge}
                            </span>
                        )}
                    </div>

                    {/* Preview Image with interactive hover overlay */}
                    <div className="relative w-full h-[240px] sm:h-[280px] rounded-xl overflow-hidden border border-white/10 group">
                        <img
                            src={image}
                            alt={name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />

                        {/* Hover Overlay with Live Demo shortcut */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                        {live_demo_link && live_demo_link !== "#" && (
                            <a
                                href={live_demo_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-[#050816]/90 border border-[#00f090]/40 text-xs font-semibold text-[#00f090] backdrop-blur-md flex items-center gap-1.5 shadow-lg opacity-90 hover:opacity-100 hover:scale-105 transition-all"
                            >
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                <span>Open Live Deployment</span>
                            </a>
                        )}

                        <a
                            href={source_code_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute top-3 right-3 p-2 rounded-full bg-[#050816]/90 border border-white/20 hover:border-[#00f090] backdrop-blur-md cursor-pointer transition-all hover:scale-110 shadow-lg"
                            title="View Source on GitHub"
                        >
                            <img
                                src={github}
                                alt="github"
                                className="w-4 h-4 object-contain invert"
                            />
                        </a>
                    </div>

                    {/* Content */}
                    <div className="mt-5">
                        <div className="flex flex-col">
                            <h3 className="text-white font-extrabold text-[22px] tracking-tight">
                                {name}
                            </h3>
                            {subtitle && (
                                <p className="text-[#00d2ff] font-mono text-xs mt-0.5 tracking-wide">
                                    {subtitle}
                                </p>
                            )}
                        </div>

                        <p className="mt-3 text-secondary text-[14px] leading-relaxed">
                            {description}
                        </p>
                    </div>
                </div>

                {/* Footer Tags & Actions */}
                <div className="mt-6 pt-4 border-t border-white/10">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {tags.map((tag) => (
                            <span
                                key={`${name}-${tag.name}`}
                                className={`text-[12px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 ${tag.color}`}
                            >
                                #{tag.name}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center justify-between gap-3 pt-2">
                        {live_demo_link && live_demo_link !== "#" ? (
                            <a
                                href={live_demo_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 py-2 px-4 rounded-xl bg-gradient-to-r from-[#00f090] to-[#00d2ff] text-[#050816] font-bold text-xs text-center flex items-center justify-center gap-2 hover:opacity-95 shadow-[0_0_15px_rgba(0,240,144,0.3)] transition-all hover:scale-[1.02]"
                            >
                                <span>Launch Live Application</span>
                                <span>↗</span>
                            </a>
                        ) : (
                            <div className="flex-1 text-xs text-secondary font-mono">
                                3D Showcase Build
                            </div>
                        )}

                        <a
                            href={source_code_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-2 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 text-white font-semibold text-xs flex items-center gap-2 transition-all hover:scale-[1.02]"
                        >
                            <img src={github} alt="GitHub" className="w-3.5 h-3.5 invert" />
                            <span>Code Repository</span>
                        </a>
                    </div>
                </div>
            </Tilt>
        </div>
    );
};

const Works = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-[#00f090] font-mono tracking-widest`}>
                    // 03. ENGINEERING PORTFOLIO
                </p>
                <h2 className={`${styles.sectionHeadText}`}>Featured Projects.</h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-3 text-secondary text-[16px] sm:text-[17px] max-w-3xl leading-[30px]"
                >
                    Showcasing real-world deployed platforms and system designs. Each project is actively deployed with verified repository code, live telemetry endpoints, and robust database architectures.
                </motion.p>
            </div>

            <div className="mt-14 flex flex-wrap gap-8 justify-between">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={`project-${index}`}
                        index={index}
                        {...project}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Works, "projects");
