import { motion } from "framer-motion";
import { Section } from "./Section";

const stats = [
  { value: "6+", label: "Month building" },
  { value: "10+", label: "Projects shipped" },
  { value: "2", label: "Happy clients" },
  { value: "∞", label: "Cups of coffee" },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About me"
      title={<>A developer who cares about <span className="text-gradient-accent">the details.</span></>}
    >
      <div className="grid lg:grid-cols-5 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 space-y-5 text-muted-foreground leading-relaxed text-lg"
        >
          <p>
           I’m a full-stack developer who focuses on building clean, fast, and scalable web applications. I work across the entire stack, with a strong preference for React and TypeScript on the frontend and modern backend technologies on the server side.

I care about writing maintainable code, creating smooth user experiences, and building products that feel simple and efficient to use—without unnecessary complexity.
          </p>
          <p>
           I have 6 months of experience as a junior full-stack developer. I focus on learning fast, building real-world projects, and improving my skills in React, TypeScript, and backend development.

I enjoy creating clean, responsive, and user-friendly applications. I’m continuously improving my understanding of performance, accessibility, and best practices to write better and more maintainable code.

I’m currently growing my experience by working on hands-on projects and exploring modern web development tools and technologies. <span className="text-foreground">alive</span>.
          </p>
          <p>
            When I’m not coding, I like exploring design ideas, reading about modern UI/UX patterns, and experimenting with new web technologies. I also enjoy improving my projects, learning better ways to build interfaces, and occasionally contributing to open-source work.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-2 grid grid-cols-2 gap-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass rounded-2xl p-6 hover:bg-white/[0.04] transition-colors"
            >
              <div className="font-display text-4xl font-bold text-gradient-accent">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
