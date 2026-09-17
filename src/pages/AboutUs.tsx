import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const values = [
  {
    title: 'Discipline First',
    body: 'Every drop is a reminder to stay locked in on your goals — mental, physical, financial, and personal.',
  },
  {
    title: 'Built to Last',
    body: 'Heavyweight fabrics, reinforced stitching, and silhouettes designed to survive the grind season after season.',
  },
  {
    title: 'Community Driven',
    body: 'Mind Onn Business is for the ones on the come-up — entrepreneurs, creatives, and everyday grinders nationwide.',
  },
];

export const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />

      <main>
        <section className="relative min-h-[70vh] flex items-end pt-28 pb-16 overflow-hidden">
          <img
            src="/assets/pages/about-hero.jpg"
            alt="Mind Onn Business streetwear lifestyle"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />
          <div className="relative z-10 max-w-container mx-auto px-6 w-full">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/50 hover:text-primary text-sm uppercase tracking-widest mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-sm block mb-4">About Us</span>
            <h1 className="text-5xl md:text-8xl font-display leading-none max-w-4xl">
              THE STORY BEHIND <span className="text-primary">MIND ONN BUSINESS</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mt-8 leading-relaxed">
              Born in America with a simple mission: create streetwear that keeps you focused on what matters. We are not
              chasing trends — we are building a uniform for people who move with purpose.
            </p>
          </div>
        </section>

        <section className="py-24 border-t border-white/10">
          <div className="max-w-container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-display leading-tight mb-8">
                FROM LATE NIGHTS TO <span className="text-white/25">LEGACY</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                Mind Onn Business started as an idea between friends who believed apparel could carry a mindset. What began
                as sketches and sample runs grew into a full collection of graphic tees, hoodies, and jackets worn by
                people who refuse to lose focus on the mission.
              </p>
              <p className="text-white/60 text-lg leading-relaxed">
                Today we design every piece in-house, source premium materials, and drop limited runs so quality always
                comes before hype. When you wear Mind Onn Business, you are telling the world you keep your mind onn
                business — always.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-lg overflow-hidden border border-white/10"
            >
              <img
                src="/assets/pages/about-craft.jpg"
                alt="Fashion design and craftsmanship"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-[#111111]">
          <div className="max-w-container mx-auto px-6">
            <span className="text-secondary font-bold tracking-[0.4em] uppercase text-sm block mb-6 text-center">
              What We Stand For
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
              {values.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border border-white/10 p-8 rounded-lg bg-[#0A0A0A]"
                >
                  <h3 className="text-2xl font-display text-primary mb-4">{item.title}</h3>
                  <p className="text-white/50 leading-relaxed">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 order-2 lg:order-1">
              <img
                src="/assets/pages/about-community.jpg"
                alt="Community and urban culture"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-6xl font-display mb-8">
                ROOTED IN <span className="text-secondary">REAL CULTURE</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-10">
                Our community spans cities, studios, gyms, and boardrooms. Different paths — same standard: show up,
                execute, and keep your mind onn business.
              </p>
              <Link
                to="/shop"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-display uppercase tracking-widest hover:bg-secondary hover:text-white transition-colors"
              >
                Shop The Collection <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
