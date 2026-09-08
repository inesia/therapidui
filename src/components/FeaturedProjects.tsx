import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
}

export function FeaturedProjects({ onSelectProject }: FeaturedProjectsProps) {
  return (
    <section id="featured-work" className="py-20 md:py-28 px-6 md:px-12 max-w-6xl mx-auto border-t border-slate-200/80">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
      >
        <div>
          <span className="text-xs font-bold text-teal-800 uppercase tracking-widest block mb-2">
            Selected Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Featured Projects & Engineering Works
          </h2>
        </div>
        <p className="text-sm text-slate-500 max-w-md">
          High-impact enterprise design systems, data-dense financial dashboards, and developer automation tools.
        </p>
      </motion.div>

      {/* Projects Grid - Large, Spacious Cards */}
      <div className="grid grid-cols-1 gap-12">
        {PORTFOLIO_DATA.projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="group bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-soft hover:shadow-soft-hover transition-all duration-300 transform hover:-translate-y-1.5"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Card Thumbnail / Mockup Container (Soft Gray & Subtle Accent Placeholder) */}
              <div className={`lg:col-span-6 p-8 md:p-10 bg-gradient-to-br ${project.mockupColor} border-b lg:border-b-0 lg:border-r border-slate-200/80 flex flex-col justify-between min-h-[320px] relative overflow-hidden`}>
                <div className="flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200/80 text-xs font-semibold text-slate-700 shadow-xs">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    0{idx + 1}
                  </span>
                </div>

                {/* Interactive Visual Mockup Preview */}
                <div className="my-6 p-5 bg-white/95 rounded-2xl border border-slate-200/80 shadow-sm transition-transform group-hover:scale-[1.02] duration-300">
                  <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                      <span className="text-[11px] font-medium text-slate-400 font-mono">
                        {project.title.toLowerCase().replace(/\s+/g, '-')}.tsx
                      </span>
                    </div>
                    <span className="text-[10px] text-teal-800 font-bold uppercase tracking-wider">Active Spec</span>
                  </div>

                  <div className="space-y-2 font-mono text-xs">
                    <div className="text-teal-800 font-medium">const {project.id.replace(/-/g, '_')} = () =&gt; &#123;</div>
                    <div className="pl-4 text-slate-500">// {project.subtitle}</div>
                    <div className="pl-4 text-slate-800">return &lt;<span className="text-slate-900 font-bold">SystemPrimitive</span> status=<span className="text-teal-800">"optimal"</span> /&gt;;</div>
                    <div className="text-teal-800 font-medium">&#125;;</div>
                  </div>
                </div>

                {/* Metrics Row */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-200/60 z-10">
                  {project.metrics.map((metric, mIdx) => (
                    <div key={mIdx}>
                      <span className="block text-base font-extrabold text-slate-900 tracking-tight">
                        {metric.value}
                      </span>
                      <span className="text-[10px] text-slate-500 font-medium line-clamp-1">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Content & Details */}
              <div className="lg:col-span-6 p-8 md:p-10 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900 group-hover:text-teal-800 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack Small Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-slate-700 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Trigger */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-teal-800 transition-colors"
                  >
                    View Case Study
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                  <span className="text-xs text-slate-400 font-medium">Click for interactive overview</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View Complete Portfolio Callout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <a
          href="/portfolio"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all group"
        >
          Explore Complete Portfolio & In-Depth Case Studies
          <ArrowUpRight className="w-4 h-4 text-teal-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
        <p className="text-xs text-slate-400 font-medium mt-3">
          Detailed case studies with code architecture, live staging URLs, and metrics.
        </p>
      </motion.div>
    </section>
  );
}
