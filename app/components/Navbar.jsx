import { ArrowUpRight, ChevronDown, Search } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    return (
        <>
            {/* Emergency Banner */}
            <div className="bg-dark-green p-3 text-center">
                <h1 className="text-white text-sm font-light tracking-wide">
                    Toll-free emergency lines (LASEMA) 767 | 112
                </h1>
            </div>

            {/* Navigation */}
            <nav className="flex items-center justify-between p-6 border-b border-gray-200 bg-white font-roboto">
                {/* Logo */}
                <div>
                    <img src="logo.png" className="h-[50px] w-[50px]" alt="Logo" />
                </div>

                {/* Navigation Links */}
                <div className="flex gap-8 items-center">
                    {[
                        { name: "HOME", icon: <ArrowUpRight size={16} /> },
                        { name: "GOVERNMENT", icon: <ChevronDown size={16} /> },
                        { name: "SERVICES", icon: <ArrowUpRight size={16} /> },
                        { name: "NEWSROOM", icon: <ArrowUpRight size={16} /> },
                        { name: "EVENTS", icon: <ArrowUpRight size={16} /> },
                        { name: "CONNECT", icon: <ArrowUpRight size={16} /> },
                    ].map((link, index) => (
                        <Link
                            key={index}
                            href="#"
                            className="flex items-center gap-2 text-gray-800 text-sm font-medium uppercase hover:text-green-600 transition"
                        >
                            {link.name} {link.icon}
                        </Link>
                    ))}
                </div>

                {/* Search Icon */}
                <div className="text-gray-600 hover:text-green-600 transition cursor-pointer">
                    <Search size={20} />
                </div>
            </nav>
        </>
    );
}
