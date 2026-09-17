import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Calendar, 
  AlertCircle,
  MessageSquare,
  Building
} from 'lucide-react';
import { PageId } from '../types';
import { BRAND_INFO } from '../data/siteData';

interface ContactViewProps {
  onNavigate: (page: PageId) => void;
  onOpenCashOffer: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({
  onNavigate,
  onOpenCashOffer
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [preferredMethod, setPreferredMethod] = useState<'phone' | 'text' | 'email'>('phone');
  const [preferredTime, setPreferredTime] = useState('Morning (9am - 12pm)');
  const [address, setAddress] = useState('');
  const [topic, setTopic] = useState('Facing Foreclosure / Urgent Timeline');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) return;

    setIsSubmitting(true);
    
    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      const sheetUrl = import.meta.env.VITE_GOOGLE_SHEET_URL;
      
      const formData = {
        source: "General Contact Form",
        name: fullName,
        email: email,
        phone: phone,
        address: address || "Not provided",
        topic: topic,
        timeline: preferredTime,
        notes: message || "No additional message",
      };

      if (!accessKey && !sheetUrl) {
        // Fallback for development if no key is set
        console.warn("No API keys found. Simulating submission.");
        setTimeout(() => {
          setIsSubmitting(false);
          setSubmitted(true);
        }, 1000);
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
              subject: "New General Inquiry - " + topic,
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
        setSubmitted(true);
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

  return (
    <div className="space-y-16 py-8">
      {/* 1. Header Banner */}
      <section className="text-center max-w-4xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 mb-3">
          <MessageSquare className="w-3.5 h-3.5 text-sky-600" />
          <span>No Obligation • Just a Conversation</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 font-serif-luxury tracking-tight">
          Let's Talk About Your Property
        </h1>
        <p className="text-slate-600 text-base sm:text-lg mt-3 max-w-2xl mx-auto leading-relaxed">
          Whether you're facing foreclosure, managing a difficult property, or just exploring your options — reach out. We're here to provide clear, actionable guidance.
        </p>
      </section>

      {/* 2. Main Content Grid (Contact Cards + Form) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Contact Information Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Direct Line Card */}
            <div className="bg-sky-900 text-white rounded-2xl p-6 sm:p-7 border border-sky-800 shadow-lg space-y-4">
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-sky-800 text-sky-200">
                Direct Contact
              </span>
              <h3 className="text-xl font-bold font-serif-luxury text-white">
                Speak Directly with Paulson
              </h3>
              <p className="text-xs text-sky-200 leading-relaxed">
                Skip the call centers. You will speak with Paulson Eliancy directly about your property's value, equity, and options.
              </p>

              <div className="pt-2">
                <a
                  id="contact-call-card-link"
                  href={`tel:${BRAND_INFO.phoneClean}`}
                  className="inline-flex items-center gap-2 text-2xl font-extrabold text-amber-300 hover:text-amber-200 font-mono tracking-tight"
                >
                  <Phone className="w-6 h-6" />
                  <span>{BRAND_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Office Details */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Office Location & Coverage</div>
                  <p className="text-slate-600 mt-0.5">
                    {BRAND_INFO.location} 11702<br />
                    Serving Suffolk County, Nassau County, Long Island & Greater New York State.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 border-t border-slate-100 pt-4">
                <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Email Address</div>
                  <a
                    id="contact-email-card-link"
                    href={`mailto:${BRAND_INFO.email}`}
                    className="text-sky-700 hover:underline font-medium break-all"
                  >
                    {BRAND_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 border-t border-slate-100 pt-4">
                <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Consultation Hours</div>
                  <p className="text-slate-600 mt-0.5">
                    {BRAND_INFO.hours}<br />
                    <span className="text-[11px] text-slate-500">Emergency foreclosure calls answered after hours.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Confidentiality Guarantee */}
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100 flex items-start gap-3 text-xs text-emerald-900">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong>100% Confidential:</strong> We will never post signs on your lawn or disclose your situation to neighbors. Your privacy is strictly protected.
              </div>
            </div>
          </div>

          {/* Right Consultation Booking Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md">
            <h3 className="text-xl font-bold font-serif-luxury text-slate-900 mb-1">
              Request a Free, No-Obligation Consultation
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Fill out the details below and Paulson will reach out at your preferred time.
            </p>

            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold font-serif-luxury text-slate-900">
                  Consultation Request Sent!
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-slate-900">{fullName}</span>. Paulson Eliancy has received your message regarding <span className="font-semibold text-slate-900">{topic}</span>. We will contact you at {phone} during {preferredTime}.
                </p>
                <div className="pt-4 flex justify-center gap-3">
                  <a
                    id="contact-success-call"
                    href={`tel:${BRAND_INFO.phoneClean}`}
                    className="px-5 py-2.5 rounded-xl bg-sky-600 text-white font-bold text-xs hover:bg-sky-700 shadow-md"
                  >
                    Call Now: {BRAND_INFO.phone}
                  </a>
                  <button
                    id="contact-new-msg"
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    id="contact-form-name"
                    type="text"
                    required
                    placeholder="e.g. John Davis"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      id="contact-form-phone"
                      type="tel"
                      required
                      placeholder="(516) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      id="contact-form-email"
                      type="email"
                      required
                      placeholder="name@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Property Address / City (NY)
                  </label>
                  <input
                    id="contact-form-address"
                    type="text"
                    placeholder="e.g. 210 Deer Park Ave, Babylon NY"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Topic / Situation
                    </label>
                    <select
                      id="contact-form-topic"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-sky-500 bg-white"
                    >
                      <option value="Facing Foreclosure / Urgent Timeline">Facing Foreclosure / Auction Date</option>
                      <option value="Request Fast Cash Offer">Request Fast Cash Offer</option>
                      <option value="Inherited Property / Probate">Inherited Property / Probate</option>
                      <option value="Traditional MLS Listing">Traditional MLS Listing Consultation</option>
                      <option value="Vacant / Damaged House">Vacant / Damaged House</option>
                      <option value="Other Question">General Real Estate Question</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Preferred Call Window
                    </label>
                    <select
                      id="contact-form-time"
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-sky-500 bg-white"
                    >
                      <option value="Morning (9am - 12pm)">Morning (9am – 12pm)</option>
                      <option value="Afternoon (12pm - 3pm)">Afternoon (12pm – 3pm)</option>
                      <option value="Late Afternoon (3pm - 6pm)">Late Afternoon (3pm – 6pm)</option>
                      <option value="As Soon As Possible (Urgent)">As Soon As Possible (Urgent)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Tell us briefly about your situation (Optional)
                  </label>
                  <textarea
                    id="contact-form-message"
                    rows={3}
                    placeholder="Provide any details that will help Paulson prepare prior to calling..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <button
                  id="contact-form-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm shadow-md shadow-sky-600/20 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending Request...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Request Free Consultation</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
