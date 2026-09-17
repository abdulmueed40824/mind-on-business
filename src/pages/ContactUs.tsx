import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Sparkles,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const inquiryTypes = [
  { value: 'collaboration', label: 'Collaboration', hint: 'Brand partnerships & creative projects' },
  { value: 'order', label: 'Order Inquiry', hint: 'Tracking, sizing, or order changes' },
  { value: 'wholesale', label: 'Wholesale', hint: 'Bulk orders & retail accounts' },
  { value: 'other', label: 'Other', hint: 'Anything else on your mind' },
];

const contactChannels = [
  {
    icon: Mail,
    label: 'Email',
    value: 'vdilliejay@icloud.com',
    href: 'mailto:vdilliejay@icloud.com',
    accent: 'primary' as const,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '(763) 220-2387',
    href: 'tel:7632202387',
    accent: 'secondary' as const,
  },
  {
    icon: MapPin,
    label: 'Warehouse',
    value: 'America Agape Family',
    href: undefined,
    accent: 'primary' as const,
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export const ContactUs: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message received. We'll get at you soon.", {
      style: {
        background: '#0A0A0A',
        color: '#C6FF00',
        border: '1px solid #C6FF00',
      },
    });
  };

  const inputClass =
    'w-full bg-[#0A0A0A]/80 border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder:text-white/25 focus:border-primary focus:ring-1 focus:ring-primary/40 focus:outline-none transition-all';

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative min-h-[55vh] md:min-h-[62vh] flex items-end pt-28 pb-14 md:pb-20">
          <img
            src="/assets/pages/contact-hero.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-[#0A0A0A]/50 to-[#0A0A0A]" />
          <div className="absolute top-1/3 right-0 w-[480px] h-[480px] bg-primary/10 blur-[140px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[320px] h-[320px] bg-secondary/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-container mx-auto px-6 w-full">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/50 hover:text-primary text-sm uppercase tracking-widest mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>

            <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
              <span className="text-secondary font-bold tracking-[0.4em] uppercase text-sm block mb-4">Contact Us</span>
              <h1 className="text-5xl sm:text-7xl md:text-[7rem] font-display leading-[0.9] max-w-4xl">
                GET <span className="text-white/20">AT US</span>
              </h1>
              <p className="text-white/55 text-lg md:text-xl max-w-xl mt-8 leading-relaxed">
                Orders, collabs, wholesale — whatever you need. The Mind Onn Business team keeps the same energy on
                support as we do on every drop.
              </p>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 py-2.5">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-xs uppercase tracking-widest text-white/70">1–2 business day reply</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 py-2.5">
                <MessageSquare className="w-4 h-4 text-secondary" />
                <span className="text-xs uppercase tracking-widest text-white/70">Real humans, no bots</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact cards */}
        <section className="relative py-16 md:py-20 border-t border-white/10">
          <div className="max-w-container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              {contactChannels.map((channel, i) => (
                <motion.div
                  key={channel.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group relative p-8 rounded-xl bg-[#111111] border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
                >
                  <div
                    className={cn(
                      'absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500',
                      channel.accent === 'primary' ? 'bg-primary/20' : 'bg-secondary/20'
                    )}
                  />
                  <div
                    className={cn(
                      'w-14 h-14 rounded-xl border flex items-center justify-center mb-6 transition-colors',
                      channel.accent === 'primary'
                        ? 'bg-primary/10 border-primary/30 group-hover:border-primary'
                        : 'bg-secondary/10 border-secondary/30 group-hover:border-secondary'
                    )}
                  >
                    <channel.icon
                      className={cn('w-6 h-6', channel.accent === 'primary' ? 'text-primary' : 'text-secondary')}
                    />
                  </div>
                  <span className="text-xs text-white/40 uppercase tracking-[0.3em] block mb-2">{channel.label}</span>
                  {channel.href ? (
                    <a
                      href={channel.href}
                      className="text-xl md:text-2xl font-display text-white hover:text-primary transition-colors break-all"
                    >
                      {channel.value}
                    </a>
                  ) : (
                    <p className="text-xl md:text-2xl font-display text-white">{channel.value}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Form + sidebar */}
        <section className="relative py-16 md:py-24">
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <div className="max-w-container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-4 lg:sticky lg:top-28"
              >
                <span className="text-primary font-bold tracking-[0.4em] uppercase text-sm block mb-4">Inquiry</span>
                <h2 className="text-4xl md:text-5xl font-display leading-none mb-6">
                  SEND A <span className="text-white/25">MESSAGE</span>
                </h2>
                <p className="text-white/50 leading-relaxed mb-10">
                  Tell us what you need. Include order numbers for faster help on purchases.
                </p>

                <ul className="space-y-4 mb-10">
                  {inquiryTypes.map((type) => (
                    <li
                      key={type.value}
                      className="flex gap-3 text-sm border-l-2 border-white/10 pl-4 py-1 hover:border-primary transition-colors"
                    >
                      <Sparkles className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-display text-white block">{type.label}</span>
                        <span className="text-white/40 text-xs">{type.hint}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-white/50 hover:text-primary transition-colors group"
                >
                  Browse the shop
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              {/* Form */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="lg:col-span-8"
              >
                <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-[#151515] to-[#0f0f0f] p-8 md:p-12 shadow-2xl shadow-black/40">
                  <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                  <form onSubmit={handleSubmit} className="flex flex-col gap-7">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="contact-name" className="text-xs text-white/45 uppercase tracking-widest">
                          Name
                        </label>
                        <input
                          type="text"
                          id="contact-name"
                          required
                          placeholder="Your name"
                          className={inputClass}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="contact-email" className="text-xs text-white/45 uppercase tracking-widest">
                          Email
                        </label>
                        <input
                          type="email"
                          id="contact-email"
                          required
                          placeholder="you@email.com"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact-subject" className="text-xs text-white/45 uppercase tracking-widest">
                        Subject
                      </label>
                      <div className="relative">
                        <select id="contact-subject" className={cn(inputClass, 'appearance-none pr-10 cursor-pointer')}>
                          {inquiryTypes.map((t) => (
                            <option key={t.value} value={t.value}>
                              {t.label}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact-message" className="text-xs text-white/45 uppercase tracking-widest">
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        rows={6}
                        required
                        placeholder="What's on your mind? Keep your mind onn business."
                        className={cn(inputClass, 'resize-none min-h-[160px]')}
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-2">
                      <p className="text-white/30 text-xs uppercase tracking-wider max-w-xs">
                        By sending, you agree we may reply via email or phone.
                      </p>
                      <button
                        type="submit"
                        className="group relative overflow-hidden bg-primary text-primary-foreground font-display uppercase tracking-widest text-base px-10 py-4 flex items-center justify-center gap-3 shrink-0"
                      >
                        <span className="relative z-10 flex items-center gap-3">
                          Send Message
                          <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                        </span>
                        <span className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA strip */}
        <section className="border-t border-white/10 py-16 md:py-20 bg-[#111111]">
          <div className="max-w-container mx-auto px-6 text-center">
            <p className="text-primary text-xs uppercase tracking-[0.4em] mb-4">Mind Onn Business</p>
            <h2 className="text-3xl md:text-5xl font-display mb-6">STAY LOCKED IN</h2>
            <p className="text-white/45 max-w-lg mx-auto mb-8">
              While you wait for a reply, explore the latest drops and keep building.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/shop"
                className="px-8 py-4 border border-white/20 font-display uppercase tracking-widest text-sm hover:border-primary hover:text-primary transition-colors"
              >
                Shop Now
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 bg-white/5 border border-white/10 font-display uppercase tracking-widest text-sm hover:border-secondary hover:text-secondary transition-colors"
              >
                Our Story
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;
