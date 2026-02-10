"use client";

import { motion } from "framer-motion";
import { ArrowDownLeft, Download, Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-background">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />

            {/* Giant Background Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none select-none">
                <h1 className="text-[20vw] md:text-[30vw] font-bold text-white/[0.02] tracking-widest leading-none font-outline-2">
                    HI
                </h1>
            </div>

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="order-2 lg:order-1"
                >
                    <h2 className="text-2xl md:text-3xl font-medium mb-4 text-white">I am Abhijith V</h2>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-6">
                        <span className="text-purple-500">Frontend</span> React <br />
                        Developer.
                    </h1>
                    <p className="text-white/60 text-lg max-w-lg mb-8 leading-relaxed">
                        ReactJS Developer with 1+ years of experience, skilled in HTML, CSS, JavaScript, and React.js, passionate about building responsive, user-friendly, and visually appealing web interfaces with a strong focus on continuous learning and quality delivery.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-8 mb-12">
                        <a
                            href="/cv/abhi_frontend.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto"
                        >
                            <Button variant="outline" className="rounded-full px-8 py-6 text-lg border-purple-500/50 hover:bg-purple-500/10 transition-colors w-full sm:w-auto flex justify-between sm:justify-center">
                                Download CV <Download size={20} className="ml-2" />
                            </Button>
                        </a>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4 w-full sm:w-auto justify-center sm:justify-start">
                            {/* <Link href="#" className="w-10 h-10 rounded-full border border-purple-500/50 flex items-center justify-center text-purple-400 hover:bg-purple-500 hover:text-white transition-all">
                                <Twitter size={18} />
                            </Link> */}
                            <Link href="https://github.com/Abhijith200" className="w-10 h-10 rounded-full border border-purple-500/50 flex items-center justify-center text-purple-400 hover:bg-purple-500 hover:text-white transition-all">
                                <Github size={18} /> {/* Using Github as placeholder for Dribbble-like icon if need be, or just Github */}
                            </Link>
                            <Link href="https://www.linkedin.com/in/abhijith-v-1431a0336/" className="w-10 h-10 rounded-full border border-purple-500/50 flex items-center justify-center text-purple-400 hover:bg-purple-500 hover:text-white transition-all">
                                <Linkedin size={18} />
                            </Link>
                            <Link href="https://www.instagram.com/heyy.ab_hi_/" className="w-10 h-10 rounded-full border border-purple-500/50 flex items-center justify-center text-purple-400 hover:bg-purple-500 hover:text-white transition-all">
                                <Instagram size={18} />
                            </Link>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative order-1 lg:order-2 flex justify-center"
                >
                    <div className="relative w-full max-w-[450px] aspect-[4/5] rounded-[40px] overflow-hidden border border-white/10 bg-white/5 rotate-3 hover:rotate-0 transition-transform duration-500">
                        <Image
                            src="/profile.jpg"
                            alt="Abhijith V - Frontend React Developer"
                            fill
                            className="object-cover"
                            priority
                        />

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>

                    {/* Decorative Elements around image */}
                    <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-500/20 blur-[80px] rounded-full" />
                </motion.div>
            </div>
        </section>
    );
}
