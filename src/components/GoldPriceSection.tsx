import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const AnimatedCounter = ({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1500;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="font-display text-3xl md:text-4xl font-bold gold-gradient-text">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
};

const GoldPriceSection = () => (
  <section id="prices" className="section-padding bg-background">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          Live Gold &amp; Silver <span className="gold-gradient-text">Prices</span>
        </h2>
        <div className="gold-divider mt-4 mb-4" />
        <p className="text-muted-foreground font-body text-sm">Updated daily · Indicative rates</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-lg p-8 text-center border border-border shadow-[var(--shadow-elegant)]"
        >
          <div className="text-4xl mb-3">🥇</div>
          <h3 className="font-display text-xl font-semibold text-foreground mb-2">Gold (24K)</h3>
          <AnimatedCounter target={7250} prefix="₹" suffix="/g" />
          <p className="text-muted-foreground text-sm mt-2 font-body">Per Gram</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-lg p-8 text-center border border-border shadow-[var(--shadow-elegant)]"
        >
          <div className="text-4xl mb-3">🥈</div>
          <h3 className="font-display text-xl font-semibold text-foreground mb-2">Silver</h3>
          <AnimatedCounter target={92} prefix="₹" suffix="/g" />
          <p className="text-muted-foreground text-sm mt-2 font-body">Per Gram</p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default GoldPriceSection;
