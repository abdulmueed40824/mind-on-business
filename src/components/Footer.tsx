import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Youtube, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0A] pt-32 pb-12 relative overflow-hidden">
      {/* Watermark Marquee */}
      <div className="absolute bottom-40 left-0 right-0 pointer-events-none select-none opacity-[0.03] overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          <span className="text-[10rem] md:text-[25rem] font-display uppercase leading-none px-10 md:px-20">Mind Onn Business</span>
          <span className="text-[10rem] md:text-[25rem] font-display uppercase leading-none px-10 md:px-20">Mind Onn Business</span>
        </motion.div>
      </div>

      <div className="max-w-container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-32">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <span className="text-4xl font-display text-primary block mb-8">Mind Onn Business</span>
            <p className="text-white/40 text-lg leading-relaxed max-w-sm mb-10">
              Premium streetwear rooted in culture and built for those who keep their mind on business. Based in Minneapolis, worn everywhere the grind takes you.
            </p>
            <div className="flex gap-6">
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-primary hover:border-primary transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-primary hover:border-primary transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-primary hover:border-primary transition-all duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="text-xs text-white/40 uppercase tracking-[0.4em] mb-10">Navigation</h4>
            <ul className="flex flex-col gap-6">
              <li><a href="#home" className="text-xl font-display text-white hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-xl font-display text-white hover:text-primary transition-colors">About</a></li>
              <li><a href="#shop" className="text-xl font-display text-white hover:text-primary transition-colors">Shop</a></li>
              <li><a href="#contact" className="text-xl font-display text-white hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal / Contact */}
          <div>
            <h4 className="text-xs text-white/40 uppercase tracking-[0.4em] mb-10">Get in touch</h4>
            <ul className="flex flex-col gap-6">
              <li className="text-white/60 text-lg">America Agape Family</li>
              <li><a href="mailto:vdilliejay@icloud.com" className="text-xl font-display text-white hover:text-primary transition-colors">vdilliejay@icloud.com</a></li>
              <li><a href="tel:7632202387" className="text-xl font-display text-white hover:text-primary transition-colors">(763) 220-2387</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2 h-[44px]">
            <span className="text-3xl font-display text-primary">Mind Onn Business</span>
            <span className="text-[10px] text-white/20 uppercase tracking-[0.2em] ml-2">© 2024 All Rights Reserved</span>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-white/40 hover:text-primary transition-colors"
          >
            Back to top 
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-all">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
