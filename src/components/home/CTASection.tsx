import { FadeIn } from "@/components/animations";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => (
  <section className="py-24 bg-forest text-cream">
    <div className="container mx-auto px-6 text-center">
      <FadeIn>
        <span className="block text-gold font-sans uppercase tracking-[0.3em] text-xs mb-3">
          Get Started
        </span>
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 max-w-3xl mx-auto">
          Protect Your Innovation.<br />
          <span className="text-gold">Schedule a Consultation.</span>
        </h2>
        <p className="text-cream/60 max-w-xl mx-auto mb-10">
          Our team is ready to discuss your intellectual property needs with the discretion and expertise your innovation deserves.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl">
            Book a Confidential Consultation
          </Button>
          <Button variant="hero-outline" size="xl" asChild>
            <Link to="/attorneys">Meet Our Attorneys</Link>
          </Button>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default CTASection;
