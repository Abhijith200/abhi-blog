"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "UI/UX", "Web Design", "App Design"];

const projects = [
    {
        id: 1,
        title: "Brand Journey",
        description: "A strategic branding project focused on storytelling.",
        category: "Web Design",
        image: "/project1.jpg",
    },
    {
        id: 2,
        title: "Crypto Dashboard",
        description: "Real-time cryptocurrency tracking and analytics platform.",
        category: "App Design",
        image: "/project2.jpg",
    },
    {
        id: 3,
        title: "E-Commerce Hub",
        description: "Modern shopping experience with seamless checkout.",
        category: "Web Design",
        image: "/project3.jpg",
    },
    {
        id: 4,
        title: "Fitness Tracker",
        description: "Mobile application for tracking workouts and nutrition.",
        category: "UI/UX",
        image: "/project4.jpg",
    },
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
                                    {/* Placeholder for project image */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 flex items-center justify-center text-white/10 font-bold text-4xl">
                                        Project Preview
                                    </div>
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-white/70 mb-4">{project.description}</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-medium text-primary">{project.category}</span>
                                        <Button size="sm" variant="outline" className="rounded-full border-white/20">View Project</Button>
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
