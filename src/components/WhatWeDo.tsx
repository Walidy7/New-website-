import React from 'react';
import { WHAT_WE_DO_PILLARS } from '../data/content';
import {
  Globe,
  RefreshCw,
  Bot,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
  ShieldCheck
} from 'lucide-react';

export const WhatWeDo: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Globe':
        return <Globe className="w-6 h-6 text-blue-400" />;
      case 'RefreshCw':
        return <RefreshCw className="w-6 h-6 text-sky-400" />;
      case 'Bot':
        return <Bot className="w-6 h-6 text-indigo-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section
      id="what-we-do"
      className="relative py-20 lg:py-28 bg-[#040816] border-t border-b border-blue-950/60 overflow-hidden w-full max-w-full"
    >
      {/* Background Lighting rigidly clipped to viewport */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/10 rounded-full blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-800/40 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5 text-blue-400" />
            <span>The Upper Agent Standard</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-5 leading-tight">
            What Upper Agent Does
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We solve the two biggest digital problems growing businesses face: looking outdated online, and losing clients to slow customer communication.
          </p>
        </div>

        {/* 3 Core Pillars Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHAT_WE_DO_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="relative rounded-2xl bg-gradient-to-b from-[#091124] to-[#060b18] border border-blue-900/40 hover:border-blue-500/50 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_10px_35px_rgba(37,99,235,0.2)] group"
            >
              {/* Top Accent Bar */}
              <div className="absolute top-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

              <div>
                {/* Header Row: Icon + Badge */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-950/80 border border-blue-800/50 flex items-center justify-center group-hover:scale-105 group-hover:border-blue-400 transition-all duration-200">
                    {getIcon(pillar.iconName)}
                  </div>
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#0d1833] text-blue-300 border border-blue-800/40">
                    {pillar.badge}
                  </span>
                </div>

                {/* Pillar Number & Title */}
                <div className="text-[11px] font-mono text-blue-400/80 uppercase tracking-widest mb-1.5">
                  Core Solution 0{idx + 1}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs font-semibold text-blue-300/90 mb-4">
                  {pillar.tagline}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Deliverables Bullet List */}
                <div className="space-y-2.5 pt-4 border-t border-blue-950/80 mb-6">
                  {pillar.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-normal">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Highlight Strip & Action */}
              <div className="pt-4 border-t border-blue-950/80">
                <div className="rounded-lg bg-[#0b142b] p-3 text-xs text-slate-300 border border-blue-900/30 mb-4 flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-[11px] leading-snug">{pillar.highlight}</span>
                </div>

                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#0e1b3d] hover:bg-blue-600 text-blue-200 hover:text-white text-xs font-bold transition-all duration-200 border border-blue-800/50 hover:border-blue-400"
                >
                  <span>Inquire About This</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
