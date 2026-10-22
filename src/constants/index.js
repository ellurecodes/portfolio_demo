import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    python,
    git,
    figma,
    threejs,
    c_lang,
    firebase,
    rvce_logo,
    syntrix_logo,
    ncc_logo,
    google_logo,
    syntrix,
    lakshya,
    threeportfolio,
} from "../assets";

export const personalInfo = {
    name: "Vishal Ellure",
    role: "Computer Science & Engineering Undergraduate",
    college: "RV College of Engineering (RVCE), Bengaluru",
    cgpa: "9.28",
    batch: "2025 - 2029",
    email: "vishal797577@gmail.com",
    phone: "+91 9380421476",
    github: "https://github.com/ellurecodes",
    linkedin: "https://www.linkedin.com/in/vishal-ellure",
    location: "Bengaluru, Karnataka, India",
    resumeUrl: "/Vishal_Ellure_Resume.pdf",
    languages: ["English (Native)", "Kannada (Native)", "Hindi (Fluent)"],
};

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Experience",
    },
    {
        id: "tech",
        title: "Tech Stack",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const achievments = [
    "Second-year B.E. Computer Science & Engineering @ RVCE Bengaluru (CGPA: 9.28)",
    "Engineered Syntrix V2X Software-Defined Emergency Vehicle Clearance System",
    "Developed Lakshya 2.0 Tournament Platform for NCC RVCE x GARE",
    "Google Certified: Google AI Essentials & Google Prompting Essentials",
    "Expertise in Kalman & Particle Filtering for GPS telemetry and dead-reckoning",
    "Experienced in Full-Stack Web Development, Real-Time Cloud Databases & Embedded Systems",
];

const services = [
    {
        title: "Systems & Software Engineering",
        subtitle: "C • Python • Embedded Systems • Architecture",
        icon: backend,
    },
    {
        title: "V2X & Geolocation Systems",
        subtitle: "Kalman & Particle Filters • Telemetry • GIS",
        icon: web,
    },
    {
        title: "Full-Stack Web Development",
        subtitle: "React • Tailwind CSS • Three.js • Vite",
        icon: mobile,
    },
    {
        title: "Cloud & Real-Time Sync",
        subtitle: "Firebase • Firestore • QR Verification",
        icon: creator,
    },
];

const technologies = [
    {
        name: "C Language",
        icon: c_lang,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Firebase",
        icon: firebase,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
];

const experiences = [
    {
        title: "B.E. Computer Science and Engineering",
        company_name: "RV College of Engineering (RVCE), Bengaluru",
        icon: rvce_logo,
        iconBg: "#0b1527",
        date: "2025 - 2029 (Second Year)",
        points: [
            "Currently pursuing B.E. in Computer Science and Engineering with a stellar CGPA of 9.28.",
            "Building strong foundational mastery across Data Structures, Algorithms, C Programming, Python, Computer Systems, and Modern Web Engineering.",
            "Passionate about applying software engineering and embedded systems theory to high-impact real-world applications.",
            "Active in college technical forums, engineering project initiatives, and NCC RVCE events.",
        ],
    },
    {
        title: "Lead Systems Architect & Developer",
        company_name: "Syntrix V2X - Emergency Clearance System",
        icon: syntrix_logo,
        iconBg: "#061f18",
        date: "2025 - Present",
        points: [
            "Architected Syntrix V2X, an innovative software-defined Vehicle-to-Everything system to help emergency responders navigate dense traffic.",
            "Implemented Kalman Filtering and Particle Filtering to smooth GPS jitter and provide continuous dead-reckoning geolocation.",
            "Developed instant V2V collision/approach alerts and V2I green-wave traffic signal preemption without requiring expensive dedicated hardware.",
            "Designed a live district command center HUD with real-time Leaflet GIS satellite telemetry and automated dispatch controls.",
        ],
    },
    {
        title: "Full-Stack Platform Developer",
        company_name: "Lakshya 2.0 (NCC RVCE x GARE)",
        icon: ncc_logo,
        iconBg: "#1a080c",
        date: "2025 - 2026",
        points: [
            "Engineered the official tournament management platform for 10M Air Rifle and Air Pistol shooting competitions.",
            "Created an automated slot allocation and booking system powered by Cloud Firestore with atomic transactions to eliminate race conditions.",
            "Implemented dynamic QR-coded digital participant passes with instant mobile check-in verification for range officers.",
            "Built a real-time synchronized competitive leaderboard and scoreboard dashboard for live spectators and administrators.",
        ],
    },
    {
        title: "Google AI & Prompting Specialist",
        company_name: "Google Professional Certifications",
        icon: google_logo,
        iconBg: "#111827",
        date: "2025 - Present",
        points: [
            "Earned Google AI Essentials Certification, mastering foundational machine learning paradigms and modern AI tools.",
            "Earned Google Prompting Essentials Certification, specializing in structured prompt architectures and LLM workflow automation.",
            "Integrating cutting-edge AI-assisted workflows into day-to-day software development, testing, and debugging.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Vishal's work on Syntrix V2X demonstrates exceptional understanding of real-time telemetry, Kalman filtering, and software-defined transportation tech.",
        name: "Dr. Faculty Mentor",
        designation: "Department of CSE",
        company: "RV College of Engineering",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        testimonial:
            "Lakshya 2.0 handled high-concurrency slot booking and real-time shooting scoring flawlessly. Vishal's full-stack implementation was robust and user-friendly.",
        name: "Event Coordinator",
        designation: "NCC & GARE Team",
        company: "Lakshya 2.0",
        image: "https://randomuser.me/api/portraits/men/44.jpg",
    },
];

const projects = [
    {
        name: "Syntrix V2X",
        subtitle: "Emergency Vehicle Clearance System",
        description:
            "Software-defined Vehicle-to-Everything (V2X) platform designed to help emergency responders navigate congested corridors. Employs real-time geolocation, Firebase synchronization, and Kalman + Particle filtering to deliver V2V emergency alerts and V2I traffic signal preemption without dedicated V2X hardware.",
        tags: [
            {
                name: "v2x-telemetry",
                color: "green-text-gradient",
            },
            {
                name: "kalman-filter",
                color: "blue-text-gradient",
            },
            {
                name: "firebase",
                color: "orange-text-gradient",
            },
            {
                name: "leaflet-gis",
                color: "pink-text-gradient",
            },
            {
                name: "signal-preemption",
                color: "text-[#00f090]",
            },
        ],
        image: syntrix,
        source_code_link: "https://github.com/ellurecodes/V2X_emergency_vehicle_clearance_system",
        live_demo_link: "https://v2v-v2i-project.web.app",
        featured: true,
        badge: "Live Deployment • Command Deck",
        status: "Active District 01",
    },
    {
        name: "Lakshya 2.0",
        subtitle: "Shooting Event Management Platform",
        description:
            "Full-stack tournament management platform for 10M Air Rifle and Air Pistol competitions, presented by NCC RVCE x GARE. Built with React, Firebase Auth, and Cloud Firestore to power participant registrations, dynamic slot bookings, QR digital tickets, and live competitive leaderboards.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "cloud-firestore",
                color: "orange-text-gradient",
            },
            {
                name: "qr-verification",
                color: "green-text-gradient",
            },
            {
                name: "live-leaderboard",
                color: "pink-text-gradient",
            },
            {
                name: "ncc-rvce",
                color: "text-[#ff2a44]",
            },
        ],
        image: lakshya,
        source_code_link: "https://github.com/vaishnavrkadam/Lakshya-2.0",
        live_demo_link: "https://lakshya-02.web.app/",
        featured: true,
        badge: "Live Deployment • NCC RVCE x GARE",
        status: "Official 10M Shooting Platform",
    },
    {
        name: "Interactive 3D Portfolio",
        subtitle: "Three.js & WebGL Experience",
        description:
            "A modern, high-performance 3D developer portfolio built with React, Three.js, React Three Fiber, and Tailwind CSS. Features interactive 3D computers, orbital planetary canvases, dynamic floating tech spheres, and tactical cyberpunk aesthetic.",
        tags: [
            {
                name: "threejs",
                color: "green-text-gradient",
            },
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "webgl",
                color: "pink-text-gradient",
            },
            {
                name: "tailwind",
                color: "orange-text-gradient",
            },
        ],
        image: threeportfolio,
        source_code_link: "https://github.com/ellurecodes",
        live_demo_link: "#",
        featured: false,
        badge: "3D WebGL • Three.js",
        status: "Live Portfolio",
    },
];

export { services, technologies, experiences, testimonials, projects, achievments };
