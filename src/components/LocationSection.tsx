import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const LocationSection = () => (
  <section className="section-padding bg-background">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          Visit Our <span className="gold-gradient-text">Showroom</span>
        </h2>
        <div className="gold-divider mt-4" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-lg overflow-hidden aspect-video"
        >
          <iframe
            title="Royal Jewels Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019759929498!2d-122.41941508468182!3d37.77492977975892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjciTiAxMjLCsDI1JzA1LjkiVw!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full gold-gradient-bg flex items-center justify-center flex-shrink-0">
              <MapPin size={18} className="text-foreground" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground">Address</h3>
              <p className="text-muted-foreground font-body text-sm">42 Gold Market Road, Jewellery Lane, Mumbai 400001, India</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full gold-gradient-bg flex items-center justify-center flex-shrink-0">
              <Phone size={18} className="text-foreground" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground">Phone</h3>
              <p className="text-muted-foreground font-body text-sm">+91 98765 43210</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full gold-gradient-bg flex items-center justify-center flex-shrink-0">
              <Mail size={18} className="text-foreground" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground">Email</h3>
              <p className="text-muted-foreground font-body text-sm">info@royaljewels.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full gold-gradient-bg flex items-center justify-center flex-shrink-0">
              <Clock size={18} className="text-foreground" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground">Business Hours</h3>
              <p className="text-muted-foreground font-body text-sm">Mon – Sat: 10:00 AM – 8:00 PM<br />Sunday: 11:00 AM – 6:00 PM</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default LocationSection;
