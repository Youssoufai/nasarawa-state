"use client";
import React from "react";
import {
    Megaphone, Sprout, Archive, PieChart, UserCheck,
    MessageCircle,
    AlertTriangle,
    Leaf,
    Calendar,
    HelpCircle,
    Gift,
    Heart,
    Home,
    IdCard,
    Briefcase,
    Building,
    Shield,
    FileText,
    DollarSign,
    Music,
    CreditCard,
    Globe,
    Wrench,
    FlaskConical,
    Lock,
    Receipt,
    Map,
    GraduationCap,
    Bus,
    Droplet,
    BookOpen,
    ShoppingBasket,
    Trophy,
    User,
    MessageSquare,
    HeartPulse,
    Building2,
    ShieldCheck,
    Banknote,
    Clapperboard,
    Church,
    Hammer,
    Atom,
    Landmark,
    School,
    Calendar1
} from "lucide-react";
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
        icon: () => <User className="mx-auto h-14 w-14 text-green-500 group-hover:text-white mb-4" />,
        description: "Access government services for residents, including community programs and assistance."
    },
    {
        title: "Complaints & Feedback",
        icon: () => <MessageSquare className="mx-auto h-14 w-14 text-green-500 group-hover:text-white mb-4" />,
        description: "Submit complaints, provide feedback, and report issues to government authorities."
    },
    {
        title: "Disaster & Emergencies",
        icon: () => <AlertTriangle className="mx-auto h-14 w-14 text-green-500 group-hover:text-white mb-4" />,
        description: "Stay informed about disaster response, emergency contacts, and relief services."
    },
    {
        title: "Education",
        icon: () => <GraduationCap className="mx-auto h-14 w-14 text-green-500 group-hover:text-white mb-4" />,
        description: "Explore educational opportunities, school admissions, scholarships, and learning resources."
    },
    {
        title: "Environment",
        icon: () => <Leaf className="mx-auto h-14 w-14 text-green-500 group-hover:text-white mb-4" />,
        description: "Learn about environmental programs, conservation efforts, and waste management services."
    },
    {
        title: "Events",
        icon: () => <Calendar1 className="mx-auto h-14 w-14 text-green-500 group-hover:text-white mb-4" />,
        description: "Discover government-sponsored events, community programs, and festivals happening near you."
    },
    {
        title: "FAQs & Enquiries",
        icon: () => <HelpCircle className="mx-auto h-14 w-14 text-green-500 group-hover:text-white mb-4" />,
        description: "Find answers to frequently asked questions and general government service inquiries."
    },
    {
        title: "Government Benefits",
        icon: () => <Gift className="mx-auto h-14 w-14 text-green-500 group-hover:text-white mb-4" />,
        description: "Access financial aid, welfare programs, grants, and other government benefits."
    },
    {
        title: "Health Services",
        icon: () => <HeartPulse className="mx-auto h-14 w-14 text-green-500 group-hover:text-white mb-4" />,
        description: "Find hospitals, clinics, emergency care, and healthcare programs."
    },
    {
        title: "Housing and Lands",
        icon: () => <Home className="mx-auto h-14 w-14 text-green-500 group-hover:text-white mb-4" />,
        description: "Explore housing schemes, land ownership processes, and property regulations."
    },
    {
        title: "Identity Management",
        icon: () => <IdCard className="mx-auto h-14 w-14 text-green-500 group-hover:text-white mb-4" />,
        description: "Apply for national IDs, passports, birth certificates, and other identity documents."
    },
    {
        title: "Job Opportunities",
        icon: () => <Briefcase className="mx-auto h-14 w-14 text-green-500 group-hover:text-white mb-4" />,
        description: "Find government job listings, vocational training, and employment resources."
    },
    {
        title: "Nasarawa State MDAs",
        icon: () => <Building2 className="mx-auto h-14 w-14 text-green-500 group-hover:text-white mb-4" />,
        description: "Learn about various ministries, departments, and agencies in Nasarawa State."
    },
    {
        title: "Laws & Safety Guide",
        icon: () => <ShieldCheck className="mx-auto h-14 w-14 text-green-500 group-hover:text-white mb-4" />,
        description: "Stay informed about legal policies, safety regulations, and law enforcement services."
    },
    {
        title: "License, Permits & Applications",
        icon: () => <FileText className="mx-auto h-14 w-14 text-green-500 group-hover:text-white mb-4" />,
        description: "Apply for business licenses, permits, and other government applications."
    },
    {
        title: "Loans & Trust Funds",
        icon: () => <Banknote className="mx-auto h-14 w-14 text-green-500 group-hover:text-white mb-4" />,
        description: "Get information on government-backed loans, business grants, and trust funds."
    },
    {
        title: "Media & Entertainment",
        icon: () => <Clapperboard className="mx-auto h-14 w-14 text-green-500 group-hover:text-white mb-4" />,
        description: "Explore entertainment, creative industry news, and government-sponsored media programs."
    },
    {
        title: "Payment & Levies",
        icon: () => <CreditCard className="mx-auto h-14 w-14 text-green-500 group-hover:text-white mb-4" />,
        description: "Make government payments, taxes, and levies conveniently online."
    },
    {
        title: "Pilgrimage and Religion",
        icon: () => <Church className="mx-auto h-14 w-14 text-green-500 group-hover:text-white mb-4" />,
        description: "Access pilgrimage support services, religious event registrations, and faith-based programs."
    },
    {
        title: "Projects And Construction",
        icon: () => <Hammer className="mx-auto h-14 w-14 text-green-500 group-hover:text-white mb-4" />,
        description: "Learn about government projects, construction permits, and infrastructure development."
    },
    {
        title: "Science and Technology",
        icon: () => <Atom className="mx-auto h-14 w-14 text-green-500 group-hover:text-white mb-4" />,
        description: "Discover technological advancements, innovation programs, and research initiatives."
    },
    {
        title: "Security Services",
        icon: () => <Lock className="mx-auto h-14 w-14 text-green-500 group-hover:text-white mb-4" />,
        description: "Find police services, crime reporting, and safety guidelines to ensure public security."
    },
    {
        title: "Sports",
        icon: () => <Trophy className="mx-auto h-14 w-14 text-green-500 group-hover:text-white mb-4" />,
        description: "Stay updated on sports programs, competitions, and government-supported athletic initiatives."
    },
    {
        title: "Tax",
        icon: () => <Receipt className="mx-auto h-14 w-14 text-green-500 group-hover:text-white mb-4" />,
        description: "File taxes, get tax clearance, and understand government tax policies."
    },
    {
        title: "Tourism & Culture",
        icon: () => <Landmark className="mx-auto h-14 w-14 text-green-500 group-hover:text-white mb-4" />,
        description: "Explore cultural heritage sites, tourism initiatives, and local traditions."
    },
    {
        title: "Training",
        icon: () => <School className="mx-auto h-14 w-14 text-green-500 group-hover:text-white mb-4" />,
        description: "Find professional training programs, skill development workshops, and learning opportunities."
    },
    {
        title: "Transportation",
        icon: () => <Bus className="mx-auto h-14 w-14 text-green-500 group-hover:text-white mb-4" />,
        description: "Get information on public transportation, road safety, and vehicle registration."
    },
    {
        title: "Water Services",
        icon: () => <Droplet className="mx-auto h-14 w-14 text-green-500 group-hover:text-white mb-4" />,
        description: "Access clean water services, report supply issues, and learn about water conservation."
    },


];

const Browse = () => {
    return (
        <section className="h-full p-16 bg-green-50">
            <div className="space-y-6 text-center">
                <h1 className="text-5xl font-bold">
                    Browse all Nasarawa State Services & Topics
                </h1>
                <h3 className="font-thin">
                    Making it easier to have quick access to Nasarawa State services and
                    information
                </h3>
            </div>
            <div className="py-16 px-6">
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
