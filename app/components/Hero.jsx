"use client"; // Ensure animations work in Next.js

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react"; // Importing icon for button

const Hero = () => {
    return (
        <main className="flex h-screen flex-col justify-center items-center px-6 text-center bg-gray-50">
            {/* Hero Text */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl text-center font-roboto"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    Simplifying your
                    <span className="text-green-600"> access to <br /> Nasarawa State Government <br /> </span> Topics and Services
                </h1>
            </motion.div>

            {/* Search Bar */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8 flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-4 py-3 w-full max-w-4xl"
            >
                <input
                    type="text"
                    placeholder="Search topics and services..."
                    className="w-full outline-none text-gray-700 text-lg p-2 bg-transparent"
                />
                <button className="bg-green-600 text-white px-6 py-2 rounded-lg text-lg font-medium flex items-center gap-2 hover:bg-green-700 transition">
                    SEARCH <ArrowRight size={20} />
                </button>
            </motion.div>

            {/* Navigation Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-6 flex flex-wrap justify-center gap-3"
            >
                {["BENEFITS", "ADVERTISE IN NASARAWA", "VISIT NASARAWA", "PAY GOVERNMENT BILLS"].map((item, index) => (
                    <button
                        key={index}
                        className="border border-gray-300 px-4 py-2 rounded-md text-sm font-thin hover:bg-gray-100 transition"
                    >
                        {item}
                    </button>
                ))}
            </motion.div>

            {/* Scroll Indicator */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mt-6 text-green-600 font-medium"
            >
                GET STARTED, <span className="underline">SCROLL DOWN</span> ↓
            </motion.p>
        </main>
    );
};

export default Hero;