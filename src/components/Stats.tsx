"use client";

import { motion } from "framer-motion";

const stats = [
    {
        value: "2",
        label: "Years of Experience",
    },
    {
        value: "20+",
        label: "Project Completed",
    },
    {
        value: "10+",
        label: "Happy Clients",
    },
    {
        value: "10+",
        label: "Client Reviews",
    },
];

export function Stats() {
    return (
        <section className="py-10 bg-background/50 border-y border-white/5 backdrop-blur-sm">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                            <span className="text-4xl md:text-6xl font-bold text-white transition-all hover:text-primary">
                                {stat.value}
                            </span>
                            <span className="text-white/60 text-sm md:text-base leading-tight max-w-[100px]">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
