"use client"; // Ensure animations work in Next.js

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, ChevronDown, Search } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "HOME", href: "/", icon: <ArrowUpRight size={16} /> },
        { name: "ABOUT", href: "/about", icon: <ChevronDown size={16} /> },
        { name: "SERVICES", href: "/services", icon: <ArrowUpRight size={16} /> },
        { name: "NEWSROOM", href: "/newsroom", icon: <ArrowUpRight size={16} /> },
        { name: "EVENTS", href: "/events", icon: <ArrowUpRight size={16} /> },
        { name: "CONNECT", href: "/connect", icon: <ArrowUpRight size={16} /> },
    ];

    return (
        <>
            {/* Emergency Banner */}
            <div className="bg-dark-green p-3 text-center">
                <h1 className="text-white text-sm font-light tracking-wide">
                    Toll-free emergency lines (LASEMA) 767 | 112
                </h1>
            </div>

            {/* Navbar */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md border-b border-gray-200 font-roboto">
                <div className="flex items-center justify-between p-6 max-w-7xl mx-auto">
                    {/* Logo */}
                    <Link href="/">
                        <img src="/logo.png" className="h-12 w-12" alt="Company Logo" />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex gap-8 items-center">
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="flex items-center gap-2 text-gray-800 text-sm font-medium uppercase hover:text-green-600 transition"
                            >
                                {link.name} {link.icon}
                            </Link>
                        ))}
                    </div>

                    {/* Search & Mobile Menu Button */}
                    <div className="flex items-center gap-4">
                        {/* Search Icon */}
                        <button className="text-gray-600 hover:text-green-600 transition">
                            <Search size={20} />
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-gray-800 focus:outline-none"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="md:hidden bg-white border-t border-gray-200 px-6 py-4"
                        >
                            {navLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    className="block py-2 text-gray-800 text-sm font-medium uppercase hover:text-green-600 transition"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Push Content Below Navbar */}
            <div className="pt-24"></div>
        </>
    );
}
