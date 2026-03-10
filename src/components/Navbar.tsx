import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Practice Areas", path: "/practice-areas" },
  { label: "Attorneys", path: "/attorneys" },
  { label: "Insights", path: "/insights" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-forest/95 backdrop-blur-sm border-b border-forest-light/30">
      <div className="container mx-auto flex items-center justify-between h-20 px-6">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-sm bg-gold flex items-center justify-center font-serif font-bold text-forest-dark text-lg">
            IP
          </div>
          <div>
            <span className="text-cream font-serif text-lg font-bold tracking-wide">Prescott & Sterling</span>
            <span className="block text-gold text-[10px] font-sans uppercase tracking-[0.25em]">
              Intellectual Property Law
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-sans text-sm uppercase tracking-widest transition-colors duration-300 ${
                location.pathname === item.path
                  ? "text-gold"
                  : "text-cream/80 hover:text-gold"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/consultation"
            className="ml-4 px-6 py-2.5 bg-gold text-forest-dark font-sans text-xs uppercase tracking-widest font-semibold hover:brightness-110 transition-all duration-300"
          >
            Consultation
          </Link>
        </div>

        <button className="md:hidden text-cream" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-forest overflow-hidden"
          >
            <div className="px-6 pb-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="font-sans text-sm uppercase tracking-widest text-cream/80 hover:text-gold transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/consultation"
                onClick={() => setOpen(false)}
                className="px-6 py-2.5 bg-gold text-forest-dark font-sans text-xs uppercase tracking-widest font-semibold text-center"
              >
                Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
