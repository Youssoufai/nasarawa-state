"use client"
import React from 'react'
import { Clock } from "lucide-react";
const articles = [
    {
        id: 1,
        image: "governor.jpeg",
        date: "10 MAR. 2025",
        title: "The Executive Governor of Nasarawa State, His Excellency Engr. Abdullahi A. Sule was the Special Guest of honor at the joint Ceremony of the Investiture of the Chancellor and Matriculation of the Pioneer Class of Phoenix University Agwada, kokona LGA of Nasarawa State.",
        category: "EDUCATION",
        readTime: "4 MINS READ",
    },
    {
        id: 2,
        image: "governor2.jpeg",
        date: "10 MAR. 2025",
        title: "AKWANGA LGA GETS IT’S SHARE OF FG FREE FERTILIZER as His Excellency, Engr. Abdullahi A. Sule monitored the distribution of 1100 bags to farmers in the 11 wards of the LGA.",
        category: "AGRICULTURE",
        readTime: "2 MINS READ",
    },
    {
        id: 3,
        image: "governor3.jpeg",
        date: "10 MAR. 2025",
        title: "Former Bauchi State Governor, Alh. Ahmadu Adamu Mu’azu and the Polish Ambassador to Nigeria, H.E. Mrs. Joanna Tarnawska, today Commissioned two projects executed by the Engr Abdullahi A. Sule administration in Akwanga LGA.",
        category: "CONSTRUCTION",
        readTime: "3 MINS READ",
    },
];
const News = () => {
    return (
        <>
            <section className='h-full p-11'>
                <div className='space-y-3'>
                    <h1 className='text-3xl text-center text-[#000000]'>Stay Informed with the latest news</h1>
                    <h3 className='text-[#999] text-center'>Read latest news and events in Nasarawa state</h3>
                </div>
                <section>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                        {articles.map((article) => (
                            <div key={article.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                                <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <p className="text-sm text-gray-500">{article.date}</p>
                                    <h2 className="text-lg font-semibold text-gray-900 mt-1">
                                        {article.title}
                                    </h2>
                                    <div className="flex items-center justify-between mt-3">
                                        <span className="px-3 py-1 text-xs font-bold text-white bg-green-600 rounded-full">
                                            {article.category}
                                        </span>
                                        <div className="flex items-center text-gray-500 text-xs">
                                            <Clock className="w-4 h-4 mr-1" /> {article.readTime}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </section>
        </>
    )
}

export default News