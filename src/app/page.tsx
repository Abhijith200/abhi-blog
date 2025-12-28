import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Testimonials } from "@/components/Testimonials";
import { Blogs } from "@/components/Blogs";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <Experience />
      <Skills />
      <Testimonials />
      <Blogs />
      <Contact />
      <Footer />
    </main>
  );
}
