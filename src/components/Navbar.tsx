import { useState, useEffect } from 'react';
import { FileText, Mail, Menu, X } from 'lucide-react';


interface NavbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export function Navbar({ onOpenResume, onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled ? 'glass-nav-light py-3.5 shadow-soft' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group text-left flex items-center gap-2.5 focus:outline-none cursor-pointer"
        >
          <img src="/logo.png" alt="The Rapid UI logo" className="w-8 h-8 rounded-lg object-contain shadow-sm group-hover:opacity-90 transition-opacity" />
          <div>
            <span className="font-bold text-slate-900 text-base tracking-tight block leading-none">
              The Rapid UI
            </span>
            <span className="text-[11px] text-slate-500 font-medium tracking-wide block mt-0.5">
              Lead UI/UX Engineer
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a 
            href="/portfolio"
            className="text-teal-800 font-bold hover:text-teal-950 transition-colors cursor-pointer flex items-center gap-1.5"
          >
            Portfolio
            <span className="text-[10px] font-bold px-1.5 py-0.5 bg-teal-50 text-teal-700 rounded-full border border-teal-200">New</span>
          </a>
          <button 
            onClick={() => scrollToSection('about')}
            className="hover:text-slate-900 transition-colors cursor-pointer"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('tech-stack')}
            className="hover:text-slate-900 transition-colors cursor-pointer"
          >
            Tech Stack
          </button>
          <button 
            onClick={() => scrollToSection('featured-work')}
            className="hover:text-slate-900 transition-colors cursor-pointer"
          >
            Featured Work
          </button>
          <button 
            onClick={() => scrollToSection('principles')}
            className="hover:text-slate-900 transition-colors cursor-pointer"
          >
            Principles
          </button>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-slate-500" />
            Resume
          </button>
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-1.5 px-4.5 py-2 text-xs font-semibold rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-sm hover:shadow-md cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5" />
            Contact
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-slate-200 px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top-4 duration-200">
          <a 
            href="/portfolio"
            className="block w-full text-left py-2 font-bold text-teal-800 hover:text-teal-950"
          >
            Portfolio & Case Studies ✨
          </a>
          <button 
            onClick={() => scrollToSection('about')}
            className="block w-full text-left py-2 font-medium text-slate-700 hover:text-slate-900"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('tech-stack')}
            className="block w-full text-left py-2 font-medium text-slate-700 hover:text-slate-900"
          >
            Tech Stack
          </button>
          <button 
            onClick={() => scrollToSection('featured-work')}
            className="block w-full text-left py-2 font-medium text-slate-700 hover:text-slate-900"
          >
            Featured Work
          </button>
          <button 
            onClick={() => scrollToSection('principles')}
            className="block w-full text-left py-2 font-medium text-slate-700 hover:text-slate-900"
          >
            Principles
          </button>
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl border border-slate-200 text-slate-800 bg-white"
            >
              <FileText className="w-4 h-4 text-slate-500" />
              View Resume
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl bg-slate-900 text-white"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
