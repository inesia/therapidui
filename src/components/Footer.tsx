import { Mail, ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface FooterProps {
  onOpenContact: () => void;
}

export function Footer({ onOpenContact }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 px-6 md:px-12 bg-white border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand & Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-xs">
              ID
            </div>
            <span className="font-bold text-slate-900 text-base tracking-tight">
              {PORTFOLIO_DATA.person.name}
            </span>
          </div>
          <p className="text-xs text-slate-500 max-w-xs">
            Lead UI/UX Engineer specializing in Rapid Code-Based Prototyping & Design Systems.
          </p>
        </div>

        {/* Minimalist Social Links */}
        <div className="flex items-center gap-6 text-slate-600">
          <a
            href={PORTFOLIO_DATA.person.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold hover:text-slate-900 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a
            href={PORTFOLIO_DATA.person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold hover:text-slate-900 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <button
            onClick={onOpenContact}
            className="flex items-center gap-2 text-sm font-semibold hover:text-slate-900 transition-colors cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </button>
        </div>

        {/* Back to Top */}
        <div className="flex items-center gap-4">
          <span className="text-xs text-slate-400 font-mono hidden sm:inline-block">
            © {new Date().getFullYear()} Irwan Dharmawan
          </span>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-all shadow-xs"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
