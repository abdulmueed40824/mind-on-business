import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const About: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <section ref={containerRef} id="about" className="py-[120px] bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left: Content */}
        <div className="relative z-10">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-[0.4em] uppercase text-sm block mb-6"
          >
            Our Philosophy
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-8xl font-display mb-10 leading-[1] md:leading-[0.9]"
          >
            BUILT FOR THE ONES WHO KEEP THEIR <span className="text-white/20">MIND ON BUSINESS</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg leading-relaxed max-w-xl mb-12"
          >
            Mind Onn Business was built in the heart of Minneapolis for the ones who move with purpose and let the results do the talking. Every piece we drop carries that same energy — heavyweight fabrics, sharp silhouettes, and a mindset built to win. This isn't just merch, it's a uniform for the ones on the come-up.
          </motion.p>

          <div className="grid grid-cols-2 gap-8">
            <div className="border-l border-primary/30 pl-6 py-2">
              <span className="text-3xl font-display text-white block mb-1">2021</span>
              <span className="text-xs text-white/40 uppercase tracking-widest">Established</span>
            </div>
            <div className="border-l border-primary/30 pl-6 py-2">
              <span className="text-3xl font-display text-white block mb-1">Mpls</span>
              <span className="text-xs text-white/40 uppercase tracking-widest">Roots</span>
            </div>
          </div>
        </div>

        {/* Right: Parallax Images */}
        <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
          <motion.div
            style={{ y: y1 }}
            className="absolute top-0 right-0 w-[80%] h-[80%] rounded-lg overflow-hidden border border-white/5"
          >
            <img 
              src="/assets/lookbook-1.jpg" 
              alt="Streetwear model" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
          
          <motion.div
            style={{ y: y2, rotate: rotate }}
            className="absolute bottom-0 left-0 w-[60%] h-[60%] rounded-lg overflow-hidden border-4 border-[#0A0A0A] shadow-2xl z-20"
          >
            <img 
              src="/assets/lookbook-2.jpg" 
              alt="Urban detail" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/20 blur-[80px] rounded-full pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
