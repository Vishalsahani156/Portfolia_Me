import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Services } from "@/components/portfolio/Services";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vishal Sahani — MERN Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Vishal Sahani — a MERN Stack developer building fast, accessible, and beautifully designed web applications.",
      },
      { property: "og:title", content: "Vishal Sahani — MERN Stack Developer" },
      {
        property: "og:description",
        content: "Portfolio showcasing modern web development with MongoDB, Express, React, and Node.js.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
