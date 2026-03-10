import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const posts = [
  {
    date: "Feb 28, 2026",
    category: "Patent Law",
    title: "The Impact of AI-Generated Inventions on Patent Eligibility",
    excerpt: "Recent developments in USPTO guidance regarding AI as an inventor raise critical questions for technology companies.",
  },
  {
    date: "Feb 15, 2026",
    category: "Trademark",
    title: "Protecting Brand Identity in the Metaverse: A Legal Framework",
    excerpt: "As virtual commerce expands, trademark holders must consider new strategies for brand protection.",
  },
  {
    date: "Jan 30, 2026",
    category: "Trade Secrets",
    title: "Employee Mobility and Trade Secret Risks in the Biotech Sector",
    excerpt: "Key considerations for life sciences companies managing proprietary information across competitive hiring.",
  },
];

const BlogSection = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <FadeIn>
        <span className="block text-gold font-sans uppercase tracking-[0.3em] text-xs text-center mb-3">
          Insights
        </span>
        <h2 className="text-3xl md:text-4xl font-serif text-center font-bold text-foreground mb-16">
          IP Law Blog
        </h2>
      </FadeIn>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <StaggerItem key={post.title}>
            <article className="group border border-border p-8 hover:border-gold/40 transition-all duration-500 bg-card h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-sans uppercase tracking-widest text-gold border border-gold/30 px-2 py-0.5">
                  {post.category}
                </span>
                <span className="text-xs text-muted-foreground">{post.date}</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-foreground mb-3 leading-snug group-hover:text-forest-light transition-colors duration-300">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">{post.excerpt}</p>
              <Link to="/insights" className="inline-flex items-center gap-2 mt-4 text-gold font-sans text-xs uppercase tracking-widest group-hover:gap-3 transition-all duration-300">
                Read More <ArrowRight size={12} />
              </Link>
            </article>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default BlogSection;
