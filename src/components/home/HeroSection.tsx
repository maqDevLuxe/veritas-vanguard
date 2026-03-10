import { FadeIn } from "@/components/animations";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    />
    <div className="absolute inset-0 bg-forest-dark/70" />
    <div className="relative z-10 container mx-auto px-6 text-center">
      <FadeIn delay={0.2}>
        <span className="inline-block text-gold font-sans uppercase tracking-[0.3em] text-xs mb-6">
          Established 1987 · New York · London · Tokyo
        </span>
      </FadeIn>
      <FadeIn delay={0.4}>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream font-bold leading-tight max-w-4xl mx-auto">
          Defending the Future of{" "}
          <span className="text-gold">Innovation</span>
        </h1>
      </FadeIn>
      <FadeIn delay={0.6}>
        <p className="mt-6 text-cream/70 font-sans text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          World-class intellectual property counsel for technology pioneers, 
          biotech innovators, and global enterprises.
        </p>
      </FadeIn>
      <FadeIn delay={0.8}>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl" asChild>
            <Link to="/consultation">Schedule a Consultation</Link>
          </Button>
          <Button variant="hero-outline" size="xl" asChild>
            <Link to="/practice-areas">Our Expertise</Link>
          </Button>
        </div>
      </FadeIn>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;
