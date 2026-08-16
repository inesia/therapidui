import React from 'react';
import type { ResumeData } from '../data/resumeContent';

interface ResumeLayoutProps {
  data: ResumeData;
}

export const ResumeLayout: React.FC<ResumeLayoutProps> = ({ data }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-100 py-8 print:p-0 print:m-0 print:bg-white flex justify-center text-slate-900 print:text-black font-sans">
      
      {/* Floating Download Button */}
      <button
        onClick={handlePrint}
        className="fixed bottom-8 right-8 bg-slate-900 text-white px-5 py-3 rounded-full shadow-lg hover:bg-slate-800 transition-colors print:hidden flex items-center justify-center gap-2 group z-50 font-medium"
        aria-label={data.downloadPdf}
      >
        <span>{data.downloadPdf}</span>
      </button>

      {/* Resume Document */}
      <div className="max-w-[850px] w-full bg-white shadow-2xl print:shadow-none px-12 py-12 print:p-0 print:m-0 mx-4 print:mx-0 text-[10pt] leading-[1.4] print:max-w-full">
        
        {/* Global Print Styles */}
        <style dangerouslySetInnerHTML={{__html: `
          @media print {
            @page {
              size: A4;
              margin: 12mm 14mm 14mm 14mm;
            }
            body {
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            .avoid-break {
              break-inside: avoid;
              page-break-inside: avoid;
            }
          }
        `}} />

        {/* HEADER */}
        <header className="mb-5 border-b-2 border-slate-900 print:border-black pb-4 text-center avoid-break">
          <h1 className="text-[20pt] font-bold mb-1 tracking-tight text-black uppercase">{data.name}</h1>
          <h2 className="text-[10.5pt] font-semibold text-slate-700 print:text-black mb-2">{data.headline}</h2>
          <div className="text-[9pt] text-slate-600 print:text-black">
            <p className="mb-1">{data.locationInfo}</p>
            <p className="flex flex-wrap justify-center gap-x-3 gap-y-1">
              <a href="mailto:irwan1010@gmail.com" className="hover:underline text-black">irwan1010@gmail.com</a> |
              <span>+62 878 7311 6901</span> |
              <a href="https://rapidui.dev/" target="_blank" rel="noopener noreferrer" className="hover:underline text-black">rapidui.dev</a> |
              <a href="https://linkedin.com/in/irwandharmawan" target="_blank" rel="noopener noreferrer" className="hover:underline text-black">linkedin.com/in/irwandharmawan</a> |
              <a href="https://github.com/inesia" target="_blank" rel="noopener noreferrer" className="hover:underline text-black">github.com/inesia</a>
            </p>
          </div>
        </header>

        <main className="space-y-4">
          
          {/* PROFESSIONAL SUMMARY */}
          <section className="avoid-break">
            <h2 className="text-[11pt] font-bold uppercase border-b border-slate-300 print:border-gray-400 pb-1 mb-2 tracking-wide text-black">{data.professionalSummaryTitle}</h2>
            <div className="space-y-2 text-justify">
              {data.professionalSummaryParagraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </section>

          {/* CORE EXPERTISE */}
          <section className="avoid-break">
            <h2 className="text-[11pt] font-bold uppercase border-b border-slate-300 print:border-gray-400 pb-1 mb-2 tracking-wide text-black">{data.coreExpertiseTitle}</h2>
            <div className="space-y-1.5">
              {data.coreExpertiseGroups.map((group, idx) => (
                <p key={idx}><strong className="text-black">{group.title}:</strong> {group.items}</p>
              ))}
            </div>
          </section>

          {/* TOOLS & WORKING TECHNOLOGIES */}
          <section className="avoid-break">
            <h2 className="text-[11pt] font-bold uppercase border-b border-slate-300 print:border-gray-400 pb-1 mb-2 tracking-wide text-black">{data.toolsTitle}</h2>
            <div className="space-y-1.5">
              <p><strong className="text-black">{data.toolsPrimaryLabel}:</strong> {data.toolsPrimaryItems}</p>
              <p><strong className="text-black">{data.toolsWorkflowLabel}:</strong> {data.toolsWorkflowItems}</p>
              <p className="text-[9.5pt] text-slate-700 print:text-black italic"><strong className="text-black not-italic font-semibold">{data.toolsFamiliarityLabel}:</strong> {data.toolsFamiliarityItems}</p>
            </div>
          </section>

          {/* PROFESSIONAL EXPERIENCE */}
          <section>
            <h2 className="text-[11pt] font-bold uppercase border-b border-slate-300 print:border-gray-400 pb-1 mb-3 tracking-wide text-black">{data.experienceTitle}</h2>
            
            <div className="space-y-5">
              {data.experiences.map((exp, idx) => (
                <div key={idx} className="avoid-break">
                  <div className="flex justify-between items-baseline mb-0.5">
                    <h3 className="text-[10.5pt] font-bold text-black">{exp.title} {exp.company && <span className="font-normal text-slate-700 print:text-black">| {exp.company}</span>}</h3>
                    <span className="text-[9.5pt] font-medium text-black">{exp.date}</span>
                  </div>
                  <div className="text-[9.5pt] text-slate-600 print:text-black mb-2">{exp.location}</div>
                  
                  {exp.note && (
                    <p className="italic text-[9.5pt] text-slate-700 print:text-black mb-2">{exp.note}</p>
                  )}

                  {exp.bullets.length > 0 && (
                    <ul className="list-disc pl-5 space-y-1">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx}>{bullet}</li>
                      ))}
                    </ul>
                  )}

                  {exp.subProjects && exp.subProjects.length > 0 && (
                    <div className="space-y-3">
                      {exp.subProjects.map((sp, spIdx) => (
                        <div key={spIdx}>
                          <h4 className="font-semibold text-black text-[10pt]">{sp.title}</h4>
                          {sp.subtitle && <p className="text-[9.5pt] text-slate-600 print:text-black italic mb-1">{sp.subtitle}</p>}
                          <ul className="list-disc pl-5 space-y-1 mt-1">
                            {sp.bullets.map((bullet, bIdx) => (
                              <li key={bIdx}>{bullet}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* SELECTED CURRENT PROJECTS */}
          <section className="avoid-break">
            <h2 className="text-[11pt] font-bold uppercase border-b border-slate-300 print:border-gray-400 pb-1 mb-3 tracking-wide text-black mt-2">{data.projectsTitle}</h2>
            <div className="space-y-4">
              
              {data.projects.map((proj, idx) => (
                <div key={idx} className="avoid-break">
                  <h3 className="font-bold text-[10.5pt] text-black">{proj.title}</h3>
                  <p className="text-[9.5pt] text-slate-600 print:text-black italic mb-1">{proj.subtitle}</p>
                  <p className="text-[9.5pt] mb-1"><strong className="text-black">{proj.prototypeLabel}:</strong> <a href={proj.prototypeUrl} target="_blank" rel="noopener noreferrer" className="hover:underline text-black">{proj.prototypeDisplay}</a></p>
                  <ul className="list-disc pl-5 space-y-1">
                    {proj.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}

            </div>
          </section>

          {/* PRODUCT & PROTOTYPING CAPABILITIES */}
          <section className="avoid-break">
            <h2 className="text-[11pt] font-bold uppercase border-b border-slate-300 print:border-gray-400 pb-1 mb-2 tracking-wide text-black mt-2">{data.capabilitiesTitle}</h2>
            <ul className="list-disc pl-5 space-y-1">
              {data.capabilitiesBullets.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
          </section>

          {/* EDUCATION */}
          <section className="avoid-break">
            <h2 className="text-[11pt] font-bold uppercase border-b border-slate-300 print:border-gray-400 pb-1 mb-2 tracking-wide text-black mt-2">{data.educationTitle}</h2>
            <div className="flex justify-between items-baseline">
              <span className="font-bold text-[10pt] text-black">{data.educationDegree}</span>
            </div>
            <div className="text-[9.5pt] text-black">{data.educationSchool}</div>
          </section>

        </main>
      </div>
    </div>
  );
};
