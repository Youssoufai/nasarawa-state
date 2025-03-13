import { FiArrowUpRight } from "react-icons/fi";
import { FaInstagram, FaXTwitter, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa6";

const Footer = () => {
    const sections = [
        {
            title: "GOVERNMENT",
            links: [
                "About Governor",
                "Executive Council",
                "Explore MDAs",
                "Legislative officers",
                "Judiciary officers",
            ],
        },
        {
            title: "QUICK SERVICES",
            links: [
                "Work in Lagos",
                "Housing and lands",
                "Tourism and travels",
                "Payments and levies",
                "Advertisement",
            ],
        },
        {
            title: "SAFETY & EMERGENCIES",
            links: ["Find police stations", "Report missing person", "Make complaints"],
        },
        {
            title: "HELP & SUPPORT",
            links: ["Contact us", "MDA directory", "Archives"],
        },
        {
            title: "FEEDBACK",
            links: ["Give feedback"],
        },
    ];

    return (
        <footer className="bg-[#08160f] text-green-500 pt-12">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="flex items-center justify-between pb-8">
                    <h1 className="text-5xl font-bold text-white">
                        Nasarawa, <span className="text-green-500">Good Morning</span> ☀️
                    </h1>
                    <div className="flex space-x-5 text-white text-xl">
                        <FaInstagram />
                        <FaXTwitter />
                        <FaFacebookF />
                        <FaLinkedinIn />
                        <FaYoutube />
                    </div>
                </div>

                {/* Links Section */}
                <div className="grid grid-cols-5 gap-8 pb-12">
                    {sections.map((section, index) => (
                        <div key={index}>
                            <h3 className="text-sm font-semibold text-white mb-4">{section.title}</h3>
                            <ul className="space-y-3">
                                {section.links.map((link, idx) => (
                                    <li key={idx}>
                                        <a href="#" className="flex items-center space-x-2 hover:text-green-300 transition">
                                            <FiArrowUpRight className="text-lg" />
                                            <span className="text-white">{link}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Copyright Section */}
                <div className="border-t border-gray-700 py-6 flex justify-between text-white text-sm">
                    <p>© COPYRIGHT 2024, ALL RIGHTS RESERVED | NASARAWA STATE GOVERNMENT</p>
                    <p className="text-green-500">POWERED BY - COGNITIX DEVELOPMENT</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
