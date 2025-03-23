import React from "react";
import { CheckCircle } from "lucide-react";

const MissionVision = () => {
    return (
        <section className="relative bg-cover bg-center h-full py-20 px-6 md:px-12 lg:px-20"
            style={{ backgroundImage: "url('/Abdullahi-Sule.webp')" }} // Change to actual image path
        >
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-black/70 bg-opacity-20"></div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto text-center text-white">
                <h2 className="text-4xl font-bold uppercase tracking-wide mb-6">
                    Our Vision & Mission
                </h2>
                <p className="text-lg font-light max-w-3xl mx-auto">
                    We are committed to building a prosperous, inclusive, and forward-thinking
                    Nasarawa State driven by innovation, sustainable development, and people-focused governance.
                </p>

                <div className="grid md:grid-cols-2 gap-12 mt-12">
                    {/* Vision Card */}
                    <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-8 shadow-lg hover:shadow-2xl transition">
                        <div className="flex items-center gap-4">
                            <CheckCircle size={32} className="text-green-400" />
                            <h3 className="text-2xl font-semibold">Our Vision</h3>
                        </div>
                        <p className="mt-4 text-gray-200">
                            To establish Nasarawa as a leading state in governance, economic empowerment,
                            and infrastructural development while ensuring a high quality of life for all citizens.
                        </p>
                    </div>

                    {/* Mission Card */}
                    <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-8 shadow-lg hover:shadow-2xl transition">
                        <div className="flex items-center gap-4">
                            <CheckCircle size={32} className="text-green-400" />
                            <h3 className="text-2xl font-semibold">Our Mission</h3>
                        </div>
                        <p className="mt-4 text-gray-200">
                            To drive sustainable growth through good governance, strategic investments,
                            economic diversification, and citizen empowerment while maintaining transparency
                            and accountability in leadership.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVision;
