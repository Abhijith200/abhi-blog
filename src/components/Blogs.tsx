import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const blogs = [
    {
        id: 1,
        title: "The Future of Web Development",
        date: "Dec 20, 2023",
        category: "Development",
        image: "/blogs/blog1.jpg",
    },
    {
        id: 2,
        title: "10 Tips for Better UI Design",
        date: "Nov 15, 2023",
        category: "Design",
        image: "/blogs/blog3.jpg",
    },
    {
        id: 3,
        title: "Understanding React Server Components",
        date: "Oct 05, 2023",
        category: "React",
        image: "/blogs/blog2.jpg",
    },
];

export function Blogs() {
    return (
        <section id="blog" className="py-24 bg-background border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-white">
                        Recent Blogs
                    </h2>
                    <Link href="#" className="hidden md:flex items-center gap-2 text-primary hover:text-white transition-colors">
                        View All <ArrowUpRight size={18} />
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="group cursor-pointer">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-white/5 border border-white/5">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white border border-white/10 z-10">
                                    {blog.category}
                                </div>
                            </div>

                            <div className="text-primary text-sm font-bold mb-2">{blog.date}</div>
                            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors mb-4 line-clamp-2">
                                {blog.title}
                            </h3>
                            <div className="text-white/60 text-sm group-hover:underline decoration-primary underline-offset-4">Read details</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
