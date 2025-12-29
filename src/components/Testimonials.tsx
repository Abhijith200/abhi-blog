"use client";

import { Quote } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Faris Mohammed",
        role: "CEO, Grayford Consultants",
        content: "Abhijith is an exceptional developer who delivered our project on time and exceeded our expectations. Highly recommended!",
        image: "/client1.jpg",
    },
    {
        id: 2,
        name: "Mohammed Nisham N K",
        role: "CEO, Future Consultancy",
        content: "The attention to detail and creative solutions provided by Abhijith transformed our online presence completely.",
        image: "/client2.jpg",
    },
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-white mb-4">
                        My Client's Stories
                    </h2>
                    <p className="text-white/60 max-w-2xl">
                        See what my clients have to say about working with me.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-white/5 border border-white/5 rounded-3xl p-8 relative hover:bg-white/10 transition-colors"
                        >
                            <Quote className="absolute top-8 right-8 text-primary/20 w-12 h-12" />

                            <div className="flex items-center gap-4 mb-6">
                                {/* Placeholder for Client Image */}
                                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center font-bold text-white text-xl">
                                    {testimonial.name[0]}
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                                    <p className="text-sm text-white/50">{testimonial.role}</p>
                                </div>
                            </div>

                            <p className="text-white/80 leading-relaxed">
                                "{testimonial.content}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
