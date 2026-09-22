import React from 'react';
import { SERVICES } from '../data/content';
import {
  Globe,
  RefreshCw,
  TrendingUp,
  Bot,
  MessageSquareText,
  Send,
  UsersRound,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const ServicesGrid: React.FC = () => {
  const iconMap: Record<string, any> = {
    Globe,
    RefreshCw,
    TrendingUp,
    Bot,
    MessageSquareText,
    Send,
    UsersRound
  };

  return (
    <section id="services" className="py-20 lg:py-28 relative bg-[#040816] border-t border-blue-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Our Core Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Comprehensive Web &amp; Agent Solutions{' '}
            <span className="text-blue-400">For Growing Businesses</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            From modern responsive website design to automated customer assistants across WhatsApp
            and Telegram, every service is focused on tangible business outcomes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.iconName] || Globe;
            return (
              <div
                key={service.id}
                className="p-6 sm:p-7 rounded-2xl bg-[#070e20] border border-blue-950 hover:border-blue-700/60 transition-all duration-200 flex flex-col justify-between group shadow-sm hover:shadow-[0_10px_35px_rgba(37,99,235,0.15)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-blue-950/80 border border-blue-800/50 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200">
                      <Icon className="w-5 h-5" />
                    </div>

                    {service.badge && (
                      <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-950 text-blue-300 border border-blue-900/60">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs text-blue-300 font-medium mb-3">
                    {service.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-blue-950">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-blue-950">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Get Started with {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
