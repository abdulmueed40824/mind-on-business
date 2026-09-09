import React, { useMemo, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { getProductBySlug, formatPrice, getVariantPrice } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

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
    const colorImages = selectedColor?.images || [];
    const all = [...new Set([...colorImages, ...product.images])];
    return all.filter(Boolean);
  }, [product, selectedColor]);

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
      image: gallery[0] || product.primaryImage,
    });
  };

  const canAdd = selectedColor && selectedSize && !product.outOfStock;

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />

      <main className="pt-28 pb-24">
        <div className="max-w-container mx-auto px-6">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-white/50 hover:text-primary text-sm uppercase tracking-widest mb-10 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Shop
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Gallery */}
            <div>
              <div className="aspect-[3/4] bg-[#151515] rounded-lg overflow-hidden mb-4">
                {gallery[activeImage] ? (
                  <motion.img
                    key={gallery[activeImage]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    src={gallery[activeImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white/20 font-display text-4xl">
                    M.O.B
                  </div>
                )}
              </div>
              {gallery.length > 1 && (
                <div className="flex gap-3 overflow-x-auto no-scrollbar">
                  {gallery.map((img, i) => (
                    <button
                      key={img}
                      onClick={() => setActiveImage(i)}
                      className={cn(
                        'w-20 h-24 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-colors',
                        activeImage === i ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-100'
                      )}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Details */}
            <div className="flex flex-col">
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-3">
                {product.categoryLabel}
              </span>
              <h1 className="text-4xl md:text-6xl font-display leading-none mb-4">{product.name}</h1>
              <p className="text-3xl font-display text-primary mb-6">
                {formatPrice(getVariantPrice(product, selectedColorIndex))}
              </p>
              <p className="text-white/60 text-lg leading-relaxed mb-8">{product.description}</p>

              {product.outOfStock && (
                <p className="text-secondary font-bold uppercase tracking-widest text-sm mb-6">
                  Currently out of stock — check back for restocks
                </p>
              )}

              {/* Colors */}
              <div className="mb-8">
                <p className="text-xs uppercase tracking-widest text-white/40 mb-3">
                  Color: <span className="text-white">{selectedColor?.name}</span>
                </p>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color, i) => (
                    <button
                      key={color.name}
                      onClick={() => {
                        setSelectedColorIndex(i);
                        setSelectedSize('');
                        setActiveImage(0);
                      }}
                      className={cn(
                        'w-10 h-10 rounded-full border-2 transition-all',
                        selectedColorIndex === i ? 'border-primary scale-110' : 'border-white/20 hover:border-white/50'
                      )}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div className="mb-8">
                <p className="text-xs uppercase tracking-widest text-white/40 mb-3">Size</p>
                <div className="flex flex-wrap gap-2">
                  {availableSizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        'min-w-[48px] px-4 py-3 text-sm font-bold uppercase tracking-wider border transition-all',
                        selectedSize === size
                          ? 'bg-primary text-primary-foreground border-primary'
                          : 'border-white/20 text-white/70 hover:border-primary hover:text-primary'
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <p className="text-xs uppercase tracking-widest text-white/40 mb-3">Quantity</p>
                <div className="inline-flex items-center border border-white/20">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-12 h-12 flex items-center justify-center hover:bg-white/5 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-bold">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-12 h-12 flex items-center justify-center hover:bg-white/5 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={!canAdd}
                className={cn(
                  'w-full py-5 font-display uppercase tracking-widest text-lg flex items-center justify-center gap-3 transition-all',
                  canAdd
                    ? 'bg-primary text-primary-foreground hover:bg-secondary hover:text-white'
                    : 'bg-white/10 text-white/30 cursor-not-allowed'
                )}
              >
                <ShoppingBag className="w-5 h-5" />
                {!selectedSize ? 'Select a Size' : product.outOfStock ? 'Out of Stock' : 'Add to Cart'}
              </button>

              <p className="text-white/30 text-xs mt-4 uppercase tracking-wider">Plus shipping on all orders</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
