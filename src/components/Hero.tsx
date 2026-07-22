import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const subheadings = [
  "Graphic Tees.",
  "Heavyweight Hoodies.",
  "Statement Streetwear.",
  "A Lifestyle Movement."
];

export const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = subheadings[index];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        if (displayText.length === currentFullText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % subheadings.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-60 scale-105"
        >
          <source src="/assets/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-transparent to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/40 via-transparent to-[#0A0A0A]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-container mx-auto px-6 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <span className="text-primary text-xs md:text-sm font-bold tracking-[0.6em] uppercase block mb-4">
            New Drop: Spring 2024
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-[10rem] font-display leading-[0.9] md:leading-[0.8] mb-4 tracking-tighter">
            MIND ONN <br /> <span className="text-primary">BUSINESS</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="h-10 mb-8 md:mb-12"
        >
          <p className="text-lg md:text-4xl font-display text-white/80">
            {displayText}
            <span className="animate-pulse ml-1 inline-block w-[2px] h-[1em] bg-primary align-middle" />
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <button className="group relative px-10 py-5 bg-primary text-primary-foreground font-display text-xl uppercase tracking-widest overflow-hidden">
            <span className="relative z-10 flex items-center gap-3">
              Shop The Drop <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>

          <button className="flex items-center gap-4 text-white hover:text-primary transition-colors group">
            <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary transition-colors">
              <Play className="w-5 h-5 fill-current" />
            </div>
            <span className="font-display uppercase tracking-widest text-lg">Watch Lookbook</span>
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] text-white/40 uppercase tracking-[0.4em] rotate-90 mb-8 origin-center">Scroll</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};
