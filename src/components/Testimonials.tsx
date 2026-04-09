"use client";

import { Quote } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Faris Mohammed",
        role: "CEO, Grayford Consultants",
        content: "Our social media pages are now more active and engaging than ever. Increased followers, better reach, and improved conversions.",
        image: "/client1.jpg",
    },
    {
        id: 2,
        name: "Mohammed Nisham N K",
        role: "CEO & Founder, Future Consultancy",
        content: "Clean code, modern design, and on-time delivery. The final website exceeded our exceptations and stands out in our industry",
        image: "/client2.jpg",
    },
    {
        id: 3,
        name: "Sulaiman Oorakkam",
        role: "CEO, Career Map Global",
        content: "The social media strategy completely transformed our brand presence. Consistent growth, better reach, and strong audience connection.",
        image: "/client2.jpg",
    },
    {
        id: 4,
        name: "Eby Varghese",
        role: "CEO & Founder, Green Valley Spices",
        content: "From design to deployment, everything was handled professionally. The website not only looks great but also performs exceptionally well across all devices",
        image: "/client2.jpg",
    },
    {
        id: 5,
        name: "Muhammed Siyad KP",
        role: "CEO & Founder, Origon",
        content: "Delivered a modern, fast and highly responsive website that perfectly reflects our brand. Attention to detail and smooth communication made the entire process seamless.",
        image: "/client2.jpg",
    },
   {
        id: 6,
        name: "Indrajith V",
        role: "Founder, GridView Marketing",
        content: "Our Website transformation was incredible. It's faster, more user-friendly, and already bringing in more leads. Highly recommended!.",
        image: "/client2.jpg",
    }, 
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-white mb-4">
                        My Client&apos;s Stories
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
                                &quot;{testimonial.content}&quot;
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
