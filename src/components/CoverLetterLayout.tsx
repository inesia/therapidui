import React from 'react';
import type { ResumeData } from '../data/resumeContent';

interface CoverLetterLayoutProps {
  data: ResumeData;
  letterContent: string[];
}

export const CoverLetterLayout: React.FC<CoverLetterLayoutProps> = ({ data, letterContent }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-100 py-8 print:p-0 print:m-0 print:bg-white flex justify-center text-slate-900 print:text-black font-sans">
      
      {/* Floating Download Button */}
      <button
        onClick={handlePrint}
        className="fixed bottom-8 right-8 bg-slate-900 text-white px-5 py-3 rounded-full shadow-lg hover:bg-slate-800 transition-colors print:hidden flex items-center justify-center gap-2 group z-50 font-medium"
        aria-label="Download Cover Letter"
      >
        <span>Download PDF</span>
      </button>

      {/* Document */}
      <div className="max-w-[850px] w-full bg-white shadow-2xl print:shadow-none px-12 py-12 print:p-0 print:m-0 mx-4 print:mx-0 text-[11pt] leading-[1.6] print:max-w-full min-h-[1100px] print:min-h-0">
        
        {/* Global Print Styles */}
        <style dangerouslySetInnerHTML={{__html: `
          @media print {
            @page {
              size: A4;
              margin: 20mm 20mm 20mm 20mm;
            }
            body {
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
          }
        `}} />

        {/* HEADER - MATCHES RESUME */}
        <header className="mb-8 border-b-2 border-slate-900 print:border-black pb-4 text-center">
          <h1 className="text-[20pt] font-bold mb-1 tracking-tight text-black uppercase">{data.name}</h1>
          <h2 className="text-[10.5pt] font-semibold text-slate-700 print:text-black mb-2">{data.headline}</h2>
          <div className="text-[9pt] text-slate-600 print:text-black">
            <p className="mb-1">{data.locationInfo}</p>
            <p className="flex flex-wrap justify-center gap-x-3 gap-y-1">
              <a href="mailto:irwan1010@gmail.com" className="hover:underline text-black">irwan1010@gmail.com</a> |
              <span>+62 878 7311 6901</span> |
              <a href="https://therapidui.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:underline text-black">therapidui.netlify.app</a> |
              <a href="https://linkedin.com/in/irwandharmawan" target="_blank" rel="noopener noreferrer" className="hover:underline text-black">linkedin.com/in/irwandharmawan</a> |
              <a href="https://github.com/inesia" target="_blank" rel="noopener noreferrer" className="hover:underline text-black">github.com/inesia</a>
            </p>
          </div>
        </header>

        {/* LETTER CONTENT */}
        <main className="space-y-4 text-justify text-slate-800 print:text-black mt-10">
          <p className="mb-6 font-semibold">Dear Hiring Team,</p>
          
          {letterContent.map((paragraph, idx) => (
            <p key={idx} className="mb-4">{paragraph}</p>
          ))}

          <div className="mt-10 pt-4">
            <p className="mb-1">Kind regards,</p>
            <p className="font-bold text-[12pt] text-black mt-6">{data.name}</p>
            <p className="text-slate-600 print:text-black">Bogor, Indonesia</p>
          </div>
        </main>
      </div>
    </div>
  );
};
