import { motion } from "framer-motion";
import { useState } from "react";
import { Github, Linkedin, Mail, Send, Twitter } from "lucide-react";
import { Section } from "./Section";

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <Section
      id="contact"
      eyebrow="Get in touch"
      title={<>Let's build <span className="text-gradient-accent">something great.</span></>}
      description="Have a project in mind, or just want to say hi? My inbox is always open."
    >
      <div className="grid lg:grid-cols-5 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 glass rounded-2xl p-8 flex flex-col justify-between"
        >
          <div>
            <h3 className="font-display text-2xl font-semibold mb-3">Reach out</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              I usually respond within 24 hours. For freelance inquiries, please
              include a quick note about the project, timeline, and budget.
            </p>
              <a
                href="mailto:vishalsahani158@gmail.com"
                className="inline-flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <Mail size={18} />
                vishalsahani158@gmail.com
              </a>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 flex gap-3">
            {[
              { Icon: Github, href: "https://github.com/Vishalsahani156" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/vishal-sahani-29b0862b1" },
              { Icon: Twitter, href: "https://x.com/VishalS46912113" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="grid h-10 w-10 place-items-center rounded-full bg-white/[0.04] hover:bg-white/[0.08] hover:scale-110 transition-all"
              >
                //fix now
                <Icon size={16} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={onSubmit}
          className="lg:col-span-3 glass rounded-2xl p-8 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" id="name" placeholder="Your name" />
            <Field label="Email" id="email" type="email" placeholder="you@example.com" />
          </div>
          <Field label="Subject" id="subject" placeholder="What's this about?" />
          <div>
            <label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              required
              placeholder="Tell me a little about your project..."
              className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all resize-none"
            />
          </div>
          <button
            type="submit"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:shadow-[var(--shadow-glow)] hover:-translate-y-0.5 transition-all"
          >
            {sent ? "Message sent ✓" : "Send message"}
            <Send size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all"
      />
    </div>
  );
}
