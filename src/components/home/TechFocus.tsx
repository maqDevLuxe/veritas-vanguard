import { FadeIn } from "@/components/animations";
import { Cpu, Dna, Smartphone, Zap } from "lucide-react";

const sectors = [
  { icon: Cpu, label: "Artificial Intelligence", stat: "340+" },
  { icon: Dna, label: "Biotechnology", stat: "220+" },
  { icon: Smartphone, label: "Consumer Electronics", stat: "510+" },
  { icon: Zap, label: "Clean Energy", stat: "180+" },
];

const TechFocus = () => (
  <section className="py-24 bg-forest text-cream">
    <div className="container mx-auto px-6">
      <FadeIn>
        <span className="block text-gold font-sans uppercase tracking-[0.3em] text-xs text-center mb-3">
          Industry Focus
        </span>
        <h2 className="text-3xl md:text-4xl font-serif text-center font-bold mb-4">
          Technology & Life Sciences
        </h2>
        <p className="text-center text-cream/60 max-w-xl mx-auto mb-16">
          Deep technical expertise allows us to navigate the most complex IP landscapes in emerging industries.
        </p>
      </FadeIn>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {sectors.map((s, i) => (
          <FadeIn key={s.label} delay={i * 0.15}>
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 border border-gold/30 flex items-center justify-center group-hover:border-gold transition-colors duration-500">
                <s.icon className="w-8 h-8 text-gold" />
              </div>
              <span className="block font-serif text-2xl font-bold text-gold">{s.stat}</span>
              <span className="block font-sans text-xs uppercase tracking-widest text-cream/60 mt-1">{s.label}</span>
              <span className="block text-[10px] text-cream/40 mt-1">Patents Filed</span>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default TechFocus;
