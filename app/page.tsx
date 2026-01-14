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

  const headerZoomVariant = {
    initial: { opacity: 0, scale: 0.9, y: 30 },
    whileInView: { opacity: 1, scale: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] } // cubic-bezier for easeInOut
  };

  const lineDrawDelayedVariant = {
    initial: { width: 0, opacity: 0 },
    whileInView: { width: "100%", opacity: 1 },
    viewport: { once: true },
    transition: { delay: 0.8, duration: 1.5, ease: "easeInOut" } // use a named easing string
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen text-white bg-black selection:bg-amber-200 selection:text-black overflow-x-hidden font-sans antialiased">
      <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />

      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors">
              <X size={40} strokeWidth={1} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              src={`/gallery/img${selectedImg}.jpg`}
              className="max-w-full max-h-full rounded-lg shadow-2xl object-contain border border-white/10"
              alt="Full view"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative w-full">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            initial={{ scale: 1.1, x: -20 }}
            animate={{ scale: [1.1, 1.15, 1.1], x: [-10, 10, -10], y: [0, -5, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-full h-screen fixed"
          >
            <img 
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2073" 
              className="w-full h-full object-cover object-center" 
              alt="Background"
            />
          </motion.div>
          <motion.div animate={{ opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 8, repeat: Infinity }} className="absolute inset-0 bg-gradient-to-tr from-amber-400/5 via-transparent to-white/5 z-[5] fixed" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black z-10 fixed" />
        </div>

        <div className="relative z-20">
          <section className="relative flex flex-col items-center justify-center text-center px-6 min-h-screen">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }}>
              <h1 className="text-5xl md:text-[9rem] font-serif font-bold italic leading-none text-white tracking-tight px-4" style={{ textShadow: "1px 1px 0px #d1d1d1, 2px 2px 0px #b5b5b5, 3px 3px 0px #999, 5px 8px 20px rgba(0,0,0,0.7)" }}>
                Visuals by Aarxn
              </h1>
              <motion.div initial={{ width: 0 }} animate={{ width: "60%" }} transition={{ delay: 1, duration: 2 }} className="h-[2px] bg-amber-400 mx-auto mt-6 shadow-[0_0_20px_rgba(251,191,36,0.8)]" />
            </motion.div>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.9 }} transition={{ delay: 1.2 }} className="mt-10 text-[10px] md:text-xs uppercase font-bold text-amber-400 tracking-[0.8em] pl-[0.8em]">
              Weddings • Birthdays • Special Occasions
            </motion.p>
            <div className="mt-16 flex gap-4 md:gap-6 flex-wrap justify-center">
              {['portfolio', 'wedding', 'portrait', 'contact'].map((id) => (
                <button key={id} onClick={() => scrollTo(id)} className="px-8 md:px-12 py-4 md:py-5 bg-white text-black rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-amber-400 transition-all shadow-xl hover:scale-105 active:scale-95">
                  {id === 'portfolio' ? 'Gallery' : id}
                </button>
              ))}
            </div>
          </section>

          <section id="portfolio" className="px-6 py-24 max-w-7xl mx-auto bg-black/40 backdrop-blur-md rounded-[3rem] my-20">
            <div className="mb-16 inline-block relative">
               <motion.h2 {...headerZoomVariant} className="text-5xl md:text-7xl font-serif italic mb-2 origin-left">Personal Shoots</motion.h2>
               <motion.div {...lineDrawDelayedVariant} className="h-[2px] bg-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.6)] absolute bottom-0 left-0" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                <motion.div key={num} whileHover={{ scale: 1.03, y: -5 }} onClick={() => setSelectedImg(num)} className="aspect-[3/4] rounded-[2rem] overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl transition-all cursor-zoom-in">
                  <img src={`/gallery/img${num}.jpg`} className="w-full h-full object-cover" alt={`Work ${num}`} />
                </motion.div>
              ))}
            </div>
          </section>

          <section id="wedding" className="px-6 py-32 max-w-7xl mx-auto text-center">
            <div className="mb-20 inline-block relative">
               <motion.h2 {...headerZoomVariant} className="text-5xl md:text-7xl font-serif italic mb-2">Wedding Packages</motion.h2>
               <motion.div {...lineDrawDelayedVariant} className="h-[2px] bg-amber-400 mx-auto shadow-[0_0_15px_rgba(251,191,36,0.6)] absolute bottom-0 left-0 right-0" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Simple", price: "1,500", items: ["4 Hours Coverage", "200+ Edited Photos", "Digital Gallery"], featured: false },
                { name: "Standard", price: "3,000", items: ["7 Hours Coverage", "400+ Edited Photos", "Engagement Session"], featured: true },
                { name: "Premium", price: "5,000", items: ["Full Day Coverage", "Unlimited Photos", "Luxury Photobook"], featured: false }
              ].map((pkg, i) => (
                <motion.div key={i} whileHover={{ y: -10 }} className={`flex flex-col p-10 rounded-[2.5rem] border ${pkg.featured ? 'bg-black border-amber-400/40 ring-1 ring-amber-400/20 shadow-[0_0_30px_rgba(251,191,36,0.1)]' : 'bg-white/5 border-white/10 backdrop-blur-md'}`}>
                  <h3 className={`text-4xl font-serif italic mb-4 ${pkg.featured ? 'text-amber-400' : ''}`}>{pkg.name}</h3>
                  <p className="text-3xl font-bold mb-8">${pkg.price} TTD</p>
                  <ul className="text-left space-y-4 uppercase text-[10px] tracking-widest flex-grow mb-12 opacity-70">
                    {pkg.items.map((item, idx) => <li key={idx}>• {item}</li>)}
                  </ul>
                  <button onClick={() => scrollTo('contact')} className={`w-full py-4 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${pkg.featured ? 'bg-amber-400 text-black hover:bg-white' : 'border border-white/30 text-white hover:bg-white hover:text-black'}`}>Select {pkg.name}</button>
                </motion.div>
              ))}
            </div>
          </section>

          <section id="portrait" className="px-6 py-32 max-w-7xl mx-auto text-center">
            <div className="mb-20 inline-block relative">
               <motion.h2 {...headerZoomVariant} className="text-5xl md:text-7xl font-serif italic mb-2">Portrait Packages</motion.h2>
               <motion.div {...lineDrawDelayedVariant} className="h-[2px] bg-amber-400 mx-auto shadow-[0_0_15px_rgba(251,191,36,0.6)] absolute bottom-0 left-0 right-0" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-32">
              {[
                { name: "Bronze", price: "500", items: ["30 Minutes Shoot", "15 High-Res Edits", "Solo Session"], featured: false },
                { name: "Silver", price: "750", items: ["60 Minutes Shoot", "30 High-Res Edits", "Family or Couples"], featured: true },
                { name: "Gold", price: "900", items: ["90 Minutes Shoot", "50 High-Res Edits", "Group Sessions"], featured: false }
              ].map((pkg, i) => (
                <motion.div key={i} whileHover={{ y: -10 }} className={`flex flex-col p-10 rounded-[2.5rem] border ${pkg.featured ? 'bg-black border-amber-400/40 ring-1 ring-amber-400/20 shadow-[0_0_30px_rgba(251,191,36,0.1)]' : 'bg-white/5 border-white/10 backdrop-blur-md'}`}>
                  <h3 className={`text-4xl font-serif italic mb-4 ${pkg.featured ? 'text-amber-400' : ''}`}>{pkg.name}</h3>
                  <p className="text-3xl font-bold mb-8">${pkg.price} TTD</p>
                  <ul className="text-left space-y-4 uppercase text-[10px] tracking-widest flex-grow mb-12 opacity-70">
                    {pkg.items.map((item, idx) => <li key={idx}>• {item}</li>)}
                  </ul>
                  <button onClick={() => scrollTo('contact')} className={`w-full py-4 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${pkg.featured ? 'bg-amber-400 text-black hover:bg-white' : 'border border-white/30 text-white hover:bg-white hover:text-black'}`}>Select {pkg.name}</button>
                </motion.div>
              ))}
            </div>
          </section>

          <section id="contact" className="bg-white text-black px-6 py-40 rounded-t-[5rem]">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-24">
                <div className="inline-block relative">
                  <motion.h2 {...headerZoomVariant} className="text-6xl md:text-8xl font-serif font-bold italic mb-2">Let's Connect</motion.h2>
                  <motion.div {...lineDrawDelayedVariant} className="h-[2px] bg-amber-400 shadow-[0_4px_15px_rgba(251,191,36,0.6)] absolute bottom-0 left-0 right-0" />
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div className="flex flex-col justify-center space-y-10">
                  <a href="mailto:visualsbyaarxn@gmail.com" className="flex items-center gap-6 group">
                    <div className="p-6 rounded-full border border-neutral-100 group-hover:bg-black group-hover:text-white transition-all shadow-sm"><Mail size={24} /></div>
                    <div><p className="text-[10px] uppercase font-bold text-neutral-400 tracking-widest">Email Me</p><p className="font-serif italic text-xl">visualsbyaarxn@gmail.com</p></div>
                  </a>
                  <a href="https://wa.me/18687573042" className="flex items-center gap-6 group">
                    <div className="p-6 rounded-full border border-neutral-100 group-hover:bg-black group-hover:text-white transition-all shadow-sm"><Phone size={24} /></div>
                    <div><p className="text-[10px] uppercase font-bold text-neutral-400 tracking-widest">WhatsApp</p><p className="font-serif italic text-xl">+1 (868) 757-3042</p></div>
                  </a>
                  <a href="https://instagram.com/visualsbyaarxn" className="flex items-center gap-6 group">
                    <div className="p-6 rounded-full border border-neutral-100 group-hover:bg-black group-hover:text-white transition-all shadow-sm"><Instagram size={24} /></div>
                    <div><p className="text-[10px] uppercase font-bold text-neutral-400 tracking-widest">Follow</p><p className="font-serif italic text-xl">@visualsbyaarxn</p></div>
                  </a>
                </div>
                <form onSubmit={handleSubmit} className="bg-neutral-50 p-10 md:p-12 rounded-[3rem] space-y-6 border border-neutral-100 shadow-inner">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input required type="text" placeholder="Name" className="p-4 rounded-2xl border border-neutral-200 outline-none" onChange={(e) => setFormData({...formData, name: e.target.value})} />
                    <input required type="email" placeholder="Email" className="p-4 rounded-2xl border border-neutral-200 outline-none" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                  </div>
                  <select className="w-full p-4 rounded-2xl border border-neutral-200 outline-none" onChange={(e) => setFormData({...formData, package: e.target.value})}>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Wedding">Wedding Packages</option>
                    <option value="Portrait">Portrait Packages</option>
                  </select>
                  <textarea required rows={4} placeholder="Your vision..." className="w-full p-4 rounded-2xl border border-neutral-200 outline-none resize-none" onChange={(e) => setFormData({...formData, message: e.target.value})} />
                  <button type="submit" className="w-full py-5 bg-black text-white rounded-2xl font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-amber-400 hover:text-black transition-all shadow-xl flex items-center justify-center gap-3">
                    Send Message <Send size={14} />
                  </button>
                </form>
              </div>
            </div>
          </section>

          <footer className="bg-white py-20 text-center text-neutral-500 text-[10px] tracking-[0.5em] uppercase border-t border-neutral-50">
            Visuals by Aarxn • © 2026
            <br />
            <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="mt-8 p-5 rounded-full border border-neutral-100 hover:bg-neutral-50 transition-all text-neutral-300 hover:text-black">
              <ArrowUp size={22} />
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}