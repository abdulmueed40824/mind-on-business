import React, { Suspense, lazy } from 'react';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { SmoothScroll } from './components/SmoothScroll';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Collection } from './components/Collection';
import { Ethos } from './components/Ethos';
import { Lookbook } from './components/Lookbook';
import { Differentiators } from './components/Differentiators';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <SmoothScroll>
      <div className="relative bg-[#0A0A0A] text-white">
        <Toaster position="bottom-right" />
        <Preloader />
        <CustomCursor />
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Collection />
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
}

export default App;
