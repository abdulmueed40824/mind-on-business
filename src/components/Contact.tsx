import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

export const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message received. We'll get at you soon.", {
      style: {
        background: '#0A0A0A',
        color: '#C6FF00',
        border: '1px solid #C6FF00'
      }
    });
  };

  return (
    <section id="contact" className="py-[120px] bg-[#0A0A0A] relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left: Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-secondary font-bold tracking-[0.4em] uppercase text-sm block mb-6">Connect</span>
              <h2 className="text-5xl sm:text-7xl md:text-9xl font-display leading-[0.9] md:leading-[0.8] mb-12">GET <br /> <span className="text-white/20">AT US.</span></h2>
              
              <div className="flex flex-col gap-10">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-lg bg-[#151515] border border-white/10 flex items-center justify-center group-hover:border-secondary transition-colors">
                    <Mail className="w-5 h-5 text-white/40 group-hover:text-secondary transition-colors" />
                  </div>
                  <div>
                    <span className="text-xs text-white/40 uppercase tracking-widest block mb-1">Email</span>
                    <a href="mailto:vdilliejay@icloud.com" className="text-2xl font-display text-white hover:text-secondary transition-colors">vdilliejay@icloud.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-lg bg-[#151515] border border-white/10 flex items-center justify-center group-hover:border-secondary transition-colors">
                    <Phone className="w-5 h-5 text-white/40 group-hover:text-secondary transition-colors" />
                  </div>
                  <div>
                    <span className="text-xs text-white/40 uppercase tracking-widest block mb-1">Phone</span>
                    <a href="tel:7632202387" className="text-2xl font-display text-white hover:text-secondary transition-colors">(763) 220-2387</a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-lg bg-[#151515] border border-white/10 flex items-center justify-center group-hover:border-secondary transition-colors">
                    <MapPin className="w-5 h-5 text-white/40 group-hover:text-secondary transition-colors" />
                  </div>
                  <div>
                    <span className="text-xs text-white/40 uppercase tracking-widest block mb-1">Warehouse</span>
                    <address className="text-2xl font-display text-white not-italic">America Agape Family</address>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#151515] p-10 md:p-16 rounded-lg border border-white/5 relative"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs text-white/40 uppercase tracking-widest">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    placeholder="Enter your name"
                    className="bg-transparent border-b border-white/10 py-3 focus:border-secondary focus:outline-none text-white transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs text-white/40 uppercase tracking-widest">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    placeholder="Enter your email"
                    className="bg-transparent border-b border-white/10 py-3 focus:border-secondary focus:outline-none text-white transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-xs text-white/40 uppercase tracking-widest">Subject</label>
                <select id="subject" className="bg-[#0A0A0A] border-b border-white/10 py-3 focus:border-secondary focus:outline-none text-white transition-colors appearance-none">
                  <option value="collaboration">Collaboration</option>
                  <option value="order">Order Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs text-white/40 uppercase tracking-widest">Message</label>
                <textarea 
                  id="message"
                  rows={4}
                  required
                  placeholder="What's on your mind?"
                  className="bg-transparent border-b border-white/10 py-3 focus:border-secondary focus:outline-none text-white transition-colors resize-none"
                />
              </div>

              <button className="w-full bg-secondary text-white font-display uppercase tracking-widest text-xl py-5 group flex items-center justify-center gap-4 hover:bg-white hover:text-black transition-all duration-500 mt-4">
                Send Message <Send className="w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
