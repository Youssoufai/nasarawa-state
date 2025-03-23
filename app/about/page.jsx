import React from 'react';

const Page = () => {
    return (
        <>
            <section className="relative h-screen bg-[url('/governor.jpeg')] bg-center bg-cover">
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/70"></div>

                {/* Content Goes Here */}
                <div className="relative z-10 flex items-center justify-center h-full text-white">
                    <h1 className="text-3xl font-bold">Welcome</h1>
                </div>
            </section>
        </>
    );
};

export default Page;
