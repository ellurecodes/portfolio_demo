import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks, personalInfo } from "../constants";
import { logo, menu, close, github } from "../assets";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 80) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`${
                styles.paddingX
            } w-full flex items-center py-4 fixed top-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-[#050816]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40"
                    : "bg-transparent"
            }`}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                {/* Brand / Logo */}
                <Link
                    to="/"
                    className="flex items-center gap-3 group"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <div className="relative flex items-center justify-center">
                        <img
                            src={logo}
                            alt="Vishal Ellure"
                            className="w-10 h-10 object-contain drop-shadow-[0_0_12px_rgba(0,240,144,0.4)] group-hover:scale-105 transition-transform"
                        />
                        <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f090] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00f090]"></span>
                        </span>
                    </div>

                    <div className="flex flex-col">
                        <p className="text-white text-[18px] font-extrabold cursor-pointer tracking-wide flex items-center gap-2">
                            <span>Vishal Ellure</span>
                            <span className="hidden md:inline-flex items-center text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#00f090]/15 text-[#00f090] border border-[#00f090]/30">
                                RVCE '29
                            </span>
                        </p>
                        <span className="text-[11px] text-secondary font-mono tracking-wider hidden sm:block">
                            CSE Undergraduate • Systems & Web Developer
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8">
                    <ul className="list-none flex flex-row gap-8 items-center">
                        {navLinks.map((nav) => (
                            <li
                                key={nav.id}
                                className={`${
                                    active === nav.title
                                        ? "text-[#00f090] font-semibold"
                                        : "text-secondary font-medium"
                                } hover:text-white text-[15px] cursor-pointer transition-colors duration-200 tracking-wide`}
                                onClick={() => setActive(nav.title)}
                            >
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>

                    {/* Social & Resume Action */}
                    <div className="flex items-center gap-3 pl-4 border-l border-white/10">
                        <a
                            href={personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-tertiary/70 hover:bg-[#00f090]/20 border border-white/10 hover:border-[#00f090]/40 transition-all text-secondary hover:text-white"
                            title="GitHub Profile"
                        >
                            <img src={github} alt="GitHub" className="w-4 h-4 object-contain invert" />
                        </a>

                        <a
                            href={personalInfo.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-xs font-semibold px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#00f090]/20 to-[#00d2ff]/20 hover:from-[#00f090]/30 hover:to-[#00d2ff]/30 text-white border border-[#00f090]/40 shadow-sm transition-all hover:scale-105"
                        >
                            <svg className="w-3.5 h-3.5 text-[#00f090]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span>Resume</span>
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Icon */}
                <div className="lg:hidden flex flex-1 justify-end items-center gap-3">
                    <a
                        href={personalInfo.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold px-2.5 py-1 rounded bg-[#00f090]/20 text-[#00f090] border border-[#00f090]/40"
                    >
                        CV
                    </a>

                    <img
                        src={toggle ? close : menu}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain cursor-pointer"
                        onClick={() => setToggle(!toggle)}
                    />

                    {/* Mobile Drawer */}
                    <div
                        className={`${
                            !toggle ? "hidden" : "flex"
                        } p-6 bg-[#0b0f19]/95 backdrop-blur-xl border border-white/10 absolute top-16 right-0 mx-4 my-2 min-w-[200px] z-50 rounded-2xl shadow-2xl flex-col gap-4`}
                    >
                        <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                            {navLinks.map((nav) => (
                                <li
                                    key={nav.id}
                                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                                        active === nav.title
                                            ? "text-[#00f090]"
                                            : "text-secondary"
                                    }`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(nav.title);
                                    }}
                                >
                                    <a href={`#${nav.id}`}>{nav.title}</a>
                                </li>
                            ))}
                        </ul>

                        <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
                            <a
                                href={personalInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-secondary hover:text-white flex items-center gap-2"
                            >
                                <img src={github} alt="GitHub" className="w-3.5 h-3.5 invert" />
                                <span>GitHub Repository</span>
                            </a>
                            <a
                                href={personalInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-[#00d2ff] hover:underline"
                            >
                                LinkedIn Profile →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
