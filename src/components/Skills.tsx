"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
    { name: "Figma", level: "90%", image: "/skills/figma.png" },
    { name: "HTML5", level: "95%", image: "/skills/html.png" },
    { name: "CSS3", level: "90%", image: "/skills/css.png" },
    { name: "JavaScript", level: "85%", image: "/skills/javascript.png" },
    { name: "Next.js", level: "80%", image: "/skills/nextjs.jpg" },
    { name: "React", level: "85%", icon: "⚛️" },
    { name: "TailwindCSS", level: "95%", icon: "🌊" },
    // { name: "Node.js", level: "70%", icon: "🟩" },
];

export function Skills() {
    return (
        <section id="skills" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-white mb-4">
                        My Skills
                    </h2>
                    <p className="text-white/60 max-w-2xl">
                        We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/5 rounded-3xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 group cursor-pointer"
                        >
                            <div className="w-16 h-16 bg-black/50 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform relative overflow-hidden p-2">
                                {skill.image ? (
                                    <Image
                                        src={skill.image}
                                        alt={skill.name}
                                        fill
                                        className="object-contain p-2"
                                    />
                                ) : (
                                    skill.icon
                                )}
                            </div>
                            <div className="text-center">
                                <div className="text-primary font-bold text-xl mb-1">{skill.level}</div>
                                <div className="text-white/70 font-medium">{skill.name}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
