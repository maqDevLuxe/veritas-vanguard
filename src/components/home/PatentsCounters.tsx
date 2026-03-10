import { FadeIn } from "@/components/animations";
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

const Counter = ({ end, suffix = "" }: { end: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2500;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(p * end));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, end]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const counters = [
  { value: 12500, suffix: "+", label: "Patents Secured" },
  { value: 8700, suffix: "+", label: "Trademarks Registered" },
  { value: 180, suffix: "+", label: "Jurisdictions Covered" },
  { value: 500, suffix: "+", label: "Active Clients" },
];

const PatentsCounters = () => (
  <section className="py-20 bg-cream-dark">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {counters.map((c, i) => (
          <FadeIn key={c.label} delay={i * 0.1}>
            <div className="text-center">
              <span className="block font-serif text-3xl md:text-5xl font-bold text-gold">
                <Counter end={c.value} suffix={c.suffix} />
              </span>
              <span className="block font-sans text-xs uppercase tracking-widest text-muted-foreground mt-2">
                {c.label}
              </span>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default PatentsCounters;
