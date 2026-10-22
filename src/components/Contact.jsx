import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { personalInfo } from "../constants";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatusMessage({ type: "", text: "" });

        const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            // Graceful fallback to mailto if EmailJS is not configured
            setTimeout(() => {
                setLoading(false);
                const subject = encodeURIComponent(`Portfolio Message from ${form.name}`);
                const body = encodeURIComponent(
                    `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
                );
                window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
                setStatusMessage({
                    type: "success",
                    text: "Opening your default mail client with your message prefilled...",
                });
                setForm({ name: "", email: "", message: "" });
            }, 600);
            return;
        }

        emailjs
            .send(
                serviceId,
                templateId,
                {
                    from_name: form.name,
                    to_name: personalInfo.name,
                    from_email: form.email,
                    to_email: personalInfo.email,
                    message: form.message,
                },
                publicKey
            )
            .then(
                () => {
                    setLoading(false);
                    setStatusMessage({
                        type: "success",
                        text: "Thank you! I will get back to you shortly.",
                    });
                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);
                    setStatusMessage({
                        type: "error",
                        text: "Direct transmission failed. You can email me directly at " + personalInfo.email,
                    });
                }
            );
    };

    return (
        <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
            {/* Contact Form Card */}
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className="flex-[0.8] bg-[#0c1220] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl relative"
            >
                <p className={`${styles.sectionSubText} text-[#00f090] font-mono tracking-widest`}>
                    // 05. DIRECT TRANSMISSION
                </p>
                <h3 className={styles.sectionHeadText}>Get in Touch.</h3>

                <p className="text-secondary text-sm sm:text-base mt-2">
                    Whether you have an internship opportunity, a project proposal, or want to discuss V2X telemetry and systems engineering, feel free to reach out.
                </p>

                {/* Direct Contact Info Pills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                    <a
                        href={`mailto:${personalInfo.email}`}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#00f090]/50 transition-all group"
                    >
                        <div className="p-2 rounded-lg bg-[#00f090]/15 text-[#00f090]">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div className="flex flex-col min-w-0">
                            <span className="text-[11px] text-secondary font-mono">Email Directly</span>
                            <span className="text-xs text-white font-medium truncate group-hover:text-[#00f090] transition-colors">
                                {personalInfo.email}
                            </span>
                        </div>
                    </a>

                    <a
                        href={`tel:${personalInfo.phone}`}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#00d2ff]/50 transition-all group"
                    >
                        <div className="p-2 rounded-lg bg-[#00d2ff]/15 text-[#00d2ff]">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <div className="flex flex-col min-w-0">
                            <span className="text-[11px] text-secondary font-mono">Phone Contact</span>
                            <span className="text-xs text-white font-medium truncate group-hover:text-[#00d2ff] transition-colors">
                                {personalInfo.phone}
                            </span>
                        </div>
                    </a>
                </div>

                {/* Form */}
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-8 flex flex-col gap-6"
                >
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-2 text-sm font-mono">
                            Your Name
                        </span>
                        <input
                            type="text"
                            name="name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            placeholder="e.g. John Doe / Hiring Manager"
                            className="bg-[#151c2e] py-3.5 px-4 placeholder:text-secondary text-white rounded-xl outline-none border border-white/10 focus:border-[#00f090] text-sm font-medium transition-colors"
                        />
                    </label>

                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-2 text-sm font-mono">
                            Your Email
                        </span>
                        <input
                            type="email"
                            name="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            placeholder="e.g. recruiter@company.com"
                            className="bg-[#151c2e] py-3.5 px-4 placeholder:text-secondary text-white rounded-xl outline-none border border-white/10 focus:border-[#00f090] text-sm font-medium transition-colors"
                        />
                    </label>

                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-2 text-sm font-mono">
                            Your Message
                        </span>
                        <textarea
                            rows={5}
                            name="message"
                            required
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Tell me about your project, team, or opportunity..."
                            className="bg-[#151c2e] py-3.5 px-4 placeholder:text-secondary text-white rounded-xl outline-none border border-white/10 focus:border-[#00f090] text-sm font-medium transition-colors resize-none"
                        />
                    </label>

                    {statusMessage.text && (
                        <div
                            className={`p-3 rounded-xl text-xs font-mono ${
                                statusMessage.type === "success"
                                    ? "bg-[#00f090]/15 text-[#00f090] border border-[#00f090]/30"
                                    : "bg-red-500/15 text-red-400 border border-red-500/30"
                            }`}
                        >
                            {statusMessage.text}
                        </div>
                    )}

                    <div className="flex items-center gap-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-gradient-to-r from-[#00f090] to-[#00d2ff] py-3 px-8 rounded-xl outline-none w-fit text-[#050816] font-bold text-sm shadow-[0_0_20px_rgba(0,240,144,0.3)] hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
                        >
                            {loading ? "Transmitting..." : "Send Transmission 🚀"}
                        </button>
                    </div>
                </form>
            </motion.div>

            {/* 3D Earth Canvas */}
            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
            >
                <EarthCanvas />
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
