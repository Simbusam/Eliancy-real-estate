import React, { useState } from 'react';
import { Phone, Menu, X, ArrowRight, ShieldCheck, Clock, Home as HomeIcon } from 'lucide-react';
import { PageId } from '../types';
import { BRAND_INFO } from '../data/siteData';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenCashOffer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenCashOffer
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'sell-your-house', label: 'Sell Your House As-Is' },
    { id: 'about', label: 'About Paulson' },
    { id: 'contact', label: 'Contact & Consult' }
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top Urgent Alert / Direct Access Bar */}
      <div className="bg-slate-900 text-slate-100 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              URGENT SITUATIONS
            </span>
            <span className="text-slate-300 hidden sm:inline">
              Facing Foreclosure, Inherited Estate, or Need Immediate Cash?
            </span>
            <span className="text-slate-200 font-medium sm:hidden">
              Foreclosure or Fast Sale?
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-300 text-xs">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              <span>Mon–Sat 8AM–5PM EST</span>
            </div>
            <a
              id="topbar-phone-link"
              href={`tel:${BRAND_INFO.phoneClean}`}
              className="flex items-center gap-1.5 font-semibold text-sky-400 hover:text-sky-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{BRAND_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <button
            id="nav-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-hidden"
          >
            <img
              src="/images/eliancy-seller-logo.png"
              alt="Eliancy Real Estate"
              className="h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              onError={(e) => {
                // Fallback to text if image fails
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="hidden sm:block">
              <div className="text-lg font-bold tracking-tight text-slate-900 leading-tight">
                Eliancy Real Estate
              </div>
              <div className="text-[11px] font-medium text-sky-700 tracking-wider uppercase">
                Long Island & New York
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                    isActive
                      ? 'text-sky-700 bg-sky-50 font-semibold shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="nav-call-agent-btn"
              href={`tel:${BRAND_INFO.phoneClean}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-sky-700 hover:bg-slate-100 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center text-sky-700">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-[10px] uppercase font-medium text-slate-500">Call Paulson</div>
                <div className="text-xs font-bold text-slate-900">{BRAND_INFO.phone}</div>
              </div>
            </a>

            <button
              id="nav-get-cash-offer-btn"
              onClick={onOpenCashOffer}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 shadow-md shadow-sky-600/20 active:scale-[0.98] transition-all"
            >
              <span>Get Cash Offer</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              id="mobile-cash-offer-header-btn"
              onClick={onOpenCashOffer}
              className="px-3 py-1.5 rounded-md text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700"
            >
              Cash Offer
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-hidden"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in fade-in duration-200">
          <div className="grid gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between ${
                  currentPage === item.id
                    ? 'bg-sky-50 text-sky-700 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200 space-y-3">
            <a
              id="mobile-nav-call-btn"
              href={`tel:${BRAND_INFO.phoneClean}`}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-slate-300 font-semibold text-slate-800 hover:bg-slate-50"
            >
              <Phone className="w-4 h-4 text-sky-600" />
              <span>Call Paulson: {BRAND_INFO.phone}</span>
            </a>

            <button
              id="mobile-nav-offer-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCashOffer();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-lg bg-sky-600 font-bold text-white shadow-md hover:bg-sky-700"
            >
              <span>Request Fast Cash Offer</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
