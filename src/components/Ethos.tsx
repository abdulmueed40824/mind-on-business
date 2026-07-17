import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "The Vision",
    description: "It started with an idea — build a brand that speaks for the ones who move with purpose and never stop chasing it, no matter the odds."
  },
  {
    number: "02",
    title: "The Grind",
    description: "Late nights, early mornings, and countless hours behind the scenes. The grind is where the brand was really built, piece by piece."
  },
  {
    number: "03",
    title: "The Execution",
    description: "From concept to fabric to final stitch, every drop is executed with precision. No shortcuts, no compromises — just heavyweight quality."
  },
  {
    number: "04",
    title: "The Legacy",
    description: "Mind Onn Business isn't a trend, it's a legacy in the making. Every piece is designed to outlast the moment and outlast the season."
  }
];

export const Ethos: React.FC = () => {
  const lineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const firstCircleRef = useRef<HTMLDivElement>(null);
  const lastCircleRef = useRef<HTMLDivElement>(null);
  const [lineStyle, setLineStyle] = useState({ left: '0', width: '0' });

  useEffect(() => {
    const updateLine = () => {
      if (firstCircleRef.current && lastCircleRef.current && gridRef.current) {
        const firstRect = firstCircleRef.current.getBoundingClientRect();
        const lastRect = lastCircleRef.current.getBoundingClientRect();
        const gridRect = gridRef.current.getBoundingClientRect();

        // Calculate positions relative to the grid container
        const startX = firstRect.right - gridRect.left;
        const endX = lastRect.left - gridRect.left;
        
        setLineStyle({
          left: `${startX}px`,
          width: `${endX - startX}px`
        });
      }
    };

    updateLine();
    // Use a small timeout to ensure layout is settled
    const timeout = setTimeout(updateLine, 100);
    
    window.addEventListener('resize', updateLine);

    const ctx = gsap.context(() => {
      gsap.fromTo(lineRef.current, 
        { scaleX: 0 },
        { 
          scaleX: 1, 
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 30%",
            scrub: 1,
          }
        }
      );
    });

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', updateLine);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={containerRef} className="py-[120px] bg-[#0A0A0A] relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="max-w-container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-[0.4em] uppercase text-sm block mb-4"
          >
            The Process
          </motion.span>
          <h2 className="text-5xl md:text-9xl font-display leading-none">THE Mind Onn Business <span className="text-white/20">MINDSET</span></h2>
        </div>

        {/* Steps Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          
          {/* Connector Line (Desktop) */}
          <div 
            className="hidden lg:block absolute top-[2.5rem] z-0 pointer-events-none"
            style={{ 
              left: lineStyle.left,
              width: lineStyle.width,
              height: '2px'
            }}
          >
            {/* The background line (dim) */}
            <div className="absolute inset-0 bg-white/10" />
            {/* The animated accent line (primary) */}
            <div 
              ref={lineRef} 
              className="h-full bg-primary origin-left scale-x-0 accent-glow absolute inset-0"
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative z-10"
            >
              <div 
                ref={i === 0 ? firstCircleRef : (i === steps.length - 1 ? lastCircleRef : null)}
                className="w-20 h-20 rounded-full bg-[#151515] border border-white/10 flex items-center justify-center mb-8 group hover:border-primary transition-all duration-500 relative overflow-hidden"
              >
                <span className="text-2xl font-display text-white relative z-10 group-hover:text-primary transition-colors">{step.number}</span>
                <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </div>
              <h3 className="text-3xl font-display text-white mb-4 uppercase tracking-tighter">{step.title}</h3>
              <p className="text-white/40 leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
