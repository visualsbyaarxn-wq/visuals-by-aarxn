"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";
import { Mail, Phone, Send, ArrowUp, Instagram } from "lucide-react";

export default function VisualsByAarxn() {
  const [formData, setFormData] = useState({ name: "", email: "", package: "General Inquiry", message: "" });
  const [mounted, setMounted] = useState(false);
  const [selectedImg, setSelectedImg] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Shared 3D Header Animations
  const containerVars = {
    before: {},
    after: { transition: { staggerChildren: 0.05 } }
  };

  const letterVars = {
    before: { opacity: 0, y: 60, z: -150, rotateX: 75, filter: "blur(12px)" },
    after: { 
      opacity: 1, y: 0, z: 0, rotateX: 0, filter: "blur(0px)",
      transition: { duration: 1.2, ease: cubicBezier(0.22, 1, 0.36, 1) } 
    }
  };

  const glowVars = {
    animate: {
      textShadow: [
        "0px 5px 10px rgba(0,0,0,0.8), 0px 0px 0px rgba(251,191,36,0)",
        "0px 15px 40px rgba(0,0,0,0.9), 0px 0px 25px rgba(251,191,36,0.5)",
        "0px 5px 10px rgba(0,0,0,0.8), 0px 0px 0px rgba(251,191,36,0)"
      ],
      transition: { duration: 4, repeat: Infinity, ease: cubicBezier(0.42, 0, 0.58, 1), delay: 2 }
    }
  };

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
    <div className="min-h-screen text-white bg-black selection:bg-amber-200 selection:text-black overflow-x-hidden font-sans antialiased cursor-none">
      <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />

      {/* CURSOR */}
      <div className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block">
        <motion.div
          className="absolute rounded-full bg-amber-500/10 blur-xl"
          animate={{ x: mousePos.x - 65, y: mousePos.y - 65, width: isHovering ? 130 : 80, height: isHovering ? 130 : 80, opacity: isHovering ? 0.6 : 0.3 }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        />
        <motion.div
          className="absolute w-2 h-2 bg-amber-400 rounded-full shadow-[0_0_10px_rgba(251,191,36,0.8)]"
          animate={{ x: mousePos.x - 4, y: mousePos.y - 4, scale: isHovering ? 1.5 : 1 }}
        />
      </div>

      <div className="relative w-full">
        {/* BACKGROUND */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div animate={{ scale: [1.1, 1.15, 1.1] }} transition={{ duration: 30, repeat: Infinity }} className="w-full h-screen fixed">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2073" className="w-full h-full object-cover opacity-50" alt="Ocean" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black z-20 fixed" />
        </div>

        <div className="relative z-30">
          {/* HERO */}
          <section className="relative flex flex-col items-center justify-center text-center px-4 min-h-screen">
            <motion.div variants={containerVars} initial="before" animate="after" style={{ perspective: "1200px" }}>
              <motion.h1 variants={glowVars} animate="animate" className="flex flex-wrap justify-center text-[3.2rem] xs:text-6xl md:text-[9.5rem] font-serif font-bold italic leading-[1.1] text-white tracking-tighter" style={{ transformStyle: "preserve-3d" }}>
                {"Visuals by Aarxn".split("").map((char, index) => (
                  <motion.span key={index} variants={letterVars} className="inline-block transform-gpu">{char === " " ? "\u00A0" : char}</motion.span>
                ))}
              </motion.h1>
            </motion.div>
            <div className="relative w-full max-w-[60%] mt-8 h-[1px] bg-amber-400/30 overflow-hidden">
               <motion.div animate={{ x: ['-100%', '200%'] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            </div>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.8 }} transition={{ delay: 2.5 }} className="mt-8 text-[9px] md:text-xs uppercase font-bold text-amber-400 tracking-[0.6em] pl-[0.6em]">Weddings • Portraits • Events</motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.8 }} className="mt-16 grid grid-cols-2 md:flex md:flex-row gap-4">
              {['portfolio', 'wedding', 'portrait', 'contact'].map((id) => (
                <motion.button key={id} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} onClick={() => scrollTo(id)} 
                  whileHover={{ scale: 1.05, backgroundColor: "#fbbf24", color: "#000", boxShadow: "0 15px 30px rgba(251,191,36,0.4)" }}
                  className="px-10 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full font-bold uppercase text-[10px] tracking-widest transition-all duration-500"
                >{id}</motion.button>
              ))}
            </motion.div>
          </section>

          {/* GALLERY */}
          <section id="portfolio" className="px-4 py-32 max-w-7xl mx-auto">
            <motion.div variants={containerVars} initial="before" whileInView="after" viewport={{ once: true, margin: "-100px" }} style={{ perspective: "1000px" }} className="mb-20 text-center">
              <motion.h2 variants={glowVars} animate="animate" className="flex flex-wrap justify-center text-5xl md:text-8xl font-serif italic" style={{ transformStyle: "preserve-3d" }}>
                {"Portfolio".split("").map((char, index) => (
                  <motion.span key={index} variants={letterVars} className="inline-block transform-gpu">{char === " " ? "\u00A0" : char}</motion.span>
                ))}
              </motion.h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4 bg-black/40 backdrop-blur-xl rounded-[3rem] border border-white/5 shadow-2xl">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num, i) => (
                <motion.div key={num} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} whileHover={{ scale: 1.02, y: -10 }} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} onClick={() => setSelectedImg(num)} className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 group cursor-none">
                  <img src={`/gallery/img${num}.jpg`} className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000" alt="Portfolio" />
                </motion.div>
              ))}
            </div>
          </section>

          {/* PACKAGES */}
          {[
            { id: "wedding", title: "Weddings", pkgs: [
              { name: "Simple", price: "1,500", items: ["4-Hour Coverage", "300 Edited Photos", "Online Gallery"] },
              { name: "Premium", price: "3,000", items: ["7-Hour Coverage", "500 Edited Photos", "Engagement Session"] },
              { name: "Gold", price: "5,000", items: ["Full Day Coverage", "Unlimited Photos", "Second Photographer", "Premium Album"], featured: true }
            ]},
            { id: "portrait", title: "Portraits", pkgs: [
              { name: "Bronze", price: "500", items: ["30 Mins", "15 Edits"] },
              { name: "Silver", price: "750", items: ["60 Mins", "30 Edits"] },
              { name: "Gold", price: "1,200", items: ["2-Hour Session", "All Edits", "Fast-Track Delivery"], featured: true }
            ]}
          ].map((section) => (
            <section key={section.id} id={section.id} className="px-4 py-32 max-w-7xl mx-auto text-center">
              <motion.div variants={containerVars} initial="before" whileInView="after" viewport={{ once: true, margin: "-100px" }} style={{ perspective: "1000px" }} className="mb-20">
                <motion.h2 variants={glowVars} animate="animate" className="flex flex-wrap justify-center text-5xl md:text-8xl font-serif italic" style={{ transformStyle: "preserve-3d" }}>
                  {section.title.split("").map((char, index) => (
                    <motion.span key={index} variants={letterVars} className="inline-block transform-gpu">{char === " " ? "\u00A0" : char}</motion.span>
                  ))}
                </motion.h2>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {section.pkgs.map((pkg, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 60, scale: 0.9 }} 
                    whileInView={{ opacity: 1, y: 0, scale: 1 }} 
                    viewport={{ once: true, margin: "-50px" }} 
                    transition={{ duration: 0.8, delay: i * 0.15, ease: [0.215, 0.61, 0.355, 1] }} 
                    whileHover={{ y: -15, transition: { duration: 0.4 } }}
                    className={`p-8 rounded-[2.5rem] border transition-all duration-500 relative ${pkg.featured ? 'bg-black/90 border-amber-400/50 shadow-[0_0_60px_rgba(251,191,36,0.15)]' : 'bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/[0.08]'}`}
                  >
                    <h3 className={`text-2xl font-serif italic mb-2 ${pkg.featured ? 'text-amber-400' : ''}`}>{pkg.name}</h3>
                    <p className="text-2xl font-bold mb-6">${pkg.price} TTD</p>
                    <ul className="text-left space-y-4 uppercase text-[9px] tracking-[0.2em] opacity-70 mb-10 font-bold">
                        {pkg.items.map((item, idx) => <li key={idx} className="flex items-center gap-3"><span className="w-1 h-1 bg-amber-500 rounded-full" /> {item}</li>)}
                    </ul>
                    <motion.button 
                      onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} 
                      whileHover={{ scale: 1.05 }} 
                      onClick={() => { setFormData({...formData, package: `${section.title} - ${pkg.name}`}); scrollTo('contact'); }} 
                      className={`w-full py-5 rounded-xl text-[10px] font-bold uppercase tracking-[0.3em] relative overflow-hidden group ${pkg.featured ? 'bg-amber-400 text-black shadow-xl' : 'border border-white/20 text-white hover:bg-white hover:text-black'}`}
                    >
                        <span className="relative z-10">Book {pkg.name}</span>
                        <motion.div animate={{ x: ['-100%', '200%'] }} transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }} className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </section>
          ))}

          {/* CONTACT SECTION */}
          <section id="contact" className="relative bg-[#050505] px-4 py-40 rounded-t-[5rem] border-t border-white/10 shadow-[0_-50px_100px_rgba(0,0,0,0.8)]">
            <div className="max-w-6xl mx-auto text-center">
              <motion.div variants={containerVars} initial="before" whileInView="after" viewport={{ once: true }} style={{ perspective: "1000px" }} className="mb-24">
                <motion.h2 variants={glowVars} animate="animate" className="flex flex-wrap justify-center text-6xl md:text-[10rem] font-serif italic mb-8" style={{ transformStyle: "preserve-3d" }}>
                  {"Let's Create.".split("").map((char, index) => (
                    <motion.span key={index} variants={letterVars} className="inline-block transform-gpu">{char === " " ? "\u00A0" : char}</motion.span>
                  ))}
                </motion.h2>
                
                {/* LONGER ANIMATED LINE */}
                <div className="relative mx-auto w-full max-w-xl h-[2px] bg-white/5 overflow-hidden">
                  <motion.div 
                    animate={{ 
                      width: ["10%", "60%", "10%"],
                      left: ["0%", "20%", "90%"]
                    }}
                    transition={{ 
                      duration: 5, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className="absolute h-full bg-gradient-to-r from-transparent via-amber-500 to-transparent shadow-[0_0_20px_rgba(251,191,36,0.8)]"
                  />
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className="absolute inset-0 bg-white/10 origin-center"
                  />
                </div>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 text-left">
                <div className="lg:col-span-4 space-y-12">
                  {[
                    { icon: <Instagram size={22} />, label: "Instagram", value: "@visualsbyaarxn", href: "https://instagram.com/visualsbyaarxn" },
                    { icon: <Mail size={22} />, label: "Email", value: "visualsbyaarxn@gmail.com", href: "mailto:visualsbyaarxn@gmail.com" },
                    { icon: <Phone size={22} />, label: "WhatsApp", value: "+1 (868) 757-3042", href: "https://wa.me/18687573042" }
                  ].map((link, i) => (
                    <motion.a key={i} href={link.href} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} whileHover={{ x: 15, color: "#fbbf24" }} className="flex items-center gap-6 group cursor-none transition-colors">
                      <div className="p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:bg-amber-500/20 transition-all">{link.icon}</div>
                      <div>
                        <p className="text-[10px] uppercase opacity-40 font-bold tracking-[0.3em]">{link.label}</p>
                        <p className="text-xl font-serif italic tracking-wide">{link.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} className="lg:col-span-8 bg-white/[0.03] backdrop-blur-3xl p-10 md:p-16 rounded-[4rem] border border-white/5">
                  <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <input required placeholder="Your Name" className="w-full bg-transparent border-b border-white/20 py-5 outline-none focus:border-amber-500 transition-all text-white font-serif italic text-lg" onChange={(e) => setFormData({...formData, name: e.target.value})} />
                      <input required type="email" placeholder="Your Email" className="w-full bg-transparent border-b border-white/20 py-5 outline-none focus:border-amber-500 transition-all text-white font-serif italic text-lg" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                    </div>
                    <textarea required rows={4} placeholder="Tell me about your vision..." className="w-full bg-transparent border-b border-white/20 py-5 outline-none focus:border-amber-500 transition-all text-white font-serif italic text-lg resize-none" onChange={(e) => setFormData({...formData, message: e.target.value})} />
                    <motion.button onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} whileHover={{ scale: 1.02, backgroundColor: "#fbbf24", color: "#000", boxShadow: "0 10px 40px rgba(251,191,36,0.3)" }} className="group flex items-center justify-center w-full md:w-auto px-12 py-6 bg-white text-black rounded-full font-bold uppercase text-[10px] tracking-[0.4em] transition-all duration-500 relative overflow-hidden">
                      <span className="relative z-10 flex items-center">Send Message <Send size={16} className="ml-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></span>
                    </motion.button>
                  </form>
                </motion.div>
              </div>
              <footer className="mt-40 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center opacity-30 text-[9px] tracking-[0.4em] uppercase font-bold">
                <p>© Visuals by Aarxn 2026</p>
                <button onClick={() => window.scrollTo({top:0, behavior:'smooth'})} className="hover:text-amber-500 flex items-center gap-2 transition-colors">Up <ArrowUp size={12}/></button>
              </footer>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}