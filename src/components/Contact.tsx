"use client";

import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export function Contact() {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <section id="contact" className="py-24 bg-background relative">
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 bg-white/5 border border-white/5 rounded-[40px] p-8 md:p-12 overflow-hidden">

                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-white mb-6">
                            Let's work together!
                        </h2>
                        <p className="text-white/60 mb-12 max-w-md">
                            I design and code beautifully simple things, and I love what I do. Just simple like that!
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    placeholder="First name"
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors"
                                    value={formData.firstname}
                                    onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
                                />
                                <input
                                    type="text"
                                    placeholder="Last name"
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors"
                                    value={formData.lastname}
                                    onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone number"
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>

                            <select
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-6 py-4 text-white/70 focus:outline-none focus:border-primary transition-colors appearance-none"
                                value={formData.service}
                                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            >
                                <option value="" disabled>Select a service</option>
                                <option value="web" className="text-black">Web Design</option>
                                <option value="ux" className="text-black">UI/UX Design</option>
                                <option value="dev" className="text-black">Web Development</option>
                            </select>

                            <textarea
                                placeholder="Message"
                                rows={4}
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors resize-none"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />

                            <Button type="submit" size="lg" className="w-full md:w-auto px-12 rounded-full gradient-btn">
                                Send Message
                            </Button>
                        </form>
                    </div>

                    <div className="hidden lg:flex flex-col justify-center space-y-12 pl-12 border-l border-white/5">
                        <div className="flex items-start gap-6">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center shrink-0">
                                <Phone className="text-white w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-white/50 font-medium text-sm mb-1">Phone</h4>
                                <a href="tel:+01123456789" className="text-xl font-bold text-white hover:text-primary transition-colors">+01 123 456 789</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center shrink-0">
                                <Mail className="text-white w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-white/50 font-medium text-sm mb-1">Email</h4>
                                <a href="mailto:gerolddesign@gmail.com" className="text-xl font-bold text-white hover:text-primary transition-colors">gerolddesign@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center shrink-0">
                                <MapPin className="text-white w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-white/50 font-medium text-sm mb-1">Address</h4>
                                <p className="text-xl font-bold text-white max-w-[200px]">Warne Park Street, Pine, FL 33157, New York</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
