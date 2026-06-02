import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";

const roles = ["MERN Stack Developer", "Full Stack Developer", "Software Developer", "Problem Solver"];

export function Hero() {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    const speed = deleting ? 40 : 80;
    const timeout = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1400);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % roles.length);
        return;
      }
      setText(
        deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1)
      );
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIdx]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-accent/20 blur-[120px] animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Open to opportunities — 2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tighter"
        >
          Hi, I'm <span className="text-gradient-accent">Vishal Sahani</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 text-xl sm:text-2xl md:text-3xl text-muted-foreground font-display"
        >
          <span className="text-foreground/90 blink-caret">{text}</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed"
        >
       I build fast, accessible, and well-designed web applications that turn ideas into real, usable products. I focus on writing clean, maintainable code and creating smooth user experiences. Currently, I’m working on improving my skills while building practical tools that solve real problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:shadow-[var(--shadow-glow)] transition-all hover:-translate-y-0.5"
          >
            View my work
            <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:bg-white/5 transition-all hover:-translate-y-0.5"
          >
            Get in touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          {[
            { Icon: Github, href: "https://github.com/Vishalsahani156" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/vishal-sahani-29b0862b1" },
            { Icon: Twitter, href: "https://x.com/VishalS46912113" },
          ].map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              className="grid h-10 w-10 place-items-center rounded-full glass text-muted-foreground hover:text-foreground hover:scale-110 transition-all"
            >
              <Icon size={16} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
