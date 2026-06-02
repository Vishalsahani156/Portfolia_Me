import { motion } from "framer-motion";
import { Section } from "./Section";

const timeline = [
  {
    year: "2025 — Present",
    role: "MERN Stack Developer",
    company: "Mahahshankh Design and Technology",
    description: "Building full-stack web applications with MongoDB, Express, React, and Node.js. Contributing to product features, API development, and responsive UI implementations.",
  },
  {
    year: "2024 — Now",
role: "Junior Full Stack Developer",
company: "Mahashankh Design and Technology",
description: "Working on full-stack web applications and contributing to frontend and backend development. Building responsive UI components, integrating APIs, and continuously improving performance and code quality while gaining hands-on industry experience."
  },
 {
  year: "June 2025 — Now",
  role: "Junior Full Stack Developer",
  company: "Mahashankh Design and Technology",
  description: "Working on full-stack web applications using React, TypeScript, and Node.js. Contributing to UI development, backend integration, and API handling while improving performance, code quality, and real-world project experience."
},
  {
  year: "2 Months (Internship)",
  role: "Frontend Developer Intern",
  company: "Binney Jewellery Pvt. Ltd.",
  description: "Worked on frontend development tasks, building and improving UI components for web pages. Assisted in maintaining and updating the website while learning real-world development workflows and team collaboration."
},
  
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={<>A short <span className="text-gradient-accent">timeline.</span></>}
    >
      <div className="relative">
        <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />
        <div className="space-y-10">
          {timeline.map((t, i) => (
            <motion.div
              key={t.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative grid md:grid-cols-2 gap-4 md:gap-12 ${
                i % 2 === 0 ? "" : "md:[direction:rtl]"
              }`}
            >
              <div className={`absolute left-3 md:left-1/2 top-2 -translate-x-1/2 h-3 w-3 rounded-full bg-primary glow-ring`} />

              <div className="pl-10 md:pl-0 md:pr-12 md:text-right [direction:ltr]">
                <div className="text-xs uppercase tracking-widest text-primary mb-1">{t.year}</div>
                <h3 className="font-display text-xl font-semibold">{t.role}</h3>
                <div className="text-muted-foreground text-sm mt-1">{t.company}</div>
              </div>
              <div className="pl-10 md:pl-12 [direction:ltr]">
                <div className="glass rounded-2xl p-5 text-muted-foreground text-sm leading-relaxed">
                  {t.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
