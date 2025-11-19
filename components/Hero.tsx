import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-[120px] animate-blob mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-screen pointer-events-none" />

      <div className="relative z-10 max-w-4xl w-full text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-mono font-medium text-neon-blue bg-neon-blue/10 border border-neon-blue/20 rounded-full">
            Sistem Durumu: Çevrimiçi // Girişe Hazır
          </span>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight mb-6">
            Pazarlama Odaklı <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
              Yazılım Geliştirici
            </span> <br />
            & AI Mühendisi
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Büyük ölçekli pazarlama ekipleri için yüksek performanslı takip sistemleri, dönüşüm hatları ve yapay zeka otomasyonları inşa ediyorum. 
            Doğuştan meraklı, alışkanlıktan deneysel.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-slate-100 text-slate-950 font-bold rounded hover:bg-white transition-all flex items-center justify-center gap-2 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Çalışmalarımı Gör <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <a
              href="#contact"
              className="px-8 py-4 bg-slate-900 border border-slate-700 text-white font-medium rounded hover:border-neon-blue/50 hover:text-neon-blue transition-all flex items-center justify-center gap-2"
            >
              İletişime Geç
            </a>
          </div>
        </motion.div>

        {/* Stats / Tech ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-20 pt-10 border-t border-slate-800 flex flex-wrap justify-center lg:justify-start gap-8 md:gap-16 text-slate-500 font-mono text-sm"
        >
            <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></span>
                API Entegrasyonları
            </div>
            <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-neon-blue rounded-full animate-pulse"></span>
                Cloudflare Workers
            </div>
            <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-neon-purple rounded-full animate-pulse"></span>
                Vektör Arama
            </div>
        </motion.div>
      </div>
    </section>
  );
};