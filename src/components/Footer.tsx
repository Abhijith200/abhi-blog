import Link from "next/link";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-background border-t border-white/5 py-12">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <Link href="/" className="text-2xl font-bold tracking-tighter">
                        G<span className="text-primary">.</span>
                    </Link>
                    <p className="text-white/50 text-sm mt-2">
                        © {new Date().getFullYear()} Abhijith V. All rights reserved.
                    </p>
                </div>

                <ul className="flex items-center gap-8 text-sm font-medium text-white/70">
                    <li>
                        <Link href="#services" className="hover:text-primary transition-colors">
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link href="#work" className="hover:text-primary transition-colors">
                            Work
                        </Link>
                    </li>
                    <li>
                        <Link href="#contact" className="hover:text-primary transition-colors">
                            Contact
                        </Link>
                    </li>
                </ul>

                <div className="flex items-center gap-4">
                    {[Github, Twitter, Linkedin, Instagram].map((Icon, i) => (
                        <a
                            key={i}
                            href="#"
                            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-all hover:-translate-y-1"
                        >
                            <Icon size={18} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
