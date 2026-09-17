import React from 'react';
import { 
  ShieldCheck, 
  HeartHandshake, 
  Clock, 
  Building2, 
  Award, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Star,
  CheckCircle2
} from 'lucide-react';
import { PageId } from '../types';
import { BRAND_INFO, FOUNDER_QUOTE, TESTIMONIALS } from '../data/siteData';

interface AboutViewProps {
  onNavigate: (page: PageId) => void;
  onOpenCashOffer: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onNavigate,
  onOpenCashOffer
}) => {
  return (
    <div className="space-y-16 py-8">
      {/* 1. Header Banner */}
      <section className="text-center max-w-4xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 mb-3">
          <Award className="w-3.5 h-3.5 text-sky-600" />
          <span>Real Estate, Personal • On Your Side, Every Step</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 font-serif-luxury tracking-tight">
          Meet Paulson Eliancy & Eliancy Real Estate
        </h1>
        <p className="text-slate-600 text-base sm:text-lg mt-3 max-w-2xl mx-auto leading-relaxed">
          Learn about our commitment to helping distressed homeowners across New York find real, sustainable property solutions.
        </p>
      </section>

      {/* 2. Founder Story Section with photo & quote */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 text-center">
            <div className="relative inline-block">
              <img
                src="/images/WhatsApp-Image-2026-08-12-at-1.42.42-AM.jpeg"
                alt="Paulson Eliancy"
                className="w-64 h-64 sm:w-72 sm:h-72 rounded-2xl object-cover mx-auto shadow-2xl border-4 border-sky-100"
              />
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-sky-600 text-white font-bold text-xs px-4 py-1 rounded-full whitespace-nowrap shadow-md">
                Paulson Eliancy
              </div>
            </div>
            <div className="mt-6 space-y-1">
              <div className="text-base font-bold text-slate-900">Paulson Eliancy</div>
              <div className="text-xs text-sky-700 font-semibold">
                Licensed NY Real Estate Agent & Active Investor
              </div>
              <div className="text-xs text-slate-500">
                Babylon & Long Island, New York
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="border-l-4 border-sky-600 pl-4 sm:pl-6 py-2">
              <p className="text-base sm:text-lg italic font-serif-luxury text-slate-800 leading-relaxed">
                "{FOUNDER_QUOTE.text}"
              </p>
              <div className="text-xs font-bold text-sky-700 mt-2">
                — {FOUNDER_QUOTE.author}, {FOUNDER_QUOTE.credentials}
              </div>
            </div>

            <div className="text-xs sm:text-sm text-slate-600 space-y-3 leading-relaxed">
              <p>
                Paulson Eliancy has personally bought, renovated, and rented properties across New York — giving him firsthand insight into what homeowners are going through. Whether it's foreclosure, an inherited property, costly deferred repairs, or simply needing to sell fast, Paulson brings both agent-level market knowledge and investor-level flexibility to every conversation.
              </p>
              <p>
                Outside of real estate, you will usually find Paulson on the golf course or enjoying good music and spending time in the local Long Island community.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                id="about-call-paulson-direct"
                href={`tel:${BRAND_INFO.phoneClean}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow-md transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Paulson: {BRAND_INFO.phone}</span>
              </a>
              <button
                id="about-request-offer-btn"
                onClick={onOpenCashOffer}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold text-xs transition-colors"
              >
                <span>Request Cash Offer</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-900 text-white p-8 rounded-2xl border border-slate-800 space-y-4">
            <span className="text-xs font-bold tracking-widest text-sky-400 uppercase">
              Our Mission
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif-luxury text-white">
              To be the most trusted resource for New York homeowners facing difficult property or financial situations.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We eliminate the shame, stress, and confusion of distressed real estate by providing honest, upfront guidance and concrete, actionable options.
            </p>
          </div>

          <div className="bg-sky-900 text-white p-8 rounded-2xl border border-sky-800 space-y-4">
            <span className="text-xs font-bold tracking-widest text-amber-300 uppercase">
              Our Vision
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif-luxury text-white">
              To offer fast, fair, and flexible real estate solutions — combining agent expertise with investor resources to solve problems traditional sales can't.
            </h3>
            <p className="text-xs sm:text-sm text-sky-100 leading-relaxed">
              Every home and family has a distinct set of circumstances. By having both licensed agent fiduciary credentials and active private capital, we unlock multiple paths to success.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-slate-900">
            Our Guiding Commitments
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            How we conduct business with every New York homeowner who calls us.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
            <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Straight Answers</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              No misleading valuations or false promises. We give you realistic numbers based on real market data.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
            <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Zero Pressure</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              You are never forced or pressured to accept our offer. You choose what works best for your family.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
            <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Speed & Certainty</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              When we make an offer, we stand behind it with verified private capital — no financing contingencies.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
            <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Full Discretion</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              We respect your privacy. No open houses, no lawn signs unless you explicitly request a traditional listing.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Direct Consultation CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold font-serif-luxury text-slate-900">
            Have Questions for Paulson Directly?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Reach out by phone, email, or schedule a free 15-minute consultation. We're happy to review your situation without any sales pitches.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              id="about-cta-call"
              href={`tel:${BRAND_INFO.phoneClean}`}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow-md"
            >
              Call {BRAND_INFO.phone}
            </a>
            <button
              id="about-cta-consult"
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-white font-semibold text-xs"
            >
              Book a Consultation Online
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
