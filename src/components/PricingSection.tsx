import React, { useState } from 'react';
import { Check, ShieldCheck, HelpCircle, ArrowRight, Sparkles } from 'lucide-react';
import { PRICING_PLANS, CURRENCIES } from '../data/pricingData';
import { PricingPlan } from '../types';

interface PricingSectionProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const currentCurrencyObj = CURRENCIES.find((c) => c.code === selectedCurrency) || CURRENCIES[0];

  return (
    <section id="fees" className="py-16 sm:py-24 bg-[#faf9f5] border-t border-b border-emerald-100/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#047857] mb-2 uppercase tracking-wider">
            <span>Affordable & Transparent Tuition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Affordable Monthly Course Fees
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            High quality Islamic education should be accessible to all. No registration fee, no contracts, and a full 3-day free trial before you pay a single penny.
          </p>

          {/* Currency Switcher */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <span className="text-xs font-semibold text-slate-600">Select Your Local Currency:</span>
            <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-white border border-slate-200 rounded-xl shadow-xs">
              {CURRENCIES.map((curr) => {
                const isActive = curr.code === selectedCurrency;
                return (
                  <button
                    key={curr.code}
                    onClick={() => setSelectedCurrency(curr.code)}
                    className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all duration-150 flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-[#064e3b] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    <span>{curr.flag}</span>
                    <span>{curr.code} ({curr.symbol})</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {PRICING_PLANS.map((plan) => {
            const price = plan.rates[selectedCurrency] || plan.rates.USD;
            const perClassPrice = (price / plan.classesPerMonth).toFixed(2);

            return (
              <div
                key={plan.id}
                className={`bg-white rounded-2xl border p-6 sm:p-7 flex flex-col justify-between relative transition-all duration-200 ${
                  plan.popular
                    ? 'border-[#064e3b] shadow-xl ring-2 ring-[#064e3b]/10'
                    : 'border-slate-200/90 shadow-xs hover:border-slate-300'
                }`}
              >
                {/* Popular Pill */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#064e3b] text-white text-[11px] font-bold py-1 px-3 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  <div className="text-center pb-5 border-b border-slate-100">
                    <h3 className="text-lg font-bold text-slate-900">{plan.title}</h3>
                    <p className="text-xs text-slate-500 mt-1 min-h-[32px]">{plan.description}</p>
                    
                    {/* Price figure with tabular-nums */}
                    <div className="mt-4 flex items-baseline justify-center gap-1">
                      <span className="text-2xl font-bold text-slate-900">{currentCurrencyObj.symbol}</span>
                      <span className="text-4xl font-extrabold text-slate-900 tracking-tight tabular-nums">
                        {price}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">/ month</span>
                    </div>

                    <div className="text-[11px] font-medium text-emerald-800 bg-emerald-50 rounded-md py-1 px-2.5 mt-2 inline-block">
                      {plan.classesPerMonth} Classes ({currentCurrencyObj.symbol}{perClassPrice} / 30m class)
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="mt-6 space-y-3">
                    <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Included in this plan:
                    </div>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                        <Check className="w-4 h-4 text-[#047857] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call to action */}
                <div className="mt-8 pt-5 border-t border-slate-100">
                  <button
                    onClick={() => onSelectPlan(plan)}
                    className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-xs whitespace-nowrap ${
                      plan.popular
                        ? 'bg-[#064e3b] hover:bg-[#047857] text-white shadow-sm'
                        : 'bg-slate-100 hover:bg-[#064e3b] hover:text-white text-slate-800'
                    }`}
                  >
                    <span>Choose {plan.daysPerWeek} Days & Enroll</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-center text-slate-600 mt-2">
                    Starts with 3-Day Free Trial
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Discounts & Family Guarantees */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-emerald-900/90 text-white rounded-2xl p-6 flex items-start gap-4 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-900 flex items-center justify-center font-bold text-base shrink-0">
              15%
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Family & Sibling Discount</h4>
              <p className="mt-1 text-xs text-emerald-100 leading-relaxed">
                Enrolling two or more siblings or family members? Enjoy an automatic 15% discount on monthly tuition for all additional students.
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 flex items-start gap-4 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#064e3b] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">100% Risk-Free Guarantee</h4>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                Try 3 full classes completely free. If for any reason you are not satisfied with your teacher or experience, you owe nothing. No contract or lock-in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
