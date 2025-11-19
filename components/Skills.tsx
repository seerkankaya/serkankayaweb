import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code, BarChart3 } from 'lucide-react';
import { SKILLS } from '../constants';

const iconMap = {
  cpu: Cpu,
  code: Code,
  barChart: BarChart3,
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Teknik Cephanelik</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-blue to-neon-purple rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS.map((category, index) => {
            const Icon = iconMap[category.icon];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-12 h-12 bg-slate-800/50 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-700 group-hover:border-neon-blue/30">
                  <Icon className="w-6 h-6 text-neon-blue" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-6">{category.title}</h3>
                
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-3 text-slate-400 group-hover:text-slate-300 transition-colors">
                      <span className="w-1.5 h-1.5 bg-neon-purple rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};