"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Mail, Phone, Send, ChevronDown, ArrowUp, X } from "lucide-react";

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
    const subject = encodeURIComponent(`Inquiry from ${formData.name}: ${formData.package}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPackage: ${formData.package}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:visualsbyaarxn@gmail.com?subject=${subject}&body=${body}`;
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen text-white bg-black selection:bg-amber-200 selection:text-black overflow-x-hidden font-sans antialiased">
      <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />

      {/* LIGHTBOX / FULL IMAGE VIEW */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
              <X size={32} />
            </button>
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
        {/* ANIMATED WATER BACKGROUND */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: [1.1, 1.2, 1.1], x: [-10, 10, -10] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="w-full h-screen fixed"
          >
            <img 
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2073" 
              className="w-full h-full object-cover" 
              alt="Ocean Background"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black z-10 fixed" />
        </div>

        <div className="relative z-20">
          {/* HERO SECTION */}
          <section className="relative flex flex-col items-center justify-center text-center px-4 min-h-screen">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
              <h1 
                className="text-[3.2rem] xs:text-6xl md:text-[9rem] font-serif font-bold italic leading-[1.1] text-white tracking-tighter"
                style={{ textShadow: "1px 1px 0px #d1d1d1, 2px 2px 0px #b5b5b5, 4px 6px 15px rgba(0,0,0,0.8)" }}
              >
                Visuals by Aarxn
              </h1>
              <motion.div 
                initial={{ width: 0 }} animate={{ width: "50%" }} transition={{ delay: 0.8, duration: 1.5 }}
                className="h-[1px] bg-amber-400 mx-auto mt-4 shadow-[0_0_15px_rgba(251,191,36,0.8)]"
              />
            </motion.div>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.8 }} transition={{ delay: 1 }} className="mt-8 text-[9px] md:text-xs uppercase font-bold text-amber-400 tracking-[0.6em] pl-[0.6em]">
              Weddings • Portraits • Events
            </motion.p>

            <div className="mt-12 grid grid-cols-2 md:flex md:flex-row gap-3 w-full max-w-md md:max-w-none px-4">
              {['portfolio', 'wedding', 'portrait', 'contact'].map((id) => (
                <button 
                  key={id} 
                  onClick={() => scrollTo(id)} 
                  className="px-4 py-4 bg-white text-black rounded-full font-bold uppercase text-[9px] tracking-widest hover:bg-amber-400 transition-all shadow-lg active:scale-95"
                >
                  {id === 'portfolio' ? 'Gallery' : id}
                </button>
              ))}
            </div>
          </section>

          {/* GALLERY SECTION */}
          <section id="portfolio" className="px-4 py-20 max-w-7xl mx-auto bg-black/40 backdrop-blur-lg rounded-[2.5rem] my-10 border border-white/5">
            <div className="mb-12 inline-block relative px-2">
               <motion.h2 
                 initial={{ opacity: 0, scale: 0.8 }} 
                 whileInView={{ opacity: 1, scale: 1 }} 
                 viewport={{ once: true }} 
                 transition={{ duration: 0.7 }}
                 className="text-4xl md:text-7xl font-serif italic mb-1"
                >
                  Gallery
                </motion.h2>
               <motion.div 
                 initial={{ width: 0 }} 
                 whileInView={{ width: "100%" }} 
                 viewport={{ once: true }} 
                 transition={{ delay: 0.5, duration: 1 }}
                 className="h-[2px] bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.6)] absolute bottom-0 left-0" 
               />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                <motion.div 
                  key={num} whileHover={{ scale: 1.02 }} onClick={() => setSelectedImg(num)}
                  className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 shadow-xl cursor-zoom-in"
                >
                  <img src={`/gallery/img${num}.jpg`} className="w-full h-full object-cover" alt="Portfolio" />
                </motion.div>
              ))}
            </div>
          </section>

          {/* WEDDING SECTION */}
          <section id="wedding" className="px-4 py-24 max-w-7xl mx-auto text-center">
            <div className="mb-16 inline-block relative">
               <motion.h2 
                 initial={{ opacity: 0, scale: 0.8 }} 
                 whileInView={{ opacity: 1, scale: 1 }} 
                 viewport={{ once: true }} 
                 transition={{ duration: 0.7 }}
                 className="text-4xl md:text-7xl font-serif italic mb-1"
               >
                 Weddings
               </motion.h2>
               <motion.div 
                 initial={{ width: 0 }} 
                 whileInView={{ width: "100%" }} 
                 viewport={{ once: true }} 
                 transition={{ delay: 0.5, duration: 1 }}
                 className="h-[2px] bg-amber-400 mx-auto absolute bottom-0 left-0 right-0" 
               />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Simple", price: "1,500", items: ["4 Hours Coverage", "200+ Edited Photos", "Online Gallery"] },
                { name: "Standard", price: "3,000", items: ["7 Hours Coverage", "400+ Edited Photos", "Engagement Session"], featured: true },
                { name: "Premium", price: "5,000", items: ["Full Day Coverage", "Unlimited Photos", "Luxury Photobook"] }
              ].map((pkg, i) => (
                <div key={i} className={`p-8 rounded-[2rem] border ${pkg.featured ? 'bg-black border-amber-400/50 shadow-2xl' : 'bg-white/5 border-white/10 backdrop-blur-md'}`}>
                  <h3 className={`text-2xl font-serif italic mb-2 ${pkg.featured ? 'text-amber-400' : ''}`}>{pkg.name}</h3>
                  <p className="text-2xl font-bold mb-6">${pkg.price} TTD</p>
                  <ul className="text-left space-y-3 uppercase text-[9px] tracking-widest opacity-70 mb-8">
                    {pkg.items.map((item, idx) => <li key={idx}>• {item}</li>)}
                  </ul>
                  <button onClick={() => scrollTo('contact')} className={`w-full py-4 rounded-xl text-[9px] font-bold uppercase tracking-widest ${pkg.featured ? 'bg-amber-400 text-black' : 'border border-white/20'}`}>Book {pkg.name}</button>
                </div>
              ))}
            </div>
          </section>

          {/* PORTRAIT SECTION */}
          <section id="portrait" className="px-4 py-24 max-w-7xl mx-auto text-center">
            <div className="mb-16 inline-block relative">
               <motion.h2 
                 initial={{ opacity: 0, scale: 0.8 }} 
                 whileInView={{ opacity: 1, scale: 1 }} 
                 viewport={{ once: true }} 
                 transition={{ duration: 0.7 }}
                 className="text-4xl md:text-7xl font-serif italic mb-1"
               >
                 Portraits
               </motion.h2>
               <motion.div 
                 initial={{ width: 0 }} 
                 whileInView={{ width: "100%" }} 
                 viewport={{ once: true }} 
                 transition={{ delay: 0.5, duration: 1 }}
                 className="h-[2px] bg-amber-400 mx-auto absolute bottom-0 left-0 right-0" 
               />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Bronze", price: "500", items: ["30 Mins", "15 Edits"] },
                { name: "Silver", price: "750", items: ["60 Mins", "30 Edits"], featured: true },
                { name: "Gold", price: "900", items: ["90 Mins", "50 Edits"] }
              ].map((pkg, i) => (
                <div key={i} className={`p-8 rounded-[2rem] border ${pkg.featured ? 'bg-black border-amber-400/50' : 'bg-white/5 border-white/10 backdrop-blur-md'}`}>
                  <h3 className={`text-2xl font-serif italic mb-2 ${pkg.featured ? 'text-amber-400' : ''}`}>{pkg.name}</h3>
                  <p className="text-2xl font-bold mb-6">${pkg.price} TTD</p>
                  <ul className="text-left space-y-3 uppercase text-[9px] tracking-widest opacity-70 mb-8">
                    {pkg.items.map((item, idx) => <li key={idx}>• {item}</li>)}
                  </ul>
                  <button onClick={() => scrollTo('contact')} className={`w-full py-4 rounded-xl text-[9px] font-bold uppercase tracking-widest ${pkg.featured ? 'bg-amber-400 text-black' : 'border border-white/20'}`}>Book {pkg.name}</button>
                </div>
              ))}
            </div>
          </section>

          {/* CONTACT SECTION */}
          <section id="contact" className="bg-white text-black px-4 py-32 rounded-t-[3rem] md:rounded-t-[5rem]">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }}
                    className="text-5xl md:text-8xl font-serif font-bold italic mb-4"
                  >
                    Let's Talk
                  </motion.h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <a href="mailto:visualsbyaarxn@gmail.com" className="flex items-center gap-4 p-4 border rounded-2xl">
                    <Mail size={20} className="text-amber-600" />
                    <div><p className="text-[8px] uppercase font-bold text-neutral-400">Email</p><p className="font-serif italic">visualsbyaarxn@gmail.com</p></div>
                  </a>
                  <a href="https://wa.me/18687573042" className="flex items-center gap-4 p-4 border rounded-2xl">
                    <Phone size={20} className="text-amber-600" />
                    <div><p className="text-[8px] uppercase font-bold text-neutral-400">WhatsApp</p><p className="font-serif italic">+1 (868) 757-3042</p></div>
                  </a>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input required type="text" placeholder="Name" className="w-full p-4 rounded-xl bg-neutral-50 border border-neutral-200 outline-none" onChange={(e) => setFormData({...formData, name: e.target.value})} />
                  <input required type="email" placeholder="Email" className="w-full p-4 rounded-xl bg-neutral-50 border border-neutral-200 outline-none" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                  <textarea required rows={4} placeholder="Your message..." className="w-full p-4 rounded-xl bg-neutral-50 border border-neutral-200 outline-none" onChange={(e) => setFormData({...formData, message: e.target.value})} />
                  <button type="submit" className="w-full py-5 bg-black text-white rounded-xl font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-2">
                    Send <Send size={14} />
                  </button>
                </form>
              </div>
            </div>
          </section>

          <footer className="bg-white py-12 text-center text-neutral-400 text-[8px] tracking-widest uppercase border-t border-neutral-50">
            Visuals by Aarxn • © 2026
            <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="block mx-auto mt-6 p-4 rounded-full border border-neutral-100"><ArrowUp size={18} /></button>
          </footer>
        </div>
      </div>
    </div>
  );
}