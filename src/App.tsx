import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhatWeDo } from './components/WhatWeDo';
import { WhyBusinessesNeedThis } from './components/WhyBusinessesNeedThis';
import { InteractiveAgentDemo } from './components/InteractiveAgentDemo';
import { WebsiteServiceSection } from './components/WebsiteServiceSection';
import { AiAgentSection } from './components/AiAgentSection';
import { MultiChannelVisual } from './components/MultiChannelVisual';
import { PreviewBeforeLaunch } from './components/PreviewBeforeLaunch';
import { HowItWorks } from './components/HowItWorks';
import { ServicesGrid } from './components/ServicesGrid';
import { WhyUpperAgent } from './components/WhyUpperAgent';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 selection:bg-blue-600 selection:text-white relative w-full max-w-full overflow-x-hidden">
      {/* Global Navigation */}
      <Navbar />

      <main className="w-full max-w-full overflow-x-hidden">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. What Upper Agent Does (3 Core Pillars) */}
        <WhatWeDo />

        {/* 3. Market Reality: Why Businesses Need Modern Sites & Agents */}
        <WhyBusinessesNeedThis />

        {/* 4. Live Interactive Visual Demo (Website with Embedded Agent) */}
        <InteractiveAgentDemo />

        {/* 5. Website Building & Modernization Service Section */}
        <WebsiteServiceSection />

        {/* 6. Business AI Agent Service Section */}
        <AiAgentSection />

        {/* 7. Multi-Channel Unified Architecture Visual (Web, WhatsApp, Telegram) */}
        <MultiChannelVisual />

        {/* 8. Preview Before Final Delivery Guarantee */}
        <PreviewBeforeLaunch />

        {/* 9. How It Works (5-Step Process) */}
        <HowItWorks />

        {/* 10. Full Services Grid */}
        <ServicesGrid />

        {/* 11. Why Upper Agent (Trust & Pillars) */}
        <WhyUpperAgent />

        {/* 12. Frequently Asked Questions */}
        <FaqSection />

        {/* 15. Final Call to Action & Direct Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
