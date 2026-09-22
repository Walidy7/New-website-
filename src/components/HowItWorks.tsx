import React from 'react';
import { HOW_IT_WORKS } from '../data/content';
import {
  MessageSquare,
  Layout,
  Eye,
  Bot,
  Rocket,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const stepIcons = [MessageSquare, Layout, Eye, Bot, Rocket];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 relative bg-[#040816] border-t border-blue-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Clear, Predictable Path</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            How Upper Agent Works{' '}
            <span className="text-blue-400">From Idea to Live Customers</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A frictionless 5-step process designed to respect your time and deliver a reliable
            business website and automated agent without hassle.
          </p>
        </div>

        {/* 5-Step Process Timeline Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {HOW_IT_WORKS.map((step, idx) => {
            const Icon = stepIcons[idx] || Rocket;
            return (
              <div
                key={step.number}
                className="relative p-6 rounded-2xl bg-[#070e20] border border-blue-950 hover:border-blue-700/60 transition-all duration-200 flex flex-col justify-between group shadow-sm hover:shadow-[0_8px_30px_rgba(37,99,235,0.15)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-extrabold font-mono text-blue-400 group-hover:text-sky-300 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-blue-950/80 border border-blue-800/50 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-3">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-blue-950 text-[11px] text-blue-300/80 font-medium">
                  {step.detail}
                </div>
              </div>
            );
          })}
        </div>

        {/* Simple Consultation Bar */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-400 mb-4">
            Ready to get started with step 01? Tell us about your business and project goals.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm tracking-wide transition-all duration-200 shadow-lg shadow-blue-600/30 active:scale-95 border border-blue-400/40"
          >
            <span>Start Step 01: Share Your Vision</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </a>
        </div>
      </div>
    </section>
  );
};
