import React from 'react';
import { useCart } from '../hooks/useCart';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export const Cart = () => {
  const { items, total, removeFromCart, updateQuantity } = useCart();
  
  return (
    <div className="pt-24 container mx-auto px-4 text-white pb-24">
      <h1 className="text-4xl font-black uppercase mb-8 tracking-tighter">Your Terminal <span className="text-blue-500">Cart</span></h1>
      
      {items.length === 0 ? (
        <div className="p-20 border border-white/5 bg-[#0A0A0A] text-center flex flex-col items-center justify-center">
          <ShoppingBag className="w-16 h-16 text-gray-800 mb-6" />
          <p className="text-gray-500 mb-8 uppercase tracking-[0.2em] font-mono text-sm leading-relaxed">System state: Initial<br />Cart capacity: 0%</p>
          <Link to="/" className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all duration-300">
            LOAD INVENTORY
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-4">
            {items.map(item => (
              <motion.div 
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                key={item.id} 
                className="p-6 bg-[#0A0A0A] border border-white/5 flex flex-col sm:flex-row gap-6 items-center group hover:border-blue-500/30 transition-colors"
              >
                <div className="w-full sm:w-32 aspect-square overflow-hidden bg-[#111]">
                  <img src={item.imageUrl} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.name} referrerPolicy="no-referrer" />
                </div>
                <div className="flex-1 w-full text-center sm:text-left">
                  <h3 className="text-xl font-bold uppercase tracking-tight mb-1">{item.name}</h3>
                  <p className="text-gray-500 text-[10px] font-mono uppercase mb-4 tracking-widest">{item.category}</p>
                  
                  <div className="flex items-center justify-center sm:justify-start gap-6">
                    <div className="flex items-center border border-white/10 bg-black">
                      <button 
                        className="p-2 text-gray-500 hover:text-white" 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-10 text-center font-mono text-sm">{item.quantity}</span>
                      <button 
                        className="p-2 text-gray-500 hover:text-white" 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-right w-full sm:w-auto mt-4 sm:mt-0 flex sm:flex-col justify-between sm:justify-center items-center sm:items-end gap-2">
                  <p className="text-2xl font-black text-blue-500 tracking-tighter">${(item.price * item.quantity).toFixed(2)}</p>
                  <button 
                    onClick={() => removeFromCart(item.id)} 
                    className="p-2 text-red-900 hover:text-red-500 hover:bg-red-500/10 transition-all rounded"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="bg-[#0A0A0A] border border-white/5 p-8 h-fit lg:sticky lg:top-24">
            <h2 className="text-xl font-bold uppercase mb-8 tracking-tighter border-b border-white/10 pb-4">Order Summary</h2>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-gray-500 text-sm font-mono uppercase tracking-widest">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-500 text-sm font-mono uppercase tracking-widest">
                <span>Network Fee</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between text-gray-500 text-sm font-mono uppercase tracking-widest">
                <span>System Ship</span>
                <span className="text-blue-500">FREE</span>
              </div>
              <div className="h-px bg-white/10 my-6" />
              <div className="flex justify-between items-end">
                <span className="text-xs text-gray-500 uppercase tracking-[0.3em] font-mono">Terminal Total</span>
                <span className="text-3xl font-black text-white tracking-tighter">${total.toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full py-4 bg-white text-black font-bold uppercase tracking-[0.2em] text-xs hover:bg-blue-500 hover:text-white transition-all duration-500 border border-transparent active:scale-[0.98]">
              INITIALIZE CHECKOUT
            </button>
            <p className="mt-6 text-[9px] text-gray-600 font-mono text-center uppercase tracking-widest">
              Secure AES-256 Encrypted Transaction
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
