import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Shop', href: '#shop' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 h-20 flex items-center px-6 md:px-12',
          scrolled ? 'bg-[#0A0A0A]/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
        )}
      >
        <div className="max-w-container mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button 
              onClick={() => setIsOpen(true)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors md:hidden"
            >
              <Menu className="w-6 h-6 text-white" />
            </button>
            
            <a href="#home" className="h-[40px] flex items-center group">
              <span className="text-3xl font-display text-primary tracking-tighter group-hover:text-secondary transition-colors">
                Mind Onn Business
              </span>
            </a>

            <div className="hidden md:flex items-center gap-8 ml-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-white/70 hover:text-primary tracking-widest uppercase transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <button className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-none font-display uppercase tracking-widest hover:bg-secondary hover:text-white transition-all duration-300">
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Shop the Drop</span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[2000]"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[80%] max-w-sm bg-[#0A0A0A] z-[2001] p-10 flex flex-col"
            >
              <div className="flex items-center justify-between mb-16">
                <span className="text-4xl font-display text-primary">Mind Onn Business</span>
                <button onClick={() => setIsOpen(false)}>
                  <X className="w-8 h-8 text-white" />
                </button>
              </div>

              <div className="flex flex-col gap-8">
                {navLinks.map((link, i) => (
                  <motion.a
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * i + 0.2 }}
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-display text-white hover:text-primary transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto">
                <p className="text-white/40 text-xs uppercase tracking-[0.2em] mb-4">Mind on Business.</p>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-colors cursor-pointer">IG</div>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-colors cursor-pointer">TW</div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
