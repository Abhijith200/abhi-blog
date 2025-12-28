"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const services = [
    {
        id: "01",
        title: "Web Development",
        description: "Building responsive and performant websites using modern technologies like React, Next.js, and scaling them for growth.",
    },
    {
        id: "02",
        title: "UI/UX Design",
        description: "Creating intuitive and visually appealing interfaces that prioritize user experience and brand identity.",
    },
    {
        id: "03",
        title: "Content Writing",
        description: "Crafting compelling content that engages your audience and drives conversions.",
    },
    {
        id: "04",
        title: "Digital Marketing",
        description: "Strategies to increase your online presence and reach your target audience effectively.",
    },
];

export function Services() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id="services" className="py-24 bg-background relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-white mb-4">
                        My Quality Services
                    </h2>
                    <p className="text-white/60 max-w-2xl">
                        We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={cn(
                                "group relative border-2 border-white/5 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-300 hover:border-primary/50",
                                hoveredIndex === index ? "bg-white/5" : "bg-transparent"
                            )}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Background Gradient on Hover */}
                            <div className={cn(
                                "absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-2xl opacity-0 transition-opacity duration-300",
                                hoveredIndex === index ? "opacity-100" : ""
                            )} />

                            <div className="relative z-10 flex items-center gap-6 md:gap-12 w-full md:w-auto">
                                <span className="text-2xl font-bold text-white/30 group-hover:text-primary transition-colors">
                                    {service.id}
                                </span>
                                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                            </div>

                            <p className="relative z-10 text-white/60 text-sm md:text-base max-w-md text-center md:text-left">
                                {service.description}
                            </p>

                            <div className="relative z-10 transform group-hover:-rotate-45 transition-transform duration-300">
                                <ArrowUpRight className="text-white/30 group-hover:text-primary w-6 h-6 md:w-8 md:h-8" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
