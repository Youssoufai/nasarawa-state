"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    Megaphone, Sprout, Archive, PieChart, User, MessageSquare,
    AlertTriangle, Leaf, Calendar1, HelpCircle, Gift, HeartPulse,
    Home, IdCard, Briefcase, Building2, ShieldCheck, FileText,
    Banknote, Clapperboard, Church, Hammer, Atom, Landmark,
    School, Receipt, Trophy, CreditCard
} from "lucide-react";

const categories = [
    { title: "Advertisement", description: "Register/Apply for different signage options, Outdoor practitioner permit", icon: Megaphone },
    { title: "Agriculture", description: "Apply for a Farming License, farmer's permit, Agricultural loan, Land Allocations e.t.c", icon: Sprout },
    { title: "Archives & Resources", description: "Preserving the Past, Shaping the Future", icon: Archive },
    { title: "Business, Trade & Commerce", description: "SMEDAN Registration, Tax payment, SME digital academy", icon: PieChart },
    { title: "Citizen Services", description: "Access government services for residents", icon: User },
    { title: "Complaints & Feedback", description: "Submit complaints, provide feedback", icon: MessageSquare },
    { title: "Disaster & Emergencies", description: "Stay informed about disaster response", icon: AlertTriangle },
    { title: "Education", description: "Explore educational opportunities", icon: School },
    { title: "Environment", description: "Learn about environmental programs", icon: Leaf },
    { title: "Events", description: "Discover government-sponsored events", icon: Calendar1 },
    { title: "FAQs & Enquiries", description: "Find answers to frequently asked questions", icon: HelpCircle },
    { title: "Government Benefits", description: "Access financial aid, welfare programs", icon: Gift },
    { title: "Health Services", description: "Find hospitals, clinics, emergency care", icon: HeartPulse },
    { title: "Housing and Lands", description: "Explore housing schemes, land ownership", icon: Home },
    { title: "Identity Management", description: "Apply for national IDs, passports", icon: IdCard },
    { title: "Job Opportunities", description: "Find government job listings", icon: Briefcase },
    { title: "MDAs", description: "Learn about various ministries, departments", icon: Building2 },
    { title: "Laws & Safety Guide", description: "Stay informed about legal policies", icon: ShieldCheck },
    { title: "Licenses & Permits", description: "Apply for business licenses, permits", icon: FileText },
    { title: "Loans & Trust Funds", description: "Get information on business grants", icon: Banknote },
    { title: "Media & Entertainment", description: "Explore entertainment and creative industry", icon: Clapperboard },
    { title: "Payment & Levies", description: "Make government payments conveniently", icon: CreditCard },
    { title: "Pilgrimage and Religion", description: "Access pilgrimage support services", icon: Church },
    { title: "Projects & Construction", description: "Learn about government projects", icon: Hammer },
    { title: "Science & Tech", description: "Discover technological advancements", icon: Atom },
    { title: "Security Services", description: "Find police services, crime reporting", icon: ShieldCheck },
    { title: "Sports", description: "Stay updated on sports programs", icon: Trophy },
    { title: "Tax", description: "File taxes, get tax clearance", icon: Receipt },
    { title: "Tourism & Culture", description: "Explore cultural heritage sites", icon: Landmark }
];

const Browse = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-center mb-8">Explore Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categories.map((category, index) => (
                    <motion.div
                        key={index}
                        className="bg-white p-6 rounded-xl shadow-md group cursor-pointer transform hover:scale-105 transition-all"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <div className="flex justify-center items-center mb-4">
                            <category.icon className="h-12 w-12 text-green-500 group-hover:text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-center mb-2">{category.title}</h3>
                        <p className="text-gray-600 text-center">{category.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Browse;