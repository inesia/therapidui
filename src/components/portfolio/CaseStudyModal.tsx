import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ExternalLink, CheckCircle2, Copy, Check, Sparkles, 
  Layers, Layout, Cpu, Trophy, Clock, User
} from 'lucide-react';
import type { CaseStudy } from '../../data/portfolioCaseStudies';
import { MockupPreview } from './MockupPreview';

interface CaseStudyModalProps {
  study: CaseStudy | null;
  onClose: () => void;
  onContactClick: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ study, onClose, onContactClick }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'ux' | 'architecture' | 'outcomes'>('overview');
  const [copied, setCopied] = useState(false);

  if (!study) return null;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(study.architecture.codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-4xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden z-10 my-6 max-h-[92vh] flex flex-col"
        >
          {/* Top Bar Header */}
          <div className="p-6 sm:p-8 bg-slate-50 border-b border-slate-200/90 relative">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-bold">
                    {study.category}
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-medium flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" /> {study.timeline}
                  </span>
                  <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                    <User className="w-3 h-3 text-slate-400" /> {study.role}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {study.title}
                </h2>
                <p className="text-sm text-slate-600 font-medium">
                  {study.client}
                </p>
              </div>

              <button
                onClick={onClose}
                className="p-2.5 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-200/80 transition-colors shrink-0 cursor-pointer"
                aria-label="Close case study"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Live Prototype Quick Launch Button */}
            {study.liveUrl && (
              <div className="mt-4 pt-4 border-t border-slate-200/60 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs text-teal-800 font-semibold">
                  <span className="inline-block w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                  Live functional prototype deployed & accessible:
                </div>
                <a
                  href={study.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold transition-all shadow-sm hover:shadow"
                >
                  Open Live Application <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>

          {/* Tab Navigation */}
          <div className="px-6 sm:px-8 border-b border-slate-200 bg-white flex items-center justify-between overflow-x-auto">
            <div className="flex gap-2 sm:gap-6 shrink-0">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-3.5 text-xs sm:text-sm font-bold border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'overview'
                    ? 'border-slate-900 text-slate-900'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <Layout className="w-4 h-4" /> Overview & Mockup
              </button>

              <button
                onClick={() => setActiveTab('ux')}
                className={`py-3.5 text-xs sm:text-sm font-bold border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'ux'
                    ? 'border-slate-900 text-slate-900'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <Layers className="w-4 h-4" /> UX Strategy & Process
              </button>

              <button
                onClick={() => setActiveTab('architecture')}
                className={`py-3.5 text-xs sm:text-sm font-bold border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'architecture'
                    ? 'border-slate-900 text-slate-900'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <Cpu className="w-4 h-4" /> Architecture & Spec
              </button>

              <button
                onClick={() => setActiveTab('outcomes')}
                className={`py-3.5 text-xs sm:text-sm font-bold border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'outcomes'
                    ? 'border-slate-900 text-slate-900'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <Trophy className="w-4 h-4" /> Outcomes & Impact
              </button>
            </div>
          </div>

          {/* Scrollable Content Body */}
          <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-8 text-slate-800">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Visual Mockup Section */}
                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                    Interface Visual & Wireframe Preview
                  </h3>
                  <MockupPreview study={study} isDetailedView={true} className="min-h-[280px]" />
                </div>

                {/* Key Metrics Grid */}
                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                    Key Performance Indicators
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {study.metrics.map((metric, i) => (
                      <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90">
                        <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tracking-tight block">
                          {metric.value}
                        </span>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs font-semibold text-slate-600">{metric.label}</span>
                          {metric.change && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-50 text-teal-800 border border-teal-100">
                              {metric.change}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Executive Summary */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Executive Summary
                  </h3>
                  <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
                    {study.executiveSummary}
                  </p>
                </div>

                {/* Problem Statement & Client Context */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                      Client Background
                    </span>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {study.clientContext}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-rose-600 uppercase tracking-wider block">
                      The Core Problem
                    </span>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {study.problemStatement}
                    </p>
                  </div>
                </div>

                {/* Key Challenges */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Critical Product & UI Challenges
                  </h3>
                  <div className="space-y-2.5">
                    {study.keyChallenges.map((challenge, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                        <div className="w-5 h-5 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          !
                        </div>
                        <p className="text-sm text-slate-700 leading-normal">{challenge}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'ux' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                    Design Strategy & Prototyping Philosophy
                  </h3>
                  <p className="text-base text-slate-700 leading-relaxed font-medium">
                    {study.uxStrategy.approach}
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Step-by-Step Execution Journey
                  </h3>
                  <div className="space-y-4">
                    {study.uxStrategy.steps.map((step, sIdx) => (
                      <div key={sIdx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                        <h4 className="text-base font-bold text-slate-900 tracking-tight">
                          {step.title}
                        </h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                    Applied UI/UX Disciplines
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((t, idx) => (
                      <span key={idx} className="px-3 py-1.5 rounded-lg bg-teal-50 border border-teal-100 text-teal-800 text-xs font-semibold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'architecture' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                    Front-End Architecture Overview
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {study.architecture.overview}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                    Core Technical Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {study.architecture.stack.map((tech, tIdx) => (
                      <span key={tIdx} className="px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-mono font-semibold">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Living Code Spec Box */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500 font-mono">
                      Living Component Spec Implementation
                    </span>
                    <button
                      onClick={handleCopyCode}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-teal-600" /> : <Copy className="w-3.5 h-3.5" />}
                      {copied ? 'Copied to Clipboard!' : 'Copy Code'}
                    </button>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-950 text-slate-100 font-mono text-xs overflow-x-auto leading-relaxed border border-slate-800 shadow-inner">
                    <pre>{study.architecture.codeSnippet}</pre>
                  </div>

                  <p className="text-xs text-slate-500 italic">
                    Note: {study.architecture.codeExplanation}
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'outcomes' && (
              <div className="space-y-8">
                {/* Tangible Business Outcomes */}
                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                    Measurable Business Outcomes
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {study.outcomes.map((item, oIdx) => (
                      <div key={oIdx} className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200/60 space-y-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block">
                          {item.metric}
                        </span>
                        <p className="text-sm font-medium text-slate-800 leading-snug">
                          {item.impact}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Deliverables */}
                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                    Delivered Artifacts & Prototypes
                  </h3>
                  <div className="space-y-2.5">
                    {study.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                        <span className="text-sm text-slate-700 font-medium">{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Consultation Callout */}
                <div className="p-6 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="space-y-1 text-center sm:text-left">
                    <h4 className="text-lg font-bold">Need a similar solution for your product?</h4>
                    <p className="text-xs text-slate-400">
                      Let's collaborate to build high-speed functional prototypes and scalable UI systems.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      onClose();
                      onContactClick();
                    }}
                    className="px-5 py-2.5 rounded-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs transition-colors shadow-md shrink-0 cursor-pointer"
                  >
                    Start a Conversation
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Footer Bar */}
          <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <Sparkles className="w-4 h-4 text-teal-600" />
              <span>The Rapid UI — Case Study Architecture</span>
            </div>

            <div className="flex items-center gap-3">
              {study.liveUrl && (
                <a
                  href={study.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full border border-slate-300 bg-white text-slate-800 text-xs font-bold hover:bg-slate-100 transition-colors flex items-center gap-1.5"
                >
                  Visit Staging <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-full bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors shadow-xs cursor-pointer"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
