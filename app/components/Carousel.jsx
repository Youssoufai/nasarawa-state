"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const categories = [
    {
        title: "Housing in Nasarawa",
        description: "GET INFO ON HOUSING, PERMITS, OPAL MEMBERSHIP, LUC PAYMENTS ETC.",
        image: "/housing.svg",
    },
    {
        title: "Visit and Tour Nasarawa",
        description: "BOOK YOUR TRIP, GET A TOUR GUIDE, HOW TO PROCESS YOUR VISA",
        image: "/travel.svg",
    },
    {
        title: "Work in Nasarawa",
        description: "FIND OUT THINGS TO KNOW ABOUT WORKING IN NASARAWA",
        image: "/work.svg",
    },
    {
        title: "School in Nasarawa",
        description: "FIND OUT ABOUT SCHOOLING IN NASARAWA AND EDUCATIONAL SERVICES",
        image: "/school.svg",
    },
];

const Carousel = () => {
    const scrollRef = useRef(null); // ✅ Fixed useRef syntax

    const scroll = (direction) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === "left" ? -320 : 320,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            scroll("right");
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="space-y-12 p-6 md:p-8">
            {/* Hero Section */}
            <section className="h-[65vh] flex flex-col items-center justify-center text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="max-w-3xl"
                >
                    <h1 className="font-bold text-3xl md:text-5xl text-gray-900 leading-tight">
                        Browse 200+ Online Services for Citizens and Businesses
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Nasarawa State is committed to improving access to government services online, including taxes, licenses, permits, and more.
                    </p>
                </motion.div>
            </section>

            {/* Carousel */}
            <div className="relative w-full px-4 md:px-6">
                {/* Left Arrow */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => scroll("left")}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-3 bg-gray-200 rounded-full shadow-md z-10 hover:bg-gray-300 transition"
                >
                    <ChevronLeft className="w-6 h-6 text-gray-700" />
                </motion.button>

                {/* Scrollable Cards */}
                <div ref={scrollRef} className="flex gap-6 overflow-x-hidden no-scrollbar scroll-smooth overflow-hidden">

                    {categories.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="w-[320px] min-w-[320px] rounded-lg shadow-lg transition-all duration-300 group overflow-hidden"
                        >
                            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                            <div className="bg-white p-4 transition-all duration-300 group-hover:bg-green-700">
                                <h3 className="text-lg font-bold text-black group-hover:text-white">
                                    {item.title} ↗
                                </h3>
                                <p className="mt-2 text-sm text-gray-700 group-hover:text-white">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Right Arrow */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => scroll("right")}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-gray-200 rounded-full shadow-md z-10 hover:bg-gray-300 transition"
                >
                    <ChevronRight className="w-6 h-6 text-gray-700" />
                </motion.button>
            </div>

            {/* CTA */}
            <h2 className="text-center">
                Ready to explore?{" "}
                <Link href="#" className="text-green-600 underline">
                    Browse All Services
                </Link>
            </h2>
        </div>
    );
};

export default Carousel;
