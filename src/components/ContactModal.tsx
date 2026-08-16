import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Copy, Check, MessageCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const email = "irwan1010@gmail.com";
  const phone = "+62 878 7311 6901"; 
  const phoneLink = "6287873116901";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    if (!showPhone) {
      setShowPhone(true);
      return;
    }
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/10 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-x-4 top-[10%] md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-md bg-white md:rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col border border-slate-200"
          >
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <h2 className="text-xl font-semibold text-slate-900">Let's Connect</h2>
              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 md:p-8">
              <p className="text-slate-500 mb-8 text-sm leading-relaxed text-center">
                Interested in collaborating or have a question? Reach out to me directly via Email or WhatsApp.
              </p>
              
              <div className="space-y-6">
                {/* Email Section */}
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white text-slate-600 rounded-xl shadow-sm">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-0.5">Email</span>
                      <p className="text-slate-900 font-medium text-sm">{email}</p>
                    </div>
                  </div>
                  <button 
                    onClick={handleCopyEmail}
                    className="p-2 text-slate-400 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors group cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-teal-600" /> : <Copy className="w-4 h-4 group-hover:scale-110 transition-transform" />}
                  </button>
                </div>

                {/* WhatsApp Section */}
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white text-slate-600 rounded-xl shadow-sm">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-0.5">WhatsApp</span>
                      {showPhone ? (
                        <p className="text-slate-900 font-medium text-sm">{phone}</p>
                      ) : (
                        <button onClick={() => setShowPhone(true)} className="text-sm font-medium text-teal-600 hover:underline cursor-pointer">
                          Reveal Number
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {showPhone && (
                      <a
                        href={`https://wa.me/${phoneLink}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-400 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors cursor-pointer"
                        title="Chat on WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </a>
                    )}
                    <button 
                      onClick={handleCopyPhone}
                      className="p-2 text-slate-400 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors group cursor-pointer"
                      title={showPhone ? "Copy Number" : "Reveal Number"}
                    >
                      {copiedPhone ? <Check className="w-4 h-4 text-teal-600" /> : <Copy className="w-4 h-4 group-hover:scale-110 transition-transform" />}
                    </button>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-slate-100">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 block text-center">Socials</span>
                  <div className="flex justify-center gap-4">
                    <a 
                      href={PORTFOLIO_DATA.person.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-50 text-slate-600 hover:text-teal-600 hover:bg-teal-50 rounded-xl border border-slate-100 transition-all hover:scale-105 shadow-sm cursor-pointer"
                    >
                      <LinkedinIcon className="w-5 h-5" />
                    </a>
                    <a 
                      href={PORTFOLIO_DATA.person.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-50 text-slate-600 hover:text-teal-600 hover:bg-teal-50 rounded-xl border border-slate-100 transition-all hover:scale-105 shadow-sm cursor-pointer"
                    >
                      <GithubIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
