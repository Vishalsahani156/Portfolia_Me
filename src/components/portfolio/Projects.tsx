import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Section } from "./Section";

const projects = [
  {
    title: "Finance Tracker",
    description:
      "A personal finance tracking application to monitor income, expenses, and savings. Built to practice full-stack development with clean UI, structured data handling, and real-time calculations for better financial insights.",
    tags: ["React", "Node.js", "TypeScript"],
    gradient: "from-blue-500/30 to-purple-500/30",
  },
  {
    title: "Chat Board AI",
    description:
      "A real-time communication platform with AI-assisted chat features. Built for fast messaging, live updates, and smooth user interaction with a focus on performance and scalability.",
    tags: ["React", "Node.js", "Socket.io", "AI"],
    gradient: "from-indigo-500/30 to-pink-500/30",
  },
  {
    title: "System Configuration Checker",
    description:
      "A developer tool that checks system configuration and environment setup using Python with a React + TypeScript interface. Helps verify installed dependencies, system health, and runtime compatibility for development environments.",
    tags: ["Python", "React", "TypeScript"],
    gradient: "from-slate-500/30 to-sky-500/30",
  },
  {
    title: "Event Generator",
    description:
      "A smart event generation platform that helps users create, manage, and organize events with automated scheduling, reminders, and dynamic event templates. Built to simplify event planning with an intuitive UI and scalable backend logic.",
    tags: ["React", "Node.js", "TypeScript", "Python"],
    gradient: "from-green-500/30 to-teal-500/30",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title={
        <>
          Recent projects I'm <span className="text-gradient-accent">proud of.</span>
        </>
      }
      description="A small selection. Each one taught me something about craft, scale, or shipping."
    >
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
            className="group relative overflow-hidden glass rounded-3xl p-1 hover:bg-white/[0.05] transition-all"
          >
            <div
              className={`relative aspect-[16/10] rounded-2xl bg-gradient-to-br ${p.gradient} overflow-hidden`}
            >
              <div className="absolute inset-0 grid-bg opacity-40" />
              <div className="absolute inset-0 grid place-items-center">
                <span className="font-display text-3xl md:text-4xl font-bold text-white/90 drop-shadow-lg">
                  {p.title}
                </span>
              </div>
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                <a
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-full glass-strong hover:bg-white/10"
                >
                  <Github size={14} />
                </a>
                <a
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-full glass-strong hover:bg-white/10"
                >
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-display text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs text-muted-foreground border border-white/10 rounded-full px-2.5 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
