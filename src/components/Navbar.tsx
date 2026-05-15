import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingCart, Cpu, User, Menu, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../hooks/useCart';

export const Navbar = () => {
  const { itemCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Cpu className="w-8 h-8 text-blue-500 group-hover:rotate-90 transition-transform duration-500" />
          <span className="font-sans font-bold text-xl tracking-tighter text-white">
            ELECTRO<span className="text-blue-500">NEXUS</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={({isActive}) => `text-sm font-medium transition-colors ${isActive ? 'text-blue-500' : 'text-gray-400 hover:text-white'}`}>
            HOME
          </NavLink>
          <NavLink to="/shop" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            SHOP
          </NavLink>
          <NavLink to="/support" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            SUPPORT
          </NavLink>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-400 hover:text-white transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <Link to="/cart" className="relative p-2 text-gray-400 hover:text-white transition-colors">
            <ShoppingCart className="w-5 h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {itemCount}
              </span>
            )}
          </Link>
          <button className="md:hidden p-2 text-gray-400 hover:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A0A0A] border-b border-white/10 overflow-hidden"
          >
            <div className="p-4 flex flex-col gap-4">
              <Link to="/" className="text-lg font-medium text-gray-400" onClick={() => setIsMenuOpen(false)}>HOME</Link>
              <Link to="/shop" className="text-lg font-medium text-gray-400" onClick={() => setIsMenuOpen(false)}>SHOP</Link>
              <Link to="/support" className="text-lg font-medium text-gray-400" onClick={() => setIsMenuOpen(false)}>SUPPORT</Link>
              <Link to="/profile" className="text-lg font-medium text-gray-400" onClick={() => setIsMenuOpen(false)}>PROFILE</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
