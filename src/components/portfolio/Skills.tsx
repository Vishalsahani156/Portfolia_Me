import { motion } from "framer-motion";
import { Section } from "./Section";

const groups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion", "Three.js"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Bun", "PostgreSQL", "tRPC", "GraphQL", "Redis"],
  },
  {
    title: "Tools & DX",
    items: ["Git", "Docker", "Vite", "Vercel", "Linear"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Tech stack"
      title={
        <>
          Tools I reach for <span className="text-gradient-accent">every day.</span>
        </>
      }
      description="A curated stack — chosen because it's fast, stable, and gets out of the way."
    >
      <div className="grid md:grid-cols-3 gap-5">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass rounded-2xl p-6 hover:glow-ring transition-all"
          >
            <h3 className="font-display text-lg font-semibold mb-4">{g.title}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/[0.04] border border-white/5 px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-white/[0.08] transition-colors cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
