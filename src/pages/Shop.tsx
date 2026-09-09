import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/shop/ProductCard';
import {
  products,
  SHOP_CATEGORIES,
  ProductCategory,
  getProductsByCategory,
} from '@/data/products';
import { cn } from '@/lib/utils';

export const Shop: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return products;
    return getProductsByCategory(activeCategory as ProductCategory);
  }, [activeCategory]);

  const categoryCounts = useMemo(() => ({
    all: products.length,
    't-shirts': getProductsByCategory('t-shirts').length,
    'sweatshirts-hoodies': getProductsByCategory('sweatshirts-hoodies').length,
    jackets: getProductsByCategory('jackets').length,
  }), []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />

      <main className="pt-28 pb-24">
        <div className="max-w-container mx-auto px-6">
          <div className="mb-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/50 hover:text-primary text-sm uppercase tracking-widest mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-sm block mb-4">
              Mind Onn Business
            </span>
            <h1 className="text-5xl md:text-8xl font-display leading-none">
              THE <span className="text-white/20">SHOP</span>
            </h1>
            <p className="text-white/40 mt-6 max-w-xl text-lg">
              Premium streetwear rooted in American urban culture. Browse the full collection — {products.length} products across {SHOP_CATEGORIES.filter((c) => !('comingSoon' in c && c.comingSoon)).length} categories.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-4 border-b border-white/10 pb-8">
            <button
              onClick={() => setActiveCategory('all')}
              className={cn(
                'px-5 py-2.5 text-xs uppercase tracking-widest font-bold border transition-all cursor-pointer',
                activeCategory === 'all'
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'border-white/20 text-white/60 hover:border-primary hover:text-primary'
              )}
            >
              All Products ({categoryCounts.all})
            </button>
            {SHOP_CATEGORIES.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => !('comingSoon' in cat && cat.comingSoon) && setActiveCategory(cat.slug)}
                disabled={'comingSoon' in cat && cat.comingSoon}
                className={cn(
                  'px-5 py-2.5 text-xs uppercase tracking-widest font-bold border transition-all',
                  'comingSoon' in cat && cat.comingSoon
                    ? 'border-white/10 text-white/30 cursor-not-allowed'
                    : cn(
                        'cursor-pointer',
                        activeCategory === cat.slug
                          ? 'bg-primary text-primary-foreground border-primary'
                          : 'border-white/20 text-white/60 hover:border-primary hover:text-primary'
                      )
                )}
              >
                {cat.label}
                {!('comingSoon' in cat && cat.comingSoon) && cat.slug in categoryCounts
                  ? ` (${categoryCounts[cat.slug as keyof typeof categoryCounts]})`
                  : ''}
              </button>
            ))}
          </div>

          <p className="text-white/30 text-xs uppercase tracking-widest mb-8">
            Showing {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-white/40 py-20 font-display text-2xl">No products in this category yet.</p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
