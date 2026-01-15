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

            <div className="mt-12 grid grid-cols-2 md:flex md:flex-row gap-4">
              {['portfolio', 'wedding', 'portrait', 'contact'].map((id) => (
                <motion.button 
                  key={id} 
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "rgba(251,191,36,1)", 
                    color: "#000", 
                    boxShadow: "0 0 30px rgba(251,191,36,0.6)" 
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollTo(id)} 
                  className="px-8 py-4 bg-white/5 backdrop-blur-xl text-white border border-white/10 rounded-full font-bold uppercase text-[9px] tracking-widest transition-all duration-500 overflow-hidden relative group"
                >
                   <span className="relative z-10">{id}</span>
                   <motion.div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </motion.button>
              ))}
            </div>
          </section>

          {/* GALLERY */}
          <section id="portfolio" className="px-4 py-20 max-w-7xl mx-auto bg-black/40 backdrop-blur-xl rounded-[2.5rem] my-10 border border-white/5">
            <div className="mb-12 inline-block relative px-2">
               <motion.h2 className="text-4xl md:text-7xl font-serif italic mb-1">Gallery</motion.h2>
               <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ duration: 1 }} className="h-[2px] bg-amber-400 absolute bottom-0 left-0" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                <motion.div 
                  key={num} 
                  whileHover={{ scale: 1.02, zIndex: 10 }}
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedImg(num)}
                  className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl cursor-zoom-in transition-all duration-500"
                >
                  <img src={`/gallery/img${num}.jpg`} className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700" alt="Portfolio" />
                </motion.div>
              ))}
            </div>
          </section>

          {/* PACKAGES */}
          {[
            { id: "wedding", title: "Weddings", pkgs: [
              { name: "Simple", price: "1,500", items: ["4 Hours Coverage", "200+ Photos"] },
              { name: "Standard", price: "3,000", items: ["7 Hours Coverage", "400+ Photos", "Engagement"], featured: true },
              { name: "Custom", price: "Inquire", items: ["Tailored Coverage", "Specific Needs", "Flexible Add-ons"] }
            ]},
            { id: "portrait", title: "Portraits", pkgs: [
              { name: "Bronze", price: "500", items: ["30 Mins", "15 Edits"] },
              { name: "Silver", price: "750", items: ["60 Mins", "30 Edits"], featured: true },
              { name: "Custom", price: "Inquire", items: ["Specific Location", "Outfit Changes", "Commercial Use"] }
            ]}
          ].map((section) => (
            <section key={section.id} id={section.id} className="px-4 py-24 max-w-7xl mx-auto text-center">
              <h2 className="text-4xl md:text-7xl font-serif italic mb-16">{section.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {section.pkgs.map((pkg, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -15, borderColor: pkg.featured ? "#fbbf24" : "rgba(255,255,255,0.3)" }}
                    className={`p-8 rounded-[2rem] border transition-all duration-500 ${pkg.featured ? 'bg-black border-amber-400/50 shadow-[0_0_50px_rgba(251,191,36,0.1)]' : 'bg-white/5 border-white/10 backdrop-blur-md'}`}
                  >
                    <h3 className={`text-2xl font-serif italic mb-2 ${pkg.featured ? 'text-amber-400' : ''}`}>{pkg.name}</h3>
                    <p className="text-2xl font-bold mb-6">{pkg.price === "Inquire" ? "Let's Chat" : `$${pkg.price} TTD`}</p>
                    <ul className="text-left space-y-3 uppercase text-[9px] tracking-[0.2em] opacity-70 mb-8 font-bold">{pkg.items.map((item, idx) => <li key={idx} className="flex items-center gap-2"><span className="w-1 h-1 bg-amber-500 rounded-full" /> {item}</li>)}</ul>
                    
                    <motion.button 
                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(251,191,36,0.8)" }} 
                        whileTap={{ scale: 0.98 }} 
                        onClick={() => {
                          setFormData({...formData, package: `${section.title} - ${pkg.name}`});
                          scrollTo('contact');
                        }} 
                        className={`w-full py-5 rounded-xl text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-300 relative overflow-hidden group ${pkg.featured ? 'bg-amber-400 text-black shadow-xl shadow-amber-400/20' : 'border border-white/20 text-white hover:bg-white hover:text-black'}`}
                    >
                        <span className="relative z-10">{pkg.name === "Custom" ? "Build Package" : `Book ${pkg.name}`}</span>
                        <motion.div 
                          animate={{ x: ['-100%', '200%'] }} 
                          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" 
                        />
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </section>
          ))}

          {/* FANCY CONTACT SECTION (Updated Visibility) */}
          <section id="contact" className="relative bg-[#050505] text-white px-4 py-32 rounded-t-[4rem] overflow-hidden border-t border-white/5">
            <div className="absolute top-20 left-10 text-[15vw] font-serif font-bold italic opacity-[0.02] select-none pointer-events-none">
              CONNECT
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
              <div className="flex flex-col items-center mb-24 text-center">
                <div className="inline-block relative">
                   <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-6xl md:text-9xl font-serif italic leading-tight"
                  >
                    Let's Create.
                  </motion.h2>
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.8, ease: "easeInOut" }}
                    className="h-[2px] bg-amber-500 mt-2 shadow-[0_0_30px_rgba(245,158,11,1)]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
                <div className="lg:col-span-4 space-y-12">
                  <div className="space-y-8">
                    {[
                      { icon: <Instagram size={22} />, label: "Instagram", value: "@visualsbyaarxn", href: "https://instagram.com/visualsbyaarxn" },
                      { icon: <Mail size={22} />, label: "Email", value: "visualsbyaarxn@gmail.com", href: "mailto:visualsbyaarxn@gmail.com" },
                      { icon: <Phone size={22} />, label: "WhatsApp", value: "+1 (868) 757-3042", href: "https://wa.me/18687573042" }
                    ].map((link, i) => (
                      <motion.a 
                        key={i}
                        href={link.href}
                        target="_blank"
                        whileHover={{ x: 15, color: "#fbbf24" }}
                        className="flex items-center gap-5 group transition-all"
                      >
                        <div className="p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:bg-amber-500/20 group-hover:border-amber-500/50 transition-all duration-500">
                          {link.icon}
                        </div>
                        <div>
                          <p className="text-[10px] uppercase opacity-40 font-bold tracking-[0.3em]">{link.label}</p>
                          <p className="text-xl font-serif italic tracking-wide">{link.value}</p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="lg:col-span-8 bg-white/[0.05] backdrop-blur-3xl p-10 md:p-16 rounded-[4rem] border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.5)]"
                >
                  <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <input required type="text" placeholder="Your Name" 
                        className="w-full bg-transparent border-b-2 border-white/30 py-5 outline-none focus:border-amber-500 transition-all placeholder:text-white/60 text-white font-serif italic text-lg"
                        onChange={(e) => setFormData({...formData, name: e.target.value})} />
                      <input required type="email" placeholder="Your Email" 
                        className="w-full bg-transparent border-b-2 border-white/30 py-5 outline-none focus:border-amber-500 transition-all placeholder:text-white/60 text-white font-serif italic text-lg"
                        onChange={(e) => setFormData({...formData, email: e.target.value})} />
                    </div>

                    <div className="space-y-3">
                      <p className="text-[10px] uppercase text-amber-500 font-bold tracking-[0.4em] ml-1">Service Required</p>
                      <select 
                        value={formData.package}
                        onChange={(e) => setFormData({...formData, package: e.target.value})}
                        className="w-full bg-white/10 border border-white/10 p-5 rounded-2xl outline-none focus:border-amber-500 focus:bg-white/20 transition-all appearance-none text-white font-serif italic text-lg"
                      >
                        <option className="bg-neutral-900" value="General Inquiry">General Inquiry</option>
                        <option className="bg-neutral-900" value="Weddings - Simple">Weddings - Simple</option>
                        <option className="bg-neutral-900" value="Weddings - Standard">Weddings - Standard</option>
                        <option className="bg-neutral-900" value="Weddings - Custom">Weddings - Custom</option>
                        <option className="bg-neutral-900" value="Portraits - Bronze">Portraits - Bronze</option>
                        <option className="bg-neutral-900" value="Portraits - Silver">Portraits - Silver</option>
                        <option className="bg-neutral-900" value="Portraits - Custom">Portraits - Custom</option>
                      </select>
                    </div>

                    <textarea required rows={5} placeholder="Tell me about your vision..." 
                      className="w-full bg-transparent border-b-2 border-white/30 py-5 outline-none focus:border-amber-500 transition-all placeholder:text-white/60 text-white font-serif italic text-lg resize-none"
                      onChange={(e) => setFormData({...formData, message: e.target.value})} />

                    <motion.button 
                      whileHover={{ scale: 1.02, backgroundColor: "#fbbf24", color: "#000", boxShadow: "0 20px 40px rgba(251,191,36,0.3)" }}
                      whileTap={{ scale: 0.98 }}
                      className="group flex items-center justify-center w-full md:w-auto md:min-w-[280px] px-12 py-6 bg-white text-black rounded-full font-bold uppercase text-[11px] tracking-[0.4em] transition-all duration-500"
                    >
                      Send Message
                      <Send size={18} className="ml-4 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                    </motion.button>
                  </form>
                </motion.div>
              </div>

              <footer className="mt-40 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 opacity-30">
                <p className="text-[10px] tracking-[0.5em] uppercase font-bold">Visuals by Aarxn • 2026</p>
                <div className="flex gap-10 text-[10px] tracking-[0.3em] uppercase font-bold">
                  <button onClick={() => scrollTo('portfolio')} className="hover:text-amber-500 transition-colors">Work</button>
                  <button onClick={() => scrollTo('wedding')} className="hover:text-amber-500 transition-colors">Rates</button>
                  <button onClick={() => window.scrollTo({top:0, behavior:'smooth'})} className="hover:text-amber-500 flex items-center gap-3 transition-colors">Up <ArrowUp size={14}/></button>
                </div>
              </footer>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}