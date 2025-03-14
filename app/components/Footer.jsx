"use client"
import { FiArrowUpRight } from "react-icons/fi";
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

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
        <motion.footer
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="bg-[#08160f] text-green-500 pt-12"
        >
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="flex flex-wrap items-center justify-between pb-8"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white">
                        Nasarawa, <span className="text-green-500">Good Morning</span> ☀️
                    </h1>
                    <div className="flex space-x-4 text-white text-xl mt-4 md:mt-0">
                        {[FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn, FaYoutube].map((Icon, index) => (
                            <motion.a
                                key={index}
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="cursor-pointer hover:text-green-300"
                            >
                                <Icon />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* Links Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-12"
                >
                    {sections.map((section, index) => (
                        <div key={index}>
                            <h3 className="text-sm font-semibold text-white mb-4">{section.title}</h3>
                            <ul className="space-y-3">
                                {section.links.map((link, idx) => (
                                    <motion.li
                                        key={idx}
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 200 }}
                                    >
                                        <a href="#" className="flex items-center space-x-2 hover:text-green-300 transition">
                                            <FiArrowUpRight className="text-lg" />
                                            <span className="text-white">{link}</span>
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </motion.div>

                {/* Copyright Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="border-t border-gray-700 py-6 flex flex-col md:flex-row justify-between text-white text-sm text-center md:text-left"
                >
                    <p>© COPYRIGHT 2024, ALL RIGHTS RESERVED | NASARAWA STATE GOVERNMENT</p>
                    <p className="text-green-500">POWERED BY - COGNITIX DEVELOPMENT</p>
                </motion.div>
            </div>
        </motion.footer>
    );
};

export default Footer;
