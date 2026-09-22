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
  RefreshCw,
  Flame,
  Wine,
  UtensilsCrossed,
  Star,
  Clock,
  MapPin,
  Calendar,
  ChevronRight
} from 'lucide-react';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'demo' | 'features'>('demo');

  return (
    <section
      id="home"
      className="relative min-h-[94vh] flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#030712] w-full max-w-full"
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

          {/* Right Column: Visual Mockup showing Framer-Style Luxury Restaurant Website with Embedded On-Site Agent */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Luminous Electric/Amber Halo */}
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-br from-amber-600/30 via-orange-500/15 to-blue-600/20 blur-2xl opacity-80 pointer-events-none" />

              {/* Modern Glass Frame of Business Website */}
              <div className="relative rounded-2xl bg-[#090705] border border-amber-900/50 shadow-[0_20px_50px_rgba(0,0,0,0.95)] overflow-hidden backdrop-blur-xl">
                {/* Browser Top Navigation Bar */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#120e0a] border-b border-amber-950/80 text-xs text-amber-200/70">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <div className="ml-2 px-2.5 py-0.5 rounded-md bg-[#070503] border border-amber-950 text-[11px] font-mono text-amber-200/90 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span className="truncate max-w-[140px] sm:max-w-[190px]">theurbanbistro.com/menu</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[10px] font-bold text-amber-300">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>Framer Design Example</span>
                  </span>
                </div>

                {/* Simulated Business Website Interior Canvas - Framer Qitchen/Deleito Luxury Editorial Theme */}
                <div className="p-3.5 sm:p-5 space-y-4 bg-gradient-to-b from-[#140f0a] via-[#0d0906] to-[#070503]">
                  {/* Luxury Restaurant Header & Monogram */}
                  <div className="flex items-center justify-between pb-3 border-b border-amber-900/40">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full border border-amber-500/60 bg-gradient-to-br from-amber-600 to-amber-900 flex items-center justify-center text-amber-100 font-serif font-black text-xs shadow-md shrink-0">
                        UB
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs sm:text-sm font-serif font-black tracking-wider uppercase text-amber-50">
                            The Urban Bistro &amp; Bar
                          </span>
                        </div>
                        <span className="text-[10px] uppercase tracking-widest text-amber-400/90 font-semibold block">
                          Wood-Fired Kitchen &bull; Mediterranean
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-700/50 text-[10px] text-emerald-300 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Tables Open Tonight
                      </span>
                      <button
                        type="button"
                        className="px-2.5 py-1 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-bold text-[11px] shadow-sm transition-all"
                      >
                        Reserve
                      </button>
                    </div>
                  </div>

                  {/* Framer Editorial Hero Banner */}
                  <div className="rounded-xl bg-gradient-to-br from-[#1f150d] via-[#160f09] to-[#0e0a06] p-4 border border-amber-800/40 relative overflow-hidden shadow-lg">
                    {/* Ambient warm embers glow */}
                    <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-600/15 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 space-y-2">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-950/80 text-[10px] font-bold text-amber-300 border border-amber-700/50 uppercase tracking-wider">
                        <Flame className="w-3 h-3 text-amber-400" />
                        <span>Artisanal Embers &bull; Est. 2021</span>
                      </div>

                      <h4 className="text-base sm:text-lg font-serif font-black text-amber-50 tracking-tight leading-snug">
                        Crafted Over Open Flame, Served With Mediterranean Soul
                      </h4>

                      <p className="text-xs text-amber-200/80 leading-relaxed max-w-lg">
                        Handmade sourdough pizzas, fresh tagliolini, and wild sea harvest paired with natural Tuscan vintages.
                      </p>

                      <div className="pt-2 flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-extrabold text-xs shadow-md shadow-amber-900/40 transition-all flex items-center gap-1"
                          >
                            <Calendar className="w-3 h-3" />
                            <span>Book A Table</span>
                          </button>
                          <button
                            type="button"
                            className="px-3 py-1.5 rounded-lg bg-[#140d07] hover:bg-[#1c130b] text-amber-200 text-xs font-semibold border border-amber-800/40 transition-all flex items-center gap-1"
                          >
                            <UtensilsCrossed className="w-3 h-3 text-amber-400" />
                            <span>Full Menu</span>
                          </button>
                        </div>

                        <div className="flex items-center gap-1 text-[10px] text-amber-300 font-semibold bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/40">
                          <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                          <span>4.9 (480+ Reviews)</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Framer-Style Signature Dishes Preview Cards */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400">
                        Signature Wood-Fired Dishes
                      </span>
                      <span className="text-[10px] text-amber-300/70 font-mono">Seasonal Selection</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {/* Dish 1 */}
                      <div className="rounded-xl bg-[#140d08] border border-amber-900/40 p-2.5 flex flex-col justify-between hover:border-amber-700/60 transition-all group">
                        <div className="relative rounded-lg overflow-hidden mb-2 aspect-[4/3] bg-black/40">
                          <img
                            src="https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=400&q=80"
                            alt="Truffle Tagliolini"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            referrerPolicy="no-referrer"
                            loading="lazy"
                          />
                          <span className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded bg-black/80 backdrop-blur-sm text-[10px] font-bold text-amber-300">
                            $28
                          </span>
                        </div>
                        <div>
                          <h5 className="text-xs font-bold text-amber-100 group-hover:text-amber-300 transition-colors">
                            Truffle Tagliolini
                          </h5>
                          <p className="text-[10px] text-amber-200/70 leading-tight mt-0.5 line-clamp-2">
                            Handmade ribbons, shaved winter black truffle, aged parmigiano.
                          </p>
                        </div>
                      </div>

                      {/* Dish 2 */}
                      <div className="rounded-xl bg-[#140d08] border border-amber-900/40 p-2.5 flex flex-col justify-between hover:border-amber-700/60 transition-all group">
                        <div className="relative rounded-lg overflow-hidden mb-2 aspect-[4/3] bg-black/40">
                          <img
                            src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=400&q=80"
                            alt="Mediterranean Branzino"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            referrerPolicy="no-referrer"
                            loading="lazy"
                          />
                          <span className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded bg-black/80 backdrop-blur-sm text-[10px] font-bold text-amber-300">
                            $36
                          </span>
                        </div>
                        <div>
                          <h5 className="text-xs font-bold text-amber-100 group-hover:text-amber-300 transition-colors">
                            Charred Branzino
                          </h5>
                          <p className="text-[10px] text-amber-200/70 leading-tight mt-0.5 line-clamp-2">
                            Wild sea bass, charred Amalfi lemon, caper herb salmoriglio.
                          </p>
                        </div>
                      </div>

                      {/* Dish 3 */}
                      <div className="rounded-xl bg-[#140d08] border border-amber-900/40 p-2.5 flex flex-col justify-between hover:border-amber-700/60 transition-all group">
                        <div className="relative rounded-lg overflow-hidden mb-2 aspect-[4/3] bg-black/40">
                          <img
                            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80"
                            alt="Wood-Fired Burrata Pizza"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            referrerPolicy="no-referrer"
                            loading="lazy"
                          />
                          <span className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded bg-black/80 backdrop-blur-sm text-[10px] font-bold text-amber-300">
                            $22
                          </span>
                        </div>
                        <div>
                          <h5 className="text-xs font-bold text-amber-100 group-hover:text-amber-300 transition-colors">
                            Wood-Fired Pizza
                          </h5>
                          <p className="text-[10px] text-amber-200/70 leading-tight mt-0.5 line-clamp-2">
                            48-hr fermented sourdough, smoked burrata, San Marzano DOP.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* The Embedded Live Sommelier & Concierge - Framer Glass Integration */}
                  <div className="rounded-xl bg-[#1b120a] p-3.5 sm:p-4 border border-amber-700/50 shadow-xl space-y-2.5 relative">
                    {/* Header of Embedded Agent */}
                    <div className="flex items-center justify-between pb-2 border-b border-amber-900/40">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg overflow-hidden shrink-0 border border-amber-500/60 bg-amber-950 flex items-center justify-center text-amber-200 font-serif font-black text-xs shadow-sm">
                          UB
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-bold text-amber-50">Bistro Sommelier &amp; Concierge</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          </div>
                          <span className="text-[10px] text-amber-300/80 block leading-tight">
                            Instant Table Bookings &amp; Wine Pairings 24/7
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-amber-950 text-amber-300 font-mono border border-amber-800/50">
                        Live Agent
                      </span>
                    </div>

                    {/* Live Conversation Snapshot */}
                    <div className="space-y-2 text-xs">
                      {/* Customer Question Bubble */}
                      <div className="flex items-end justify-end">
                        <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-2xl rounded-br-sm px-3 py-1.5 max-w-[88%] shadow-md font-normal leading-relaxed text-[11px] sm:text-xs">
                          Do you have a table for 4 tonight, and what wine pairs with the Branzino?
                        </div>
                      </div>

                      {/* Agent Intelligent Response Bubble */}
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full overflow-hidden shrink-0 mt-0.5 border border-amber-600/40 bg-amber-950 flex items-center justify-center text-amber-300 font-bold text-[10px]">
                          UB
                        </div>
                        <div className="bg-[#120b06] text-amber-100 border border-amber-900/50 rounded-2xl rounded-tl-sm px-3 py-2 max-w-[92%] space-y-2 shadow-sm text-[11px] sm:text-xs">
                          <p className="leading-relaxed">
                            Good evening! We have prime tables open tonight at <strong>7:15 PM</strong> and <strong>8:45 PM</strong>. For the wood-fired Branzino, our chilled <em>Vermentino di Sardegna</em> pairs exquisitely.
                          </p>
                          <div className="pt-0.5 flex flex-wrap gap-1.5">
                            <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-200 font-semibold border border-amber-500/30">
                              Reserve 7:15 PM Table
                            </span>
                            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30 inline-flex items-center gap-1">
                              <MessageCircle className="w-3 h-3" />
                              WhatsApp Host
                            </span>
                          </div>
                          <div className="pt-0.5 flex items-center gap-1 text-[10px] text-amber-400 font-medium">
                            <Zap className="w-3 h-3 text-amber-400 shrink-0" />
                            <span>Instant customer lead capture &bull; Zero missed reservations</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Multi-Channel Synchronized Routing Strip */}
                  <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                    <div className="p-2 rounded-lg bg-[#140d08] border border-amber-950">
                      <span className="block text-[11px] font-bold text-amber-100">Bistro Website</span>
                      <span className="text-[9px] text-amber-400">On-site Concierge</span>
                    </div>
                    <div className="p-2 rounded-lg bg-[#140d08] border border-amber-950">
                      <span className="block text-[11px] font-bold text-amber-100">WhatsApp</span>
                      <span className="text-[9px] text-emerald-400">Instant DMs</span>
                    </div>
                    <div className="p-2 rounded-lg bg-[#081024] border border-blue-950">
                      <span className="block text-[11px] font-bold text-slate-200">Maps &amp; Social</span>
                      <span className="text-[9px] text-sky-400">1-Tap Booking</span>
                    </div>
                  </div>

                  {/* Atmosphere & Opening Hours Strip */}
                  <div className="flex items-center justify-between pt-1 px-1 text-[10px] text-amber-300/70 border-t border-amber-950/80">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-amber-400" />
                      <span>142 Mercer St, Soho</span>
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-400" />
                      <span>Tue – Sun: 5:00 PM – 11:30 PM</span>
                    </span>
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="px-4 py-3 bg-[#081022] border-t border-blue-950 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                    <span>Live Preview Guarantee &bull; Test Before Public Launch</span>
                  </span>
                  <a
                    href="#agent-demo"
                    className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1"
                  >
                    <span>Test Interactive Demo</span>
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
