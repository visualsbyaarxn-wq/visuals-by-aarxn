"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Send, ArrowUp, X } from "lucide-react";

export default function VisualsByAarxn() {
  const [formData, setFormData] = useState({ name: "", email: "", package: "General Inquiry", message: "" });
  const [mounted, setMounted] = useState(false);
  const [selectedImg, setSelectedImg] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:visualsbyaarxn@gmail.com?subject=${subject}&body=${body}`;
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen text-white bg-black selection:bg-amber-200 selection:text-black overflow-x-hidden font-sans antialiased">
      <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              src={`/gallery/img${selectedImg}.jpg`}
              className="max-w-full max-h-[85vh] rounded-lg shadow-2xl object-contain border border-white/10"
              alt="Gallery Preview"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative w-full">
        {/* WATER BACKGROUND */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: [1.1, 1.15, 1.1], x: [-5, 5, -5] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="w-full h-screen fixed"
          >
            <img 
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2073" 
              className="w-full h-full object-cover opacity-60" 
              alt="Ocean Background"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black z-10 fixed" />
        </div>

        <div className="relative z-20">
          {/* HERO */}
          <section className="relative flex flex-col items-center justify-center text-center px-4 min-h-screen">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 30 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 
                className="text-[3.2rem] xs:text-6xl md:text-[9rem] font-serif font-bold italic leading-[1.1] text-white tracking-tighter"
                style={{ textShadow: "1px 1px 0px #d1d1d1, 2px 2px 0px #b5b5b5, 4px 6px 15px rgba(0,0,0,0.8)" }}
              >
                Visuals by Aarxn
              </h1>
              <motion.div 
                initial={{ width: 0 }} animate={{ width: "60%" }} 
                transition={{ delay: 1, duration: 2, ease: "easeInOut" }}
                className="h-[1px] bg-amber-400 mx-auto mt-4 shadow-[0_0_15px_rgba(251,191,36,0.8)]"
              />
            </motion.div>
            
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.8 }} transition={{ delay: 1.5 }} className="mt-8 text-[9px] md:text-xs uppercase font-bold text-amber-400 tracking-[0.6em] pl-[0.6em]">
              Weddings • Portraits • Events
            </motion.p>

            <div className="mt-12 grid grid-cols-2 md:flex md:flex-row gap-3">
              {['portfolio', 'wedding', 'portrait', 'contact'].map((id) => (
                <motion.button 
                  key={id} 
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(251,191,36,1)", color: "#000", boxShadow: "0 0 20px rgba(251,191,36,0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollTo(id)} 
                  className="px-6 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-bold uppercase text-[9px] tracking-widest transition-colors duration-300"
                >
                  {id}
                </motion.button>
              ))}
            </div>
          </section>

          {/* GALLERY SECTION */}
          <section id="portfolio" className="px-4 py-20 max-w-7xl mx-auto bg-black/40 backdrop-blur-xl rounded-[2.5rem] my-10 border border-white/5">
            <div className="mb-12 inline-block relative px-2">
               <motion.h2 className="text-4xl md:text-7xl font-serif italic mb-1">Gallery</motion.h2>
               <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ duration: 1 }} className="h-[2px] bg-amber-400 absolute bottom-0 left-0" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                <motion.div 
                  key={num} 
                  whileHover={{ scale: 1.05, zIndex: 10, filter: "brightness(1.1)" }}
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  onClick={() => setSelectedImg(num)}
                  className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl cursor-zoom-in transition-all duration-300"
                >
                  <img src={`/gallery/img${num}.jpg`} className="w-full h-full object-cover" alt="Portfolio" />
                </motion.div>
              ))}
            </div>
          </section>

          {/* PACKAGES SECTIONS (Weddings & Portraits) */}
          {[
            { id: "wedding", title: "Weddings", pkgs: [
              { name: "Simple", price: "1,500", items: ["4 Hours", "200+ Photos"] },
              { name: "Standard", price: "3,000", items: ["7 Hours", "400+ Photos", "Engagement"], featured: true },
              { name: "Premium", price: "5,000", items: ["Full Day", "Unlimited", "Photobook"] }
            ]},
            { id: "portrait", title: "Portraits", pkgs: [
              { name: "Bronze", price: "500", items: ["30 Mins", "15 Edits"] },
              { name: "Silver", price: "750", items: ["60 Mins", "30 Edits"], featured: true },
              { name: "Gold", price: "900", items: ["90 Mins", "50 Edits"] }
            ]}
          ].map((section) => (
            <section key={section.id} id={section.id} className="px-4 py-24 max-w-7xl mx-auto text-center">
              <h2 className="text-4xl md:text-7xl font-serif italic mb-16">{section.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {section.pkgs.map((pkg, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -10, borderColor: "rgba(251,191,36,0.5)", transition: { duration: 0.3 } }}
                    className={`p-8 rounded-[2rem] border transition-all duration-300 ${pkg.featured ? 'bg-black border-amber-400 shadow-[0_0_30px_rgba(251,191,36,0.1)]' : 'bg-white/5 border-white/10 backdrop-blur-md'}`}
                  >
                    <h3 className={`text-2xl font-serif italic mb-2 ${pkg.featured ? 'text-amber-400' : ''}`}>{pkg.name}</h3>
                    <p className="text-2xl font-bold mb-6">${pkg.price} TTD</p>
                    <ul className="text-left space-y-3 uppercase text-[9px] tracking-widest opacity-70 mb-8">{pkg.items.map((item, idx) => <li key={idx}>• {item}</li>)}</ul>
                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => scrollTo('contact')} className={`w-full py-4 rounded-xl text-[9px] font-bold uppercase tracking-widest ${pkg.featured ? 'bg-amber-400 text-black' : 'border border-white/20'}`}>Book {pkg.name}</motion.button>
                  </motion.div>
                ))}
              </div>
            </section>
          ))}

          {/* CONTACT */}
          <section id="contact" className="bg-white text-black px-4 py-32 rounded-t-[3rem] md:rounded-t-[5rem]">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h2 className="text-6xl font-serif italic mb-8">Let's Talk</h2>
                  <motion.a whileHover={{ x: 10 }} href="mailto:visualsbyaarxn@gmail.com" className="flex items-center gap-4 p-6 border rounded-2xl hover:bg-neutral-50 transition-all">
                    <Mail size={24} className="text-amber-600" />
                    <div><p className="text-[10px] uppercase font-bold text-neutral-400">Email</p><p className="text-xl font-serif italic">visualsbyaarxn@gmail.com</p></div>
                  </motion.a>
                  <motion.a whileHover={{ x: 10 }} href="https://wa.me/18687573042" className="flex items-center gap-4 p-6 border rounded-2xl hover:bg-neutral-50 transition-all">
                    <Phone size={24} className="text-amber-600" />
                    <div><p className="text-[10px] uppercase font-bold text-neutral-400">WhatsApp</p><p className="text-xl font-serif italic">+1 (868) 757-3042</p></div>
                  </motion.a>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4 bg-neutral-50 p-8 rounded-[2rem]">
                  <input required type="text" placeholder="Your Name" className="w-full p-4 rounded-xl border-none outline-none ring-1 ring-black/5 focus:ring-amber-500 transition-all" />
                  <input required type="email" placeholder="Your Email" className="w-full p-4 rounded-xl border-none outline-none ring-1 ring-black/5 focus:ring-amber-500 transition-all" />
                  <textarea required rows={4} placeholder="Your vision..." className="w-full p-4 rounded-xl border-none outline-none ring-1 ring-black/5 focus:ring-amber-500 transition-all" />
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full py-5 bg-black text-white rounded-xl font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-2">
                    Send Inquiry <Send size={14} />
                  </motion.button>
                </form>
            </div>
          </section>

          <footer className="bg-white py-12 text-center text-neutral-400 text-[8px] tracking-widest uppercase border-t border-neutral-100">
            Visuals by Aarxn • © 2026
            <motion.button whileHover={{ y: -5 }} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="block mx-auto mt-6 p-4 rounded-full border border-neutral-100 text-black"><ArrowUp size={18} /></motion.button>
          </footer>
        </div>
      </div>
    </div>
  );
}