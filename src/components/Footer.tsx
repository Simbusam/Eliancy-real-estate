import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle2, Shield, HeartHandshake } from 'lucide-react';
import { PageId } from '../types';
import { BRAND_INFO } from '../data/siteData';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenCashOffer: () => void;
  onOpenSellerGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenCashOffer,
  onOpenSellerGuide
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes('@')) return;
    setNewsletterSubscribed(true);
    setNewsletterEmail('');
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top CTA Banner in Footer */}
        <div className="bg-gradient-to-r from-sky-900 to-slate-900 rounded-2xl p-8 sm:p-10 mb-16 border border-sky-800/40 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/20 text-sky-300 border border-sky-400/30 mb-3">
                <Shield className="w-3.5 h-3.5 text-sky-400" />
                <span>Zero Obligations • 100% Confidential</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif-luxury tracking-tight mb-2">
                Need a Fair Cash Offer on Your Home?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Connect directly with Paulson Eliancy. We evaluate any condition, handle all paperwork, and guarantee a seamless closing on your preferred date.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <a
                id="footer-call-cta-btn"
                href={`tel:${BRAND_INFO.phoneClean}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-700 bg-slate-900/80 hover:bg-slate-800 font-semibold text-white transition-all shadow-md text-sm"
              >
                <Phone className="w-4 h-4 text-sky-400" />
                <span>{BRAND_INFO.phone}</span>
              </a>

              <button
                id="footer-cash-offer-cta-btn"
                onClick={onOpenCashOffer}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 font-bold text-slate-950 transition-all shadow-lg shadow-sky-500/25 text-sm"
              >
                <span>Request Free Cash Offer</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80 text-sm">
          {/* Col 1 & 2: Brand Info & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/eliancy-footer-logo.png"
                alt="Eliancy Real Estate"
                className="h-10 w-auto object-contain brightness-110"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div>
                <span className="text-lg font-bold text-white tracking-tight block">
                  Eliancy Real Estate
                </span>
                <span className="text-xs text-sky-400 font-medium">
                  We Are Long Island
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              LENC Real Estate Asset Management offers consultations with licensed real estate agent and active investor Paulson Eliancy. We provide tailored solutions whether you need a fast cash buyout or full MLS retail marketing.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Licensed Real Estate Agent & Active Investor</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Serving Suffolk, Nassau & Greater New York State</span>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 font-mono">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  id="footer-nav-home"
                  onClick={() => {
                    onNavigate('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-slate-400 hover:text-sky-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-how-it-works"
                  onClick={() => {
                    onNavigate('how-it-works');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-slate-400 hover:text-sky-400 transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-sell"
                  onClick={() => {
                    onNavigate('sell-your-house');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-slate-400 hover:text-sky-400 transition-colors"
                >
                  Sell Your House As-Is
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-about"
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-slate-400 hover:text-sky-400 transition-colors"
                >
                  About Paulson Eliancy
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-contact"
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-slate-400 hover:text-sky-400 transition-colors"
                >
                  Contact & Consultation
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-guide"
                  onClick={onOpenSellerGuide}
                  className="text-amber-400 hover:text-amber-300 font-medium transition-colors inline-flex items-center gap-1"
                >
                  <span>Free Homeowner Guide</span>
                  <span className="text-[10px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded-sm">PDF</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office Info */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 font-mono">
              Contact & Hours
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-1" />
                <span className="text-slate-300">
                  Babylon, NY 11702<br />
                  <span className="text-xs text-slate-400">Serving Long Island & All of NY</span>
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a
                  id="footer-phone-direct"
                  href={`tel:${BRAND_INFO.phoneClean}`}
                  className="text-slate-200 hover:text-sky-400 font-medium"
                >
                  {BRAND_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a
                  id="footer-email-direct"
                  href={`mailto:${BRAND_INFO.email}`}
                  className="text-slate-300 hover:text-sky-400 break-all"
                >
                  {BRAND_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{BRAND_INFO.hours}</span>
              </li>
            </ul>
          </div>

          {/* Col 5: Newsletter / Updates */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 font-mono">
              Market Updates
            </h4>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              Get weekly New York real estate market insights, distressed property trends, and foreclosure prevention guides.
            </p>

            {newsletterSubscribed ? (
              <div className="p-3 bg-emerald-950/60 border border-emerald-800 rounded-lg text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>You're subscribed to Eliancy Real Estate updates!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <input
                  id="footer-newsletter-email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-sky-500 transition-colors"
                />
                <button
                  id="footer-newsletter-submit"
                  type="submit"
                  className="w-full py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-xs font-semibold transition-colors"
                >
                  Subscribe to Updates
                </button>
              </form>
            )}

            <div className="mt-4 flex items-center gap-3">
              <a
                id="footer-facebook-link"
                href={BRAND_INFO.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors text-xs font-bold"
                aria-label="Facebook"
              >
                FB
              </a>
              <a
                id="footer-instagram-link"
                href={BRAND_INFO.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors text-xs font-bold"
                aria-label="Instagram"
              >
                IG
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimers and Copyright */}
        <div className="pt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col gap-1 text-xs text-slate-400 text-center md:text-left">
            <p>© {new Date().getFullYear()} Eliancy Real Estate. All rights reserved. LENC Real Estate Asset Management.</p>
            <p>Designed and Developed by <a href="https://zyrotechs.com" target="_blank" rel="noreferrer" className="text-sky-400 hover:text-sky-300 transition-colors">ZyroTechs.com</a></p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
            <span>Equal Housing Opportunity</span>
            <span>•</span>
            <span>Licensed Real Estate Agent & Investor</span>
            <span>•</span>
            <span>Suffolk & Nassau County, NY</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
