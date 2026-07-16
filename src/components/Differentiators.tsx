import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Layers, Cpu, Globe } from 'lucide-react';

const pillars = [
  {
    icon: ShieldCheck,
    title: "Heavyweight Quality",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    icon: Zap,
    title: "Vibrant Accents",
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    icon: Layers,
    title: "Layered Mindset",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    icon: Cpu,
    title: "NFC Verified",
    desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    icon: Globe,
    title: "Minneapolis Roots",
    desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos."
  }
];

export const Differentiators: React.FC = () => {
  return (
    <section className="py-[120px] bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Header Area */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-secondary font-bold tracking-[0.4em] uppercase text-sm block mb-6">Mind Onn Business Edge</span>
              <h2 className="text-5xl sm:text-6xl md:text-8xl font-display mb-10 leading-[1] md:leading-[0.9]">MORE THAN <span className="text-secondary">MERCH</span> — IT'S A <span className="text-white/20">MINDSET.</span></h2>
              <p className="text-white/60 text-lg leading-relaxed mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae lacus sed lorem gravida facilisis. Donec posuere, lorem at commodo feugiat, sapien sem pretium nulla, vitae fermentum justo arcu sed neque.
              </p>
              
              <div className="w-full h-[1px] bg-white/10 mb-12" />
              
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 rounded-full border border-secondary flex items-center justify-center group-hover:bg-secondary transition-all duration-300">
                  <Zap className="w-6 h-6 text-secondary group-hover:text-white" />
                </div>
                <span className="text-xl font-display uppercase tracking-widest group-hover:text-secondary transition-colors">Join the collective</span>
              </div>
            </motion.div>
          </div>

          {/* Pillars Area - Asymmetric Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={i === 0 ? "md:col-span-2 bg-[#151515] p-12 rounded-lg border border-white/5 relative overflow-hidden group" : "bg-[#151515] p-10 rounded-lg border border-white/5 group hover:border-secondary transition-colors"}
              >
                <pillar.icon className={i === 0 ? "w-12 h-12 text-secondary mb-8" : "w-10 h-10 text-white/40 group-hover:text-secondary transition-colors mb-6"} />
                <h3 className={i === 0 ? "text-4xl font-display mb-4" : "text-2xl font-display mb-3"}>{pillar.title}</h3>
                <p className="text-white/40 leading-relaxed text-sm">{pillar.desc}</p>
                
                {i === 0 && (
                  <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full -mr-32 -mt-32" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
