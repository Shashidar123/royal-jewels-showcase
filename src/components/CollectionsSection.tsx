import { motion } from "framer-motion";
import catNecklaces from "@/assets/cat-necklaces.jpg";
import catBangles from "@/assets/cat-bangles.jpg";
import catEarrings from "@/assets/cat-earrings.jpg";
import catRings from "@/assets/cat-rings.jpg";
import catBridal from "@/assets/cat-bridal.jpg";
import catSilver from "@/assets/cat-silver.jpg";

const categories = [
  { name: "Gold Necklaces", img: catNecklaces },
  { name: "Bangles", img: catBangles },
  { name: "Earrings", img: catEarrings },
  { name: "Rings", img: catRings },
  { name: "Bridal Jewellery", img: catBridal },
  { name: "Silver Ornaments", img: catSilver },
];

const CollectionsSection = () => (
  <section id="collections" className="section-padding bg-card">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          Our <span className="gold-gradient-text">Collections</span>
        </h2>
        <div className="gold-divider mt-4 mb-4" />
        <p className="text-muted-foreground font-body max-w-md mx-auto">
          Explore our exquisite range of handcrafted gold and silver jewellery
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative rounded-lg overflow-hidden cursor-pointer aspect-square"
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent flex items-end p-4 md:p-6">
              <h3 className="font-display text-lg md:text-xl font-semibold text-primary-foreground">
                {cat.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CollectionsSection;
