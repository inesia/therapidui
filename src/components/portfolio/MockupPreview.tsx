import React from 'react';
import { ExternalLink, Layers, Sparkles, Monitor, Smartphone } from 'lucide-react';
import type { CaseStudy } from '../../data/portfolioCaseStudies';

interface MockupPreviewProps {
  study: CaseStudy;
  className?: string;
  isDetailedView?: boolean;
}

export const MockupPreview: React.FC<MockupPreviewProps> = ({ study, className = '' }) => {
  // If the user has provided a real image path
  if (study.image && study.image.trim() !== '') {
    return (
      <div className={`relative w-full overflow-hidden rounded-2xl border border-slate-200/90 shadow-sm group bg-slate-100 ${className}`}>
        <img
          src={study.image}
          alt={study.title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
        />
        {study.liveUrl && (
          <a
            href={study.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5 hover:bg-slate-900 transition-colors shadow-sm"
          >
            Live Prototype <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    );
  }

  // Beautiful, high-end styled UI Mockup Placeholder
  const isMobileApp = study.category === 'Mobile & PWA';

  return (
    <div className={`relative w-full rounded-2xl border ${study.mockupAccent.border} bg-gradient-to-br ${study.mockupAccent.from} ${study.mockupAccent.to} p-4 sm:p-6 overflow-hidden flex flex-col justify-between ${className}`}>
      {/* Background Subtle Watermark Pattern */}
      <div className="absolute -right-8 -bottom-8 w-48 h-48 rounded-full bg-white/40 blur-2xl pointer-events-none" />

      {/* Browser / Device Chrome Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200/60 mb-4 z-10">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
          <span className="text-[11px] font-mono text-slate-500 ml-2 font-medium truncate max-w-[200px]">
            {study.liveUrl ? study.liveUrl.replace('https://', '') : `${study.id}.ui-spec`}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {isMobileApp ? (
            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-white/80 text-amber-800 border border-amber-200/60 flex items-center gap-1">
              <Smartphone className="w-3 h-3" /> PWA Mobile UI
            </span>
          ) : (
            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-white/80 text-teal-800 border border-teal-200/60 flex items-center gap-1">
              <Monitor className="w-3 h-3" /> Web App UI
            </span>
          )}
        </div>
      </div>

      {/* Visual Mockup Interface Wireframe / High-End Skeleton */}
      <div className="bg-white/95 backdrop-blur-sm rounded-xl border border-slate-200/80 p-4 sm:p-5 shadow-xs space-y-3.5 my-auto z-10 transition-transform duration-300 group-hover:translate-y-[-2px]">
        {/* Top App Bar inside Mockup */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
          <div className="flex items-center gap-2">
            <div className={`w-3.5 h-3.5 rounded-md ${study.mockupAccent.from} flex items-center justify-center`}>
              <Layers className="w-2.5 h-2.5 text-slate-700" />
            </div>
            <span className="text-xs font-bold text-slate-800 tracking-tight">
              {study.title.split('—')[0].trim()}
            </span>
          </div>
          <span className="text-[10px] font-mono font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-100">
            Active Prototype
          </span>
        </div>

        {/* Dynamic Skeleton Content based on type */}
        {study.id === 'lsp-iai' && (
          <div className="space-y-2.5">
            <div className="grid grid-cols-4 gap-1.5 text-[10px] font-medium text-center">
              <div className="p-1.5 rounded bg-teal-50 text-teal-800 font-bold border border-teal-200">1. Apply</div>
              <div className="p-1.5 rounded bg-slate-100 text-slate-700 font-bold">2. Verify</div>
              <div className="p-1.5 rounded bg-slate-50 text-slate-400">3. Exam</div>
              <div className="p-1.5 rounded bg-slate-50 text-slate-400">4. Certify</div>
            </div>
            <div className="h-12 rounded-lg bg-slate-50 border border-slate-100 p-2 flex items-center justify-between">
              <div className="space-y-1">
                <div className="w-24 h-2 rounded bg-slate-200" />
                <div className="w-16 h-1.5 rounded bg-slate-200/60" />
              </div>
              <div className="px-2 py-1 rounded bg-teal-600 text-white text-[10px] font-bold">Validate</div>
            </div>
          </div>
        )}

        {study.id === 'investihub' && (
          <div className="space-y-2.5">
            <div className="flex justify-between items-end">
              <div>
                <span className="text-[10px] text-slate-400 block">Total Portfolio</span>
                <span className="text-base font-extrabold font-mono text-slate-900">$845,912.45</span>
              </div>
              <span className="text-[11px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                +14.85% (1Y)
              </span>
            </div>
            {/* Sparkline simulation */}
            <div className="h-10 rounded bg-slate-50 border border-slate-100 flex items-end px-2 py-1 gap-1">
              {[30, 45, 40, 60, 55, 75, 70, 90, 85, 100].map((val, i) => (
                <div
                  key={i}
                  className="flex-1 bg-teal-500/80 rounded-t hover:bg-teal-600 transition-colors"
                  style={{ height: `${val}%` }}
                />
              ))}
            </div>
          </div>
        )}

        {study.id === 'y-warrior' && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[11px]">
              <span className="font-bold text-slate-800">Chest & Triceps Day</span>
              <span className="font-mono text-amber-700 font-bold">Set 3 / 4</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                <span className="text-[9px] text-slate-400 block">Weight</span>
                <span className="text-sm font-extrabold font-mono text-slate-800">85.0 KG</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                <span className="text-[9px] text-slate-400 block">Target Reps</span>
                <span className="text-sm font-extrabold font-mono text-slate-800">10 REPS</span>
              </div>
            </div>
          </div>
        )}

        {study.id === 'mofish-auctions' && (
          <div className="space-y-2">
            <div className="flex justify-between items-center text-[10px]">
              <span className="font-bold text-rose-600 animate-pulse">● CLOSING IN 02:45</span>
              <span className="text-slate-500 font-medium">Lot #104 — Kohaku 55cm</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[9px] text-slate-400 block">Current Leader</span>
                <span className="text-xs font-bold text-slate-800">Rp 4.500.000</span>
              </div>
              <div className="px-2.5 py-1 rounded-md bg-slate-900 text-white text-[10px] font-bold">
                Bid +100k
              </div>
            </div>
          </div>
        )}

        {study.id === 'ivosights-crm' && (
          <div className="space-y-2">
            <div className="flex justify-between items-center text-[10px]">
              <span className="font-semibold text-slate-700">Omni-Channel Inbox</span>
              <span className="text-purple-700 bg-purple-50 px-2 py-0.5 rounded font-semibold">98.4% SLA</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5 text-center">
              <div className="p-1.5 rounded bg-emerald-50 text-emerald-800 text-[10px] font-bold">Positive 68%</div>
              <div className="p-1.5 rounded bg-slate-100 text-slate-700 text-[10px] font-bold">Neutral 24%</div>
              <div className="p-1.5 rounded bg-rose-50 text-rose-800 text-[10px] font-bold">Escalate 8%</div>
            </div>
          </div>
        )}

        {study.id === 'bsi-b2b' && (
          <div className="space-y-2">
            <div className="flex justify-between items-center text-[10px]">
              <span className="font-semibold text-slate-700">B2B Value Chain Finance</span>
              <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold">Akad Musyarakah</span>
            </div>
            <div className="p-2 rounded bg-slate-50 border border-slate-100 text-[10px] flex justify-between items-center">
              <span className="font-mono text-slate-600">PO-2026-BSI-889</span>
              <span className="font-bold text-emerald-700">Verified & Approved</span>
            </div>
          </div>
        )}

        {study.id === 'promedia-ecosystem' && (
          <div className="space-y-2">
            <div className="flex justify-between items-center text-[10px]">
              <span className="font-semibold text-slate-700">Publisher Design System</span>
              <span className="text-rose-700 bg-rose-50 px-2 py-0.5 rounded font-semibold">1,000+ Portals</span>
            </div>
            <div className="h-9 rounded bg-slate-50 border border-slate-100 flex items-center px-3 gap-2">
              <div className="w-10 h-2 bg-slate-300 rounded" />
              <div className="flex-1 h-1.5 bg-slate-200 rounded" />
            </div>
          </div>
        )}
      </div>

      {/* Footer Placeholder Note & Action Link */}
      <div className="pt-3 flex items-center justify-between text-xs z-10">
        <div className="flex items-center gap-1.5 text-slate-400 font-medium">
          <Sparkles className="w-3.5 h-3.5 text-teal-600" />
          <span className="text-[11px]">Interactive Prototype Visual</span>
        </div>

        {study.liveUrl && (
          <a
            href={study.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-700 hover:text-slate-900 bg-white/90 hover:bg-white px-2.5 py-1 rounded-full border border-slate-200/90 shadow-xs transition-colors"
          >
            Launch Demo <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  );
};
