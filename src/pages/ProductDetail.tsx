import React, { useEffect, useMemo, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Minus,
  Package,
  Plus,
  Shield,
  ShoppingBag,
  Truck,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/shop/ProductCard';
import {
  getProductBySlug,
  formatPrice,
  getVariantPrice,
  getProductsByCategory,
  products,
  type FeaturedTag,
} from '@/data/products';
import { useCart } from '@/context/CartContext';
import {
  getColorGallery,
  getColorPreviewImage,
  usesSharedAngleGallery,
} from '@/lib/productGallery';
import { cn } from '@/lib/utils';

const tagLabels: Record<FeaturedTag, string> = {
  'featured-apparel-set': 'Featured Set',
  'featured-look': 'Featured Look',
  'new-arrival': 'New Arrival',
  'best-seller': 'Best Seller',
  'limited-edition': 'Limited Edition',
};

export const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;
  const { addItem } = useCart();

  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const selectedColor = product?.colors[selectedColorIndex];

  const availableSizes = useMemo(() => {
    if (!selectedColor) return [];
    return selectedColor.sizes.length ? selectedColor.sizes : product?.sizes || [];
  }, [selectedColor, product]);

  const gallery = useMemo(() => {
    if (!product) return [];
    return getColorGallery(product, selectedColorIndex);
  }, [product, selectedColorIndex]);

  const sharedAngleGallery = product ? usesSharedAngleGallery(product) : false;

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    const sameCategory = getProductsByCategory(product.category).filter((p) => p.slug !== product.slug);
    if (sameCategory.length >= 4) return sameCategory.slice(0, 4);
    const filler = products.filter((p) => p.slug !== product.slug && !sameCategory.some((s) => s.slug === p.slug));
    return [...sameCategory, ...filler].slice(0, 4);
  }, [product]);

  useEffect(() => {
    setSelectedColorIndex(0);
    setSelectedSize('');
    setQuantity(1);
    setActiveImage(0);
  }, [slug]);

  useEffect(() => {
    setActiveImage(0);
  }, [selectedColorIndex]);

  useEffect(() => {
    if (activeImage >= gallery.length) setActiveImage(0);
  }, [gallery.length, activeImage]);

  if (!product) return <Navigate to="/shop" replace />;

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) return;
    const itemPrice = getVariantPrice(product, selectedColorIndex);
    addItem({
      productSlug: product.slug,
      productName: product.name,
      price: itemPrice,
      size: selectedSize,
      color: selectedColor.name,
      quantity,
      image: gallery[activeImage] ?? getColorPreviewImage(product, selectedColorIndex),
    });
  };

  const canAdd = selectedColor && selectedSize && !product.outOfStock;
  const lineTotal = getVariantPrice(product, selectedColorIndex) * quantity;

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      <Navbar />

      <main className="pt-28 pb-8">
        {/* Breadcrumb bar */}
        <div className="border-b border-white/10 bg-[#0A0A0A]/80 backdrop-blur-sm sticky top-20 z-[100]">
          <div className="max-w-container mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
            <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/40">
              <Link to="/shop" className="hover:text-primary transition-colors">
                Shop
              </Link>
              <span>/</span>
              <span className="text-white/70 truncate max-w-[200px] sm:max-w-none">{product.name}</span>
            </nav>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-white/50 hover:text-primary text-xs uppercase tracking-widest transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Shop
            </Link>
          </div>
        </div>

        <div className="max-w-container mx-auto px-6 py-10 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Gallery */}
            <div className="lg:col-span-7 lg:sticky lg:top-36">
              <div className="relative group">
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-secondary/10 opacity-60 pointer-events-none" />
                <div className="relative aspect-[3/4] bg-[#111111] rounded-2xl overflow-hidden border border-white/10">
                  <AnimatePresence mode="wait">
                    {gallery[activeImage] ? (
                      <motion.img
                        key={`c${selectedColorIndex}-i${activeImage}-${gallery[activeImage]}`}
                        initial={{ opacity: 0, scale: 1.02 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        src={gallery[activeImage]}
                        alt={`${product.name} — ${selectedColor?.name ?? ''}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white/20 font-display text-4xl">
                        M.O.B
                      </div>
                    )}
                  </AnimatePresence>

                  {gallery.length > 1 && (
                    <div className="absolute bottom-4 right-4 bg-[#0A0A0A]/85 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full">
                      {activeImage + 1} / {gallery.length}
                    </div>
                  )}

                  {selectedColor && (
                    <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#0A0A0A]/85 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full">
                      <span
                        className="w-3 h-3 rounded-full border border-white/30 shrink-0"
                        style={{ backgroundColor: selectedColor.hex }}
                      />
                      {selectedColor.name}
                    </div>
                  )}

                  {product.outOfStock && (
                    <div className="absolute top-4 right-4 bg-secondary/95 text-white text-[10px] uppercase tracking-widest font-bold px-4 py-2 rounded-full">
                      Sold Out
                    </div>
                  )}
                </div>
              </div>

              {gallery.length > 1 && (
                <div className="flex gap-3 mt-4 overflow-x-auto no-scrollbar pb-1">
                  {gallery.map((img, i) => (
                    <button
                      key={`c${selectedColorIndex}-thumb-${i}-${img}`}
                      type="button"
                      onClick={() => setActiveImage(i)}
                      className={cn(
                        'relative w-[72px] h-[88px] sm:w-20 sm:h-24 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all',
                        activeImage === i
                          ? 'border-primary ring-2 ring-primary/30 scale-[1.02]'
                          : 'border-white/10 opacity-55 hover:opacity-100 hover:border-white/30'
                      )}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Details panel */}
            <div className="lg:col-span-5 flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-[#151515] to-[#0f0f0f] p-8 md:p-10 shadow-2xl shadow-black/30"
              >
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="text-primary font-bold tracking-[0.25em] uppercase text-[10px] px-3 py-1 rounded-full border border-primary/30 bg-primary/10">
                    {product.categoryLabel}
                  </span>
                  {product.featuredTags.map((tag) => (
                    <span
                      key={tag}
                      className="text-white/50 font-bold tracking-[0.2em] uppercase text-[10px] px-3 py-1 rounded-full border border-white/10"
                    >
                      {tagLabels[tag]}
                    </span>
                  ))}
                </div>

                <h1 className="text-4xl md:text-5xl xl:text-6xl font-display leading-[0.95] mb-4">{product.name}</h1>

                <div className="flex items-baseline gap-3 mb-6">
                  <p className="text-3xl md:text-4xl font-display text-primary">
                    {formatPrice(getVariantPrice(product, selectedColorIndex))}
                  </p>
                  {quantity > 1 && (
                    <span className="text-white/40 text-sm">
                      × {quantity} = <span className="text-white font-display">{formatPrice(lineTotal)}</span>
                    </span>
                  )}
                </div>

                <p className="text-white/55 text-base leading-relaxed mb-8 border-b border-white/10 pb-8">
                  {product.description}
                </p>

                {product.outOfStock && (
                  <p className="text-secondary font-bold uppercase tracking-widest text-xs mb-6 px-4 py-3 bg-secondary/10 border border-secondary/30 rounded-lg">
                    Currently out of stock — check back for restocks
                  </p>
                )}

                {/* Colors */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-xs uppercase tracking-widest text-white/40">Color</p>
                    <span className="text-sm font-display text-white">{selectedColor?.name}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color, i) => {
                      const preview = getColorPreviewImage(product, i);
                      return (
                        <button
                          key={`${color.name}-${i}`}
                          type="button"
                          aria-label={`Color ${color.name}`}
                          aria-pressed={selectedColorIndex === i}
                          onClick={() => {
                            setSelectedColorIndex(i);
                            setSelectedSize('');
                          }}
                          className={cn(
                            'flex items-center gap-2 pl-1 pr-3 py-1.5 rounded-full border transition-all',
                            selectedColorIndex === i
                              ? 'border-primary bg-primary/10'
                              : 'border-white/15 hover:border-white/40 bg-[#0A0A0A]/50'
                          )}
                        >
                          <span
                            className={cn(
                              'w-9 h-9 rounded-full border-2 shrink-0 overflow-hidden bg-[#151515]',
                              selectedColorIndex === i ? 'border-white' : 'border-white/20'
                            )}
                          >
                            <img src={preview} alt="" className="w-full h-full object-cover" />
                          </span>
                          <span
                            className={cn(
                              'text-xs uppercase tracking-wider',
                              selectedColorIndex === i ? 'text-primary font-bold' : 'text-white/60'
                            )}
                          >
                            {color.name}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  {sharedAngleGallery && (
                    <p className="text-white/35 text-[10px] mt-3 uppercase tracking-wider leading-relaxed">
                      Gallery shows product angles. Your selection ({selectedColor?.name}) is the color we ship.
                    </p>
                  )}
                </div>

                {/* Sizes */}
                <div className="mb-8">
                  <p className="text-xs uppercase tracking-widest text-white/40 mb-4">Size</p>
                  <div className="flex flex-wrap gap-2">
                    {availableSizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={cn(
                          'min-w-[52px] px-4 py-3 text-sm font-bold uppercase tracking-wider border rounded-lg transition-all',
                          selectedSize === size
                            ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20'
                            : 'border-white/15 text-white/70 hover:border-primary hover:text-primary bg-[#0A0A0A]/40'
                        )}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                  {!selectedSize && (
                    <p className="text-white/30 text-xs mt-3 uppercase tracking-wider">Select a size to add to cart</p>
                  )}
                </div>

                {/* Quantity */}
                <div className="mb-8">
                  <p className="text-xs uppercase tracking-widest text-white/40 mb-4">Quantity</p>
                  <div className="inline-flex items-center rounded-lg border border-white/15 overflow-hidden bg-[#0A0A0A]/60">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="w-12 h-12 flex items-center justify-center hover:bg-white/5 transition-colors text-white/70 hover:text-white"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-14 text-center font-display text-lg">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => q + 1)}
                      className="w-12 h-12 flex items-center justify-center hover:bg-white/5 transition-colors text-white/70 hover:text-white"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Selection summary */}
                {(selectedColor || selectedSize) && (
                  <div className="mb-6 p-4 rounded-xl bg-[#0A0A0A]/80 border border-white/10 flex flex-wrap gap-3 text-xs uppercase tracking-widest">
                    {selectedColor && (
                      <span className="flex items-center gap-2 text-white/60">
                        <span className="w-3 h-3 rounded-full border border-white/20" style={{ backgroundColor: selectedColor.hex }} />
                        {selectedColor.name}
                      </span>
                    )}
                    {selectedSize && (
                      <span className="text-white/60">
                        Size <span className="text-white font-bold">{selectedSize}</span>
                      </span>
                    )}
                  </div>
                )}

                <button
                  type="button"
                  onClick={handleAddToCart}
                  disabled={!canAdd}
                  className={cn(
                    'group relative w-full overflow-hidden py-5 font-display uppercase tracking-widest text-lg flex items-center justify-center gap-3 transition-all rounded-lg',
                    canAdd ? 'bg-primary text-primary-foreground' : 'bg-white/10 text-white/30 cursor-not-allowed'
                  )}
                >
                  {canAdd && (
                    <span className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  )}
                  <span className="relative z-10 flex items-center gap-3">
                    <ShoppingBag className="w-5 h-5" />
                    {!selectedSize ? 'Select a Size' : product.outOfStock ? 'Out of Stock' : 'Add to Cart'}
                  </span>
                </button>

                <p className="text-white/30 text-[10px] mt-4 uppercase tracking-[0.2em] text-center">
                  Plus shipping on all orders
                </p>
              </motion.div>

              {/* Trust row */}
              <div className="grid grid-cols-3 gap-3 mt-6">
                {[
                  { icon: Truck, label: 'Ships nationwide' },
                  { icon: Package, label: 'Premium build' },
                  { icon: Shield, label: 'Mind onn quality' },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center text-center gap-2 p-4 rounded-xl border border-white/10 bg-[#111111]/80"
                  >
                    <Icon className="w-4 h-4 text-primary" />
                    <span className="text-[9px] uppercase tracking-widest text-white/45 leading-tight">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <section className="border-t border-white/10 py-16 md:py-24 mt-8">
            <div className="max-w-container mx-auto px-6">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
                <div>
                  <span className="text-secondary font-bold tracking-[0.4em] uppercase text-sm block mb-3">
                    You may also like
                  </span>
                  <h2 className="text-4xl md:text-5xl font-display leading-none">
                    MORE FROM THE <span className="text-white/20">DROP</span>
                  </h2>
                </div>
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-white/50 hover:text-primary transition-colors group shrink-0"
                >
                  View all
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                {relatedProducts.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
