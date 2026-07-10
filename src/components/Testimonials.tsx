import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae lacus sed lorem gravida facilisis. Donec posuere, lorem at commodo feugiat.",
    author: "Alex R.",
    role: "Digital Creator"
  },
  {
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    author: "Jordan T.",
    role: "Entrepreneur"
  },
  {
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    author: "Marcus K.",
    role: "Athlete"
  },
  {
    text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    author: "Sarah L.",
    role: "Collector"
  },
  {
    text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.",
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
