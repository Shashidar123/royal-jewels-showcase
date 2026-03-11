import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Clock, Heart } from "lucide-react";

const points = [
  { icon: ShieldCheck, title: "BIS Hallmark Gold", desc: "Certified purity on every piece" },
  { icon: Sparkles, title: "Latest Designs", desc: "Trendsetting collections updated regularly" },
  { icon: Clock, title: "Trusted Since 1995", desc: "Three decades of trust and excellence" },
  { icon: Heart, title: "Wedding Collections", desc: "Complete bridal jewellery solutions" },
];

const WhyChooseUs = () => (
  <section id="why-us" className="section-padding bg-background">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          Why Choose <span className="gold-gradient-text">Royal Jewels</span>
        </h2>
        <div className="gold-divider mt-4" />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {points.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card rounded-lg p-6 text-center border border-border hover:shadow-[var(--shadow-gold)] transition-shadow"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full gold-gradient-bg mb-4">
              <p.icon className="text-foreground" size={24} />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">{p.title}</h3>
            <p className="text-muted-foreground font-body text-sm">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
