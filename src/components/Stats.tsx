"use client";

import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

function AnimatedCounter({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, isVisible]);

  return (
    <span className="text-4xl md:text-6xl font-bold text-white transition-all hover:text-primary tabular-nums">
      {count}{suffix}
    </span>
  );
}

const stats = [
    {
        value: 2,
        suffix: "",
        label: "Years of Experience",
    },
    {
        value: 20,
        suffix: "+",
        label: "Project Completed",
    },
    {
        value: 10,
        suffix: "+",
        label: "Happy Clients",
    },
    {
        value: 10,
        suffix: "+",
        label: "Client Reviews",
    },
];

export function Stats() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <section ref={ref} className="py-10 bg-background/50 border-y border-white/5 backdrop-blur-sm">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                            <AnimatedCounter value={stat.value} suffix={stat.suffix} isVisible={isInView} />
                            <span className="text-white/60 text-sm md:text-base leading-tight max-w-[100px]">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
