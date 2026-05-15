"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const services = [
    {
        id: "01",
        title: "Frontend Development",
        description: "I build fast, responsive, and scalable web applications using modern technologies like React.js, JavaScript, and Tailwind CSS. My focus is on delivering clean code and seamless user experiences across all devices.",
    },
    {
        id: "02",
        title: "UI/UX Implementation",
        description: "I transform designs into pixel-perfect, interactive user interfaces. Whether it’s from Figma or custom ideas, I ensure visually appealing and user-friendly layouts with smooth interactions.",
    },
    {
        id: "03",
        title: "Component-Based Development",
        description: "I develop reusable and modular UI components, making your application scalable, maintainable, and efficient for future growth.",
    },
    {
        id: "04",
        title: "Website Development",
        description: "I create different types of websites tailored to your needs: Business & Company Websites, Portfolio Websites, Landing Pages, Job Portals & Listing Platforms, Service-based Websites.",
    },
    {
        id: "05",
        title: "Deployment & Maintenance",
        description: "I deploy websites using platforms like Vercel and Firebase, ensuring smooth performance and continuous updates. I also provide ongoing maintenance and support.",
    },
];

export function Services() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id="services" className="py-24 bg-background relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-white mb-4">
                        My Services
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
