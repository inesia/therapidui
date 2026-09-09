import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { PORTFOLIO_CASE_STUDIES } from '../data/portfolioCaseStudies';
import type { CaseStudy } from '../data/portfolioCaseStudies';

interface FeaturedProjectsProps {
  onSelectProject: (project: CaseStudy) => void;
}

export function FeaturedProjects({ onSelectProject }: FeaturedProjectsProps) {
  const featuredCaseStudies = PORTFOLIO_CASE_STUDIES.slice(0, 4);

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
        {featuredCaseStudies.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="group bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-soft hover:shadow-soft-hover transition-all duration-300 transform hover:-translate-y-1.5"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Card Image / Media Preview Container */}
              <div className="lg:col-span-6 p-6 sm:p-8 bg-slate-50/70 border-b lg:border-b-0 lg:border-r border-slate-200/80 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-white border border-slate-200/80 text-xs font-semibold text-slate-700 shadow-2xs">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    0{idx + 1}
                  </span>
                </div>

                {/* Project Screenshot Image */}
                <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm bg-slate-100 group/img">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs font-mono">
                      No Image Available
                    </div>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="absolute top-3 right-3 z-10 px-3 py-1.5 rounded-full bg-slate-900/80 hover:bg-slate-900 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm cursor-pointer"
                    >
                      Live Prototype <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                {/* Metrics Row if available */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-200/60 z-10 mt-4">
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
                )}
              </div>

              {/* Card Content & Details */}
              <div className="lg:col-span-6 p-8 md:p-10 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900 group-hover:text-teal-800 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                    {project.subtitle || project.category}
                  </p>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    {project.executiveSummary}
                  </p>

                  {/* Tech Stack Small Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.slice(0, 4).map((tag, tIdx) => (
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
                    className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-teal-800 transition-colors cursor-pointer"
                  >
                    {project.hasCaseStudy ? 'View Case Study' : 'Case Overview'}
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-teal-800 hover:text-teal-900 bg-teal-50 hover:bg-teal-100 px-3 py-1.5 rounded-full border border-teal-200 transition-colors"
                    >
                      Live Preview <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
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

