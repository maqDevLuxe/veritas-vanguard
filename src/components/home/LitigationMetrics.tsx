import { FadeIn } from "@/components/animations";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Counter = ({ end, suffix = "" }: { end: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, end]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const metrics = [
  { value: 97, suffix: "%", label: "Litigation Success Rate" },
  { value: 2400, suffix: "+", label: "Cases Won" },
  { value: 850, suffix: "M", label: "Damages Recovered ($)" },
  { value: 35, suffix: "+", label: "Years of Excellence" },
];

const LitigationMetrics = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <FadeIn>
        <span className="block text-gold font-sans uppercase tracking-[0.3em] text-xs text-center mb-3">
          Track Record
        </span>
        <h2 className="text-3xl md:text-4xl font-serif text-center font-bold text-foreground mb-16">
          Litigation Success
        </h2>
      </FadeIn>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {metrics.map((m, i) => (
          <FadeIn key={m.label} delay={i * 0.1}>
            <div className="text-center">
              <span className="block font-serif text-4xl md:text-5xl font-bold text-forest">
                <Counter end={m.value} suffix={m.suffix} />
              </span>
              <span className="block font-sans text-xs uppercase tracking-widest text-muted-foreground mt-2">
                {m.label}
              </span>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default LitigationMetrics;
