import { motion } from "framer-motion";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={heroBanner}
        alt="Luxury gold jewellery collection"
        className="w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
    </div>
    <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full py-32">
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-gold-light font-body text-sm md:text-base tracking-[0.3em] uppercase mb-4"
      >
        Premium Gold &amp; Jewellery
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight max-w-2xl"
      >
        Royal <span className="gold-gradient-text">Jewels</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="font-display text-lg md:text-2xl text-gold-light italic mt-3 max-w-lg"
      >
        Timeless Gold. Trusted Elegance.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex flex-wrap gap-4 mt-8"
      >
        <a
          href="#collections"
          className="gold-gradient-bg text-foreground font-body font-bold px-8 py-3 rounded-sm tracking-wide text-sm uppercase hover:opacity-90 transition-opacity"
        >
          View Collections
        </a>
        <a
          href="#contact"
          className="border border-gold-light text-gold-light font-body font-bold px-8 py-3 rounded-sm tracking-wide text-sm uppercase hover:bg-gold-light/10 transition-colors"
        >
          Contact Us
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
