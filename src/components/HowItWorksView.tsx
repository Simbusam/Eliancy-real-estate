import React, { useState } from 'react';
import { 
  Check, 
  X, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Building2, 
  DollarSign, 
  Phone, 
  Search, 
  FileCheck2, 
  Scale, 
  HelpCircle,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { PageId, FAQItem } from '../types';
import { BRAND_INFO, COMPARISON_DATA, FAQS, PORTFOLIO } from '../data/siteData';

interface HowItWorksViewProps {
  onNavigate: (page: PageId) => void;
  onOpenCashOffer: () => void;
}

export const HowItWorksView: React.FC<HowItWorksViewProps> = ({
  onNavigate,
  onOpenCashOffer
}) => {
  const [activeFaqTab, setActiveFaqTab] = useState<string>('All');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const faqCategories = ['All', 'Cash Offer', 'Foreclosure', 'As-Is Condition', 'Process & Fees'];

  const filteredFaqs = FAQS.filter((f) => {
    const matchesCategory = activeFaqTab === 'All' || f.category === activeFaqTab;
    const matchesQuery = searchQuery === '' || 
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      f.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="space-y-16 py-8">
      {/* 1. Header Banner */}
      <section className="text-center max-w-4xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 mb-3">
          <Clock className="w-3.5 h-3.5 text-sky-600" />
          <span>Transparent & Direct Process</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 font-serif-luxury tracking-tight">
          How It Works: From First Call to Cash in Hand
        </h1>
        <p className="text-slate-600 text-base sm:text-lg mt-3 max-w-2xl mx-auto leading-relaxed">
          Whether you choose a fast 7-day cash buyout or list with Paulson on the MLS for top dollar, we keep every step straightforward, transparent, and pressure-free.
        </p>
      </section>

      {/* 2. Three Step Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm relative space-y-4">
            <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-700 font-mono font-bold text-xl flex items-center justify-center border border-sky-100">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-serif-luxury">
              Tell Us About Your Property
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Share a few details about your property, condition, and current situation online or over the phone. No formal inspection, cleaning, or repairs are required.
            </p>
            <ul className="text-xs text-slate-500 space-y-1.5 pt-2 border-t border-slate-100">
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Quick 2-minute form or phone call</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Zero obligation, 100% confidential</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm relative space-y-4">
            <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-700 font-mono font-bold text-xl flex items-center justify-center border border-sky-100">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-serif-luxury">
              Receive a Written Fair Offer
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Paulson personally analyzes comparable sales and presents a straightforward, transparent cash offer within 24 to 48 hours. No lowball games, no hidden deduction gimmicks.
            </p>
            <ul className="text-xs text-slate-500 space-y-1.5 pt-2 border-t border-slate-100">
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Backed by verified NY public sales comps</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>$0 in realtor commissions or seller closing fees</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm relative space-y-4">
            <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-700 font-mono font-bold text-xl flex items-center justify-center border border-sky-100">
              03
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-serif-luxury">
              Close on Your Chosen Date
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Accept the offer and pick your closing date. We handle the paperwork through a licensed New York title company and wire your cash directly to your bank account.
            </p>
            <ul className="text-xs text-slate-500 space-y-1.5 pt-2 border-t border-slate-100">
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Fast close in 7-14 days or take months</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Leave behind whatever clutter you don't want</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. The Comparison Table (Original Website core asset) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
          <div className="p-6 sm:p-8 bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/20 text-sky-300 mb-2">
                <Scale className="w-3.5 h-3.5 text-sky-400" />
                <span>Side-by-Side Comparison</span>
              </div>
              <h2 className="text-2xl font-bold font-serif-luxury text-white">
                Eliancy Cash Offer vs. Traditional Real Estate Listing
              </h2>
            </div>
            <button
              id="compare-cta-offer"
              onClick={onOpenCashOffer}
              className="px-6 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 font-bold text-slate-950 text-xs shadow-md"
            >
              Get Your Cash Offer
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-700">
                  <th className="p-4 sm:p-5 font-bold uppercase tracking-wider text-xs">Factors</th>
                  <th className="p-4 sm:p-5 font-bold uppercase tracking-wider text-xs bg-sky-50 text-sky-900">
                    Selling to Eliancy Real Estate
                  </th>
                  <th className="p-4 sm:p-5 font-bold uppercase tracking-wider text-xs text-slate-500">
                    Traditional Realtor Listing
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {COMPARISON_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-slate-800">
                      {row.feature}
                    </td>
                    <td className="p-4 sm:p-5 bg-sky-50/50 font-bold text-sky-900">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{row.cashOffer}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-600">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-rose-500 shrink-0" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Complete FAQ Accordion with category tabs & search */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 font-serif-luxury">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Find answers to common questions about selling fast, as-is conditions, or navigating difficult situations.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="space-y-3 mb-6">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              id="faq-search-input"
              type="text"
              placeholder="Search questions (e.g. foreclosure, repairs, closing fees)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div className="flex flex-wrap gap-1.5">
            {faqCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFaqTab(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeFaqTab === cat
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-8 text-slate-500 text-xs">
              No questions matched your search. Contact Paulson directly at {BRAND_INFO.phone}.
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm font-serif-luxury"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 text-sky-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      <div className="pt-3">{faq.answer}</div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        <div className="mt-8 p-6 bg-sky-50 rounded-2xl border border-sky-100 text-center space-y-3">
          <h4 className="font-bold text-slate-900 text-sm font-serif-luxury">
            Have a question that wasn't answered here?
          </h4>
          <p className="text-xs text-slate-600 max-w-md mx-auto">
            Paulson Eliancy is available to speak with you directly about your specific situation.
          </p>
          <div className="flex justify-center gap-3">
            <a
              id="faq-call-paulson-btn"
              href={`tel:${BRAND_INFO.phoneClean}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-600 text-white font-bold text-xs hover:bg-sky-700 shadow-xs"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: {BRAND_INFO.phone}</span>
            </a>
            <button
              id="faq-book-consult-btn"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-300 text-slate-700 font-semibold text-xs hover:bg-white"
            >
              <span>Send a Message</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
