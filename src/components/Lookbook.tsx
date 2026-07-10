import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: "/assets/lookbook-1.jpg", title: "Midnight City", location: "Downtown Mpls" },
  { src: "/assets/lookbook-2.jpg", title: "Concrete Jungle", location: "Warehouse District" },
  { src: "/assets/lookbook-3.jpg", title: "Street Executive", location: "Skyway Level" },
  { src: "/assets/lookbook-4.jpg", title: "The Daily Grind", location: "East Side" },
  { src: "/assets/lookbook-1.jpg", title: "After Hours", location: "Underpass" },
];

export const Lookbook: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only apply horizontal pin on large screens (lg and up)
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const pin = gsap.fromTo(triggerRef.current, 
        { x: 0 },
        {
          x: "-70%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=2000",
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          }
        }
      );
      return () => pin.kill();
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0A0A0A] overflow-hidden">
      {/* Mobile / Tablet: Simple Grid/Stack */}
      <div className="lg:hidden py-24 px-6 max-w-container mx-auto">
        <div className="mb-16">
          <span className="text-primary font-bold tracking-[0.4em] uppercase text-sm block mb-6 text-center lg:text-left">Gallery</span>
          <h2 className="text-5xl md:text-8xl font-display leading-none mb-8 text-center lg:text-left">THE <br className="hidden md:block" /> <span className="text-white/20">LOOKBOOK</span></h2>
          <p className="text-white/40 text-lg max-w-sm mx-auto lg:mx-0 text-center lg:text-left">
            Capturing the essence of the urban athlete. Every shot is a testament to the lifestyle we represent.
          </p>
        </div>
        <div className="flex flex-col gap-12">
          {images.map((img, i) => (
            <div key={i} className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-lg relative">
                <img 
                  src={img.src} 
                  alt={img.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                  <h3 className="text-3xl font-display text-white mb-2">{img.title}</h3>
                  <p className="text-primary text-xs uppercase tracking-[0.2em] font-bold">{img.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: Horizontal Scroll */}
      <div className="hidden lg:flex h-screen items-center">
        <div ref={triggerRef} className="flex gap-12 px-12 items-center flex-nowrap">
          {/* Section Header */}
          <div className="flex-shrink-0 w-[500px]">
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-sm block mb-6">Gallery</span>
            <h2 className="text-8xl md:text-[10rem] font-display leading-[0.8] mb-8">THE <br /> <span className="text-white/20">LOOKBOOK</span></h2>
            <p className="text-white/40 text-lg max-w-sm">
              Capturing the essence of the urban athlete. Every shot is a testament to the lifestyle we represent.
            </p>
          </div>

          {/* Cards */}
          {images.map((img, i) => (
            <div key={i} className="flex-shrink-0 w-[600px] group">
              <div className="aspect-[16/10] overflow-hidden rounded-lg relative">
                <img 
                  src={img.src} 
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
                  <h3 className="text-4xl font-display text-white mb-2">{img.title}</h3>
                  <p className="text-primary text-xs uppercase tracking-[0.2em] font-bold">{img.location}</p>
                </div>
              </div>
            </div>
          ))}

          {/* End Spacer */}
          <div className="flex-shrink-0 w-[200px]" />
        </div>
      </div>
    </section>
  );
};
