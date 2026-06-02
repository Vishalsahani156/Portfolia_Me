import { motion } from "framer-motion";
import { Code2, Layers, Rocket, Sparkles } from "lucide-react";
import { Section } from "./Section";

const services = [
  {
    Icon: Code2,
    title: "Software Developr ",
    description: "Full-stack web apps built with React, Next.js, and modern tooling — fast, accessible, scalable.",
  },
  {
    Icon: Layers,
    title: "Design Systems Basic",
    description: "Reusable component libraries and tokens that keep your product visually consistent at any scale.",
  },
  {
    Icon: Sparkles,
    title: "Motion & Microinteractions",
    description: "Tasteful animations that guide users, signal state, and make interfaces feel premium.",
  },
  {
    Icon: Rocket,
    title: "MVP & Product Builds",
    description: "Idea to production in weeks, not months. I help founders ship the right thing — and ship it well.",
  },
];

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="What I do"
      title={<>Services I <span className="text-gradient-accent">offer.</span></>}
      description="Hire me for end-to-end product work or focused engagements — whatever moves your team forward."
    >
      <div className="grid sm:grid-cols-2 gap-5">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group glass rounded-2xl p-6 hover:bg-white/[0.04] hover:glow-ring transition-all"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--gradient-accent)] text-primary-foreground mb-5 group-hover:scale-110 transition-transform">
              <s.Icon size={20} />
            </div>
            <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
