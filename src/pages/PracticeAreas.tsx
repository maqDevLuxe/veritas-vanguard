import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { Shield, FileText, Scale, Lightbulb, Globe, Lock, Briefcase, Search } from "lucide-react";

const areas = [
  { icon: FileText, title: "Patent Prosecution", desc: "We draft, file, and prosecute patent applications across all technology areas including software, electrical, mechanical, chemical, and biotech inventions. Our team includes former USPTO examiners and PhDs across multiple disciplines.", points: ["Utility & Design Patents", "Continuation & Divisional Strategy", "Inter Partes Review Defense", "Patent Portfolio Management"] },
  { icon: Shield, title: "Trademark Law", desc: "Comprehensive trademark services from clearance searches through registration and enforcement. We protect brands globally through the Madrid Protocol and direct national filings.", points: ["Trademark Search & Clearance", "Federal & State Registration", "Opposition & Cancellation", "Brand Monitoring & Enforcement"] },
  { icon: Scale, title: "IP Litigation", desc: "Aggressive trial-ready representation in patent, trademark, and trade secret disputes in federal courts and before the PTAB, ITC, and TTAB.", points: ["Patent Infringement Actions", "Trade Secret Misappropriation", "ITC Section 337 Investigations", "Hatch-Waxman/ANDA Litigation"] },
  { icon: Lightbulb, title: "Trade Secrets", desc: "We help companies build robust trade secret protection programs and vigorously pursue misappropriation claims under the DTSA and state laws.", points: ["Trade Secret Audits", "NDA & Non-Compete Drafting", "Misappropriation Litigation", "Employee Exit Protocols"] },
  { icon: Globe, title: "International IP", desc: "Strategic international patent and trademark filings across 180+ jurisdictions through our network of trusted foreign counsel.", points: ["PCT & Paris Convention Filings", "EP Validation Strategy", "China IP Prosecution", "Multi-Jurisdictional Enforcement"] },
  { icon: Lock, title: "IP Due Diligence", desc: "Thorough IP audits and valuations for M&A, licensing, and financing transactions. We identify risks and opportunities in IP portfolios.", points: ["Portfolio Valuation", "Freedom-to-Operate Analysis", "Licensing & Technology Transfer", "Standard-Essential Patents"] },
  { icon: Briefcase, title: "Copyright Law", desc: "Protection of creative works including software, databases, and digital content. Registration, licensing, and DMCA compliance.", points: ["Copyright Registration", "Software Licensing", "DMCA Compliance", "Digital Rights Management"] },
  { icon: Search, title: "IP Strategy & Counseling", desc: "Proactive IP strategy aligned with business objectives, competitive positioning, and long-term portfolio growth.", points: ["Competitive Landscape Analysis", "Invention Harvesting", "Patent Mapping", "Monetization Strategy"] },
];

const PracticeAreas = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="pt-32 pb-16 bg-forest text-cream">
      <div className="container mx-auto px-6">
        <FadeIn>
          <span className="block text-gold font-sans uppercase tracking-[0.3em] text-xs mb-3">
            What We Do
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Practice Areas</h1>
          <p className="text-cream/60 max-w-2xl text-lg">
            Full-spectrum intellectual property counsel backed by deep technical expertise and decades of courtroom experience.
          </p>
        </FadeIn>
      </div>
    </section>

    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <StaggerContainer className="space-y-16">
          {areas.map((a, i) => (
            <StaggerItem key={a.title}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 border border-gold/30 flex items-center justify-center">
                      <a.icon className="w-6 h-6 text-gold" />
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">{a.title}</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">{a.desc}</p>
                </div>
                <div className="bg-card border border-border p-8">
                  <h3 className="font-sans uppercase tracking-widest text-xs text-gold font-semibold mb-4">Key Services</h3>
                  <ul className="space-y-3">
                    {a.points.map((p) => (
                      <li key={p} className="flex items-center gap-3 text-sm text-foreground">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {i < areas.length - 1 && <div className="border-t border-border mt-16" />}
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    <Footer />
  </div>
);

export default PracticeAreas;
