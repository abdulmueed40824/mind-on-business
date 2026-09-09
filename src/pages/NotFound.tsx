import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-6 pt-28 pb-24">
        <div className="text-center">
          <h1 className="text-8xl font-display text-primary mb-4">404</h1>
          <p className="text-xl text-white/60 mb-8 font-display uppercase tracking-widest">Page not found</p>
          <Link
            to="/"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground font-display uppercase tracking-widest hover:bg-secondary hover:text-white transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
