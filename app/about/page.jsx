import React from 'react';
import History from '../components/History';
import MissionVision from '../components/Mission';

const Page = () => {
    return (
        <>
            <section className="relative h-[90vh] bg-[url('/governor.jpeg')] bg-center bg-cover">
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/70"></div>

                {/* Content Goes Here */}
                <div className="relative z-10 flex items-center justify-center h-full text-white">
                    <h1 className="text-6xl font-bold">About <span className="text-green-500">Nasarawa</span></h1>
                </div>
            </section>
            <History />
            <MissionVision />
        </>
    );
};

export default Page;
