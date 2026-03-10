import { FadeIn } from "@/components/animations";
import { Lock, Shield, Eye } from "lucide-react";

const ConfidentialitySection = () => (
  <section className="py-24 bg-forest text-cream">
    <div className="container mx-auto px-6">
      <FadeIn>
        <span className="block text-gold font-sans uppercase tracking-[0.3em] text-xs text-center mb-3">
          Our Commitment
        </span>
        <h2 className="text-3xl md:text-4xl font-serif text-center font-bold mb-16">
          Client Confidentiality
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {[
          { icon: Lock, title: "Secure Communications", desc: "End-to-end encrypted communications and document sharing across all platforms." },
          { icon: Shield, title: "Data Protection", desc: "SOC 2 Type II certified. All client data stored in compliance with GDPR and CCPA." },
          { icon: Eye, title: "Ethical Walls", desc: "Rigorous conflict screening and information barriers to protect client interests." },
        ].map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.15}>
            <div className="text-center">
              <item.icon className="w-10 h-10 text-gold mx-auto mb-4" />
              <h3 className="font-serif text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-cream/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default ConfidentialitySection;
