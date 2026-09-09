import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { getProductsByTag } from '@/data/products';
import { ProductCard } from './shop/ProductCard';

export const Collection: React.FC = () => {
  const newArrivals = getProductsByTag('new-arrival');
  const featuredProducts = [
    ...newArrivals,
    ...getProductsByTag('best-seller').filter((p) => !newArrivals.find((n) => n.id === p.id)),
  ].slice(0, 4);

  return (
    <section id="shop" className="py-[120px] bg-[#0A0A0A]">
      <div className="max-w-container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-sm block mb-4">Latest Drop</span>
            <h2 className="text-5xl md:text-8xl font-display leading-none">
              THE LATEST <span className="text-white/20">DROP</span>
            </h2>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b-2 border-primary pb-2 hover:text-primary transition-colors"
          >
            View All Collection <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {featuredProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
