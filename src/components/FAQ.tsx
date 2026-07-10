import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How do the drops work?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    question: "What is your sizing like?",
    answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    question: "How long is shipping?",
    answer: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
  },
  {
    question: "Quality Guarantee?",
    answer: "Adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-[120px] bg-[#0A0A0A]">
      <div className="max-w-container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-sm block mb-4">Support</span>
            <h2 className="text-5xl md:text-8xl font-display leading-none mb-10">FREQUENTLY <br className="hidden md:block" /> <span className="text-white/20">ASKED</span></h2>
            <p className="text-white/40 text-lg leading-relaxed max-w-sm mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae lacus sed lorem gravida facilisis.
            </p>
            
            <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-white/5 grayscale">
              <img src="/assets/lookbook-3.jpg" alt="Support" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div 
                key={i}
                className="border border-white/10 rounded-lg overflow-hidden bg-[#151515] transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full px-8 py-8 flex items-center justify-between text-left group"
                >
                  <span className="text-xl font-display uppercase tracking-tight text-white group-hover:text-primary transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-6 h-6 text-white/40 transition-transform duration-500 ${openIndex === i ? 'rotate-180 text-primary' : ''}`} />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-8 pb-8 text-white/60 leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
