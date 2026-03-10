import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { ArrowRight } from "lucide-react";

const articles = [
  { date: "Feb 28, 2026", category: "Patent Law", title: "The Impact of AI-Generated Inventions on Patent Eligibility", excerpt: "The USPTO's evolving guidance on AI-assisted inventions creates both opportunities and uncertainties for patent applicants. We analyze the latest developments and offer strategic recommendations for technology companies navigating this shifting landscape.", readTime: "8 min read" },
  { date: "Feb 15, 2026", category: "Trademark", title: "Protecting Brand Identity in the Metaverse: A Legal Framework", excerpt: "As virtual commerce expands, trademark holders must consider new strategies for protecting brands in digital environments. We examine the legal frameworks emerging around virtual goods and services.", readTime: "6 min read" },
  { date: "Jan 30, 2026", category: "Trade Secrets", title: "Employee Mobility and Trade Secret Risks in Biotech", excerpt: "The biotech sector faces unique challenges in balancing employee mobility with trade secret protection. We discuss best practices for exit procedures, non-compete enforcement, and proactive IP safeguards.", readTime: "10 min read" },
  { date: "Jan 12, 2026", category: "IP Strategy", title: "Building a Defensive Patent Portfolio in the Age of NPEs", excerpt: "Non-practicing entities continue to pose significant threats to operating companies. We outline strategies for building patent portfolios that deter frivolous assertions while supporting business objectives.", readTime: "7 min read" },
  { date: "Dec 20, 2025", category: "International", title: "Navigating China's Evolving IP Enforcement Landscape", excerpt: "China's intellectual property courts and enforcement mechanisms have matured significantly. We provide an update on recent developments and practical guidance for foreign rights holders.", readTime: "9 min read" },
  { date: "Dec 5, 2025", category: "Litigation", title: "ITC Section 337: A Powerful Tool for IP Enforcement", excerpt: "The International Trade Commission offers unique advantages for IP holders seeking to block infringing imports. We analyze recent cases and discuss strategic considerations for ITC complaints.", readTime: "11 min read" },
];

const Insights = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="pt-32 pb-16 bg-forest text-cream">
      <div className="container mx-auto px-6">
        <FadeIn>
          <span className="block text-gold font-sans uppercase tracking-[0.3em] text-xs mb-3">Publications</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Insights</h1>
          <p className="text-cream/60 max-w-2xl text-lg">
            Expert analysis on emerging IP law trends, landmark decisions, and strategic guidance.
          </p>
        </FadeIn>
      </div>
    </section>

    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((a) => (
            <StaggerItem key={a.title}>
              <article className="group border border-border p-8 bg-card hover:border-gold/40 transition-all duration-500 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-sans uppercase tracking-widest text-gold border border-gold/30 px-2 py-0.5">
                    {a.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{a.date}</span>
                  <span className="text-xs text-muted-foreground ml-auto">{a.readTime}</span>
                </div>
                <h2 className="font-serif text-xl font-bold text-foreground mb-3 leading-snug group-hover:text-forest-light transition-colors duration-300">
                  {a.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{a.excerpt}</p>
                <span className="inline-flex items-center gap-2 mt-6 text-gold font-sans text-xs uppercase tracking-widest cursor-pointer group-hover:gap-3 transition-all duration-300">
                  Read Full Article <ArrowRight size={12} />
                </span>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    <Footer />
  </div>
);

export default Insights;
