import React, { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Search, ExternalLink, ArrowUpRight, Sparkles, 
  FileText, Mail
} from 'lucide-react';
import { PORTFOLIO_CASE_STUDIES } from '../data/portfolioCaseStudies';
import type { CaseStudy } from '../data/portfolioCaseStudies';
import { MockupPreview } from '../components/portfolio/MockupPreview';
import { CaseStudyModal } from '../components/portfolio/CaseStudyModal';
import { ResumeModal } from '../components/ResumeModal';
import { ContactModal } from '../components/ContactModal';

export const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Set document title
  useEffect(() => {
    document.title = "Portfolio & In-Depth Case Studies — The Rapid UI";
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Filtered case studies
  const filteredStudies = useMemo(() => {
    return PORTFOLIO_CASE_STUDIES.filter(study => {
      const matchesCategory = selectedCategory === 'All' || study.category === selectedCategory;
      const matchesSearch = 
        study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        study.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        study.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const categories = ['All', 'Web Application', 'Dashboard UI', 'Mobile & PWA', 'Enterprise & B2B'];

  return (
    <div className="min-h-screen bg-[#FCFCFC] text-slate-900 font-sans selection:bg-teal-500/20 selection:text-teal-900 flex flex-col relative overflow-x-hidden">
      {/* Background Soft Gradients */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-teal-50/40 via-slate-100/30 to-transparent pointer-events-none -z-10" />

      {/* Header Navigation */}
      <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b border-slate-200/80 py-4 transition-all">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/';
              }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
            </a>

            <div className="h-4 w-px bg-slate-200 hidden sm:block" />

            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="The Rapid UI logo" className="w-6 h-6 rounded object-contain" />
              <span className="font-bold text-slate-900 text-sm tracking-tight hidden sm:inline-block">
                The Rapid UI
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/resume"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 transition-all shadow-2xs"
            >
              <FileText className="w-3.5 h-3.5 text-slate-500" />
              Resume
            </a>
            <button
              onClick={() => setIsContactOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-2xs cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              Contact
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-16 space-y-16">
        {/* Page Hero Header */}
        <section className="space-y-6 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-bold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            Comprehensive Works & Case Studies
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Proven Engineering & UI/UX Case Studies
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Detailed breakdowns of web applications, high-density dashboards, mobile PWAs, and enterprise systems built with code-first rapid prototyping.
          </p>

          {/* Quick Stats Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-200/70">
            <div className="p-3 bg-white rounded-2xl border border-slate-200/80 shadow-2xs">
              <span className="block text-2xl font-extrabold text-slate-900 font-mono">15+</span>
              <span className="text-[11px] text-slate-500 font-medium">Years UI/UX Exp</span>
            </div>
            <div className="p-3 bg-white rounded-2xl border border-slate-200/80 shadow-2xs">
              <span className="block text-2xl font-extrabold text-teal-700 font-mono">100%</span>
              <span className="text-[11px] text-slate-500 font-medium">Code Prototyped</span>
            </div>
            <div className="p-3 bg-white rounded-2xl border border-slate-200/80 shadow-2xs">
              <span className="block text-2xl font-extrabold text-slate-900 font-mono">1,000+</span>
              <span className="text-[11px] text-slate-500 font-medium">Portals Powered</span>
            </div>
            <div className="p-3 bg-white rounded-2xl border border-slate-200/80 shadow-2xs">
              <span className="block text-2xl font-extrabold text-slate-900 font-mono">30+</span>
              <span className="text-[11px] text-slate-500 font-medium">Enterprise Clients</span>
            </div>
          </div>
        </section>

        {/* Filter and Search Bar */}
        <section className="space-y-4 pt-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects, stacks, tags..."
                className="w-full pl-9 pr-4 py-2 rounded-full text-xs bg-white border border-slate-200 focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600 transition-all placeholder:text-slate-400"
              />
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="space-y-8">
          {filteredStudies.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 space-y-3">
              <p className="text-base font-semibold text-slate-700">No case studies match your search criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="px-4 py-2 rounded-full bg-slate-100 text-xs font-bold text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredStudies.map((study, idx) => (
                <motion.article
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  onClick={() => setActiveStudy(study)}
                  className="group bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-soft hover:shadow-soft-hover transition-all duration-300 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1"
                >
                  {/* Visual Mockup Preview Container */}
                  <div className="p-4 sm:p-6 bg-slate-50/60 border-b border-slate-100">
                    <MockupPreview study={study} className="min-h-[220px]" />
                  </div>

                  {/* Content Body */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold">
                          {study.category}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          {study.timeline}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 group-hover:text-teal-800 transition-colors">
                        {study.title}
                      </h3>

                      <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                        {study.client}
                      </p>

                      <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                        {study.executiveSummary}
                      </p>
                    </div>

                    {/* Metrics Row */}
                    <div className="grid grid-cols-3 gap-2 py-3 px-4 rounded-xl bg-slate-50 border border-slate-100">
                      {study.metrics.map((m, mIdx) => (
                        <div key={mIdx}>
                          <span className="block text-sm font-extrabold text-slate-900 font-mono">
                            {m.value}
                          </span>
                          <span className="text-[10px] text-slate-500 font-medium block truncate">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Tags List */}
                    <div className="flex flex-wrap gap-1.5">
                      {study.tags.slice(0, 4).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[11px] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                      {study.tags.length > 4 && (
                        <span className="px-2 py-0.5 text-slate-400 text-[11px] font-medium">
                          +{study.tags.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Card Footer Actions */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                        Read Case Study <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </span>

                      {study.liveUrl && (
                        <a
                          href={study.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 text-[11px] font-bold text-teal-800 hover:text-teal-900 bg-teal-50 hover:bg-teal-100 px-2.5 py-1 rounded-full border border-teal-200 transition-colors"
                        >
                          Live Demo <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </section>

        {/* Enterprise Legacy Track Record Section */}
        <section className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white space-y-8">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest block">
              Enterprise Track Record
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              15+ Years of Designing & Engineering at Scale
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              From Indonesia's largest media portals to top-tier financial ecosystems and modern AI-augmented PWA prototypes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-slate-800">
            <div className="space-y-1">
              <span className="text-xs font-bold text-teal-400 font-mono">detik.com</span>
              <h4 className="text-sm font-bold text-white">Digital Media Pioneer</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Front-end prototyping & interface design for high-traffic microsites and internal CMS.
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold text-teal-400 font-mono">Kompas Gramedia</span>
              <h4 className="text-sm font-bold text-white">Automotive Media Portals</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                UI/UX and HTML/CSS architecture for otomotifnet.com and corporate digital campaigns.
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold text-teal-400 font-mono">Bank BSI</span>
              <h4 className="text-sm font-bold text-white">B2B Financial Platforms</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Complex workflow interfaces for SME Business Value Chain and Go-UMKM financing.
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold text-teal-400 font-mono">Ivosights</span>
              <h4 className="text-sm font-bold text-white">Enterprise CRM & Analytics</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Omni-channel customer command centers, sentiment analysis, and operational dashboards.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom Consultation CTA */}
        <section className="p-8 sm:p-12 rounded-3xl bg-teal-50 border border-teal-200/80 text-center space-y-6 max-w-3xl mx-auto">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Ready to Accelerate Your Product's Development?
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto">
              Skip static mockups and handoff friction. Get interactive code prototypes, enterprise design systems, and developer-ready front-end architectures.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setIsContactOpen(true)}
              className="px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-colors cursor-pointer"
            >
              Get in Touch
            </button>
            <a
              href="/resume"
              className="px-6 py-3 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 font-bold text-xs shadow-2xs transition-colors"
            >
              View Full Resume
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-slate-200 bg-white py-8 px-6 md:px-12 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} The Rapid UI — Irwan Dharmawan. All rights reserved.</p>
      </footer>

      {/* Interactive Modals */}
      <CaseStudyModal
        study={activeStudy}
        onClose={() => setActiveStudy(null)}
        onContactClick={() => setIsContactOpen(true)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
};

export default Portfolio;
