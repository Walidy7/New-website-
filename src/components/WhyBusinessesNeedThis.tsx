import React from 'react';
import { WHY_BUSINESSES_NEED_THIS } from '../data/content';
import {
  TrendingUp,
  Clock,
  ShieldAlert,
  MessageSquare,
  ArrowRight,
  CheckCircle,
  XCircle
} from 'lucide-react';

export const WhyBusinessesNeedThis: React.FC = () => {
  return (
    <section
      id="why-businesses-need-this"
      className="relative py-20 lg:py-28 bg-[#030712] overflow-hidden w-full max-w-full"
    >
      {/* Background Lighting rigidly clipped to viewport */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] right-[10%] w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-[170px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-800/40 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
            <span>Market Reality</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-5 leading-tight">
            Why Modern Businesses Need This
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            In today's digital market, having no website or an outdated website repels clients, while slow replies send them directly to your competitors.
          </p>
        </div>

        {/* 4 Stat-Driven Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {WHY_BUSINESSES_NEED_THIS.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-gradient-to-b from-[#091124] to-[#050b17] border border-blue-900/40 p-6 flex flex-col justify-between hover:border-blue-500/40 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(37,99,235,0.15)] group"
            >
              <div>
                <div className="text-3xl sm:text-4xl font-black text-blue-400 tracking-tight mb-1 group-hover:scale-105 transition-transform origin-left">
                  {item.metric}
                </div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                  {item.label}
                </div>
                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  {item.headline}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* The Direct Comparison: Outdated Business vs Upper Agent Upgraded */}
        <div className="rounded-2xl bg-[#060c1d] border border-blue-900/50 p-6 sm:p-8 lg:p-10 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-black text-white mb-2">
              The Real Business Difference
            </h3>
            <p className="text-sm text-slate-300">
              See what happens to customer inquiries when your website and communication channels are upgraded.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* The Old Way */}
            <div className="rounded-xl bg-[#0e121e]/80 border border-rose-900/30 p-6 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-rose-900/30 text-rose-400">
                <XCircle className="w-5 h-5 shrink-0" />
                <h4 className="text-base font-bold text-white">The Outdated Setup</h4>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-2.5">
                  <span className="text-rose-400 font-bold shrink-0">&times;</span>
                  <span>Outdated or non-existent website that looks unverified and amateur</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-rose-400 font-bold shrink-0">&times;</span>
                  <span>Customer waits 4 to 8 hours for a reply to a simple pricing question</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-rose-400 font-bold shrink-0">&times;</span>
                  <span>Customer searches for another business and places order elsewhere</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-rose-400 font-bold shrink-0">&times;</span>
                  <span>Inquiries lost across scattered personal WhatsApp chats with no system</span>
                </div>
              </div>
            </div>

            {/* The Upper Agent Way */}
            <div className="rounded-xl bg-gradient-to-b from-[#0c1836] to-[#071126] border border-blue-500/40 p-6 space-y-4 shadow-[0_0_25px_rgba(37,99,235,0.15)]">
              <div className="flex items-center gap-2 pb-3 border-b border-blue-800/40 text-blue-400">
                <CheckCircle className="w-5 h-5 shrink-0 text-emerald-400" />
                <h4 className="text-base font-bold text-white">The Upper Agent Upgraded Setup</h4>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-200">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>High-performance, mobile-first website that establishes instant trust</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Intelligent on-site agent answers pricing, hours, and FAQs in 3 seconds</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Agent captures order details, bookings, and syncs directly into WhatsApp</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Owner and team receive organized, pre-qualified inquiries ready to close</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all duration-200 shadow-lg shadow-blue-600/30"
            >
              <span>Upgrade Your Business Setup</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
