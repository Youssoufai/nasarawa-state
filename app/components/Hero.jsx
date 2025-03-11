import React from "react";
import { ArrowRight } from "lucide-react"; // Importing icon for button

const Hero = () => {
    return (
        <main className="flex h-screen flex-col justify-center items-center px-6 text-center">
            {/* Hero Text */}
            <div className="max-w-4xl text-center font-roboto">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                    Simplifying your <br />
                    <span className="text-green-600">access to Nasarawa State Government</span> Topics and Services
                </h1>
            </div>

            {/* Search Bar */}
            <div className="mt-8 flex items-center bg-gray-100 border border-gray-300 rounded-lg shadow-md px-4 py-3 w-full max-w-4xl">
                <input
                    type="text"
                    placeholder="Search topics and services..."
                    className="w-full outline-none text-gray-700 text-lg p-2 bg-transparent"
                />
                <button className="bg-green-600 text-white px-6 py-2 rounded-lg text-lg font-medium flex items-center gap-2 hover:bg-green-700 transition">
                    SEARCH <ArrowRight size={20} />
                </button>
            </div>

            {/* Navigation Buttons */}
            <div className="mt-6 flex gap-3">
                <button className="border border-gray-300 px-4 py-2 rounded-md text-sm font-thin hover:bg-gray-100 transition">
                    BENEFITS
                </button>
                <button className="border border-gray-300 px-4 py-2 rounded-md text-sm font-thin hover:bg-gray-100 transition">
                    ADVERTISE IN NASARAWA
                </button>
                <button className="border border-gray-300 px-4 py-2 rounded-md text-sm font-thin hover:bg-gray-100 transition">
                    VISIT NASARAWA
                </button>
                <button className="border border-gray-300 px-4 py-2 rounded-md text-sm font-thin hover:bg-gray-100 transition">
                    PAY GOVERNMENT BILLS
                </button>
            </div>

            {/* Scroll Indicator */}
            <p className="mt-6 text-green-600 font-medium">
                GET STARTED, <span className="underline">SCROLL DOWN</span> ↓
            </p>
        </main>
    );
};

export default Hero;
