import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ArrowLeft, Shield, Clock, Phone, Sparkles, AlertCircle, Building2, MapPin } from 'lucide-react';
import { BRAND_INFO } from '../data/siteData';

interface CashOfferModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialAddress?: string;
  initialSituation?: string;
}

export const CashOfferModal: React.FC<CashOfferModalProps> = ({
  isOpen,
  onClose,
  initialAddress = '',
  initialSituation = 'Facing Foreclosure'
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [address, setAddress] = useState(initialAddress);
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [propertyType, setPropertyType] = useState('Single Family Home');
  const [condition, setCondition] = useState('Needs Minor Repairs');
  const [situation, setSituation] = useState(initialSituation);
  const [timeframe, setTimeframe] = useState('As Soon As Possible (7-14 Days)');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  if (!isOpen) return null;

  const handleNextStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!address.trim()) return;
    setStep(2);
  };

  const handleNextStep2 = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
  };

  const handleSubmitFinal = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) return;

    setIsSubmitting(true);
    
    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      const sheetUrl = import.meta.env.VITE_GOOGLE_SHEET_URL;
      
      const formData = {
        source: "Cash Offer Form",
        name: fullName,
        email: email,
        phone: phone,
        address: address + (city ? `, ${city}` : '') + (zip ? ` ${zip}` : ''),
        property_type: propertyType,
        condition: condition,
        topic: situation,
        timeline: timeframe,
        notes: notes || "No additional notes",
      };

      if (!accessKey && !sheetUrl) {
        // Fallback for development if no key is set
        console.warn("No API keys found. Simulating submission.");
        setTimeout(() => {
          const generatedRef = 'ER-' + Math.floor(100000 + Math.random() * 900000);
          setReferenceId(generatedRef);
          setIsSubmitting(false);
          setIsSubmitted(true);
        }, 1200);
        return;
      }

      let isSuccess = false;

      // 1. Send to Google Sheets if URL is configured
      if (sheetUrl) {
        try {
          const formBody = new URLSearchParams();
          Object.entries(formData).forEach(([key, value]) => {
            formBody.append(key, value);
          });
          
          await fetch(sheetUrl, {
            method: "POST",
            mode: "no-cors",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: formBody.toString(),
          });
          isSuccess = true;
        } catch (e) {
          console.error("Sheet submission error", e);
        }
      }

      // 2. Send to Web3Forms if Key is configured
      if (accessKey) {
        try {
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              access_key: accessKey,
              subject: "New Cash Offer Request - " + address,
              from_name: fullName,
              ...formData
            }),
          });
          const result = await response.json();
          if (result.success) isSuccess = true;
        } catch (e) {
          console.error("Web3Forms submission error", e);
        }
      }
      
      if (isSuccess) {
        const generatedRef = 'ER-' + Math.floor(100000 + Math.random() * 900000);
        setReferenceId(generatedRef);
        setIsSubmitted(true);
      } else {
        alert("Something went wrong! Please try calling us directly.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error sending request. Please call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-xl w-full overflow-hidden border border-slate-200 text-slate-800 my-8"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="bg-slate-900 text-white px-6 py-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-serif-luxury tracking-tight leading-snug">
                Get Your No-Obligation Cash Offer
              </h3>
              <p className="text-xs text-sky-300">
                Direct evaluation from Paulson Eliancy • Zero commissions
              </p>
            </div>
          </div>
          <button
            id="close-cash-offer-modal"
            onClick={handleResetAndClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-5 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="inline-block px-3 py-1 bg-sky-100 text-sky-800 font-mono text-xs font-semibold rounded-full mb-2">
                  Reference: #{referenceId}
                </span>
                <h4 className="text-2xl font-bold text-slate-900 font-serif-luxury">
                  Thank You, {fullName.split(' ')[0]}!
                </h4>
                <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
                  Paulson Eliancy has received your property details for <span className="font-semibold text-slate-900">{address}{city ? `, ${city}` : ''}</span>. He is running market comps and will prepare a fair, comprehensive cash offer tailored to your timeline.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left text-xs text-slate-700 space-y-2">
                <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-sky-600" />
                  <span>Next Steps:</span>
                </div>
                <p>1. Paulson personally reviews Suffolk/Nassau recorded sales & recent comps.</p>
                <p>2. We contact you via {phone} with your estimated offer and walk-through options.</p>
                <p>3. You decide if it works for you. 100% free with zero pressure to accept.</p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  id="modal-success-call-paulson"
                  href={`tel:${BRAND_INFO.phoneClean}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Paulson Now: {BRAND_INFO.phone}</span>
                </a>
                <button
                  id="modal-success-done"
                  onClick={handleResetAndClose}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-300 text-slate-700 font-medium text-sm hover:bg-slate-50"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <div>
              {/* Stepper Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
                  <span className={step >= 1 ? 'text-sky-600 font-bold' : ''}>1. Property Details</span>
                  <span className={step >= 2 ? 'text-sky-600 font-bold' : ''}>2. Condition & Goal</span>
                  <span className={step >= 3 ? 'text-sky-600 font-bold' : ''}>3. Delivery Info</span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-sky-600 transition-all duration-300"
                    style={{ width: `${(step / 3) * 100}%` }}
                  />
                </div>
              </div>

              {/* STEP 1: Property Address & Type */}
              {step === 1 && (
                <form onSubmit={handleNextStep1} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Property Street Address *
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                      <input
                        id="modal-input-address"
                        type="text"
                        required
                        placeholder="e.g. 142 Montauk Hwy, West Babylon"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        City / Town (NY)
                      </label>
                      <input
                        id="modal-input-city"
                        type="text"
                        placeholder="e.g. Babylon, Islip, Hempstead"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        ZIP Code
                      </label>
                      <input
                        id="modal-input-zip"
                        type="text"
                        placeholder="e.g. 11702"
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Property Type
                    </label>
                    <select
                      id="modal-select-property-type"
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-sky-500 bg-white"
                    >
                      <option value="Single Family Home">Single Family Home</option>
                      <option value="Multi-Family (2-4 Units)">Multi-Family (2-4 Units)</option>
                      <option value="Condo / Co-Op / Townhome">Condo / Co-Op / Townhome</option>
                      <option value="Commercial / Mixed-Use">Commercial / Mixed-Use</option>
                      <option value="Vacant Residential Land">Vacant Residential Land</option>
                    </select>
                  </div>

                  <div className="pt-3">
                    <button
                      id="modal-step1-next"
                      type="submit"
                      className="w-full py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-sky-600/20 transition-all"
                    >
                      <span>Continue to Property Condition</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}

              {/* STEP 2: Condition & Selling Situation */}
              {step === 2 && (
                <form onSubmit={handleNextStep2} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Current Property Condition
                    </label>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {[
                        { label: 'Turnkey / Good', desc: 'Move-in ready' },
                        { label: 'Needs Minor TLC', desc: 'Cosmetic updates' },
                        { label: 'Needs Major Work', desc: 'Roof/plumbing/structural' },
                        { label: 'Distressed / As-Is', desc: 'Heavy damage/vacant' }
                      ].map((item) => (
                        <button
                          key={item.label}
                          type="button"
                          onClick={() => setCondition(item.label)}
                          className={`p-3 rounded-lg border text-left transition-all ${
                            condition === item.label
                              ? 'border-sky-600 bg-sky-50 ring-1 ring-sky-600 font-semibold text-sky-900'
                              : 'border-slate-200 hover:border-slate-300 text-slate-700'
                          }`}
                        >
                          <div className="font-semibold">{item.label}</div>
                          <div className="text-[11px] text-slate-500">{item.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Primary Reason / Situation
                    </label>
                    <select
                      id="modal-select-situation"
                      value={situation}
                      onChange={(e) => setSituation(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-sky-500 bg-white"
                    >
                      <option value="Facing Foreclosure">Facing Foreclosure / Behind on Mortgage</option>
                      <option value="Inherited Property">Inherited Property / Probate Estate</option>
                      <option value="Vacant or Damaged">Vacant, Damaged, or Costly Repairs</option>
                      <option value="Relocating Quickly">Relocating Quickly / Job Transfer</option>
                      <option value="Financial Hardship / Tax Liens">Financial Hardship / Property Tax Liens</option>
                      <option value="Tired of Being a Landlord">Tired of Problem Tenants / Landlord Burnout</option>
                      <option value="Just Exploring Cash Options">Just Exploring Fast Cash Options</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Desired Closing Timeframe
                    </label>
                    <select
                      id="modal-select-timeframe"
                      value={timeframe}
                      onChange={(e) => setTimeframe(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-sky-500 bg-white"
                    >
                      <option value="As Soon As Possible (7-14 Days)">As Soon As Possible (7–14 Days)</option>
                      <option value="Within 30 Days">Within 30 Days</option>
                      <option value="60 to 90 Days">60 to 90 Days (Flexible)</option>
                      <option value="Just curious about my home value">Just curious about my home value</option>
                    </select>
                  </div>

                  <div className="pt-3 flex gap-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="py-3 px-4 rounded-xl border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50 flex items-center justify-center gap-1.5"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      id="modal-step2-next"
                      type="submit"
                      className="flex-1 py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-sky-600/20"
                    >
                      <span>Continue to Contact Info</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}

              {/* STEP 3: Contact & Submission */}
              {step === 3 && (
                <form onSubmit={handleSubmitFinal} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      id="modal-input-name"
                      type="text"
                      required
                      placeholder="e.g. Robert Miller"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        id="modal-input-phone"
                        type="tel"
                        required
                        placeholder="(516) 000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="modal-input-email"
                        type="email"
                        required
                        placeholder="youremail@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Any specific notes or questions for Paulson? (Optional)
                    </label>
                    <textarea
                      id="modal-input-notes"
                      rows={2}
                      placeholder="e.g. Existing mortgage balance, urgency, or repair details..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div className="p-3 bg-sky-50 rounded-xl border border-sky-100 flex items-start gap-2.5 text-xs text-sky-900">
                    <Shield className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Privacy Protected:</strong> Your information is strictly confidential and reviewed only by licensed agent & investor Paulson Eliancy. Zero spam, zero pressure.
                    </span>
                  </div>

                  <div className="pt-2 flex gap-2">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="py-3 px-4 rounded-xl border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50 flex items-center justify-center gap-1.5"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      id="modal-submit-final"
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-700 disabled:opacity-75 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-sky-600/25 transition-all"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Generating Cash Offer...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4 text-amber-300" />
                          <span>Request Official Cash Offer</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
