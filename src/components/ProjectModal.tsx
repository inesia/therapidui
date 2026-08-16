import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Copy, Check } from 'lucide-react';
import type { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'code'>('overview');
  const [copied, setCopied] = useState(false);

  if (!project) return null;

  const copyCode = () => {
    navigator.clipboard.writeText(project.specCodeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-3xl bg-white rounded-3xl border border-slate-200 shadow-soft-hover overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-6 sm:p-8 bg-slate-50/80 border-b border-slate-200/80 flex items-start justify-between">
            <div>
              <span className="px-3 py-1 rounded-full bg-teal-50 border border-teal-200/60 text-teal-800 text-xs font-semibold inline-block mb-3">
                {project.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                {project.title}
              </h3>
              <p className="text-sm text-slate-500 font-medium mt-1">
                {project.subtitle}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Bar inside Modal */}
          <div className="px-6 border-b border-slate-200/80 flex items-center justify-between bg-white">
            <div className="flex gap-6">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-3 text-sm font-semibold border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'overview'
                    ? 'border-slate-900 text-slate-900'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                Case Overview
              </button>
              <button
                onClick={() => setActiveTab('code')}
                className={`py-3 text-sm font-semibold border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'code'
                    ? 'border-slate-900 text-slate-900'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                Code Architecture Snippet
              </button>
            </div>

            <span className="hidden sm:inline-block text-xs text-slate-400 font-mono">
              Tailwind v4 • React 19
            </span>
          </div>

          {/* Content Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
            {activeTab === 'overview' ? (
              <>
                {/* Metrics Highlight Row */}
                <div className="grid grid-cols-3 gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="text-center sm:text-left">
                      <span className="block text-2xl font-extrabold text-slate-900 tracking-tight">
                        {m.value}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Detailed Description */}
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Executive Summary
                  </h4>
                  <p className="text-slate-700 leading-relaxed text-base">
                    {project.fullDescription}
                  </p>
                </div>

                {/* Key Features List */}
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Architectural & UX Deliverables
                  </h4>
                  <div className="space-y-3">
                    {project.keyFeatures.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Badges */}
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Technologies Employed
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((t, idx) => (
                      <span key={idx} className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500 font-mono">
                    Living Component Implementation
                  </span>
                  <button
                    onClick={copyCode}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-teal-600" /> : <Copy className="w-3.5 h-3.5" />}
                    {copied ? 'Copied!' : 'Copy Code'}
                  </button>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto leading-relaxed border border-slate-800 shadow-inner">
                  <pre>{project.specCodeSnippet}</pre>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600">
                  <span className="font-bold text-slate-900 block mb-1">Architecture Note:</span>
                  {project.architectureOverview}
                </div>
              </div>
            )}
          </div>

          {/* Footer Action */}
          <div className="p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
            <span className="text-xs text-slate-500 font-medium">
              Irwan Dharmawan — Portfolio Spec
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors shadow-sm cursor-pointer"
            >
              Close Window
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
