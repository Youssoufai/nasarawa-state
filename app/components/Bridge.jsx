import React from 'react';

const Bridge = () => {
    return (
        <section className='flex justify-between items-center gap-6 border-t border-gray-300 py-4'>
            <div className='text-center'>
                <h3 className='font-light uppercase text-sm tracking-wide'>Est. Population</h3>
                <p className='font-bold text-2xl'>22mn+</p>
            </div>

            <Divider />

            <div className='text-center'>
                <h3 className='font-light uppercase text-sm tracking-wide'>Number of Visitors</h3>
                <p className='font-bold text-2xl'>1.3mn+</p>
            </div>

            <Divider />

            <div className='text-center'>
                <h3 className='font-light uppercase text-sm tracking-wide'>State Revenue - 2023</h3>
                <p className='font-bold text-2xl'>N651.2bn</p>
            </div>

            <Divider />

            <div className='text-center'>
                <h3 className='font-light uppercase text-sm tracking-wide'>Vehicles on the Road</h3>
                <p className='font-bold text-2xl'>5.2mn+</p>
            </div>

            <Divider />

            <div className='text-center'>
                <h3 className='font-light uppercase text-sm tracking-wide'>Biggest Economy</h3>
                <p className='font-bold text-2xl'>6th in Africa</p>
            </div>
        </section>
    );
};

// SVG Divider Component
const Divider = () => (
    <svg height="40" width="2" className="text-gray-300">
        <line x1="1" y1="0" x2="1" y2="40" stroke="currentColor" strokeWidth="2" />
    </svg>
);

export default Bridge;
