import { FadeIn } from "@/components/animations";
import { MapPin } from "lucide-react";

const offices = [
  { city: "New York", country: "USA", type: "Headquarters" },
  { city: "London", country: "UK", type: "Regional Office" },
  { city: "Tokyo", country: "Japan", type: "Regional Office" },
  { city: "Munich", country: "Germany", type: "Filing Office" },
  { city: "Singapore", country: "Singapore", type: "Filing Office" },
  { city: "São Paulo", country: "Brazil", type: "Affiliate" },
  { city: "Sydney", country: "Australia", type: "Affiliate" },
  { city: "Seoul", country: "South Korea", type: "Affiliate" },
];

const GlobalNetwork = () => (
  <section className="py-24 bg-forest text-cream">
    <div className="container mx-auto px-6">
      <FadeIn>
        <span className="block text-gold font-sans uppercase tracking-[0.3em] text-xs text-center mb-3">
          Worldwide Reach
        </span>
        <h2 className="text-3xl md:text-4xl font-serif text-center font-bold mb-4">
          Global Filing Network
        </h2>
        <p className="text-center text-cream/60 max-w-xl mx-auto mb-16">
          Strategic partnerships and offices across key IP jurisdictions worldwide.
        </p>
      </FadeIn>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {offices.map((o, i) => (
          <FadeIn key={o.city} delay={i * 0.08}>
            <div className="border border-cream/10 p-6 hover:border-gold/40 transition-colors duration-500 group">
              <MapPin className="w-4 h-4 text-gold mb-3" />
              <h3 className="font-serif text-lg font-bold">{o.city}</h3>
              <p className="text-cream/60 text-xs font-sans">{o.country}</p>
              <span className="inline-block mt-2 text-[10px] font-sans uppercase tracking-widest text-gold/60 border border-gold/20 px-2 py-0.5">
                {o.type}
              </span>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default GlobalNetwork;
