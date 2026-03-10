import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { Shield, FileText, Scale, Lightbulb, Globe, Lock } from "lucide-react";

const services = [
  { icon: FileText, title: "Patent Prosecution", desc: "Strategic patent portfolio development across all technology domains." },
  { icon: Shield, title: "Trademark Protection", desc: "Comprehensive brand protection from registration through enforcement." },
  { icon: Scale, title: "IP Litigation", desc: "Aggressive representation in federal courts and before the PTAB." },
  { icon: Lightbulb, title: "Trade Secrets", desc: "Misappropriation defense and confidentiality program design." },
  { icon: Globe, title: "International Filing", desc: "PCT and Madrid Protocol filings across 180+ jurisdictions." },
  { icon: Lock, title: "IP Due Diligence", desc: "Thorough IP audits for M&A transactions and licensing deals." },
];

const CoreServices = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <FadeIn>
        <span className="block text-gold font-sans uppercase tracking-[0.3em] text-xs text-center mb-3">
          Practice Areas
        </span>
        <h2 className="text-3xl md:text-4xl font-serif text-center font-bold text-foreground mb-4">
          Core IP Services
        </h2>
        <p className="text-center text-muted-foreground max-w-xl mx-auto mb-16">
          Full-spectrum intellectual property counsel built on decades of scientific and legal expertise.
        </p>
      </FadeIn>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s) => (
          <StaggerItem key={s.title}>
            <div className="group p-8 border border-border hover:border-gold/40 bg-card transition-all duration-500 hover:shadow-lg">
              <s.icon className="w-8 h-8 text-gold mb-4 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default CoreServices;
