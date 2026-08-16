import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, CheckCircle2, Sparkles, Sliders } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onExploreWork: () => void;
}

export function Hero({ onOpenResume, onExploreWork }: HeroProps) {
  const [activeTab, setActiveTab] = useState<'component' | 'tokens'>('component');
  const [primaryColor, setPrimaryColor] = useState('#0D9488');
  const [radius, setRadius] = useState('0.75rem');

  return (
    <section className="relative pt-32 lg:pt-40 pb-20 md:pb-28 px-6 md:px-12 max-w-6xl mx-auto">
      {/* Soft Ambient Background Blur */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-tr from-teal-100/30 via-slate-100/60 to-teal-50/20 blur-3xl -z-10 rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Hero Copy */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* Availability Pill Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50/80 border border-teal-200/60 text-teal-800 text-xs font-semibold tracking-wide mb-6 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600"></span>
            </span>
            {PORTFOLIO_DATA.person.statusBadge}
          </motion.div>

          {/* H1 Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.12] mb-6">
            {PORTFOLIO_DATA.person.tagline}
          </h1>

          {/* H2 Subtitle */}
          <h2 className="text-lg md:text-xl text-slate-500 font-normal leading-relaxed mb-8 max-w-xl">
            {PORTFOLIO_DATA.person.subtagline}
          </h2>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <button
              onClick={onExploreWork}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-all shadow-soft group cursor-pointer"
            >
              Explore Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenResume}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-slate-200 bg-white text-slate-700 font-semibold text-sm hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm cursor-pointer"
            >
              <FileText className="w-4 h-4 text-slate-500" />
              Resume
            </button>
          </div>

          {/* Key Metrics / Highlights Quick Row */}
          <div className="mt-12 pt-8 border-t border-slate-200/80 grid grid-cols-3 gap-6 w-full max-w-lg">
            <div>
              <span className="block text-2xl font-extrabold text-slate-900 tracking-tight">8+</span>
              <span className="text-xs text-slate-500 font-medium">Years Experience</span>
            </div>
            <div>
              <span className="block text-2xl font-extrabold text-slate-900 tracking-tight">40%</span>
              <span className="text-xs text-slate-500 font-medium">Handoff Acceleration</span>
            </div>
            <div>
              <span className="block text-2xl font-extrabold text-slate-900 tracking-tight">15+</span>
              <span className="text-xs text-slate-500 font-medium">Enterprise Systems</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive Code-Based Prototype Widget */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="lg:col-span-5 w-full"
        >
          <div className="bg-white rounded-2xl border border-slate-200 shadow-soft overflow-hidden">
            {/* Widget Window Bar */}
            <div className="px-5 py-3.5 bg-slate-50/90 border-b border-slate-200/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-300" />
                <div className="w-3 h-3 rounded-full bg-slate-300" />
                <div className="w-3 h-3 rounded-full bg-slate-300" />
                <span className="text-xs font-semibold text-slate-500 ml-2">Interactive Code Prototype</span>
              </div>
              <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-200/80">
                <button
                  onClick={() => setActiveTab('component')}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                    activeTab === 'component' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Live Component
                </button>
                <button
                  onClick={() => setActiveTab('tokens')}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                    activeTab === 'tokens' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Token Controls
                </button>
              </div>
            </div>

            {/* Widget Body */}
            <div className="p-6 min-h-[300px] flex flex-col justify-between bg-dot-pattern bg-white">
              {activeTab === 'component' ? (
                <div className="space-y-6">
                  {/* Live Component Preview Card */}
                  <div className="p-5 bg-white rounded-xl border border-slate-200/90 shadow-sm space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center text-white transition-all"
                          style={{ backgroundColor: primaryColor, borderRadius: radius }}
                        >
                          <Sparkles className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900">Enterprise Metric Card</h4>
                          <p className="text-xs text-slate-500">Living React Token Primitive</p>
                        </div>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-800 text-[11px] font-semibold">
                        Live Preview
                      </span>
                    </div>

                    <div className="pt-2 flex items-baseline justify-between">
                      <div>
                        <span className="text-xs text-slate-400 block font-medium">System Speed</span>
                        <span className="text-2xl font-extrabold text-slate-900">99.8ms</span>
                      </div>
                      <button 
                        className="px-4 py-2 text-xs font-semibold text-white transition-all shadow-sm cursor-pointer"
                        style={{ backgroundColor: primaryColor, borderRadius: radius }}
                      >
                        Execute Flow
                      </button>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 text-xs text-slate-600 space-y-2 font-mono">
                    <div className="text-slate-400 font-sans text-[11px] uppercase font-bold tracking-wider">Output Specs</div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">primaryColor:</span>
                      <span className="font-semibold text-slate-800">{primaryColor}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">borderRadius:</span>
                      <span className="font-semibold text-slate-800">{radius}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <Sliders className="w-4 h-4 text-teal-600" />
                    Manipulate Live Design Tokens
                  </div>

                  {/* Token Color Selector */}
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-slate-500">Accent Color Token</label>
                    <div className="flex items-center gap-3">
                      {[
                        { name: 'Teal', hex: '#0D9488' },
                        { name: 'Slate', hex: '#1E293B' },
                        { name: 'Sage', hex: '#059669' },
                        { name: 'Indigo', hex: '#4F46E5' }
                      ].map((color) => (
                        <button
                          key={color.hex}
                          onClick={() => setPrimaryColor(color.hex)}
                          className={`w-8 h-8 rounded-full border-2 transition-all cursor-pointer ${
                            primaryColor === color.hex ? 'border-slate-900 scale-110' : 'border-transparent hover:scale-105'
                          }`}
                          style={{ backgroundColor: color.hex }}
                          title={color.name}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Token Radius Selector */}
                  <div className="space-y-2 pt-2">
                    <label className="text-xs font-medium text-slate-500">Border Radius Token</label>
                    <div className="grid grid-cols-4 gap-2">
                      {[
                        { label: 'Sharp', val: '0.25rem' },
                        { label: 'Medium', val: '0.75rem' },
                        { label: 'Soft', val: '1.25rem' },
                        { label: 'Pill', val: '9999px' }
                      ].map((r) => (
                        <button
                          key={r.val}
                          onClick={() => setRadius(r.val)}
                          className={`px-3 py-1.5 text-xs font-semibold border rounded-lg transition-colors cursor-pointer ${
                            radius === r.val
                              ? 'bg-slate-900 text-white border-slate-900'
                              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                          }`}
                        >
                          {r.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-400 italic pt-2">
                    Changes immediately propagate across living React component trees.
                  </p>
                </div>
              )}

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                  Code-Based Handoff Ready
                </span>
                <span className="font-mono text-[11px] text-slate-400">Tailwind v4 + React 19</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
