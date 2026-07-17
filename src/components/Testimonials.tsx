import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    text: "The fit is unmatched and the quality speaks for itself. Every piece feels like it was made to last, not just to look good for a season.",
    author: "Alex R.",
    role: "Digital Creator"
  },
  {
    text: "M.O.B gets it — this isn't just streetwear, it's a mindset you can wear. I get compliments every single time I step out in it.",
    author: "Jordan T.",
    role: "Entrepreneur"
  },
  {
    text: "Heavyweight, comfortable, and built to move with me. This is the only brand I trust for both the gym and the street.",
    author: "Marcus K.",
    role: "Athlete"
  },
  {
    text: "Every drop sells out for a reason. The NFC verification gives me peace of mind that what I'm copping is one hundred percent authentic.",
    author: "Sarah L.",
    role: "Collector"
  },
  {
    text: "The attention to detail is next level. From the stitching to the packaging, Mind Onn Business does it right every time.",
    author: "Chris D.",
    role: "Creative Director"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-[120px] bg-[#0A0A0A] overflow-hidden border-y border-white/5">
      <div className="max-w-container mx-auto px-6 mb-16">
        <span className="text-primary font-bold tracking-[0.4em] uppercase text-sm block mb-4 text-center">Reviews</span>
        <h2 className="text-5xl md:text-7xl font-display text-center uppercase tracking-tighter">VOICES OF THE <span className="text-white/20">COLLECTIVE</span></h2>
      </div>

      <div className="relative flex flex-col gap-8">
        {/* First Row */}
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 30, 
              ease: "linear", 
              repeat: Infinity 
            }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...testimonials, ...testimonials].map((item, i) => (
              <div 
                key={i} 
                className="w-[400px] flex-shrink-0 bg-[#151515] p-10 rounded-lg border border-white/5"
              >
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(s => (
                    <div key={s} className="w-4 h-4 bg-primary rounded-sm" />
                  ))}
                </div>
                <p className="text-white/80 italic text-lg leading-relaxed mb-8 whitespace-normal">
                  "{item.text}"
                </p>
                <div>
                  <h4 className="text-xl font-display text-white uppercase">{item.author}</h4>
                  <span className="text-xs text-white/40 uppercase tracking-widest">{item.role}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second Row (Reverse) */}
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ 
              duration: 35, 
              ease: "linear", 
              repeat: Infinity 
            }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...testimonials, ...testimonials].reverse().map((item, i) => (
              <div 
                key={i} 
                className="w-[400px] flex-shrink-0 bg-[#151515] p-10 rounded-lg border border-white/5"
              >
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(s => (
                    <div key={s} className="w-4 h-4 bg-secondary rounded-sm" />
                  ))}
                </div>
                <p className="text-white/80 italic text-lg leading-relaxed mb-8 whitespace-normal">
                  "{item.text}"
                </p>
                <div>
                  <h4 className="text-xl font-display text-white uppercase">{item.author}</h4>
                  <span className="text-xs text-white/40 uppercase tracking-widest">{item.role}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
