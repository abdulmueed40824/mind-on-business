import React from 'react';
import { Preloader } from '@/components/Preloader';
import { SmoothScroll } from '@/components/SmoothScroll';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Collection } from '@/components/Collection';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { Ethos } from '@/components/Ethos';
import { Lookbook } from '@/components/Lookbook';
import { Differentiators } from '@/components/Differentiators';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Home: React.FC = () => {
  return (
    <SmoothScroll>
      <div className="relative bg-[#0A0A0A] text-white">
        <Preloader />
        <Navbar />

        <main>
          <Hero />
          <About />
          <Collection />
          <FeaturedProducts />
          <Ethos />
          <Lookbook />
          <Differentiators />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default Home;
