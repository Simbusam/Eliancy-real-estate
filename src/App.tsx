import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { BRAND_INFO } from './data/siteData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { HowItWorksView } from './components/HowItWorksView';
import { SellHouseView } from './components/SellHouseView';
import { AboutView } from './components/AboutView';
import { ContactView } from './components/ContactView';
import { CashOfferModal } from './components/CashOfferModal';
import { SellerGuideModal } from './components/SellerGuideModal';
import { Phone, ArrowRight, Sparkles, Shield, AlertTriangle } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [cashOfferModalOpen, setCashOfferModalOpen] = useState(false);
  const [sellerGuideModalOpen, setSellerGuideModalOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState('');

  // Handle URL hash navigation if user navigates back/forward
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (['home', 'how-it-works', 'sell-your-house', 'about', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCashOfferWithAddress = (address: string) => {
    setSelectedAddress(address);
    setCashOfferModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-sky-500 selection:text-white">
      {/* Sticky Top Header */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenCashOffer={() => handleOpenCashOfferWithAddress('')}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenCashOfferWithAddress={handleOpenCashOfferWithAddress}
            onOpenSellerGuide={() => setSellerGuideModalOpen(true)}
          />
        )}

        {currentPage === 'how-it-works' && (
          <HowItWorksView
            onNavigate={handleNavigate}
            onOpenCashOffer={() => handleOpenCashOfferWithAddress('')}
          />
        )}

        {currentPage === 'sell-your-house' && (
          <SellHouseView
            onNavigate={handleNavigate}
            onOpenCashOffer={() => handleOpenCashOfferWithAddress('')}
          />
        )}

        {currentPage === 'about' && (
          <AboutView
            onNavigate={handleNavigate}
            onOpenCashOffer={() => handleOpenCashOfferWithAddress('')}
          />
        )}

        {currentPage === 'contact' && (
          <ContactView
            onNavigate={handleNavigate}
            onOpenCashOffer={() => handleOpenCashOfferWithAddress('')}
          />
        )}
      </main>

      {/* Persistent Bottom Mobile Conversion Bar */}
      <div className="sticky bottom-0 z-30 sm:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800 p-3 shadow-2xl">
        <div className="flex items-center gap-2">
          <a
            id="sticky-mobile-call"
            href={`tel:${BRAND_INFO.phoneClean}`}
            className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl border border-slate-700 bg-slate-800 text-white font-bold text-xs"
          >
            <Phone className="w-3.5 h-3.5 text-sky-400" />
            <span>Call Agent</span>
          </a>
          <button
            id="sticky-mobile-offer"
            onClick={() => handleOpenCashOfferWithAddress('')}
            className="flex-2 flex items-center justify-center gap-1.5 py-3 rounded-xl bg-sky-500 text-slate-950 font-bold text-xs shadow-md"
          >
            <span>Get Cash Offer</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Comprehensive Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenCashOffer={() => handleOpenCashOfferWithAddress('')}
        onOpenSellerGuide={() => setSellerGuideModalOpen(true)}
      />

      {/* Modals */}
      <CashOfferModal
        isOpen={cashOfferModalOpen}
        onClose={() => setCashOfferModalOpen(false)}
        initialAddress={selectedAddress}
      />

      <SellerGuideModal
        isOpen={sellerGuideModalOpen}
        onClose={() => setSellerGuideModalOpen(false)}
      />
    </div>
  );
}
