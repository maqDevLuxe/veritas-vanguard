import { FadeIn } from "@/components/animations";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Prescott & Sterling secured our entire AI patent portfolio, giving us a decisive competitive edge in the market.",
    author: "CTO, Fortune 100 Technology Company",
  },
  {
    quote: "Their deep understanding of biotech IP saved us from a potentially devastating infringement claim.",
    author: "CEO, Leading Pharmaceutical Firm",
  },
  {
    quote: "The most strategic and thorough IP counsel we've ever worked with. They think three moves ahead.",
    author: "General Counsel, Global Electronics Manufacturer",
  },
];

const TestimonialsSection = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <FadeIn>
        <span className="block text-gold font-sans uppercase tracking-[0.3em] text-xs text-center mb-3">
          Testimonials
        </span>
        <h2 className="text-3xl md:text-4xl font-serif text-center font-bold text-foreground mb-16">
          Innovator Voices
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <FadeIn key={i} delay={i * 0.15}>
            <div className="border border-border p-8 bg-card relative">
              <Quote className="w-6 h-6 text-gold/30 absolute top-6 right-6" />
              <p className="font-serif text-foreground leading-relaxed italic mb-6">"{t.quote}"</p>
              <span className="block font-sans text-xs uppercase tracking-widest text-muted-foreground">
                — {t.author}
              </span>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
