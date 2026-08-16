import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Copy, Check, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.person.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
        onClose();
      }, 3000);
    }, 1500);
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
            className="fixed inset-x-4 top-[10%] bottom-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl bg-white md:rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col border border-slate-200"
          >
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <h2 className="text-xl font-semibold text-slate-900">Let's Connect</h2>
              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-lg font-medium text-slate-900 mb-2">Reach Out</h3>
                  <p className="text-slate-500 mb-8 text-sm leading-relaxed">
                    Interested in collaborating or have a question? I'm currently open to new opportunities and exciting projects.
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 block">Direct Email</span>
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-slate-50 text-slate-600 rounded-xl border border-slate-100">
                          <Mail className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-slate-900 font-medium">{PORTFOLIO_DATA.person.email}</p>
                          <button 
                            onClick={handleCopyEmail}
                            className="text-sm text-slate-500 hover:text-accent-teal transition-colors flex items-center gap-1 mt-1 group"
                          >
                            {copied ? <Check className="w-3.5 h-3.5 text-accent-teal" /> : <Copy className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />}
                            {copied ? 'Copied to clipboard!' : 'Copy email address'}
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 block">Socials</span>
                      <div className="flex gap-4">
                        <a 
                          href={PORTFOLIO_DATA.person.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-3 bg-slate-50 text-slate-600 hover:text-accent-teal hover:bg-accent-teal/5 rounded-xl border border-slate-100 transition-all hover:scale-105"
                        >
                          <LinkedinIcon className="w-5 h-5" />
                        </a>
                        <a 
                          href={PORTFOLIO_DATA.person.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-3 bg-slate-50 text-slate-600 hover:text-accent-teal hover:bg-accent-teal/5 rounded-xl border border-slate-100 transition-all hover:scale-105"
                        >
                          <GithubIcon className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  {isSubmitted ? (
                    <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-8">
                      <div className="w-16 h-16 bg-accent-teal/10 text-accent-teal rounded-full flex items-center justify-center mb-2">
                        <Check className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-medium text-slate-900">Message Sent!</h3>
                      <p className="text-slate-500 text-sm">
                        Thanks for reaching out. I'll get back to you as soon as possible.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                        <input
                          type="text"
                          id="name"
                          required
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent-teal/20 focus:border-accent-teal transition-all text-slate-900"
                          placeholder="Jane Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                        <input
                          type="email"
                          id="email"
                          required
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent-teal/20 focus:border-accent-teal transition-all text-slate-900"
                          placeholder="jane@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                        <textarea
                          id="message"
                          required
                          rows={4}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent-teal/20 focus:border-accent-teal transition-all text-slate-900 resize-none"
                          placeholder="How can we work together?"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            Send Message
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
