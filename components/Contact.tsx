import React from 'react';
import { Mail, Linkedin, Github, Phone, MapPin, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-16 border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Bir Şeyler Geliştirelim!</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            İster karmaşık iş akışlarını otomatikleştirmek, ister çevrimdışı dönüşümleri entegre etmek veya yapay zeka destekli arama sistemleri kurmak isteyin, çözüm mühendisliğine hazırım.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Phone */}
          <div className="flex flex-col items-center text-center group cursor-pointer p-4 rounded-xl hover:bg-slate-800/50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mb-4 text-neon-blue group-hover:scale-110 transition-transform">
              <Phone size={24} />
            </div>
            <h3 className="text-white font-bold mb-2">Telefon</h3>
            <p className="text-slate-400 text-sm">+90 539 671 49 40</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center text-center group cursor-pointer p-4 rounded-xl hover:bg-slate-800/50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mb-4 text-neon-purple group-hover:scale-110 transition-transform">
              <Mail size={24} />
            </div>
            <h3 className="text-white font-bold mb-2">Whatsapp</h3>
            <p className="text-slate-400 text-sm"><a href="https://api.whatsapp.com/send?phone=905396714940">0539 671 49 40</a></p>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center text-center group cursor-pointer p-4 rounded-xl hover:bg-slate-800/50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mb-4 text-neon-green group-hover:scale-110 transition-transform">
              <MapPin size={24} />
            </div>
            <h3 className="text-white font-bold mb-2">Konum</h3>
            <p className="text-slate-400 text-sm">İstanbul, Türkiye</p>
          </div>

        </div>

        <div className="flex justify-center gap-4">
           <a 
             href="mailto:info@seerkankaya.com"
             className="px-8 py-4 bg-neon-blue text-slate-950 font-bold rounded hover:bg-white transition-all flex items-center gap-2"
           >
             Bana Ulaşın <ExternalLink size={18} />
           </a>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex justify-center gap-8">
            <a href="https://github.com/seerkankaya" className="text-slate-500 hover:text-white transition-colors"><Github size={24} /></a>
            <a href="https://www.linkedin.com/in/seerkankaya/" className="text-slate-500 hover:text-white transition-colors"><Linkedin size={24} /></a>
            <a href="mailto:info@seerkankaya.com" className="text-slate-500 hover:text-white transition-colors"><Mail size={24} /></a>
        </div>
      </div>
    </section>
  );
};