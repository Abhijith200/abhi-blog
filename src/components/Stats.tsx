"use client";

import { motion } from "framer-motion";

const stats = [
    {
        value: "2",
        label: "Years of Experience",
    },
    {
        value: "30+",
        label: "Project Completed",
    },
    {
        value: "20",
        label: "Happy Clients",
    },
    {
        value: "2",
        label: "Years of Experience", // Intentionally duplicating as per visual if needed, but let's assume it's "Awards Won" or just keeping 3 for now to be safe, but user image had 4. Let's make the 4th one "Years of Experience" or maybe it was a mistake. I will stick to 3 unique ones or make the 4th "Awards Won" to be safe. Actually, looking at the image provided in context, it specifically says "14 Years of Experience" again. It might be a carousel. I'll just render 4 items as requested.
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
