import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { Mail, Linkedin } from "lucide-react";

const attorneys = [
  { name: "Eleanor Prescott", title: "Managing Partner", specialty: "Patent Litigation & Strategy", education: "Harvard Law School, J.D. · MIT, Ph.D. Electrical Engineering", bar: "NY, DC, USPTO", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=600&fit=crop", bio: "Eleanor founded the firm's patent litigation practice and has argued before the Federal Circuit, ITC, and PTAB. A former USPTO examiner, she brings unparalleled insight into patent prosecution strategy." },
  { name: "James Sterling III", title: "Senior Partner", specialty: "Biotech & Pharma IP", education: "Yale Law School, J.D. · Johns Hopkins, M.D.", bar: "NY, CA, USPTO", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=600&fit=crop", bio: "James leads the firm's life sciences practice, counseling pharmaceutical and biotech companies on patent strategy, Hatch-Waxman litigation, and regulatory IP issues." },
  { name: "Dr. Mei-Lin Chen", title: "Partner", specialty: "AI & Software Patents", education: "Stanford Law School, J.D. · Caltech, Ph.D. Computer Science", bar: "CA, USPTO", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=600&fit=crop", bio: "Mei-Lin is a pioneer in AI patent prosecution, having secured over 200 patents in machine learning, natural language processing, and autonomous systems." },
  { name: "Richard Kensington", title: "Partner", specialty: "International IP & Trade", education: "Oxford University, BCL · London School of Economics, LL.M.", bar: "England & Wales, NY", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop", bio: "Richard manages the firm's international practice, coordinating IP strategy across 40+ jurisdictions with a particular focus on European and Asian patent prosecution." },
  { name: "Sophia Ramirez", title: "Counsel", specialty: "Trademark & Brand Protection", education: "Georgetown Law, J.D. · Columbia, B.A.", bar: "NY, DC, USPTO", image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=500&h=600&fit=crop", bio: "Sophia manages complex trademark portfolios for Fortune 500 clients, specializing in international brand protection and domain name disputes." },
  { name: "Dr. Amir Hassan", title: "Associate", specialty: "Chemical & Materials Patents", education: "NYU Law, J.D. · Carnegie Mellon, Ph.D. Chemistry", bar: "NY, USPTO", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=600&fit=crop", bio: "Amir brings deep expertise in chemical engineering and materials science to patent prosecution in the clean energy and advanced materials sectors." },
];

const Attorneys = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="pt-32 pb-16 bg-forest text-cream">
      <div className="container mx-auto px-6">
        <FadeIn>
          <span className="block text-gold font-sans uppercase tracking-[0.3em] text-xs mb-3">Our Team</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Attorneys</h1>
          <p className="text-cream/60 max-w-2xl text-lg">
            Distinguished legal minds with advanced scientific degrees and decades of IP experience.
          </p>
        </FadeIn>
      </div>
    </section>

    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <StaggerContainer className="space-y-16">
          {attorneys.map((a, i) => (
            <StaggerItem key={a.name}>
              <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 items-start ${i % 2 === 1 ? 'lg:[direction:rtl] [&>*]:lg:[direction:ltr]' : ''}`}>
                <div className="aspect-[5/6] overflow-hidden">
                  <img src={a.image} alt={a.name} className="w-full h-full object-cover" />
                </div>
                <div className="lg:col-span-2 py-4">
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">{a.name}</h2>
                  <p className="text-gold font-sans uppercase tracking-widest text-xs mt-1">{a.title}</p>
                  <p className="text-muted-foreground text-sm mt-1">{a.specialty}</p>
                  <p className="text-foreground mt-6 leading-relaxed">{a.bio}</p>
                  <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                    <p><span className="text-gold font-sans uppercase text-xs tracking-widest">Education: </span>{a.education}</p>
                    <p><span className="text-gold font-sans uppercase text-xs tracking-widest">Admissions: </span>{a.bar}</p>
                  </div>
                  <div className="mt-6 flex gap-4">
                    <Mail className="w-4 h-4 text-muted-foreground hover:text-gold cursor-pointer transition-colors" />
                    <Linkedin className="w-4 h-4 text-muted-foreground hover:text-gold cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>
              {i < attorneys.length - 1 && <div className="border-t border-border mt-16" />}
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    <Footer />
  </div>
);

export default Attorneys;
