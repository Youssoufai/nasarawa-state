"use client"
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
    { src: "id.png", alt: "ID Image" },
    { src: "ride.webp", alt: "Ride Image" },
    { src: "hospital.webp", alt: "Hospital Image" }
];

const Bridge = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);
        return () => clearInterval(interval);
    }, [current]);

    const nextSlide = () => {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    return (
        <>
            <section className="flex flex-wrap justify-center md:justify-between items-center gap-6 border-gray-300 p-6 md:p-12 text-center">
                {stats.map((stat, index) => (
                    <React.Fragment key={index}>
                        <div className="space-y-2">
                            <h3 className="font-light uppercase text-xs md:text-sm">{stat.title}</h3>
                            <motion.p
                                className="font-bold text-lg md:text-2xl"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                {stat.value}
                            </motion.p>
                        </div>
                        {index !== stats.length - 1 && <Divider />}
                    </React.Fragment>
                ))}
            </section>

            <section className="flex justify-center p-4">
                <div className="relative w-full max-w-[90%] md:max-w-[800px] mx-auto overflow-hidden rounded-xl">
                    <div className="relative w-full h-[250px] md:h-[400px]">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={images[current].src}
                                src={images[current].src}
                                alt={images[current].alt}
                                className="w-full h-full object-cover rounded-xl"
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.6 }}
                            />
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
                        <ChevronLeft size={24} />
                    </button>
                    <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
                        <ChevronRight size={24} />
                    </button>

                    {/* Dots Indicator */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={`w-3 h-3 rounded-full ${current === index ? "bg-white" : "bg-gray-500"}`}
                            ></button>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

// Data for stats section
const stats = [
    { title: "Est. Population", value: "2mn+" },
    { title: "Land Area Sq KM", value: "28,735.0" },
    { title: "State Revenue - 2023", value: "N651.2bn" },
    { title: "LGA", value: "13" },
    { title: "Internal Revenue Generated (2023)", value: "₦23,487,432,037.23" }
];

// SVG Divider Component
const Divider = () => (
    <svg height="30" width="2" className="text-gray-300 hidden md:block">
        <line x1="1" y1="0" x2="1" y2="30" stroke="currentColor" strokeWidth="2" />
    </svg>
);

export default Bridge;