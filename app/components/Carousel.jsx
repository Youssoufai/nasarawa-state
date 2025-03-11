"use client"
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useRef } from 'react'


const categories = [
    {
        title: "Housing in Lagos",
        description: "GET INFO ON HOUSING, PERMITS, OPAL MEMBERSHIP, LUC PAYMENTS ETC.",
        image: "/housing-image.png", // Change this to actual image URL
        bgColor: "bg-green-600",
        textColor: "text-white",
    },
    {
        title: "Visit and Tour Lagos",
        description: "BOOK YOUR TRIP, GET A TOUR GUIDE, HOW TO PROCESS YOUR VISA",
        image: "/tour-image.png",
        bgColor: "bg-white",
        textColor: "text-black",
    },
    {
        title: "Work in Lagos",
        description: "FIND OUT THINGS TO KNOW ABOUT WORKING IN LAGOS",
        image: "/work-image.png",
        bgColor: "bg-white",
        textColor: "text-black",
    },
];


const Carousel = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === "left" ? -300 : 300,
                behavior: "smooth",
            });
        }
    };
    return (
        <>
            <section className="h-screen flex flex-col items-center justify-center px-6 text-center">
                <div className="max-w-3xl">
                    <h1 className="font-bold text-4xl md:text-5xl leading-tight text-gray-900">
                        Browse 200+ online services for citizens and businesses
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Nasarawa State is committed to improving access to government services online, including taxes, licenses, permits, and more.
                    </p>
                </div>
            </section>


            <div className="relative w-full px-4">
                {/* Left Arrow */}
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full shadow-lg"
                >
                    <ChevronLeft className="w-6 h-6 text-gray-700" />
                </button>

                {/* Scrollable Cards */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth"
                >
                    {categories.map((item, index) => (
                        <div
                            key={index}
                            className="w-[320px] min-w-[320px] rounded-lg overflow-hidden shadow-md"
                        >
                            <img src={item.image} alt={item.title} className="w-full h-48" />
                            <div className={`${item.bgColor} p-4`}>
                                <h3 className={`text-lg font-bold ${item.textColor}`}>
                                    {item.title} ↗
                                </h3>
                                <p className={`mt-2 text-sm ${item.textColor}`}>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full shadow-lg"
                >
                    <ChevronRight className="w-6 h-6 text-gray-700" />
                </button>
            </div>

        </>

    )
}

export default Carousel;