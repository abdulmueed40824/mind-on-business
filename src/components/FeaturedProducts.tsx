import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FEATURED_SECTIONS, getProductsByTag, FeaturedTag } from '@/data/products';
import { ProductCard } from './shop/ProductCard';

export const FeaturedProducts: React.FC = () => {
  const sections = FEATURED_SECTIONS.map((section) => ({
    ...section,
    products: getProductsByTag(section.tag as FeaturedTag).slice(0, 4),
  })).filter((s) => s.products.length > 0);

  if (sections.length === 0) return null;

  return (
    <section className="py-[120px] bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-container mx-auto px-6 space-y-24">
        {sections.map((section) => (
          <div key={section.tag}>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <span className="text-secondary font-bold tracking-[0.4em] uppercase text-sm block mb-4">
                  Mind Onn Business
                </span>
                <h2 className="text-4xl md:text-6xl font-display leading-none">{section.title.toUpperCase()}</h2>
                <p className="text-white/40 mt-4 max-w-md">{section.subtitle}</p>
              </div>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b-2 border-primary pb-2 hover:text-primary transition-colors"
              >
                Shop All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
              {section.products.map((product, i) => (
                <ProductCard key={`${section.tag}-${product.id}`} product={product} index={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
