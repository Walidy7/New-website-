import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import {
  X,
  MoreVertical,
  Home,
  Globe,
  Layers,
  Sparkles,
  Bot,
  PlayCircle,
  HelpCircle,
  Phone,
  ArrowRight,
  Briefcase
} from 'lucide-react';

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', icon: Home, desc: 'Top overview & hero' },
    { label: 'What We Do', href: '#what-we-do', icon: Layers, desc: 'Websites & 24/7 AI agents' },
    { label: 'Websites', href: '#websites', icon: Globe, desc: 'Modern designs & revamps' },
    { label: 'Business Agent', href: '#business-agent', icon: Bot, desc: 'Automated 24/7 client concierge' },
    { label: 'Interactive Demo', href: '#agent-demo', icon: PlayCircle, desc: 'Test live simulated assistant' },
    { label: 'How It Works', href: '#how-it-works', icon: Sparkles, desc: 'Simple 5-step delivery process' },
    { label: 'Services', href: '#services', icon: Briefcase, desc: 'All business capabilities' },
    { label: 'FAQ', href: '#faq', icon: HelpCircle, desc: 'Common questions answered' },
    { label: 'Contact', href: '#contact', icon: Phone, desc: 'Direct WhatsApp & consultations' },
  ];

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-2.5 sm:py-3 bg-[#030712]/95 backdrop-blur-xl border-b border-blue-900/30 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'py-3.5 sm:py-4 bg-[#030712]/80 backdrop-blur-md border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          {/* Left Column: Upper Agent Logo */}
          <div className="flex items-center justify-start min-w-0">
            <a
              href="#home"
              id="nav-logo"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#home');
              }}
              className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg group shrink-0"
            >
              <Logo size="md" />
            </a>
          </div>

          {/* Center Column: Desktop Navigation Links (Quick Links) */}
          <nav
            id="desktop-nav-links"
            className="hidden xl:flex items-center justify-center gap-1 bg-[#090f20]/80 px-3 py-1.5 rounded-full border border-blue-900/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
          >
            {navLinks.slice(0, 7).map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="px-2.5 py-1 text-xs xl:text-sm font-medium text-slate-300 hover:text-white hover:bg-blue-600/15 rounded-full transition-all duration-150 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contact');
              }}
              className="px-2.5 py-1 text-xs xl:text-sm font-medium text-slate-300 hover:text-white hover:bg-blue-600/15 rounded-full transition-all duration-150 whitespace-nowrap"
            >
              Contact
            </a>
          </nav>

          {/* Right Column: CTA & 3-Dot Menu Button */}
          <div className="flex items-center gap-2.5 sm:gap-3 justify-end shrink-0">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contact');
              }}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm tracking-wide shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-200 active:scale-95 border border-blue-400/30"
            >
              <span>Upgrade Your Business</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            {/* 3-Dot Menu Button (Accessible on both Mobile & Desktop) */}
            <button
              id="nav-menu-btn"
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className={`inline-flex items-center justify-center gap-1.5 p-2 sm:px-3 sm:py-2 rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 border ${
                menuOpen
                  ? 'bg-blue-600 text-white border-blue-400 shadow-[0_0_15px_rgba(37,99,235,0.5)]'
                  : 'bg-[#0d1629] text-slate-200 hover:text-white hover:bg-[#15223f] border-blue-900/50 hover:border-blue-500/50 shadow-sm'
              }`}
              aria-expanded={menuOpen}
              aria-label="Toggle navigation menu (Home, Contact, Services)"
              title="Navigation Menu"
            >
              {menuOpen ? (
                <>
                  <X className="w-5 h-5 text-white" />
                  <span className="text-xs font-bold hidden sm:inline">Close</span>
                </>
              ) : (
                <>
                  <MoreVertical className="w-5 h-5 text-blue-400" />
                  <span className="text-xs font-semibold text-slate-200 hidden sm:inline">Menu</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 3-Dot Navigation Drawer / Dropdown */}
      {menuOpen && (
        <>
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm z-40 transition-opacity"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Menu Drawer */}
          <div
            id="nav-menu-drawer"
            className="fixed inset-x-0 top-[56px] sm:top-[68px] z-50 bg-[#040816]/98 backdrop-blur-2xl border-b border-blue-900/50 shadow-[0_25px_60px_rgba(0,0,0,0.95)] px-4 py-5 sm:p-7 max-h-[85vh] overflow-y-auto animate-in fade-in slide-in-from-top-3 duration-200"
          >
            <div className="max-w-4xl mx-auto space-y-5">
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-xs uppercase font-extrabold text-blue-400 tracking-wider">
                    Upper Agent Navigation
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="text-slate-400 hover:text-white px-2.5 py-1 rounded-lg hover:bg-slate-800 text-xs font-semibold flex items-center gap-1 transition-colors"
                >
                  <X className="w-4 h-4" />
                  <span>Close</span>
                </button>
              </div>

              {/* Grid of Navigation Links (Home, What We Do, Websites, Business Agent, etc.) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {navLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.href);
                      }}
                      className="flex items-center gap-3.5 p-3 rounded-xl bg-[#0a1224] hover:bg-[#111e3b] border border-blue-950 hover:border-blue-600/40 transition-all duration-150 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-blue-950/70 border border-blue-800/40 flex items-center justify-center text-blue-400 group-hover:text-white group-hover:bg-blue-600 transition-colors shrink-0 shadow-inner">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors truncate">
                          {link.label}
                        </span>
                        <span className="text-xs text-slate-400 group-hover:text-slate-300 truncate">
                          {link.desc}
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Quick Actions Footer inside Drawer */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                  <span className="font-semibold text-slate-300">Direct Contact:</span>
                  <a
                    href="https://wa.me/252687083529"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold"
                  >
                    <span>WhatsApp (+252 687083529)</span>
                  </a>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('#contact');
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 active:scale-95 transition-all duration-150 border border-blue-400/40"
                  >
                    <span>Upgrade Your Business</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
