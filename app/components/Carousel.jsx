"use client"
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React, { useRef, useEffect } from 'react'

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
    const scrollRef = useRef(null);

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
        }, 5000); // Scrolls every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="space-y-12 p-8">
            <section className="h-[75vh] flex flex-col items-center justify-center px-6 text-center">
                <div className="max-w-3xl">
                    <h1 className="font-bold text-4xl md:text-5xl leading-tight text-gray-900">
                        Browse 200+ online services for citizens and businesses
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Nasarawa State is committed to improving access to government services online, including taxes, licenses, permits, and more.
                    </p>
                </div>
            </section>

            <div className="relative w-full px-6">
                {/* Left Arrow */}
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-3 bg-gray-200 rounded-full shadow-md z-10 hover:bg-gray-300 transition"
                >
                    <ChevronLeft className="w-6 h-6 text-gray-700" />
                </button>

                {/* Scrollable Cards */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-hidden scroll-smooth no-scrollbar"
                >
                    {categories.map((item, index) => (
                        <div
                            key={index}
                            className="w-[320px] min-w-[320px] rounded-lg overflow-hidden shadow-lg transition-all duration-300 group"
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
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-gray-200 rounded-full shadow-md z-10 hover:bg-gray-300 transition"
                >
                    <ChevronRight className="w-6 h-6 text-gray-700" />
                </button>
            </div>

            <h2 className='text-center'>
                Ready to explore? <Link href='#' className='text-green-600 underline'>Browse All Services</Link>
            </h2>
        </div>
    )
}

export default Carousel;
