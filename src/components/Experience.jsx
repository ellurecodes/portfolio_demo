import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#0d1322",
                color: "#fff",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0 10px 30px -15px rgba(2, 6, 23, 0.8)",
                borderRadius: "16px",
            }}
            contentArrowStyle={{ borderRight: "7px solid #0d1322" }}
            date={experience.date}
            dateClassName="text-[#00f090] font-mono text-sm font-semibold"
            iconStyle={{
                background: experience.iconBg,
                boxShadow: "0 0 15px rgba(0, 240, 144, 0.3)",
                border: "2px solid rgba(255, 255, 255, 0.2)",
            }}
            icon={
                <div className="flex justify-center items-center w-full h-full p-2">
                    <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-full h-full object-contain"
                    />
                </div>
            }
        >
            <div>
                <h3 className="text-white text-[20px] font-extrabold tracking-tight">
                    {experience.title}
                </h3>
                <p
                    className="text-[#00d2ff] text-[14px] font-mono font-semibold"
                    style={{ margin: 0 }}
                >
                    {experience.company_name}
                </p>
            </div>

            <ul className="mt-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className="text-secondary text-[14px] pl-1 tracking-wide leading-relaxed"
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant()} className="text-center">
                <p className={`${styles.sectionSubText} text-[#00f090] font-mono tracking-widest`}>
                    // 02. TRACK RECORD & EDUCATION
                </p>
                <h2 className={`${styles.sectionHeadText}`}>
                    Experience & Education.
                </h2>
            </motion.div>

            <div className="mt-14 flex flex-col">
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={`experience-${index}`}
                            experience={experience}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Experience, "work");
