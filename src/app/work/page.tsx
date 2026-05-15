import { Work } from "@/components/Work";
import Link from "next/link";

export default function WorkPage() {
    return (
        <main className="min-h-screen pt-20">
            <div className="container mx-auto px-6 mb-8 mt-12">
                <nav className="text-sm text-white/50 mb-4">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <span className="mx-2">/</span>
                    <span className="text-white">Work</span>
                </nav>
            </div>
            <Work />
        </main>
    );
}
