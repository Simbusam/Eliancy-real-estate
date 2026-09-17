import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Building2, 
  DollarSign, 
  Hammer, 
  Sparkles, 
  MapPin, 
  Phone, 
  AlertOctagon,
  Trash2,
  Brush,
  FileText
} from 'lucide-react';
import { PageId } from '../types';
import { BRAND_INFO, SITUATIONS } from '../data/siteData';

interface SellHouseViewProps {
  onNavigate: (page: PageId) => void;
  onOpenCashOffer: () => void;
}

export const SellHouseView: React.FC<SellHouseViewProps> = ({
  onNavigate,
  onOpenCashOffer
}) => {
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [situation, setSituation] = useState('Facing Foreclosure');
  const [condition, setCondition] = useState('Needs Major Repairs');
  const [submitted, setSubmitted] = useState(false);

  const handleInlineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!address.trim() || !phone.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 py-8">
      {/* 1. Header Banner */}
      <section className="text-center max-w-4xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 mb-3">
          <MapPin className="w-3.5 h-3.5 text-sky-600" />
          <span>Suffolk & Nassau County, Long Island NY</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 font-serif-luxury tracking-tight">
          Sell Your House As-Is, Fast
        </h1>
        <p className="text-slate-600 text-base sm:text-lg mt-3 max-w-2xl mx-auto leading-relaxed">
          Facing foreclosure, managing an inherited estate, behind on payments, or just need a fast exit? Get a guaranteed cash offer — any condition, any timeline.
        </p>
      </section>

      {/* 2. Key Features & Benefits Grid (Exact content from original site) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <DollarSign className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-serif-luxury">No Fees or Commissions</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Keep more of what your home is worth — we don't charge realtor commissions or hidden transaction fees on direct cash buyouts.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
              <Hammer className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-serif-luxury">Any Condition Accepted</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Damaged, outdated, fire/water impacted, or vacant — we buy houses exactly as they sit today. Zero prep work needed.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-serif-luxury">Flexible Timeline</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Need to close in 7 days to stop an auction? Or need 60 days to relocate? You dictate the closing date that works best.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-serif-luxury">Direct Communication</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Work directly with Paulson Eliancy. No call centers, no middlemen, and no waiting for third-party buyer approvals.
            </p>
          </div>
        </div>
      </section>

      {/* 3. What Selling As-Is Truly Means */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 to-sky-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                100% Zero Seller Burden
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-serif-luxury text-white">
                What Selling "As-Is" Truly Means with Eliancy
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                When retail buyers say "as-is", they still hire inspectors and demand tens of thousands in price cuts before closing. When Eliancy Real Estate buys as-is, here is what that actually guarantees:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 flex items-start gap-2.5">
                  <Trash2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span><strong>Leave What You Don't Want:</strong> Furniture, broken appliances, junk in the attic or garage. We clear it all.</span>
                </div>
                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 flex items-start gap-2.5">
                  <Brush className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span><strong>No Cleaning or Scrubbing:</strong> Don't spend a single afternoon cleaning, painting, or staging.</span>
                </div>
                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 flex items-start gap-2.5">
                  <Hammer className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span><strong>No Contractor Quotes:</strong> Roof leaks, bad plumbing, foundation issues — we budget and fix it ourselves.</span>
                </div>
                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 flex items-start gap-2.5">
                  <FileText className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span><strong>Title Resolution Handled:</strong> We work with top NY title attorneys to resolve back taxes and liens.</span>
                </div>
              </div>
            </div>

            {/* Inline Fast Offer Form (5 Cols) */}
            <div className="lg:col-span-5 bg-white text-slate-900 rounded-2xl p-6 sm:p-7 shadow-2xl border border-slate-100">
              <h3 className="text-lg font-bold font-serif-luxury text-slate-900 mb-1">
                Request Your Free As-Is Cash Offer
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                No obligation. Paulson personally reviews within 24 hours.
              </p>

              {submitted ? (
                <div className="text-center py-6 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-slate-900 text-base">Request Received!</h4>
                  <p className="text-xs text-slate-600">
                    Paulson is reviewing the comps for {address}. We will reach out to {phone} with your estimated cash offer.
                  </p>
                  <a
                    id="as-is-success-call"
                    href={`tel:${BRAND_INFO.phoneClean}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:text-sky-800 pt-2"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Paulson directly: {BRAND_INFO.phone}</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleInlineSubmit} className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-slate-700 mb-1">
                      Property Street Address *
                    </label>
                    <input
                      id="as-is-input-address"
                      type="text"
                      required
                      placeholder="e.g. 88 Park Ave, Babylon, NY"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      id="as-is-input-phone"
                      type="tel"
                      required
                      placeholder="(516) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-slate-700 mb-1">
                        Current Situation
                      </label>
                      <select
                        id="as-is-select-situation"
                        value={situation}
                        onChange={(e) => setSituation(e.target.value)}
                        className="w-full px-2 py-2 text-xs rounded-lg border border-slate-300 bg-white"
                      >
                        <option value="Facing Foreclosure">Foreclosure / Default</option>
                        <option value="Inherited Property">Inherited / Probate</option>
                        <option value="Costly Repairs Needed">Costly Repairs Needed</option>
                        <option value="Relocation / Fast Sale">Relocation / Fast Exit</option>
                        <option value="Other">Other Situation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase text-slate-700 mb-1">
                        Property Condition
                      </label>
                      <select
                        id="as-is-select-condition"
                        value={condition}
                        onChange={(e) => setCondition(e.target.value)}
                        className="w-full px-2 py-2 text-xs rounded-lg border border-slate-300 bg-white"
                      >
                        <option value="Needs Major Repairs">Major Repairs</option>
                        <option value="Needs Minor TLC">Cosmetic TLC</option>
                        <option value="Severely Damaged">Fire / Water Damage</option>
                        <option value="Good Condition">Good / Fair</option>
                      </select>
                    </div>
                  </div>

                  <button
                    id="as-is-submit-btn"
                    type="submit"
                    className="w-full py-2.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Get Free Cash Offer</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Real Visuals from Original Site: Properties We've Transformed */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-slate-900">
            Real Transformations Across Long Island
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            See how houses in distressed condition were acquired for cash and revitalized for community living.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
            <div className="aspect-4/3 overflow-hidden">
              <img
                src="/images/WhatsApp-Image-2026-08-12-at-1.48.03-AM.jpeg"
                alt="Long Island Brick Home Purchase"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 space-y-1">
              <span className="text-[10px] font-bold text-sky-700 uppercase">Suffolk County, NY</span>
              <h4 className="font-bold text-slate-900 text-sm font-serif-luxury">Brick Home Cash Exit</h4>
              <p className="text-xs text-slate-600">
                Purchased in 9 days with full cash wire. Homeowner avoided mounting debt and walked away clean.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
            <div className="aspect-4/3 overflow-hidden">
              <img
                src="/images/WhatsApp-Image-2026-08-12-at-1.48.03-AM-1.jpeg"
                alt="Suburban Long Island Renovation"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 space-y-1">
              <span className="text-[10px] font-bold text-sky-700 uppercase">Nassau County, NY</span>
              <h4 className="font-bold text-slate-900 text-sm font-serif-luxury">Full Revival & Modern Siding</h4>
              <p className="text-xs text-slate-600">
                Outdated house with deferred maintenance transformed into a high-efficiency residential asset.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
            <div className="aspect-4/3 overflow-hidden">
              <img
                src="/images/spacious-kitchen-with-dark-furniture.webp"
                alt="Renovated Interior Kitchen"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 space-y-1">
              <span className="text-[10px] font-bold text-sky-700 uppercase">Interior Modernization</span>
              <h4 className="font-bold text-slate-900 text-sm font-serif-luxury">Open Kitchen & Living Concept</h4>
              <p className="text-xs text-slate-600">
                We handle the heavy lifting, permits, and modern finishings so you never have to.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
