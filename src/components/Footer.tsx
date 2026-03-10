import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-forest-dark text-cream/80">
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-sm bg-gold flex items-center justify-center font-serif font-bold text-forest-dark text-lg">
              IP
            </div>
            <span className="text-cream font-serif text-lg font-bold">Prescott & Sterling</span>
          </div>
          <p className="text-sm leading-relaxed text-cream/60">
            Protecting innovation and intellectual property for global enterprises since 1987.
          </p>
        </div>

        <div>
          <h4 className="text-gold font-sans uppercase tracking-widest text-xs font-semibold mb-4">Practice Areas</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/practice-areas" className="hover:text-gold transition-colors">Patent Prosecution</Link></li>
            <li><Link to="/practice-areas" className="hover:text-gold transition-colors">Trademark Law</Link></li>
            <li><Link to="/practice-areas" className="hover:text-gold transition-colors">IP Litigation</Link></li>
            <li><Link to="/practice-areas" className="hover:text-gold transition-colors">Trade Secrets</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold font-sans uppercase tracking-widest text-xs font-semibold mb-4">Firm</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/attorneys" className="hover:text-gold transition-colors">Our Attorneys</Link></li>
            <li><Link to="/insights" className="hover:text-gold transition-colors">Insights</Link></li>
            <li><Link to="/" className="hover:text-gold transition-colors">Careers</Link></li>
            <li><Link to="/" className="hover:text-gold transition-colors">Pro Bono</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold font-sans uppercase tracking-widest text-xs font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><MapPin size={14} className="text-gold" /> 120 Wall Street, New York, NY 10005</li>
            <li className="flex items-center gap-2"><Phone size={14} className="text-gold" /> +1 (212) 555-0190</li>
            <li className="flex items-center gap-2"><Mail size={14} className="text-gold" /> contact@prescottsterling.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/40">
        <span>© 2026 Prescott & Sterling LLP. All rights reserved.</span>
        <div className="flex gap-6">
          <span className="hover:text-gold cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-gold cursor-pointer transition-colors">Terms of Service</span>
          <span className="hover:text-gold cursor-pointer transition-colors">Disclaimer</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
