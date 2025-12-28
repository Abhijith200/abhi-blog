"use client";

import { BadgeCheck, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

const experience = [
    {
        date: "2023 - Present",
        title: "Lead Developer",
        company: "Tech Solutions Inc.",
        color: "group-hover:text-purple-400",
    },
    {
        date: "2021 - 2023",
        title: "Senior UI/UX Designer",
        company: "Creative Agency",
        color: "group-hover:text-pink-400",
    },
    {
        date: "2019 - 2021",
        title: "Frontend Developer",
        company: "StartUp Hub",
        color: "group-hover:text-blue-400",
    },
    {
        date: "2018 - 2019",
        title: "Junior Developer",
        company: "Web Studio",
        color: "group-hover:text-cyan-400",
    },
];

const education = [
    {
        date: "2020 - 2022",
        title: "Master in Computer Science",
        school: "Tech University",
    },
    {
        date: "2016 - 2020",
        title: "Bachelor in Design",
        school: "Design Institute",
    },
    {
        date: "2014 - 2016",
        title: "Web Development Certification",
        school: "Online Academy",
    },
    {
        date: "2012 - 2014",
        title: "Computer Science Basics",
        school: "High School",
    },
];

export function Experience() {
    return (
        <section id="experience" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Experience Column */}
                    <div>
                        <div className="flex items-center gap-4 mb-12">
                            <BadgeCheck className="text-primary w-8 h-8" />
                            <h2 className="text-3xl font-bold text-gradient">My Experience</h2>
                        </div>

                        <div className="space-y-6">
                            {experience.map((item, index) => (
                                <div
                                    key={index}
                                    className="group bg-white/5 border border-white/5 rounded-2xl p-8 hover:bg-white/10 hover:border-primary/30 transition-all duration-300"
                                >
                                    <span className={cn("text-primary font-bold text-sm mb-2 block", item.color)}>
                                        {item.date}
                                    </span>
                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-white transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/60 text-sm">
                                        {item.company}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education Column */}
                    <div>
                        <div className="flex items-center gap-4 mb-12">
                            <GraduationCap className="text-primary w-8 h-8" />
                            <h2 className="text-3xl font-bold text-gradient">My Education</h2>
                        </div>

                        <div className="space-y-6">
                            {education.map((item, index) => (
                                <div
                                    key={index}
                                    className="group bg-white/5 border border-white/5 rounded-2xl p-8 hover:bg-white/10 hover:border-primary/30 transition-all duration-300"
                                >
                                    <span className="text-primary font-bold text-sm mb-2 block">
                                        {item.date}
                                    </span>
                                    <h3 className="text-xl font-bold text-white mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/60 text-sm">
                                        {item.school}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
