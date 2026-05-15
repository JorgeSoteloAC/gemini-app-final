import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { motion, AnimatePresence } from 'motion/react';

// Shell for additional pages
const Shop = () => <div className="pt-32 container mx-auto px-4 text-white min-h-screen">
  <h1 className="text-4xl font-black uppercase mb-8">Full Inventory</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-50">
    <div className="p-12 border border-white/5 bg-[#0A0A0A] text-center">ACCESS PENDING</div>
    <div className="p-12 border border-white/5 bg-[#0A0A0A] text-center">ACCESS PENDING</div>
    <div className="p-12 border border-white/5 bg-[#0A0A0A] text-center">ACCESS PENDING</div>
  </div>
</div>;

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-black min-h-screen font-sans selection:bg-blue-500 selection:text-white">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            {/* Fallback */}
            <Route path="*" element={<Home />} />
          </Routes>
        </AnimatePresence>
        
        <footer className="bg-black border-t border-white/5 py-24 pb-12 mt-24">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
            <div className="md:col-span-2">
              <span className="font-sans font-bold text-2xl tracking-tighter text-white">
                ELECTRO<span className="text-blue-500">NEXUS</span>
              </span>
              <p className="text-gray-500 mt-4 max-w-sm">
                Providing the foundation for the next digital revolution. Premium electronics for the ambitious builder.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Navigation</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                <li><Link to="/" className="hover:text-blue-500">Archive</Link></li>
                <li><Link to="/" className="hover:text-blue-500">Inventory</Link></li>
                <li><Link to="/" className="hover:text-blue-500">Protocol</Link></li>
                <li><Link to="/" className="hover:text-blue-500">Terminal</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Signals</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                <li><a href="#" className="hover:text-blue-500">Intelligence</a></li>
                <li><a href="#" className="hover:text-blue-500">Update Feed</a></li>
                <li><a href="#" className="hover:text-blue-500">Encrypted Chat</a></li>
              </ul>
            </div>
          </div>
          <div className="container mx-auto px-4 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between text-gray-600 text-[10px] tracking-widest font-mono uppercase">
            <p>© 2026 ELECTRONEXUS. ALL RIGHTS RESERVED.</p>
            <p>DESIGNED FOR THE FUTURE. BUILT FOR NOW.</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
