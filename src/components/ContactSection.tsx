import React, { useState } from 'react';
import { CONTACT_INFO, getWhatsAppUrl } from '../data/content';
import {
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Clock,
  Sparkles,
  ArrowRight,
  Globe,
  CheckCircle2
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [selectedService, setSelectedService] = useState('New Website & AI Agent');

  const handleLaunchWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    let msg = `Hello Upper Agent, I would like to discuss services for my business`;
    if (businessName.trim()) {
      msg += ` "${businessName.trim()}"`;
    }
    if (businessType.trim()) {
      msg += ` (${businessType.trim()})`;
    }
    msg += `. I am specifically interested in: ${selectedService}.`;

    window.open(getWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-[#030712] border-t border-blue-950/60 overflow-hidden">
      {/* Background accents */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-600/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* MAJOR FINAL CTA BLOCK */}
        <div className="rounded-3xl bg-[#070e20] border border-blue-900/60 p-8 sm:p-12 lg:p-16 text-center max-w-5xl mx-auto mb-16 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-800/50 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Take The Next Step</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Give Your Business a{' '}
            <span className="text-blue-400">Better Online Presence?</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Tell us what your business needs and let's build something that works for you.
            From custom websites to intelligent WhatsApp &amp; website agents, we're ready to start.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              id="cta-talk-upper-agent"
              href={getWhatsAppUrl(CONTACT_INFO.defaultMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-base transition-all duration-200 shadow-xl shadow-blue-600/30 active:scale-95 border border-blue-400/40"
            >
              <MessageCircle className="w-5 h-5 text-white fill-white" />
              <span>Message Us on WhatsApp</span>
            </a>

            <a
              id="cta-start-website"
              href="#project-form"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#091226] hover:bg-[#0e1b3d] text-slate-100 font-bold text-base border border-blue-900/60 hover:border-blue-400/60 transition-all duration-200 active:scale-95"
            >
              <Send className="w-4 h-4 text-blue-400" />
              <span>Fill Quick Inquiry Form</span>
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Fast reply on WhatsApp &bull; Direct consultation, no obligations</span>
          </div>
        </div>

        {/* DETAILED CONTACT & INQUIRY MODULE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-start">
          {/* Left Column: Direct Agency Details */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#070e20] border border-blue-950 space-y-6">
            <div>
              <span className="text-xs uppercase font-bold text-blue-400 tracking-wider">
                Direct Contact
              </span>
              <h3 className="text-xl font-black text-white mt-1">UPPER AGENT</h3>
              <p className="text-xs text-slate-400 mt-1">
                Websites &amp; Intelligent Customer Communication Solutions
              </p>
            </div>

            {/* Core Service Bullet Points */}
            <div className="space-y-2 pt-2 border-t border-blue-950 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                <span>Website Development &amp; Custom Coding</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                <span>Website Redesign &amp; Modernization</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                <span>Business Agents &amp; Customer Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Customer Communication Solutions</span>
              </div>
            </div>

            {/* Prominent WhatsApp Card */}
            <div className="p-4 rounded-xl bg-[#091226] border border-blue-950 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Official Business WhatsApp</span>
              </div>

              <div className="text-lg font-mono font-bold text-white">
                {CONTACT_INFO.phoneDisplay}
              </div>

              <a
                id="contact-whatsapp-button"
                href={getWhatsAppUrl(CONTACT_INFO.defaultMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs sm:text-sm transition-all shadow-md shadow-blue-600/30 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-white fill-white" />
                <span>Open Pre-filled WhatsApp Message</span>
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Clock className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Inquiries answered promptly via WhatsApp</span>
            </div>
          </div>

          {/* Right Column: Fast 1-Click WhatsApp Inquiry Form */}
          <div id="project-form" className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#070e20] border border-blue-950">
            <span className="text-xs uppercase font-bold text-blue-400 tracking-wider">
              Quick Project Form
            </span>
            <h4 className="text-lg font-bold text-white mt-1 mb-1">
              Tell Us About Your Project
            </h4>
            <p className="text-xs text-slate-400 mb-6">
              Fill this in to generate an instant, organized WhatsApp inquiry. One tap opens your chat directly with our team.
            </p>

            <form onSubmit={handleLaunchWhatsApp} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Your Business Name
                </label>
                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. City Prime Restaurant, Horizon Travel..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#040816] border border-blue-950 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-blue-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Type of Business / Industry
                </label>
                <input
                  type="text"
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  placeholder="e.g. Café, Hair Salon, Garage, Real Estate..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#040816] border border-blue-950 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-blue-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  What do you need help with?
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#040816] border border-blue-950 text-white text-xs sm:text-sm focus:outline-none focus:border-blue-400"
                >
                  <option value="New Website & AI Agent">Complete New Website + AI Agent</option>
                  <option value="Website Development Only">Website Development Only</option>
                  <option value="Website Redesign">Redesigning / Upgrading an Existing Website</option>
                  <option value="AI Customer Agent for WhatsApp & Web">AI Customer Agent for WhatsApp &amp; Web</option>
                  <option value="General Consultation">General Inquiry / Consultation</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-xl shadow-blue-600/30 active:scale-95"
              >
                <Send className="w-4 h-4 text-white" />
                <span>Send Inquiry Directly on WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
