import React from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
    return (
        <>
            <motion.div variants={textVariant()} className="mb-14 text-center">
                <p className={`${styles.sectionSubText} text-[#00f090] font-mono tracking-widest`}>
                    // 04. TECHNICAL ARSENAL
                </p>
                <h2 className={styles.sectionHeadText}>Skills & Technologies.</h2>
                <p className="text-secondary text-sm sm:text-base max-w-2xl mx-auto mt-2 font-mono">
                    Interactive 3D tech spheres representing core programming languages, frameworks, and system tools. Drag and rotate in 3D.
                </p>
            </motion.div>

            {/* Single responsive grid/flex container */}
            <div className="flex flex-row flex-wrap justify-center gap-6 sm:gap-10 max-w-6xl mx-auto">
                {technologies.map((technology) => (
                    <div
                        className="flex flex-col items-center gap-2 group"
                        key={technology.name}
                    >
                        <div className="w-24 h-24 sm:w-28 sm:h-28">
                            <BallCanvas icon={technology.icon} name={technology.name} />
                        </div>
                        <span className="text-[11px] sm:text-xs font-mono text-secondary group-hover:text-[#00f090] tracking-wider font-semibold transition-colors">
                            {technology.name}
                        </span>
                    </div>
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Tech, "tech");
