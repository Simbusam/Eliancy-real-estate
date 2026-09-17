import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Shield, 
  Clock, 
  DollarSign, 
  Home, 
  AlertTriangle, 
  FileText, 
  Compass, 
  Users, 
  Star, 
  Phone, 
  MapPin, 
  Sparkles,
  ChevronRight,
  HelpCircle,
  Building,
  KeyRound,
  Hammer
} from 'lucide-react';
import { PageId } from '../types';
import { 
  BRAND_INFO, 
  FOUNDER_QUOTE, 
  TESTIMONIALS, 
  SITUATIONS, 
  PORTFOLIO, 
  FAQS 
} from '../data/siteData';
import { NetProceedsCalculator } from './NetProceedsCalculator';

interface HomeViewProps {
  onNavigate: (page: PageId) => void;
  onOpenCashOfferWithAddress: (address: string) => void;
  onOpenSellerGuide: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenCashOfferWithAddress,
  onOpenSellerGuide
}) => {
  const [heroAddress, setHeroAddress] = useState('');
  const [selectedSituation, setSelectedSituation] = useState<string>('foreclosure');

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenCashOfferWithAddress(heroAddress);
  };

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. HERO SECTION */}
      <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
        {/* Subtle Ambient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50/70 via-white to-slate-50 pointer-events-none -z-10" />
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 border border-sky-200/80 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-sky-600 animate-pulse" />
                <span>Licensed Real Estate Agent & Active Investor • New York</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-serif-luxury leading-[1.15]">
                A Clearer, Calmer Way <br />
                <span className="text-sky-700">to Sell Your Property.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Licensed agents and active investors helping New York & Long Island homeowners find the right property solution. Sell 100% as-is on your timeline — with zero repairs, zero fees, and zero commissions.
              </p>

              {/* Conversion Hero Form */}
              <div className="bg-white p-3 sm:p-4 rounded-2xl shadow-xl border border-slate-200/90 max-w-xl mx-auto lg:mx-0">
                <form onSubmit={handleHeroSubmit} className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-1">
                    <MapPin className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      id="hero-property-address-input"
                      type="text"
                      required
                      placeholder="Enter your NY property address..."
                      value={heroAddress}
                      onChange={(e) => setHeroAddress(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    />
                  </div>
                  <button
                    id="hero-get-offer-submit-btn"
                    type="submit"
                    className="py-3 px-6 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-sky-600/25 transition-all shrink-0 active:scale-[0.98]"
                  >
                    <span>Get My Cash Offer</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>

                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1.5 mt-3 text-[11px] text-slate-500 font-medium">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    100% Free Consultation
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Zero Obligation
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Close in 7–14 Days
                  </span>
                </div>
              </div>

              {/* Emergency Hotline Alert */}
              <div className="pt-2 flex items-center justify-center lg:justify-start gap-3 text-xs text-slate-600">
                <span className="text-slate-500">Need urgent advice on foreclosure or probate?</span>
                <a
                  id="hero-call-direct-link"
                  href={`tel:${BRAND_INFO.phoneClean}`}
                  className="font-bold text-sky-700 hover:text-sky-800 underline flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Paulson: {BRAND_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Hero Image Card (5 Cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-4/3 group">
                <img
                  src="/images/wooden-house-roof-attics-1.webp"
                  alt="New York Property Solutions"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Floating Highlights on Image */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500 text-slate-950 text-[11px] font-bold uppercase tracking-wider mb-1.5">
                    <Sparkles className="w-3 h-3" />
                    <span>Real NY Property Solutions</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold font-serif-luxury">
                    "We Are Long Island"
                  </h4>
                  <p className="text-xs text-slate-200 mt-0.5">
                    Whether listing traditional on MLS or private cash buyout, we craft a solution built around your situation.
                  </p>
                </div>
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -left-4 sm:left-4 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3.5 max-w-xs">
                <div className="w-11 h-11 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <DollarSign className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Commissions & Fees</div>
                  <div className="text-lg font-bold text-slate-900">$0 on Cash Offers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS & CREDENTIALS BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-800">
          {BRAND_INFO.stats.map((stat, idx) => (
            <div key={idx} className="text-center p-3 border-r last:border-r-0 border-slate-800">
              <div className="text-2xl sm:text-4xl font-extrabold text-sky-400 font-mono tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WHO WE ARE & DUAL ADVANTAGE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-4/3">
              <img
                src="/images/real-estate-agent-giving.webp"
                alt="Eliancy Real Estate Consultation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-950/20" />
            </div>

            {/* Founder Badge */}
            <div className="absolute -bottom-6 right-4 sm:right-8 bg-white p-4 rounded-xl shadow-xl border border-slate-200 flex items-center gap-3">
              <img
                src="/images/WhatsApp-Image-2026-08-12-at-1.42.42-AM.jpeg"
                alt="Paulson Eliancy"
                className="w-12 h-12 rounded-full object-cover border-2 border-sky-600"
              />
              <div>
                <div className="text-sm font-bold text-slate-900">Paulson Eliancy</div>
                <div className="text-xs text-sky-700 font-medium">Founder & Licensed Agent</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800">
              <Shield className="w-3.5 h-3.5 text-sky-600" />
              <span>Who We Are</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 font-serif-luxury tracking-tight">
              A Licensed Agent & Active Investor on Your Side
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              LENC Real Estate Asset Management offers consultations with a licensed real estate agent and active investor who understands both sides of every deal. Whether you need a fast cash offer, help listing your home, or a creative financing solution, we work directly with you to find the right solution for your property.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="font-bold text-slate-900 flex items-center gap-2 text-sm">
                  <DollarSign className="w-4 h-4 text-emerald-600" />
                  <span>The Investor Advantage</span>
                </div>
                <p className="text-xs text-slate-600">
                  Direct cash purchase, no mortgage underwriting delays, sell 100% as-is, and close in as few as 7 days.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="font-bold text-slate-900 flex items-center gap-2 text-sm">
                  <Building className="w-4 h-4 text-sky-600" />
                  <span>The Licensed Agent Standard</span>
                </div>
                <p className="text-xs text-slate-600">
                  Fiduciary loyalty, deep Long Island market valuation analysis, and the ability to list on MLS for top retail dollar.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                id="who-we-are-learn-more"
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 font-semibold text-slate-800 hover:bg-slate-50 text-sm transition-colors"
              >
                <span>Read Paulson's Story</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                id="who-we-are-book-consult"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 font-semibold text-white text-sm transition-colors shadow-sm"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW WE CAN HELP (4 Core Paths) */}
      <section className="bg-slate-100/70 py-16 sm:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white text-sky-700 border border-slate-200 mb-3 shadow-2xs">
              <span>Tailored Solutions</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 font-serif-luxury tracking-tight">
              How We Can Help
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Whatever your situation, there's a solution built around it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-sky-300 hover:shadow-md transition-all">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center font-bold">
                  <Home className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-serif-luxury">Sell Your Home</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Traditional sale with professional guidance. List your home the right way on the MLS to qualified retail buyers at the best possible market price.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  id="path-card-traditional"
                  onClick={() => onNavigate('contact')}
                  className="text-xs font-bold text-sky-700 hover:text-sky-800 flex items-center gap-1"
                >
                  <span>List with Paulson</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 2 - Cash Offer */}
            <div className="bg-sky-900 text-white rounded-xl p-6 border border-sky-800 shadow-md flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-2 right-2 bg-amber-400 text-slate-950 font-bold text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-sm">
                Most Popular
              </div>
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-sky-800 text-amber-300 flex items-center justify-center font-bold">
                  <DollarSign className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white font-serif-luxury">Get a Cash Offer</h3>
                <p className="text-xs text-sky-100 leading-relaxed">
                  Sell your property without waiting for a traditional buyer. No appraisals, no bank financing contingencies, and close on your chosen schedule.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-sky-800">
                <button
                  id="path-card-cash-offer"
                  onClick={() => onOpenCashOfferWithAddress('')}
                  className="text-xs font-bold text-amber-300 hover:text-amber-200 flex items-center gap-1"
                >
                  <span>Get My Cash Offer</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 3 - Financing */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-sky-300 hover:shadow-md transition-all">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
                  <KeyRound className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-serif-luxury">Explore Financing Options</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Find a creative financing solution that fits your situation. Subject-to existing mortgages, seller financing, or debt relief structures.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  id="path-card-financing"
                  onClick={() => onNavigate('contact')}
                  className="text-xs font-bold text-sky-700 hover:text-sky-800 flex items-center gap-1"
                >
                  <span>Request a Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 4 - As-Is */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-sky-300 hover:shadow-md transition-all">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                  <Hammer className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-serif-luxury">Sell Your Property As-Is</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  No need to worry about repairs or preparing your property for sale. Leave broken furniture, roof issues, or clutter behind. We handle the rest.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  id="path-card-as-is"
                  onClick={() => onNavigate('sell-your-house')}
                  className="text-xs font-bold text-sky-700 hover:text-sky-800 flex items-center gap-1"
                >
                  <span>Sell As-Is Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROPERTY SITUATIONS WE SOLVE (Enhanced from original site) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 border border-amber-200 mb-2">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
            <span>Problem Property Specialists</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 font-serif-luxury tracking-tight">
            Need a Solution for Your Property?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Whatever's bringing you here, you're not alone — we work with Long Island and New York homeowners in situations just like yours every week.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SITUATIONS.map((sit) => (
            <div
              key={sit.id}
              className="bg-white p-6 rounded-xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                  {sit.badge}
                </span>
                <span className="text-xs text-sky-700 font-bold">New York</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-serif-luxury">
                {sit.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {sit.description}
              </p>
              <div className="pt-2 border-t border-slate-100 text-xs font-medium text-emerald-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>{sit.solution}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            id="situations-book-consult-btn"
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold shadow-md transition-colors"
          >
            <span>Request a Free, Confidential Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 6. HOW IT WORKS: 3 SIMPLE STEPS */}
      <section className="bg-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold font-serif-luxury tracking-tight">
              How It Works
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2">
              We keep it simple — from your first message to closing day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 relative flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-sky-500/20 border border-sky-400/40 text-sky-400 flex items-center justify-center font-mono font-extrabold text-xl">
                  1
                </div>
                <h3 className="text-lg font-bold font-serif-luxury">
                  Tell Us About Your Property
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Share a few details about your home and situation, no pressure, no obligation. You can submit our quick online form or speak directly with Paulson.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-700/60 text-[11px] text-sky-300">
                Takes less than 2 minutes • 100% confidential
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 relative flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-sky-500/20 border border-sky-400/40 text-sky-400 flex items-center justify-center font-mono font-extrabold text-xl">
                  2
                </div>
                <h3 className="text-lg font-bold font-serif-luxury">
                  Get Your Cash Offer
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We evaluate your property and present a fair, market-based offer. Paulson explains every calculation clearly so you know exactly where you stand.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-700/60 text-[11px] text-sky-300">
                Within 24-48 hours • No lowball pressure
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 relative flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-sky-500/20 border border-sky-400/40 text-sky-400 flex items-center justify-center font-mono font-extrabold text-xl">
                  3
                </div>
                <h3 className="text-lg font-bold font-serif-luxury">
                  Close On Your Timeline
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  You pick the date. We handle all closing paperwork through a licensed New York title company, pay standard closing costs, and wire your funds.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-700/60 text-[11px] text-sky-300">
                Close in as few as 7 days or take up to 60 days
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <button
              id="steps-start-btn"
              onClick={() => onOpenCashOfferWithAddress('')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm shadow-lg shadow-sky-500/20 transition-all"
            >
              <span>Start Step 1: Request Your Free Offer</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. INTERACTIVE NET PROCEEDS CALCULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NetProceedsCalculator onOpenCashOffer={() => onOpenCashOfferWithAddress('')} />
      </section>

      {/* 8. REAL NY PROPERTIES & RENOVATION PORTFOLIO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 mb-2">
              <Building className="w-3.5 h-3.5 text-sky-700" />
              <span>Proven Track Record</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 font-serif-luxury tracking-tight">
              Recent Success Stories
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1">
              Real properties Paulson has personally bought, renovated, and rented across New York.
            </p>
          </div>

          <button
            id="portfolio-view-how-it-works-btn"
            onClick={() => onNavigate('how-it-works')}
            className="text-xs font-bold text-sky-700 hover:text-sky-800 flex items-center gap-1"
          >
            <span>See full process details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col group"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-0.5 rounded-sm">
                  {item.category}
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-sky-600" />
                    <span>{item.location}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mt-1 font-serif-luxury">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-3">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 text-[11px] font-semibold text-sky-700">
                  {item.stats}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. VERIFIED NY TESTIMONIALS */}
      <section className="bg-slate-50 py-16 sm:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1 text-amber-500 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 font-serif-luxury tracking-tight">
              Client Testimonials
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1">
              Read how New York homeowners transitioned from stressful properties to fresh starts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <div className="text-xs font-bold text-slate-900">{t.name}</div>
                    <div className="text-[11px] text-slate-500">{t.location}</div>
                    <div className="text-[10px] text-sky-700 font-medium">{t.situation}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FOUNDER SPOTLIGHT: MEET PAULSON ELIANCY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 text-center">
              <div className="relative inline-block">
                <img
                  src="/images/WhatsApp-Image-2026-08-12-at-1.42.42-AM.jpeg"
                  alt="Paulson Eliancy"
                  className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl object-cover mx-auto border-4 border-sky-500/40 shadow-xl"
                />
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-sky-500 text-slate-950 font-bold text-xs px-3 py-1 rounded-full whitespace-nowrap shadow-md">
                  Paulson Eliancy
                </div>
              </div>
              <div className="mt-5 text-xs text-sky-300 font-medium">
                Licensed Real Estate Agent & Active Investor
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/20 text-sky-300 border border-sky-500/30">
                <span>Meet Paulson</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-white">
                "Whatever your situation, I'll give you a straight answer and a fair offer."
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {FOUNDER_QUOTE.text}
              </p>
              <p className="text-slate-400 text-xs leading-relaxed">
                Paulson Eliancy has personally bought, renovated, and rented properties across New York — giving him firsthand insight into what homeowners are going through. Outside of real estate, you can usually find him on the golf course or enjoying good music with family.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <a
                  id="founder-call-btn"
                  href={`tel:${BRAND_INFO.phoneClean}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Paulson Directly: {BRAND_INFO.phone}</span>
                </a>
                <button
                  id="founder-guide-btn"
                  onClick={onOpenSellerGuide}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-800 text-xs font-medium"
                >
                  <FileText className="w-4 h-4 text-amber-400" />
                  <span>Download Free NY Homeowner Guide</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. TOP FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif-luxury">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Common questions about selling fast, as-is conditions, and our cash process.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.slice(0, 4).map((faq) => (
            <div key={faq.id} className="bg-white p-5 rounded-xl border border-slate-200/90 shadow-2xs">
              <h3 className="font-bold text-slate-900 text-sm font-serif-luxury flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-sky-600 shrink-0" />
                <span>{faq.question}</span>
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed pl-6">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button
            id="home-view-all-faqs"
            onClick={() => onNavigate('how-it-works')}
            className="text-xs font-bold text-sky-700 hover:text-sky-800 inline-flex items-center gap-1"
          >
            <span>View all questions & comprehensive comparison table</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>
    </div>
  );
};
