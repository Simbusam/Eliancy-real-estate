import React, { useState } from 'react';
import { X, Download, CheckCircle2, BookOpen, Shield, ArrowRight, FileText } from 'lucide-react';
import { BRAND_INFO } from '../data/siteData';

interface SellerGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SellerGuideModal: React.FC<SellerGuideModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setDownloaded(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200 text-slate-800">
        <div className="bg-gradient-to-r from-sky-950 to-slate-900 text-white p-6 relative">
          <button
            id="close-guide-modal"
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-sky-500/20 text-sky-300 border border-sky-400/30 mb-2">
            <BookOpen className="w-3.5 h-3.5 text-sky-400" />
            <span>Free 2026 Homeowner Resource</span>
          </div>
          <h3 className="text-xl font-bold font-serif-luxury text-white">
            The NY Homeowner's Emergency Guide:
          </h3>
          <p className="text-xs text-sky-200 mt-1">
            "How to Sell As-Is, Clear Distressed Properties, & Stop NY Foreclosure Auctions"
          </p>
        </div>

        <div className="p-6 sm:p-8">
          {downloaded ? (
            <div className="text-center py-4 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 font-serif-luxury">
                Guide Ready for Download!
              </h4>
              <p className="text-xs text-slate-600 max-w-xs mx-auto">
                We've prepared your comprehensive guide. You can review the key chapters below or download the briefing immediately.
              </p>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-left text-xs text-slate-700 space-y-2">
                <div className="font-semibold text-slate-900">Key Chapters Included:</div>
                <div className="flex items-center gap-2 text-slate-600">
                  <FileText className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Chapter 1: Understanding NY Pre-Foreclosure Timelines</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <FileText className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Chapter 2: Selling 'As-Is' vs Doing Staging & Repairs</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <FileText className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Chapter 3: Avoiding Scams & Working with Licensed Agents</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <a
                  id="guide-download-direct-btn"
                  href={`tel:${BRAND_INFO.phoneClean}`}
                  className="flex-1 py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md"
                >
                  <Download className="w-4 h-4" />
                  <span>Call Paulson For Free 1-on-1 Help</span>
                </a>
                <button
                  id="guide-close-btn"
                  onClick={onClose}
                  className="py-3 px-4 rounded-xl border border-slate-300 text-slate-700 text-xs font-medium hover:bg-slate-50"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-slate-600 leading-relaxed">
                Written by licensed NY agent and active investor Paulson Eliancy. Learn your statutory rights, mortgage relief strategies, and how to sell without fees or repairs.
              </p>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Your Full Name
                </label>
                <input
                  id="guide-input-name"
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Where should we send your guide? (Email) *
                </label>
                <input
                  id="guide-input-email"
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div className="flex items-center gap-2 text-slate-500 text-[11px]">
                <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Free • We never sell or spam your information.</span>
              </div>

              <button
                id="guide-submit-btn"
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-sky-600/25 transition-all"
              >
                <span>Instant Access to Free Guide</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
