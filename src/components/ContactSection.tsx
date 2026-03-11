import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, MessageCircle, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you shortly.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Get In <span className="gold-gradient-text">Touch</span>
          </h2>
          <div className="gold-divider mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <a href="tel:+919876543210" className="flex items-center gap-4 bg-background rounded-lg p-4 border border-border hover:shadow-[var(--shadow-gold)] transition-shadow">
              <Phone className="text-primary" size={22} />
              <div>
                <p className="font-display font-semibold text-foreground text-sm">Call Us</p>
                <p className="text-muted-foreground font-body text-sm">+91 98765 43210</p>
              </div>
            </a>
            <a href="mailto:info@royaljewels.com" className="flex items-center gap-4 bg-background rounded-lg p-4 border border-border hover:shadow-[var(--shadow-gold)] transition-shadow">
              <Mail className="text-primary" size={22} />
              <div>
                <p className="font-display font-semibold text-foreground text-sm">Email Us</p>
                <p className="text-muted-foreground font-body text-sm">info@royaljewels.com</p>
              </div>
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-background rounded-lg p-4 border border-border hover:shadow-[var(--shadow-gold)] transition-shadow"
            >
              <MessageCircle className="text-green-600" size={22} />
              <div>
                <p className="font-display font-semibold text-foreground text-sm">WhatsApp</p>
                <p className="text-muted-foreground font-body text-sm">Chat with us instantly</p>
              </div>
            </a>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-background border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="bg-background border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <textarea
              placeholder="Your Message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="bg-background border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            />
            <button
              type="submit"
              className="gold-gradient-bg text-foreground font-body font-bold px-8 py-3 rounded-lg tracking-wide text-sm uppercase hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Send size={16} /> Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
