"use client";

import { useCartStore } from "@/store/cart";
import { X, Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function CartPanel() {
  const { isOpen, toggleCart, items, removeItem, updateQuantity } = useCartStore();

  const cartTotal = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const todayDate = new Date().toLocaleDateString('en-PK', {
    day: '2-digit', month: 'short', year: 'numeric'
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-[#111111]/40 backdrop-blur-sm z-50 mix-blend-multiply"
          />
          <motion.div
            initial={{ x: "100%", rotateY: -15 }}
            animate={{ x: 0, rotateY: 0 }}
            exit={{ x: "100%", rotateY: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-[#f7f4ea] z-50 flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.5)] border-l-4 border-dashed border-[#d4c8b2] receipt-edge"
            style={{ perspective: "1000px" }}
          >
            {/* Vintage Receipt Header */}
            <div className="p-8 border-b-2 border-dashed border-[#111111]/30 text-center relative">
              <button 
                onClick={toggleCart}
                className="absolute top-6 right-6 text-[#111111]/50 hover:text-[#111111] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <h2 className="text-3xl font-serif text-[#111111] tracking-widest uppercase mb-2">Afforah</h2>
              <p className="text-[9px] uppercase tracking-[0.4em] font-mono text-[#2b2b2b]">Fashion Archive</p>
              
              <div className="flex justify-between items-center text-[10px] font-mono mt-6 pt-4 border-t border-[#111111]/10 text-[#2b2b2b]">
                <span>DATE: {todayDate}</span>
                <span>RCPT: #{(Math.random() * 10000).toFixed(0).padStart(4, '0')}</span>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-8 font-mono space-y-8">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-[#111111]/40 space-y-4">
                  <p className="font-urdu text-3xl">صفحہ خالی ہے</p>
                  <p className="text-xs uppercase tracking-widest">Your archive is empty.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex justify-between text-[9px] uppercase tracking-widest text-[#111111]/50 border-b border-[#111111]/20 pb-2">
                    <span>Item</span>
                    <span>Amount</span>
                  </div>

                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4 group items-start border-b border-[#111111]/10 pb-6">
                      <div className="w-16 h-20 relative bg-[#e6dfd1] border border-[#111111]/20 p-1">
                        <div className="relative w-full h-full grayscale-[0.5] sepia-[0.3]">
                          <Image src={item.image} alt={item.name} fill className="object-cover" />
                        </div>
                      </div>
                      
                      <div className="flex-1 space-y-2 text-[#111111]">
                        <h3 className="text-xs font-bold leading-tight uppercase font-serif">{item.name}</h3>
                        <p className="text-[10px] text-[#2b2b2b] tracking-wider">REF. 00{item.id}</p>
                        
                        <div className="flex justify-between items-center mt-3 pt-2">
                          <div className="flex items-center gap-3 border border-[#111111]/20 px-2 py-1 bg-[#e6dfd1]/50">
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="hover:text-[#b39b74]">
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-[10px] w-4 text-center">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="hover:text-[#b39b74]">
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <span className="text-xs font-bold">
                            PKR {(item.price * item.quantity).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-8 border-t-2 border-dashed border-[#111111]/30 bg-[#f7f4ea]">
                <div className="flex justify-between items-center mb-2 text-[#2b2b2b] text-xs font-mono">
                  <span>Subtotal</span>
                  <span>PKR {cartTotal().toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center mb-6 text-[#2b2b2b] text-xs font-mono">
                  <span>Tax (Included)</span>
                  <span>PKR 0</span>
                </div>
                <div className="flex justify-between items-center mb-8 text-[#111111] text-lg font-bold font-mono border-y border-[#111111]/20 py-3">
                  <span>TOTAL</span>
                  <span>PKR {cartTotal().toLocaleString()}</span>
                </div>
                
                <button className="w-full bg-[#111111] text-[#e6dfd1] py-4 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-[#b39b74] transition-colors relative overflow-hidden group">
                  <span className="relative z-10 w-full text-center block" style={{ lineHeight: 0 }}>Finalize Archive</span>
                </button>

                <p className="text-center font-urdu text-xl text-[#111111]/80 mt-6 mix-blend-multiply">
                  شکریہ
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
