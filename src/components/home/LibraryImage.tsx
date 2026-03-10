import libraryBg from "@/assets/library-bg.jpg";
import { FadeIn } from "@/components/animations";

const LibraryImage = () => (
  <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${libraryBg})` }}
    />
    <div className="absolute inset-0 bg-forest-dark/40" />
    <div className="relative z-10 h-full flex items-center justify-center">
      <FadeIn>
        <blockquote className="text-center px-6 max-w-3xl">
          <p className="font-serif text-2xl md:text-4xl text-cream font-bold leading-relaxed italic">
            "The strength of a patent lies not in the invention itself, but in the precision of its claims."
          </p>
          <cite className="block mt-6 text-gold font-sans uppercase tracking-widest text-xs not-italic">
            — Eleanor Prescott, Managing Partner
          </cite>
        </blockquote>
      </FadeIn>
    </div>
  </section>
);

export default LibraryImage;
