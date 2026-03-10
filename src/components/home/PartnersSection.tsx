import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { useState } from "react";

const partners = [
  {
    name: "Eleanor Prescott",
    title: "Managing Partner",
    specialty: "Patent Litigation & Strategy",
    bio: "Former USPTO examiner with 30+ years in patent prosecution. Harvard Law, MIT PhD in Electrical Engineering.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
  },
  {
    name: "James Sterling III",
    title: "Senior Partner",
    specialty: "Biotech & Pharma IP",
    bio: "Led IP portfolios for 12 Fortune 500 pharma companies. Yale Law, Johns Hopkins MD.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop",
  },
  {
    name: "Dr. Mei-Lin Chen",
    title: "Partner",
    specialty: "AI & Software Patents",
    bio: "Pioneer in AI patent prosecution with 200+ patents granted. Stanford Law, Caltech PhD in CS.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop",
  },
  {
    name: "Richard Kensington",
    title: "Partner",
    specialty: "International IP & Trade",
    bio: "Managed cross-border IP disputes across 40+ jurisdictions. Oxford Law, London School of Economics.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
  },
];

const PartnersSection = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="py-24 bg-cream-dark">
      <div className="container mx-auto px-6">
        <FadeIn>
          <span className="block text-gold font-sans uppercase tracking-[0.3em] text-xs text-center mb-3">
            Leadership
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-center font-bold text-foreground mb-16">
            The Partners
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((p, i) => (
            <StaggerItem key={p.name}>
              <div
                className="group relative overflow-hidden cursor-pointer"
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-forest-dark/0 group-hover:bg-forest-dark/80 transition-all duration-500 flex items-end">
                  <div className={`p-6 w-full transition-all duration-500 ${hoveredIdx === i ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                    <p className="text-cream/80 text-xs font-sans leading-relaxed">{p.bio}</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-lg font-bold text-foreground">{p.name}</h3>
                  <p className="text-gold font-sans text-xs uppercase tracking-widest">{p.title}</p>
                  <p className="text-muted-foreground text-xs mt-1">{p.specialty}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default PartnersSection;
