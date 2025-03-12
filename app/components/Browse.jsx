"use client";
import React from "react";
import { Megaphone, Sprout, Archive, PieChart } from "lucide-react";

const categories = [
    {
        title: "Advertisement",
        description:
            "Register/Apply for different signage options, Outdoor practitioner permit",
        icon: () => <Megaphone className="mx-auto h-14 w-14 text-green-500 group-hover:text-white mb-4" />,
    },
    {
        title: "Agriculture",
        description:
            "Apply for a Farming License, farmer's permit, Agricultural loan, Land Allocations e.t.c",
        icon: () => <Sprout className="mx-auto h-14 w-14 text-green-500 group-hover:text-white mb-4" />,
    },
    {
        title: "Archives & Resources",
        description:
            "Preserving the Past, Shaping the Future: Lagos State Archives and Resources",
        icon: () => <Archive className="mx-auto h-14 w-14 text-green-500 group-hover:text-white mb-4" />,
    },
    {
        title: "Business, Trade & Commerce",
        description:
            "SMEDAN Registration, Tax payment, SME digital academy, LCCI",
        icon: () => <PieChart className="mx-auto h-14 w-14 text-green-500 group-hover:text-white mb-4" />,
    },
    {
        title: "Citizen Services",
        description: "Find services for Nasarawa here",
        icon: () => <PieChart className="mx-auto h-14 w-14 text-green-500 group-hover:text-white mb-4" />
    }
];

const Browse = () => {
    return (
        <section className="bg-faint-green h-screen p-16">
            <div className="space-y-6 text-center">
                <h1 className="text-5xl font-bold">
                    Browse all Lagos State Services & Topics
                </h1>
                <h3 className="font-thin">
                    Making it easier to have quick access to Lagos State services and
                    information
                </h3>
            </div>
            <div className="bg-gray-50 py-16 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {categories.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md text-center hover:bg-green-500 transition-all duration-300 group"
                        >
                            {item.icon()} {/* Calling the function to render the icon */}
                            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-white">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm mt-2 group-hover:text-white">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Browse;
