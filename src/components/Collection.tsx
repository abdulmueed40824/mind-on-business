import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Business Core Tee",
    price: "$45",
    category: "Graphic Tee",
    image: "/assets/collection-1.jpg",
    accent: "primary"
  },
  {
    id: 2,
    name: "Executive Hoodie",
    price: "$95",
    category: "Heavyweight",
    image: "/assets/collection-2.jpg",
    accent: "secondary"
  },
  {
    id: 3,
    name: "Grind Statement Tee",
    price: "$45",
    category: "Graphic Tee",
    image: "/assets/collection-3.jpg",
    accent: "primary"
  },
  {
    id: 4,
    name: "Mindset Work Hoodie",
    price: "$110",
    category: "Luxury Street",
    image: "/assets/collection-4.jpg",
    accent: "secondary"
  }
];

export const Collection: React.FC = () => {
  return (
    <section id="shop" className="py-[120px] bg-[#0A0A0A]">
      <div className="max-w-container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-sm block mb-4">Summer 24</span>
            <h2 className="text-5xl md:text-8xl font-display leading-none">THE LATEST <span className="text-white/20">DROP</span></h2>
          </div>
          <button className="text-sm font-bold uppercase tracking-widest border-b-2 border-primary pb-2 hover:text-primary transition-colors">
            View All Collection
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#151515] rounded-lg mb-6">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#0A0A0A]/80 backdrop-blur-md text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full border border-white/10">
                    {product.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-8">
                  <button className="w-full py-4 bg-primary text-primary-foreground font-display uppercase tracking-widest text-lg flex items-center justify-center gap-2 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                    <Plus className="w-5 h-5" /> Quick Add
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-display text-white group-hover:text-primary transition-colors mb-1">{product.name}</h3>
                  <span className="text-white/40 text-sm font-medium">{product.price}</span>
                </div>
                <div className="flex gap-1 mt-1">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
