"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Send, ArrowUp, Instagram } from "lucide-react";

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

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out backdrop-blur-sm"
          >
            <motion.img 
              initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }}
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
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
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
              initial={{ opacity: 0, y: 40 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 
                className="text-[3.2rem] xs:text-6xl md:text-[9rem] font-serif font-bold italic leading-[1.1] text-white tracking-tighter"
                style={{ textShadow: "0px 10px 30px rgba(0,0,0,0.5)" }}
              >
                Visuals by Aarxn
              </h1>
              <motion.div 
                initial={{ width: 0, opacity: 0 }} animate={{ width: "60%", opacity: 1 }} 
                transition={{ delay: 0.8, duration: 2.5, ease: "easeInOut" }}
                className="h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-4 shadow-[0_0_15px_rgba(251,191,36,0.5)]"
              />
            </motion.div>
            
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.8 }} transition={{ delay: 1.8, duration: 1 }} className="mt-8 text-[9px] md:text-xs uppercase font-bold text-amber-400 tracking-[0.6em] pl-[0.6em]">
              Weddings • Portraits • Events
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.2, duration: 1 }}
              className="mt-12 grid grid-cols-2 md:flex md:flex-row gap-4"
            >
              {['portfolio', 'wedding', 'portrait', 'contact'].map((id) => (
                <motion.button 
                  key={id} 
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(251,191,36,1)", color: "#000", boxShadow: "0 0 30px rgba(251,191,36,0.6)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollTo(id)} 
                  className="px-8 py-4 bg-white/5 backdrop-blur-xl text-white border border-white/10 rounded-full font-bold uppercase text-[9px] tracking-widest transition-all duration-500 overflow-hidden relative group"
                >
                   <span className="relative z-10">{id}</span>
                </motion.button>
              ))}
            </motion.div>
          </section>

          {/* GALLERY */}
          <section id="portfolio" className="px-4 py-20 max-w-7xl mx-auto bg-black/40 backdrop-blur-xl rounded-[2.5rem] my-10 border border-white/5">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12 inline-block relative px-2">
               <h2 className="text-4xl md:text-7xl font-serif italic mb-1">Gallery</h2>
               <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ duration: 1.5 }} className="h-[2px] bg-amber-400 absolute bottom-0 left-0 shadow-[0_0_15px_rgba(251,191,36,0.5)]" />
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num, i) => (
                <motion.div 
                  key={num} 
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  whileHover={{ scale: 1.03, y: -10 }}
                  onClick={() => setSelectedImg(num)}
                  className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 cursor-zoom-in group shadow-xl"
                >
                  <img src={`/gallery/img${num}.jpg`} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000" alt="Portfolio" />
                </motion.div>
              ))}
            </div>
          </section>

          {/* PACKAGES - ALL BUTTONS ANIMATED */}
          {[
            { id: "wedding", title: "Weddings", pkgs: [
              { name: "Simple", price: "1,500", items: ["4-Hour Coverage", "Up To 300 Edited Photos", "Online Gallery Delivery"] },
              { name: "Premium", price: "3,000", items: ["7-Hour Coverage", "Up To 500 Edited Photos", "Complimentary Engagement Session", "Personalized Photo Box"] },
              { name: "Gold", price: "5,000", items: ["Full Day Coverage", "Unlimited Photos", "Second Photographer", "Premium Photo Album", "4K Cinematic Slideshow"] }
            ]},
            { id: "portrait", title: "Portraits", pkgs: [
              { name: "Bronze", price: "500", items: ["30 Minutes Session", "15 High-Resolution Edits", "1 Outfit Selection"] },
              { name: "Silver", price: "750", items: ["60 Minutes Session", "30 High-Resolution Edits", "2 Outfit Selections", "Location of Choice"] },
              { name: "Gold", price: "1,200", items: ["2-Hour Session", "All High-Quality Edits", "Unlimited Outfits", "Multiple Locations", "Fast-Track Delivery"] }
            ]}
          ].map((section) => (
            <section key={section.id} id={section.id} className="px-4 py-24 max-w-7xl mx-auto text-center">
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl md:text-7xl font-serif italic mb-16">{section.title}</motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {section.pkgs.map((pkg, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    whileHover={{ y: -15, borderColor: pkg.name === "Gold" ? "#fbbf24" : "rgba(255,255,255,0.3)" }}
                    className={`p-8 rounded-[2rem] border transition-all duration-700 ${pkg.name === "Gold" ? 'bg-black/80 border-amber-400/50 shadow-[0_0_60px_rgba(251,191,36,0.1)]' : 'bg-white/5 border-white/10 backdrop-blur-md'}`}
                  >
                    <h3 className={`text-2xl font-serif italic mb-2 ${pkg.name === "Gold" ? 'text-amber-400' : ''}`}>{pkg.name}</h3>
                    <p className="text-2xl font-bold mb-6">${pkg.price} TTD</p>
                    <ul className="text-left space-y-4 uppercase text-[9px] tracking-[0.2em] opacity-70 mb-10 font-bold">
                        {pkg.items.map((item, idx) => <li key={idx} className="flex items-center gap-3"><span className="w-1 h-1 bg-amber-500 rounded-full" /> {item}</li>)}
                    </ul>
                    
                    <motion.button 
                        whileHover={{ scale: 1.05, boxShadow: pkg.name === "Gold" ? "0 0 30px rgba(251,191,36,0.6)" : "0 0 20px rgba(255,255,255,0.1)" }} 
                        whileTap={{ scale: 0.98 }} 
                        onClick={() => { setFormData({...formData, package: `${section.title} - ${pkg.name}`}); scrollTo('contact'); }} 
                        className={`w-full py-5 rounded-xl text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-300 relative overflow-hidden group ${pkg.name === "Gold" ? 'bg-amber-400 text-black' : 'border border-white/20 text-white hover:bg-white hover:text-black'}`}
                    >
                        <span className="relative z-10">Book {pkg.name}</span>
                        {/* RUNNING SHIMMER ANIMATION FOR ALL BUTTONS */}
                        <motion.div 
                          animate={{ x: ['-100%', '200%'] }} 
                          transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }} 
                          className={`absolute inset-0 skew-x-12 opacity-30 ${pkg.name === "Gold" ? "bg-gradient-to-r from-transparent via-white to-transparent" : "bg-gradient-to-r from-transparent via-white/40 to-transparent"}`}
                        />
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </section>
          ))}

          {/* CONTACT SECTION */}
          <section id="contact" className="relative bg-[#050505] text-white px-4 py-32 rounded-t-[4rem] overflow-hidden border-t border-white/5">
            <div className="max-w-6xl mx-auto relative z-10">
              <div className="flex flex-col items-center mb-24 text-center">
                <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-6xl md:text-9xl font-serif italic leading-tight">Let's Create.</motion.h2>
                <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ duration: 2 }} className="h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent mt-4" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
                <div className="lg:col-span-4 space-y-8">
                  {[
                    { icon: <Instagram size={22} />, label: "Instagram", value: "@visualsbyaarxn", href: "https://instagram.com/visualsbyaarxn" },
                    { icon: <Mail size={22} />, label: "Email", value: "visualsbyaarxn@gmail.com", href: "mailto:visualsbyaarxn@gmail.com" },
                    { icon: <Phone size={22} />, label: "WhatsApp", value: "+1 (868) 757-3042", href: "https://wa.me/18687573042" }
                  ].map((link, i) => (
                    <motion.a key={i} href={link.href} target="_blank" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.2 }} whileHover={{ x: 10, color: "#fbbf24" }} className="flex items-center gap-5 group transition-all">
                      <div className="p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:bg-amber-500/20 transition-all duration-500">{link.icon}</div>
                      <div>
                        <p className="text-[10px] uppercase opacity-40 font-bold tracking-[0.3em]">{link.label}</p>
                        <p className="text-lg font-serif italic">{link.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="lg:col-span-8 bg-white/[0.03] backdrop-blur-3xl p-10 md:p-16 rounded-[3rem] border border-white/5">
                  <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <input required type="text" placeholder="Your Name" className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-amber-500 transition-all placeholder:text-white/30 text-white font-serif italic text-lg" onChange={(e) => setFormData({...formData, name: e.target.value})} />
                      <input required type="email" placeholder="Your Email" className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-amber-500 transition-all placeholder:text-white/30 text-white font-serif italic text-lg" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                    </div>
                    <div className="space-y-3">
                      <p className="text-[10px] uppercase text-amber-500 font-bold tracking-[0.4em]">Selection</p>
                      <select value={formData.package} onChange={(e) => setFormData({...formData, package: e.target.value})} className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-amber-500 transition-all appearance-none text-white font-serif italic">
                        <option className="bg-neutral-950" value="General Inquiry">General Inquiry</option>
                        <option className="bg-neutral-950" value="Weddings - Simple">Weddings - Simple</option>
                        <option className="bg-neutral-950" value="Weddings - Premium">Weddings - Premium</option>
                        <option className="bg-neutral-950" value="Weddings - Gold">Weddings - Gold</option>
                        <option className="bg-neutral-950" value="Portraits - Bronze">Portraits - Bronze</option>
                        <option className="bg-neutral-950" value="Portraits - Silver">Portraits - Silver</option>
                        <option className="bg-neutral-950" value="Portraits - Gold">Portraits - Gold</option>
                      </select>
                    </div>
                    <textarea required rows={4} placeholder="Your Vision..." className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-amber-500 transition-all placeholder:text-white/30 text-white font-serif italic text-lg resize-none" onChange={(e) => setFormData({...formData, message: e.target.value})} />
                    <motion.button 
                      whileHover={{ scale: 1.02, backgroundColor: "#fbbf24", color: "#000", boxShadow: "0 10px 40px rgba(251,191,36,0.3)" }} 
                      whileTap={{ scale: 0.98 }} 
                      className="group flex items-center justify-center w-full md:w-auto px-12 py-6 bg-white text-black rounded-full font-bold uppercase text-[10px] tracking-[0.4em] transition-all duration-500 relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center">
                        Send Message <Send size={16} className="ml-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </span>
                      <motion.div animate={{ x: ['-100%', '200%'] }} transition={{ repeat: Infinity, duration: 3, ease: "linear" }} className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent skew-x-12" />
                    </motion.button>
                  </form>
                </motion.div>
              </div>

              <footer className="mt-40 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 opacity-30 text-[9px] tracking-[0.4em] uppercase font-bold">
                <p>© Visuals by Aarxn 2026</p>
                <button onClick={() => window.scrollTo({top:0, behavior:'smooth'})} className="hover:text-amber-500 transition-colors flex items-center gap-2">Back to Top <ArrowUp size={12}/></button>
              </footer>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}