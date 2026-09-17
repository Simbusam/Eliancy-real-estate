import React, { useState } from 'react';
import { Calculator, ArrowRight, Check, X, ShieldAlert, Zap, Clock, DollarSign, HelpCircle } from 'lucide-react';
import { BRAND_INFO } from '../data/siteData';

interface NetProceedsCalculatorProps {
  onOpenCashOffer: () => void;
}

export const NetProceedsCalculator: React.FC<NetProceedsCalculatorProps> = ({ onOpenCashOffer }) => {
  const [estimatedValue, setEstimatedValue] = useState<number>(550000);
  const [repairCost, setRepairCost] = useState<number>(25000);
  const [monthsOnMarket, setMonthsOnMarket] = useState<number>(4);
  const [monthlyCarryingCost, setMonthlyCarryingCost] = useState<number>(3200);

  // Calculations for Traditional Sale
  const traditionalCommission = Math.round(estimatedValue * 0.06); // 6%
  const traditionalClosingCosts = Math.round(estimatedValue * 0.025); // 2.5%
  const traditionalHoldingCosts = Math.round(monthsOnMarket * monthlyCarryingCost);
  const traditionalTotalDeductions = traditionalCommission + traditionalClosingCosts + repairCost + traditionalHoldingCosts;
  const traditionalNetWalkaway = Math.max(0, estimatedValue - traditionalTotalDeductions);

  // Calculations for Eliancy Cash Offer
  // Typically investor offer accounts for after repair value minus investor margin, but covers ALL fees
  // Cash offer is calibrated around 82-85% of ARV minus repairs, with $0 fees to seller
  const eliancyCashOffer = Math.round(estimatedValue * 0.85 - (repairCost * 0.45));
  const eliancyCommission = 0;
  const eliancyClosingCosts = 0;
  const eliancySellerRepairs = 0;
  const eliancyHoldingCosts = Math.round(0.25 * monthlyCarryingCost); // 1-2 weeks only
  const eliancyNetWalkaway = Math.max(0, eliancyCashOffer - eliancyHoldingCosts);

  return (
    <section className="bg-white rounded-2xl border border-slate-200/90 shadow-xl p-6 sm:p-10">
      <div className="text-center max-w-3xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-200 mb-3">
          <Calculator className="w-3.5 h-3.5 text-sky-600" />
          <span>Interactive Transparency Tool</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif-luxury tracking-tight">
          True Net Proceeds Calculator
        </h3>
        <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
          See the real difference between a traditional open-market MLS listing vs. a direct As-Is Cash Offer from Paulson Eliancy.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Sliders / Inputs (5 Cols) */}
        <div className="lg:col-span-5 space-y-6 bg-slate-50/80 p-6 rounded-xl border border-slate-200">
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Estimated Market Value (ARV)
              </label>
              <span className="text-sm font-bold text-sky-700 font-mono">
                ${estimatedValue.toLocaleString()}
              </span>
            </div>
            <input
              id="calc-slider-value"
              type="range"
              min="200000"
              max="1500000"
              step="10000"
              value={estimatedValue}
              onChange={(e) => setEstimatedValue(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
              <span>$200k</span>
              <span>$750k</span>
              <span>$1.5M</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Estimated Repairs / Prep Needed
              </label>
              <span className="text-sm font-bold text-amber-700 font-mono">
                ${repairCost.toLocaleString()}
              </span>
            </div>
            <input
              id="calc-slider-repairs"
              type="range"
              min="0"
              max="80000"
              step="2500"
              value={repairCost}
              onChange={(e) => setRepairCost(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
              <span>$0 (Turnkey)</span>
              <span>$40k (Moderate)</span>
              <span>$80k+ (Heavy)</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Months on Retail Market
              </label>
              <span className="text-sm font-bold text-slate-800 font-mono">
                {monthsOnMarket} Months
              </span>
            </div>
            <input
              id="calc-slider-months"
              type="range"
              min="1"
              max="8"
              step="1"
              value={monthsOnMarket}
              onChange={(e) => setMonthsOnMarket(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-700"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
              <span>1 Mo</span>
              <span>4 Mos (NY Avg)</span>
              <span>8 Mos</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Monthly Holding Cost (Mortgage + Taxes)
              </label>
              <span className="text-sm font-bold text-slate-800 font-mono">
                ${monthlyCarryingCost.toLocaleString()}/mo
              </span>
            </div>
            <input
              id="calc-slider-holding"
              type="range"
              min="1000"
              max="6000"
              step="200"
              value={monthlyCarryingCost}
              onChange={(e) => setMonthlyCarryingCost(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-700"
            />
            <p className="text-[11px] text-slate-500 mt-1">
              Includes mortgage payment, Long Island property taxes, utilities, and insurance while waiting for a buyer.
            </p>
          </div>
        </div>

        {/* Comparison Result Cards (7 Cols) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Traditional Sale Column */}
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200">
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Traditional Listing</h4>
                  <p className="text-xs text-slate-500">Open MLS Market</p>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-sm bg-slate-200 text-slate-700 font-mono">
                  60–120+ Days
                </span>
              </div>

              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex justify-between py-1">
                  <span>Gross Contract Sale:</span>
                  <span className="font-semibold text-slate-900 font-mono">${estimatedValue.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-1 text-red-600">
                  <span>Realtor Commission (6%):</span>
                  <span className="font-mono">-${traditionalCommission.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-1 text-red-600">
                  <span>Seller Closing Costs (2.5%):</span>
                  <span className="font-mono">-${traditionalClosingCosts.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-1 text-red-600">
                  <span>Repairs & Inspection Work:</span>
                  <span className="font-mono">-${repairCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-1 text-red-600">
                  <span>Holding Costs ({monthsOnMarket} mos):</span>
                  <span className="font-mono">-${traditionalHoldingCosts.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200">
              <div className="text-xs text-slate-500 font-medium">Estimated Net in Pocket:</div>
              <div className="text-2xl font-bold text-slate-900 font-mono">
                ${traditionalNetWalkaway.toLocaleString()}
              </div>
              <div className="mt-2 text-[11px] text-slate-500 flex items-center gap-1">
                <ShieldAlert className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>Requires open houses & financing approval risk</span>
              </div>
            </div>
          </div>

          {/* Eliancy Cash Offer Column */}
          <div className="bg-sky-900 text-white rounded-xl p-5 border border-sky-700 shadow-lg flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-amber-400 text-slate-950 font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-bl-lg">
              Guaranteed Speed
            </div>

            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-sky-800">
                <div>
                  <h4 className="font-bold text-white text-base">Eliancy Cash Offer</h4>
                  <p className="text-xs text-sky-300">Direct Investor Buyout</p>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-sm bg-sky-800 text-sky-200 font-mono mr-16">
                  7–14 Days
                </span>
              </div>

              <div className="space-y-2 text-xs text-sky-100">
                <div className="flex justify-between py-1">
                  <span>Direct Cash Offer:</span>
                  <span className="font-semibold text-white font-mono">${eliancyCashOffer.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-1 text-emerald-300">
                  <span>Realtor Commission:</span>
                  <span className="font-mono font-bold">$0 (Zero)</span>
                </div>
                <div className="flex justify-between py-1 text-emerald-300">
                  <span>Closing Costs (We Pay):</span>
                  <span className="font-mono font-bold">$0 (Zero)</span>
                </div>
                <div className="flex justify-between py-1 text-emerald-300">
                  <span>Repairs / Cleaning Required:</span>
                  <span className="font-mono font-bold">$0 (100% As-Is)</span>
                </div>
                <div className="flex justify-between py-1 text-sky-200">
                  <span>Holding Costs (1-2 wks):</span>
                  <span className="font-mono">-${eliancyHoldingCosts.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-sky-800">
              <div className="text-xs text-sky-300 font-medium">Estimated Net Walkaway Cash:</div>
              <div className="text-2xl font-bold text-amber-300 font-mono">
                ${eliancyNetWalkaway.toLocaleString()}
              </div>
              <div className="mt-2 text-[11px] text-sky-200 flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                <span>Cash in hand in days with zero showings or repairs!</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA under Calculator */}
      <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-slate-500 max-w-xl">
          *Estimates are illustrative. Paulson Eliancy prepares personalized valuations based on official Long Island land records, recent sales, and your exact situation.
        </div>
        <button
          id="calc-claim-custom-offer"
          onClick={onOpenCashOffer}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm shadow-md transition-all shrink-0"
        >
          <span>Get Your Exact Property Valuation</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
