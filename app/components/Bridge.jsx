"use client"
import React, { useEffect, useState } from 'react';
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
        }, 3000); // Auto-slide every 3 seconds
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
            <section className='flex justify-between items-center gap-6 border-gray-300 p-12'>
                <div className='text-center space-y-4'>
                    <h3 className='font-light uppercase text-sm '>Est. Population</h3>
                    <p className='font-bold text-2xl'>22mn+</p>
                </div>

                <Divider />

                <div className='text-center space-y-4'>
                    <h3 className='font-light uppercase text-sm '>Number of Visitors</h3>
                    <p className='font-bold text-2xl'>1.3mn+</p>
                </div>

                <Divider />

                <div className='text-center space-y-4'>
                    <h3 className='font-light uppercase text-sm '>State Revenue - 2023</h3>
                    <p className='font-bold text-2xl'>N651.2bn</p>
                </div>

                <Divider />

                <div className='text-center space-y-4'>
                    <h3 className='font-light uppercase text-sm tracking-wide'>Vehicles on the Road</h3>
                    <p className='font-bold text-2xl'>5.2mn+</p>
                </div>

                <Divider />

                <div className='text-center space-y-4'>
                    <h3 className='font-light uppercase text-sm tracking-wide'>Biggest Economy</h3>
                    <p className='font-bold text-2xl'>6th in Africa</p>
                </div>
            </section>
            <section className='flex'>
                <div className="relative w-full max-w-[800px] mx-auto overflow-hidden rounded-xl">
                    <div className="relative w-full h-[400px]">
                        <AnimatePresence>
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

                    {/* Left Button */}
                    <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
                        <ChevronLeft size={24} />
                    </button>

                    {/* Right Button */}
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

// SVG Divider Component
const Divider = () => (
    <svg height="40" width="2" className="text-gray-300">
        <line x1="1" y1="0" x2="1" y2="40" stroke="currentColor" strokeWidth="2" />
    </svg>
);

export default Bridge;
