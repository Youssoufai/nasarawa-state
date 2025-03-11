import { ArrowUpRight, ChevronDown, Search } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const Navbar = () => {
    return (
        <>

            <div className='bg-dark-green p-2 text-center'>
                <h1 className='text-white font-thin'>Toll-free emergency lines (LASEMA) 767 | 112</h1>
            </div>
            <nav className="flex gap-6 justify-between p-6 border-b">
                <div>
                    <img src="logo.png" className='h-[50px] w-[50px]' alt="" />
                </div>
                <div className='flex gap-6 items-center'>
                    <Link href="#" className="flex items-center gap-1">
                        HOME <ArrowUpRight size={16} />
                    </Link>
                    <Link href="#" className="flex items-center gap-1">
                        GOVERNMENT <ChevronDown size={16} />
                    </Link>
                    <Link href="#" className="flex items-center gap-1">
                        SERVICES <ArrowUpRight size={16} />
                    </Link>
                    <Link href="#" className="flex items-center gap-1">
                        NEWSROOM <ArrowUpRight size={16} />
                    </Link>
                    <Link href="#" className="flex items-center gap-1">
                        EVENTS <ArrowUpRight size={16} />
                    </Link>
                    <Link href="#" className="flex items-center gap-1">
                        CONNECT <ArrowUpRight size={16} />
                    </Link>
                </div>
                <div>
                    <Search />
                </div>
            </nav>
        </>
    )
}

export default Navbar;