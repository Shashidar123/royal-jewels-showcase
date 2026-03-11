import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import catNecklaces from "@/assets/cat-necklaces.jpg";
import catBangles from "@/assets/cat-bangles.jpg";
import catBridal from "@/assets/cat-bridal.jpg";
import catEarrings from "@/assets/cat-earrings.jpg";
import catRings from "@/assets/cat-rings.jpg";

const slides = [
  { img: catBridal, label: "Bridal Heritage Set" },
  { img: catNecklaces, label: "Temple Gold Necklace" },
  { img: catBangles, label: "Antique Gold Bangles" },
  { img: catEarrings, label: "Classic Jhumka Earrings" },
  { img: catRings, label: "Diamond Solitaire Ring" },
];

const FeaturedCarousel = () => {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));

  return (
    <section className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Featured <span className="gold-gradient-text">Designs</span>
          </h2>
          <div className="gold-divider mt-4" />
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          <div className="overflow-hidden rounded-lg aspect-[4/3]">
            <motion.img
              key={index}
              src={slides[index].img}
              alt={slides[index].label}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-center font-display text-lg text-foreground mt-4">{slides[index].label}</p>
          <button
            onClick={prev}
            className="absolute top-1/2 -translate-y-1/2 left-2 md:-left-12 bg-card/80 backdrop-blur-sm border border-border rounded-full p-2 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 -translate-y-1/2 right-2 md:-right-12 bg-card/80 backdrop-blur-sm border border-border rounded-full p-2 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
          <div className="flex justify-center gap-2 mt-4">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === index ? "bg-primary" : "bg-border"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCarousel;
