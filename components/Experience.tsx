import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';
import { Briefcase } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Deneyim Yolculuğu</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-blue to-neon-purple rounded"></div>
        </div>

        <div className="relative space-y-12">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 transform -translate-x-1/2 md:translate-x-0" />

          {EXPERIENCE.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-slate-950 border-2 border-neon-blue rounded-full flex items-center justify-center transform -translate-x-1/2 z-10">
                <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse" />
              </div>

              {/* Content Card */}
              <div className="ml-12 md:ml-0 md:w-1/2 px-4">
                 <div className={`glass-card p-6 rounded-xl border-l-4 border-l-neon-blue ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className={`flex flex-col mb-4 ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                        <span className="text-neon-blue font-mono text-sm mb-1">{item.period}</span>
                        <h3 className="text-xl font-bold text-white">{item.role}</h3>
                        <h4 className="text-slate-400 font-medium flex items-center gap-2">
                            <Briefcase size={14} /> {item.company}
                        </h4>
                    </div>
                    <ul className={`space-y-2 text-slate-400 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                        {item.description.map((desc, i) => (
                            <li key={i} className="text-sm leading-relaxed">
                                {desc}
                            </li>
                        ))}
                    </ul>
                 </div>
              </div>
              
              {/* Spacer for opposite side */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};