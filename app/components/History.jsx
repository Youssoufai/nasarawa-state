import Image from 'next/image'
import React from 'react'

const History = () => {
    return (
        <>
            <section className='h-full p-11 space-y-8'>
                <div>
                    <h1 className='text-center text-4xl'>Our <span className="text-green-500">History</span></h1>
                </div>

                <section className="py-16 px-6 md:px-12 lg:px-20">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                        {/* Image Section */}
                        <div className="w-full lg:w-1/2">
                            <img
                                src="map.webp"
                                width='100'
                                alt="Historic view of Nasarawa State"
                                className="rounded-2xl shadow-lg w-full h-auto object-cover"
                                height='100'
                            />
                        </div>

                        {/* Text Section */}
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
                                The Journey of Nasarawa State
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                Established on October 1, 1996, Nasarawa State was carved out of the former
                                Plateau State under the administration of General Sani Abacha. Since its
                                creation, the state has remained a beacon of cultural heritage, economic progress,
                                and governance excellence in Nigeria.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                Strategically located in north-central Nigeria, Nasarawa is known as the Home of Solid Minerals,
                                boasting vast natural resources and a rich agricultural landscape. Over the years, the state has
                                grown into a hub for economic activities, infrastructural advancements, and social transformation.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                With a vision for sustainable development and good governance, Nasarawa continues to thrive
                                through strategic investments, policy reforms, and an unwavering commitment to its people.
                            </p>
                        </div>

                    </div>
                </section>
            </section>

        </>
    )
}

export default History