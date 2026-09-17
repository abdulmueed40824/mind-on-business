import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Product, getDisplayPrice } from '@/data/products';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.04, 0.4), duration: 0.35 }}
    >
      <Link to={`/shop/${product.slug}`} className="group block cursor-pointer">
        <div className="relative aspect-[3/4] overflow-hidden bg-[#151515] rounded-lg mb-4">
          {product.primaryImage ? (
            <img
              src={product.primaryImage}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white/20 font-display text-2xl">
              M.O.B
            </div>
          )}
          <div className="absolute top-4 left-4">
            <span className="bg-[#0A0A0A]/80 backdrop-blur-md text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full border border-white/10">
              {product.categoryLabel}
            </span>
          </div>
          {product.outOfStock && (
            <div className="absolute top-4 right-4">
              <span className="bg-secondary/90 text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full">
                Sold Out
              </span>
            </div>
          )}
        </div>

        <div className="flex justify-between items-start gap-4">
          <div>
            <h3 className="text-lg md:text-xl font-display text-white group-hover:text-primary transition-colors mb-1">
              {product.name}
            </h3>
            <span className="text-white/40 text-sm font-medium">{getDisplayPrice(product)}</span>
          </div>
          <div className="flex gap-1 mt-1 flex-wrap justify-end max-w-[80px]">
            {product.colors.slice(0, 4).map((c) => (
              <div
                key={c.name}
                className="w-3 h-3 rounded-full border border-white/20"
                style={{ backgroundColor: c.hex }}
                title={c.name}
              />
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
