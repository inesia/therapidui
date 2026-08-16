import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Briefcase, GraduationCap, CheckCircle, Code, LayoutDashboard } from 'lucide-react';
import { resumeEn } from '../data/resumeContent';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handleDownload = () => {
    const content = `${resumeEn.name}
${resumeEn.headline}
Location: ${resumeEn.locationInfo}

${resumeEn.professionalSummaryTitle}:
${resumeEn.professionalSummaryParagraphs.join('\n')}

${resumeEn.experienceTitle}:
${resumeEn.experiences.map(e => `
- ${e.title} | ${e.company} (${e.date})
  ${e.location}
  ${e.bullets.join('\n  ')}
`).join('\n')}
`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Irwan_Dharmawan_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
          className="relative w-full max-w-4xl bg-white rounded-3xl border border-slate-200 shadow-soft-hover overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-6 sm:p-8 bg-slate-50/80 border-b border-slate-200/80 flex items-start justify-between shrink-0">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-bold text-lg">
                ID
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                  {resumeEn.name}
                </h3>
                <p className="text-sm font-semibold text-teal-800 mt-0.5">
                  {resumeEn.headline}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  {resumeEn.locationInfo}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
            {/* Download CTA Bar */}
            <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-200/60 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-teal-900 block">Verified Resume Document</span>
                <span className="text-[11px] text-teal-700">Available for download</span>
              </div>
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-all shadow-xs cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                {resumeEn.downloadPdf}
              </button>
            </div>

            {/* Summary */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                {resumeEn.professionalSummaryTitle}
              </h4>
              <div className="space-y-3">
                {resumeEn.professionalSummaryParagraphs.map((p, idx) => (
                  <p key={idx} className="text-sm text-slate-600 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            {/* Core Expertise & Tools */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                 <div className="flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
                  <LayoutDashboard className="w-4 h-4 text-teal-600" />
                  {resumeEn.coreExpertiseTitle}
                </div>
                <div className="space-y-3">
                  {resumeEn.coreExpertiseGroups.map((group, idx) => (
                    <div key={idx}>
                      <span className="text-xs font-bold text-slate-900 block mb-1">{group.title}</span>
                      <p className="text-xs text-slate-600 leading-relaxed">{group.items}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
                  <Code className="w-4 h-4 text-teal-600" />
                  {resumeEn.toolsTitle}
                </div>
                <div className="space-y-3">
                  <div>
                    <span className="text-xs font-bold text-slate-900 block mb-1">{resumeEn.toolsPrimaryLabel}</span>
                    <p className="text-xs text-slate-600 leading-relaxed">{resumeEn.toolsPrimaryItems}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block mb-1">{resumeEn.toolsWorkflowLabel}</span>
                    <p className="text-xs text-slate-600 leading-relaxed">{resumeEn.toolsWorkflowItems}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block mb-1">{resumeEn.toolsFamiliarityLabel}</span>
                    <p className="text-xs text-slate-600 leading-relaxed italic">{resumeEn.toolsFamiliarityItems}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Timeline */}
            <div>
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-wider mb-6">
                <Briefcase className="w-4 h-4 text-teal-600" />
                {resumeEn.experienceTitle}
              </div>

              <div className="space-y-8 border-l-2 border-slate-100 ml-2 pl-6">
                {resumeEn.experiences.map((exp, idx) => (
                  <div key={idx} className="relative group">
                    <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-slate-900 group-hover:bg-teal-600 transition-colors" />
                    
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                      <h4 className="text-base font-bold text-slate-900">
                        {exp.title}
                      </h4>
                      <span className="text-xs font-mono font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                        {exp.date}
                      </span>
                    </div>

                    <div className="text-xs font-semibold text-slate-500 mb-2">
                      {exp.company && <>{exp.company} • </>}{exp.location}
                    </div>

                    {exp.note && (
                      <p className="text-xs text-slate-500 italic mb-3">
                        {exp.note}
                      </p>
                    )}

                    {exp.bullets.length > 0 && (
                      <div className="space-y-2 mb-4">
                        {exp.bullets.map((h, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-sm text-slate-600">
                            <CheckCircle className="w-3.5 h-3.5 text-teal-600 mt-0.5 shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {exp.subProjects && exp.subProjects.length > 0 && (
                      <div className="space-y-4 mt-4">
                        {exp.subProjects.map((sp, spIdx) => (
                          <div key={spIdx} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                            <h5 className="text-sm font-bold text-slate-900 mb-1">{sp.title}</h5>
                            {sp.subtitle && <p className="text-xs text-slate-500 italic mb-2">{sp.subtitle}</p>}
                            <div className="space-y-1.5">
                              {sp.bullets.map((sb, sbIdx) => (
                                <div key={sbIdx} className="flex items-start gap-2 text-xs text-slate-600">
                                  <span className="w-1 h-1 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                                  <span>{sb}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
                <GraduationCap className="w-4 h-4 text-teal-600" />
                {resumeEn.educationTitle}
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                <div>
                  <h5 className="text-sm font-bold text-slate-900">{resumeEn.educationDegree}</h5>
                  <span className="text-xs text-slate-500">{resumeEn.educationSchool}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
            <span className="text-xs text-slate-500">
              Contact: irwan1010@gmail.com
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full border border-slate-200 bg-white text-slate-700 text-xs font-semibold hover:bg-slate-50 cursor-pointer"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
