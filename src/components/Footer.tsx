import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground py-12 px-4 md:px-8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="font-display text-xl font-bold mb-3">
          Royal <span className="gold-gradient-text">Jewels</span>
        </h3>
        <p className="text-primary-foreground/70 font-body text-sm leading-relaxed">
          42 Gold Market Road, Jewellery Lane,<br />
          Mumbai 400001, India
        </p>
      </div>
      <div>
        <h4 className="font-display font-semibold mb-3">Business Hours</h4>
        <p className="text-primary-foreground/70 font-body text-sm leading-relaxed">
          Mon – Sat: 10:00 AM – 8:00 PM<br />
          Sunday: 11:00 AM – 6:00 PM
        </p>
      </div>
      <div>
        <h4 className="font-display font-semibold mb-3">Follow Us</h4>
        <div className="flex gap-4">
          <a href="#" aria-label="Facebook" className="text-primary-foreground/70 hover:text-primary transition-colors">
            <Facebook size={20} />
          </a>
          <a href="#" aria-label="Instagram" className="text-primary-foreground/70 hover:text-primary transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" aria-label="Twitter" className="text-primary-foreground/70 hover:text-primary transition-colors">
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto border-t border-primary-foreground/10 mt-8 pt-6 text-center">
      <p className="text-primary-foreground/50 font-body text-xs">
        © {new Date().getFullYear()} Royal Jewels. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
