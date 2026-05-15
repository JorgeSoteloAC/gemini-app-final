import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../constants';
import { useCart } from '../hooks/useCart';

export const Home = () => {
  const { addToCart } = useCart();
  const featured = PRODUCTS.filter(p => p.isFeatured);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=1920" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl font-sans font-black tracking-tighter text-white mb-6 uppercase">
              The Nexus of <br />
              <span className="text-blue-500 italic">Advanced Tech</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium">
              Precision-engineered hardware for those who push the boundaries of what is possible.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link to="/shop" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all duration-300">
                EXPLORE SHOP
              </Link>
              <Link to="/categories" className="px-8 py-4 border border-white/30 text-white font-bold uppercase tracking-widest hover:border-white transition-all duration-300">
                CATEGORIES
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tighter">FEATURED HARDWARE</h2>
              <div className="h-1 w-20 bg-blue-500 mt-2" />
            </div>
            <Link to="/shop" className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors">
              VIEW ALL <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featured.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-[#111111] border border-white/5 overflow-hidden hover:border-blue-500/50 transition-colors"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1 text-xs font-bold text-white uppercase tracking-wider">
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 leading-tight uppercase">{product.name}</h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xl font-black text-blue-500 tracking-tighter">${product.price}</span>
                    <button 
                      onClick={() => addToCart(product)}
                      className="p-3 bg-white text-black hover:bg-blue-500 hover:text-white transition-colors"
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid Pattern Section */}
      <section className="py-24 bg-black border-y border-white/5">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-white/5 bg-[#0A0A0A] hover:bg-[#111111] transition-colors">
            <h4 className="text-4xl font-black text-white/10 mb-4">01</h4>
            <h3 className="text-xl font-bold text-white uppercase mb-2">PRECISION DESIGN</h3>
            <p className="text-gray-500">Every component is curated for maximum efficiency and aesthetic harmony.</p>
          </div>
          <div className="p-8 border border-white/5 bg-[#0A0A0A] hover:bg-[#111111] transition-colors">
            <h4 className="text-4xl font-black text-white/10 mb-4">02</h4>
            <h3 className="text-xl font-bold text-white uppercase mb-2">GLOBAL LOGISTICS</h3>
            <p className="text-gray-500">We ship worldwide with real-time tracking and premium protection for your hardware.</p>
          </div>
          <div className="p-8 border border-white/5 bg-[#0A0A0A] hover:bg-[#111111] transition-colors">
            <h4 className="text-4xl font-black text-white/10 mb-4">03</h4>
            <h3 className="text-xl font-bold text-white uppercase mb-2">PRO SUPPORT</h3>
            <p className="text-gray-500">24/7 technical assistance from engineers who understand the gear as much as you do.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
