import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          {eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground mb-4">
              <span className="h-1 w-1 rounded-full bg-primary" />
              {eyebrow}
            </div>
          )}
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
