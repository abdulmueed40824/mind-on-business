import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/data/products';

export const CartDrawer: React.FC = () => {
  const { items, isOpen, closeCart, itemCount, subtotal, removeItem, updateQuantity } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[3000]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-[#0A0A0A] z-[3001] flex flex-col border-l border-white/10"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="text-2xl font-display">
                Cart <span className="text-primary">({itemCount})</span>
              </h2>
              <button onClick={closeCart} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <p className="text-white/40 text-center py-12">Your cart is empty. Keep your mind onn business.</p>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-20 h-24 bg-[#151515] rounded-lg overflow-hidden flex-shrink-0">
                      {item.image && (
                        <img src={item.image} alt={item.productName} className="w-full h-full object-cover" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-white truncate">{item.productName}</h3>
                      <p className="text-white/40 text-xs uppercase tracking-wider mt-1">
                        {item.color} / {item.size}
                      </p>
                      <p className="text-primary font-medium mt-2">{formatPrice(item.price)}</p>
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="w-8 h-8 border border-white/20 flex items-center justify-center hover:border-primary disabled:opacity-30"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 border border-white/20 flex items-center justify-center hover:border-primary"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="ml-auto p-2 text-white/40 hover:text-secondary transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-white/10 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white/60 uppercase tracking-widest text-sm">Subtotal</span>
                  <span className="text-2xl font-display text-primary">{formatPrice(subtotal)}</span>
                </div>
                <p className="text-white/30 text-xs">Shipping calculated at checkout. Plus shipping on all orders.</p>
                <Link
                  to="/checkout"
                  onClick={closeCart}
                  className="block w-full py-4 bg-primary text-primary-foreground font-display uppercase tracking-widest text-center hover:bg-secondary hover:text-white transition-colors"
                >
                  Continue to Checkout
                </Link>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="block w-full py-3 text-center text-sm uppercase tracking-widest text-white/60 hover:text-primary transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
