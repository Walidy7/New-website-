import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import {
  X,
  Menu,
  Home,
  Layers,
  Sparkles,
  Bot,
  PlayCircle,
  HelpCircle,
  Phone,
  ArrowRight
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
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'What We Do', href: '#what-we-do', icon: Layers },
    { label: 'Websites', href: '#websites', icon: Home },
    { label: 'Business Agent', href: '#business-agent', icon: Bot },
    { label: 'Interactive Demo', href: '#agent-demo', icon: PlayCircle },
    { label: 'How It Works', href: '#how-it-works', icon: Sparkles },
    { label: 'FAQ', href: '#faq', icon: HelpCircle },
    { label: 'Contact', href: '#contact', icon: Phone },
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
        <div className="flex items-center justify-between gap-4">
          {/* Left Column: Upper Agent Logo */}
          <div className="flex items-center justify-start min-w-0">
            <a
              href="#home"
              id="nav-logo"
              className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg group shrink-0"
            >
              <Logo size="md" />
            </a>
          </div>

          {/* Center Column: Desktop Navigation Links */}
          <nav
            id="desktop-nav-links"
            className="hidden lg:flex items-center justify-center gap-1 bg-[#090f20]/80 px-4 py-1.5 rounded-full border border-blue-900/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="px-3 xl:px-3.5 py-1.5 text-xs xl:text-sm font-medium text-slate-300 hover:text-white hover:bg-blue-600/15 rounded-full transition-all duration-150 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Column: CTA & Mobile Hamburger */}
          <div className="flex items-center gap-3 justify-end shrink-0">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contact');
              }}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm tracking-wide shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-200 active:scale-95 border border-blue-400/30"
            >
              <span>Upgrade Your Business</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <button
              id="nav-mobile-menu-btn"
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-xl bg-[#0d1629] border border-blue-900/50 text-slate-200 hover:text-white hover:bg-[#15223f] transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-expanded={menuOpen}
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-blue-400" />}
            </button>
          </div>
        </div>
      </div>

      {/* Modern Slide-Down Navigation Drawer for Mobile & Small Screens */}
      {menuOpen && (
        <div
          id="nav-menu-drawer"
          className="lg:hidden fixed inset-x-0 top-[100%] bg-[#040816]/98 backdrop-blur-2xl border-b border-blue-900/40 shadow-[0_25px_50px_rgba(0,0,0,0.95)] p-5 animate-in fade-in slide-in-from-top-3 duration-200 max-h-[85vh] overflow-y-auto"
        >
          <div className="max-w-xl mx-auto space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs uppercase font-extrabold text-blue-400 tracking-wider">
                Upper Agent Navigation
              </span>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 text-xs font-semibold flex items-center gap-1"
              >
                <X className="w-4 h-4" />
                <span>Close</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
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
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-slate-200 hover:text-white bg-[#0a1224] hover:bg-[#111e3b] border border-blue-950 hover:border-blue-600/40 transition-all duration-150 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-950/60 border border-blue-800/40 flex items-center justify-center text-blue-400 group-hover:text-white group-hover:bg-blue-600 transition-colors shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </div>

            {/* Quick Action in Drawer */}
            <div className="pt-3 border-t border-slate-800 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#contact');
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-extrabold rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 active:scale-95 transition-all duration-150 border border-blue-400/40"
              >
                <span>Upgrade Your Business</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
