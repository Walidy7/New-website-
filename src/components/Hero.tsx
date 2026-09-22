import React, { useState } from 'react';
import { LogoEmblem } from './Logo';
import {
  ArrowRight,
  Globe,
  Sparkles,
  CheckCircle2,
  PlayCircle,
  Bot,
  MessageCircle,
  Send,
  Zap,
  TrendingUp,
  ShieldCheck,
  Building,
  RefreshCw
} from 'lucide-react';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'demo' | 'features'>('demo');

  return (
    <section
      id="home"
      className="relative min-h-[94vh] flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#030712]"
    >
      {/* Precision Deep Navy & Electric Blue Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Primary Electric Cobalt Spotlight (Top Center / Right) */}
        <div className="absolute -top-[15%] right-[15%] w-[650px] h-[550px] bg-blue-600/15 rounded-full blur-[150px]" />
        
        {/* Secondary Sapphire / Cyan Accent (Bottom Left) */}
        <div className="absolute top-[45%] -left-[10%] w-[500px] h-[450px] bg-sky-500/10 rounded-full blur-[160px]" />

        {/* Deep navy base radial wash */}
        <div className="absolute top-[20%] left-[25%] w-[800px] h-[600px] bg-[#0c1a3b]/25 rounded-full blur-[180px]" />
        
        {/* Refined subtle agency dot grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(#38bdf8 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Enterprise Agency Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0a1226] border border-blue-800/40 text-blue-200 text-xs sm:text-sm font-semibold mb-6 shadow-[0_0_15px_rgba(37,99,235,0.15)]">
              <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-ping" />
              <span className="flex h-2 w-2 rounded-full bg-blue-500 -ml-4.5" />
              <span className="tracking-wide">
                Upper Agent &bull; Modern Websites &amp; Intelligent Business Agents
              </span>
            </div>

            {/* Powerful Master Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] mb-5">
              Your Business,{' '}
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-blue-200 bg-clip-text text-transparent">
                Upgraded.
              </span>
            </h1>

            {/* High-Impact Subheadline */}
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-200 mb-6 max-w-2xl mx-auto lg:mx-0 leading-snug">
              Websites and intelligent customer experiences built for modern businesses.
            </h2>

            {/* Strategic Value Description */}
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed mb-8">
              We design high-converting business websites, modernize existing ones, and embed intelligent 24/7 business agents directly into your site. Your agent answers customer questions, details prices, takes orders, and syncs seamlessly with WhatsApp and Telegram.
            </p>

            {/* Fast Value Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto lg:mx-0 mb-9 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#091124]/70 border border-blue-900/40 text-left">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Bespoke, high-performance websites</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#091124]/70 border border-blue-900/40 text-left">
                <RefreshCw className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Modernize existing outdated websites</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#091124]/70 border border-blue-900/40 text-left">
                <Bot className="w-4 h-4 text-sky-400 shrink-0" />
                <span>24/7 on-site intelligent business agent</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#091124]/70 border border-blue-900/40 text-left">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Direct WhatsApp &amp; Telegram sync</span>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                id="hero-cta-start"
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-base tracking-wide transition-all duration-200 shadow-[0_0_25px_rgba(37,99,235,0.45)] hover:shadow-[0_0_35px_rgba(37,99,235,0.6)] active:scale-[0.98] border border-blue-400/40"
              >
                <span>Upgrade Your Business</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </a>

              <a
                id="hero-cta-demos"
                href="#agent-demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#0a1329] hover:bg-[#101c3d] text-slate-200 hover:text-white font-semibold text-base border border-blue-900/60 hover:border-blue-500/50 transition-all duration-200 active:scale-[0.98] shadow-lg shadow-black/60"
              >
                <PlayCircle className="w-4 h-4 text-blue-400" />
                <span>See What We Build</span>
              </a>
            </div>

            {/* Metrics Trust Strip */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-xl mx-auto lg:mx-0 text-center sm:text-left">
              <div>
                <div className="text-xl sm:text-2xl font-black text-white">3s</div>
                <div className="text-[11px] sm:text-xs text-slate-400">Response Speed</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-blue-400">100%</div>
                <div className="text-[11px] sm:text-xs text-slate-400">Custom Tailored</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-white">24/7</div>
                <div className="text-[11px] sm:text-xs text-slate-400">Customer Capture</div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Mockup showing Website with Embedded On-Site Agent */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Luminous Electric Halo */}
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-br from-blue-600/30 via-sky-500/10 to-indigo-600/20 blur-2xl opacity-75 pointer-events-none" />

              {/* Modern Glass Frame of Business Website */}
              <div className="relative rounded-2xl bg-[#060c1c] border border-blue-900/60 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden backdrop-blur-xl">
                {/* Browser Top Navigation Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0a1226] border-b border-blue-950/80 text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <div className="ml-2 px-2.5 py-0.5 rounded-md bg-[#040814] border border-blue-950 text-[11px] font-mono text-slate-300 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span className="truncate max-w-[140px] sm:max-w-[180px] text-amber-200">theurbanbistro.com</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[10px] font-bold text-amber-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    Bespoke Client Theme
                  </span>
                </div>

                {/* Simulated Business Website Interior Canvas - Custom Culinary Bistro Theme */}
                <div className="p-4 sm:p-5 space-y-4 bg-gradient-to-b from-[#18110b] via-[#120d08] to-[#0c0805]">
                  {/* Website Hero Banner */}
                  <div className="rounded-xl bg-gradient-to-br from-[#26170d] to-[#180f08] p-4 border border-amber-900/50 relative overflow-hidden shadow-lg">
                    <div className="flex items-start justify-between gap-3 relative z-10">
                      <div>
                        <span className="inline-block text-[10px] font-bold tracking-wider uppercase text-amber-400">
                          Wood-Fired Kitchen &bull; Mediterranean
                        </span>
                        <h4 className="text-base sm:text-lg font-black text-[#fffbeb] mt-0.5">
                          The Urban Bistro &amp; Bar
                        </h4>
                        <p className="text-xs text-[#fed7aa] mt-1 leading-relaxed">
                          Handcrafted artisanal menu, fine wines, and one-tap table reservations.
                        </p>
                      </div>
                      <div className="p-2.5 rounded-xl bg-amber-950/80 border border-amber-700/60 shrink-0 text-amber-400">
                        <Globe className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Mini visual elements representing business content */}
                    <div className="mt-3.5 pt-3 border-t border-amber-950 flex items-center gap-2">
                      <span className="text-[10px] px-2 py-0.5 rounded bg-amber-950/80 text-amber-300 font-medium border border-amber-800/40">
                        Dinner Menu
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-amber-950/80 text-amber-300 font-medium border border-amber-800/40">
                        Table Booking
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-amber-950/80 text-amber-300 font-medium border border-amber-800/40">
                        Wine Pairing
                      </span>
                    </div>
                  </div>

                  {/* The Embedded Live Assistant - Themed to the Restaurant */}
                  <div className="rounded-xl bg-[#1e130c] p-4 border border-amber-800/50 shadow-xl space-y-3 relative">
                    {/* Header of Embedded Agent */}
                    <div className="flex items-center justify-between pb-2 border-b border-amber-900/40">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg overflow-hidden shrink-0 border border-amber-600/50 bg-amber-950 flex items-center justify-center text-amber-300 font-bold text-xs shadow-sm">
                          UB
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-bold text-[#fffbeb]">Bistro On-Site Concierge</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          </div>
                          <span className="text-[10px] text-amber-300/80 block leading-tight">
                            Integrated Directly into Bistro Website
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-amber-950 text-amber-300 font-mono border border-amber-800/50">
                        Open 24/7
                      </span>
                    </div>

                    {/* Live Conversation Snapshot */}
                    <div className="space-y-2.5 text-xs">
                      {/* Customer Question Bubble */}
                      <div className="flex items-end justify-end">
                        <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-2xl rounded-br-sm px-3.5 py-2 max-w-[85%] shadow-md font-normal leading-relaxed">
                          Can I see your price list or book a table for tonight?
                        </div>
                      </div>

                      {/* Agent Intelligent Response Bubble */}
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full overflow-hidden shrink-0 mt-0.5 border border-amber-600/40 bg-amber-950 flex items-center justify-center text-amber-300 font-bold text-[10px]">
                          UB
                        </div>
                        <div className="bg-[#140c07] text-[#fed7aa] border border-amber-900/50 rounded-2xl rounded-tl-sm px-3.5 py-2.5 max-w-[90%] space-y-2 shadow-sm">
                          <p className="leading-relaxed">
                            Welcome! Here is our evening menu. We have open tables tonight at 7:30 PM and 8:45 PM. Would you like me to reserve a spot or connect you directly with our host on WhatsApp?
                          </p>
                          <div className="pt-1 flex flex-wrap gap-1.5">
                            <span className="text-[10px] px-2 py-1 rounded bg-amber-500/20 text-amber-300 font-medium border border-amber-500/30">
                              Book 7:30 PM Table
                            </span>
                            <span className="text-[10px] px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 font-medium border border-emerald-500/30 inline-flex items-center gap-1">
                              <MessageCircle className="w-3 h-3" />
                              WhatsApp Connect
                            </span>
                          </div>
                          <div className="pt-0.5 flex items-center gap-1.5 text-[10px] text-amber-400 font-semibold">
                            <Zap className="w-3 h-3 text-amber-400" />
                            <span>Instant customer lead capture</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Multi-channel Routing Badges */}
                  <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                    <div className="p-2 rounded-lg bg-[#140d08] border border-amber-950">
                      <span className="block text-[11px] font-bold text-amber-100">Website</span>
                      <span className="text-[9px] text-amber-400">On-site assistant</span>
                    </div>
                    <div className="p-2 rounded-lg bg-[#140d08] border border-amber-950">
                      <span className="block text-[11px] font-bold text-amber-100">WhatsApp</span>
                      <span className="text-[9px] text-emerald-400">Instant DMs</span>
                    </div>
                    <div className="p-2 rounded-lg bg-[#081024] border border-blue-950">
                      <span className="block text-[11px] font-bold text-slate-200">Telegram</span>
                      <span className="text-[9px] text-sky-400">Automated Bot</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="px-4 py-3 bg-[#081022] border-t border-blue-950 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                    <span>Tested &amp; Approved Before Launch</span>
                  </span>
                  <a
                    href="#agent-demo"
                    className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1"
                  >
                    <span>Try live demo</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
