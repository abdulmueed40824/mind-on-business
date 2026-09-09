import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/data/products';
import { toast } from 'sonner';

export const Checkout: React.FC = () => {
  const { items, subtotal, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  if (items.length === 0 && !submitted) return <Navigate to="/shop" replace />;

  const shipping = 8;
  const total = subtotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
    toast.success('Order placed! We will be in touch shortly.');
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center px-6 pt-28 pb-24">
          <div className="text-center max-w-md">
            <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl font-display mb-4">Order Confirmed</h1>
            <p className="text-white/60 mb-8">
              Thank you for keeping your mind on business. Your order is being processed and you will receive a confirmation email shortly.
            </p>
            <Link
              to="/shop"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground font-display uppercase tracking-widest hover:bg-secondary hover:text-white transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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

          <h1 className="text-4xl md:text-6xl font-display mb-12">
            CHECK<span className="text-white/20">OUT</span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-widest text-white/40 block mb-2">First Name</label>
                  <input
                    required
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    className="w-full bg-[#151515] border border-white/10 px-4 py-3 text-white focus:border-primary outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-white/40 block mb-2">Last Name</label>
                  <input
                    required
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    className="w-full bg-[#151515] border border-white/10 px-4 py-3 text-white focus:border-primary outline-none transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-white/40 block mb-2">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-[#151515] border border-white/10 px-4 py-3 text-white focus:border-primary outline-none transition-colors"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-white/40 block mb-2">Address</label>
                <input
                  required
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  className="w-full bg-[#151515] border border-white/10 px-4 py-3 text-white focus:border-primary outline-none transition-colors"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-widest text-white/40 block mb-2">City</label>
                  <input
                    required
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className="w-full bg-[#151515] border border-white/10 px-4 py-3 text-white focus:border-primary outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-white/40 block mb-2">State</label>
                  <input
                    required
                    value={form.state}
                    onChange={(e) => setForm({ ...form, state: e.target.value })}
                    className="w-full bg-[#151515] border border-white/10 px-4 py-3 text-white focus:border-primary outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-white/40 block mb-2">ZIP</label>
                  <input
                    required
                    value={form.zip}
                    onChange={(e) => setForm({ ...form, zip: e.target.value })}
                    className="w-full bg-[#151515] border border-white/10 px-4 py-3 text-white focus:border-primary outline-none transition-colors"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-5 bg-primary text-primary-foreground font-display uppercase tracking-widest text-lg hover:bg-secondary hover:text-white transition-colors"
              >
                Place Order — {formatPrice(total)}
              </button>
            </form>

            <div className="bg-[#151515] rounded-lg p-8 h-fit">
              <h2 className="font-display text-2xl mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-16 h-20 bg-[#0A0A0A] rounded overflow-hidden flex-shrink-0">
                      {item.image && <img src={item.image} alt="" className="w-full h-full object-cover" />}
                    </div>
                    <div className="flex-1">
                      <p className="font-display">{item.productName}</p>
                      <p className="text-white/40 text-xs uppercase tracking-wider">
                        {item.color} / {item.size} × {item.quantity}
                      </p>
                    </div>
                    <p className="text-primary font-medium">{formatPrice(item.price * item.quantity)}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/10 pt-4 space-y-2">
                <div className="flex justify-between text-white/60">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-white/60">
                  <span>Shipping</span>
                  <span>{formatPrice(shipping)}</span>
                </div>
                <div className="flex justify-between text-xl font-display pt-2">
                  <span>Total</span>
                  <span className="text-primary">{formatPrice(total)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
