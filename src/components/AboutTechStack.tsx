import { motion } from 'framer-motion';
import { Layers, Palette, Code2, FileCode, Sparkles, Sliders, Server, BookOpen, Globe, CheckCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { FigmaIcon } from './Icons';

export function AboutTechStack() {
  const iconMap: Record<string, React.ReactNode> = {
    Layers: <Layers className="w-4 h-4 text-slate-700" />,
    Palette: <Palette className="w-4 h-4 text-slate-700" />,
    Code2: <Code2 className="w-4 h-4 text-slate-700" />,
    FileCode: <FileCode className="w-4 h-4 text-slate-700" />,
    Figma: <FigmaIcon className="w-4 h-4" />,
    Sparkles: <Sparkles className="w-4 h-4 text-slate-700" />,
    Sliders: <Sliders className="w-4 h-4 text-slate-700" />,
    Server: <Server className="w-4 h-4 text-slate-700" />,
    BookOpen: <BookOpen className="w-4 h-4 text-slate-700" />,
    Globe: <Globe className="w-4 h-4 text-slate-700" />
  };

  return (
    <section id="about" className="py-20 md:py-28 px-6 md:px-12 max-w-6xl mx-auto border-t border-slate-200/80">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <span className="text-xs font-bold text-teal-800 uppercase tracking-widest block mb-2">
          Architecture & Craft
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 max-w-xl">
          Functional, component-based prototypes that bridge vision and production.
        </h2>
      </motion.div>

      {/* Bio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-7 space-y-6 text-slate-600 leading-relaxed text-base md:text-lg"
        >
          {PORTFOLIO_DATA.person.bioParagraphs.map((paragraph, index) => (
            <p key={index} className="text-slate-600 leading-relaxed">
              {paragraph}
            </p>
          ))}
          
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Core Specialty</span>
              <span className="text-sm font-bold text-slate-900">Rapid Code-Based Prototyping</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Design Token System</span>
              <span className="text-sm font-bold text-slate-900">Figma Variable Syncing</span>
            </div>
          </div>
        </motion.div>

        {/* Right Feature Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-5 p-8 rounded-2xl bg-white border border-slate-200 shadow-soft space-y-6"
        >
          <h3 className="text-lg font-bold text-slate-900 tracking-tight">
            Why Code-Based Prototyping Matters
          </h3>
          <ul className="space-y-4 text-sm text-slate-600">
            {[
              "Eliminates static Figma-to-Code mismatches.",
              "Validates complex data flows & states beforehand.",
              "Generates copy-paste production React components.",
              "Tests actual accessibility & keyboard interactions."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Tech Stack Row / Grid */}
      <div id="tech-stack" className="pt-12 border-t border-slate-200/80">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4"
        >
          <div>
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">Engineering & Design Stack</h3>
            <p className="text-sm text-slate-500">Minimalist suite of tools used to craft production-grade interfaces.</p>
          </div>
          <span className="text-xs font-medium text-slate-400 font-mono">React 19 • Tailwind CSS v4 • Next.js</span>
        </motion.div>

        {/* Minimalist Logo/Text Tag Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3"
        >
          {PORTFOLIO_DATA.techStack.map((tech, idx) => (
            <div 
              key={idx}
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md transition-all group cursor-default"
            >
              <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 group-hover:bg-teal-50 group-hover:border-teal-100 transition-colors">
                {iconMap[tech.icon] || <Code2 className="w-4 h-4 text-slate-700" />}
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                  {tech.name}
                </span>
                <span className="text-[10px] text-slate-500 font-medium">
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Engineering Principles */}
      <div id="principles" className="mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-xs font-bold text-teal-800 uppercase tracking-widest block mb-2">
            Philosophy
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Core Design & Engineering Principles
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-slate-200 shadow-soft hover:shadow-soft-hover transition-all space-y-3"
            >
              <div className="text-xs font-mono font-bold text-teal-800">
                0{index + 1}
              </div>
              <h4 className="text-lg font-bold text-slate-900 tracking-tight">
                {principle.title}
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                {principle.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
