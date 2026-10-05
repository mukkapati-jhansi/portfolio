import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main id="top" className="bg-[#050505]">
      <Navbar />

      <Hero />

      <Projects />

      <About />

      <Experience />

      <Certificates />

      <Contact />
    </main>
  );
}