import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "Priya Sharma", text: "Absolutely stunning bridal set! The craftsmanship is exquisite and the gold purity is top-notch. Highly recommended!", rating: 5 },
  { name: "Rahul Mehta", text: "Bought a necklace for my wife's anniversary. She loved it! Great designs and transparent pricing.", rating: 5 },
  { name: "Anita Gupta", text: "Trusted shop with beautiful collection. I've been a loyal customer for over 10 years. Always satisfied.", rating: 5 },
  { name: "Vikram Singh", text: "Wonderful experience! The staff helped me choose the perfect engagement ring. Fair gold rates too.", rating: 4 },
];

const ReviewsSection = () => (
  <section id="reviews" className="section-padding bg-card">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          Customer <span className="gold-gradient-text">Reviews</span>
        </h2>
        <div className="gold-divider mt-4" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-background rounded-lg p-6 border border-border"
          >
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: 5 }).map((_, si) => (
                <Star
                  key={si}
                  size={16}
                  className={si < r.rating ? "fill-primary text-primary" : "text-border"}
                />
              ))}
            </div>
            <p className="text-muted-foreground font-body text-sm mb-4 italic">"{r.text}"</p>
            <p className="font-display font-semibold text-foreground text-sm">{r.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
