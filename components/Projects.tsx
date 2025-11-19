import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Layers } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-6 bg-slate-900/30 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Seçilmiş Çalışmalar</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-blue to-neon-purple rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`card-${project.id}`}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer glass-card rounded-2xl overflow-hidden hover:border-neon-blue/30 transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors z-10" />
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6 line-clamp-2">{project.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono text-neon-blue bg-neon-blue/10 border border-neon-blue/20 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-3 py-1 text-xs font-mono text-slate-400 bg-slate-800 border border-slate-700 rounded-full">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"
            />
            <motion.div
              layoutId={`card-${selectedProject.id}`}
              className="relative w-full max-w-3xl bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto scrollbar-hide"
            >
              <button
                onClick={(e) => { e.stopPropagation(); setSelectedProject(null); }}
                className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-neon-blue hover:text-black transition-colors z-20"
              >
                <X size={20} />
              </button>

              <div className="h-64 md:h-80 relative">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{selectedProject.title}</h2>
                  <p className="text-lg text-neon-blue font-medium">{selectedProject.summary}</p>
                </div>
              </div>

              <div className="p-8 space-y-8">
                <div>
                  <h4 className="text-sm font-mono text-slate-500 mb-3 uppercase tracking-wider">Açıklama</h4>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-mono text-slate-500 mb-3 uppercase tracking-wider">Teknoloji Yığını</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-sm text-slate-200 bg-slate-800 border border-slate-600 rounded hover:border-neon-blue/50 transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800 flex justify-end">
                    {selectedProject.link ? (
                        <a href={selectedProject.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-neon-blue text-slate-950 font-bold rounded hover:bg-white transition-colors">
                            Canlı Demo <ExternalLink size={18} />
                        </a>
                    ) : (
                         <button disabled className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-slate-500 font-bold rounded cursor-not-allowed">
                            Dahili Araç <Layers size={18} />
                        </button>
                    )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};