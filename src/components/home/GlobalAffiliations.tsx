import { FadeIn } from "@/components/animations";

const affiliations = [
  "WIPO", "USPTO", "EPO", "AIPPI", "INTA", "FICPI", "LES", "IPO"
];

const GlobalAffiliations = () => (
  <section className="py-16 bg-cream-dark">
    <div className="container mx-auto px-6">
      <FadeIn>
        <p className="text-center font-sans uppercase tracking-[0.2em] text-xs text-muted-foreground mb-8">
          Global Affiliations & Memberships
        </p>
      </FadeIn>
      <FadeIn delay={0.2}>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {affiliations.map((name) => (
            <span
              key={name}
              className="font-serif text-lg md:text-xl text-forest/40 hover:text-gold transition-colors duration-500 cursor-default"
            >
              {name}
            </span>
          ))}
        </div>
      </FadeIn>
    </div>
  </section>
);

export default GlobalAffiliations;
