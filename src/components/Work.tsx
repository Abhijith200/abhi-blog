"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Digital Marketing", "Web Development"];

const projects = [
    {
        id: 1,
        title: "Fitness & Health",
        description: "In pursuit of good health - A modern fitness experience platform.",
        category: "Web Development",
        image: "/projects/project4.png",
        link: "https://slog-fitness.web.app/",
    },
    {
        id: 2,
        title: "Job Placement Portal",
        description: "Job Listing & Career Placement Web Application",
        category: "Web Development",
        image: "/projects/project2.png",
        link: "https://betterjob-placement.web.app/",
    },
    {
        id: 3,
        title: "Business Consulting",
        description: "GrayFord Consultants - Establish your business with confidence.",
        category: "Digital Marketing",
        image: "/projects/grayford.jpg",
        link: "https://www.grayfordconsultants.com/",
    },
    {
        id: 4,
        title: "Aurum & Stone Jewels",
        description: "Hand-crafted heirloom jewelry inspired by tradition and modern aesthetics.",
        category: "Web Development",
        image: "/projects/jewelry.png",
        link: "http://aurum-gold-two.vercel.app/",
    },
    // {
    //     id: 5,
    //     title: "Company Website",
    //     description: "",
    //     category: "UI/UX",
    //     image: "",
    //     link: "",
    // },
];

export function Work() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter((p) => p.category === activeCategory);

    return (
        <section id="work" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-white mb-4">
                        My Recent Works
                    </h2>

                    <div className="flex flex-wrap justify-center gap-2 mt-8 bg-black/40 p-2 rounded-full border border-white/10 backdrop-blur-sm">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat
                                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg"
                                    : "text-white/60 hover:text-white"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div className="grid md:grid-cols-2 gap-8" layout>
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group relative group rounded-3xl overflow-hidden border border-white/10 bg-white/5"
                            >
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-white/70 mb-4">{project.description}</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-medium text-primary">{project.category}</span>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                            <Button size="sm" variant="outline" className="rounded-full border-white/20">View Project</Button>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
