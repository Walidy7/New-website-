export interface BusinessTheme {
  id: string;
  businessName: string;
  category: string;
  tagline: string;
  // Browser bar
  browserDomain: string;
  // Canvas & surface
  canvasBg: string; // e.g. Tailwind gradient or hex
  canvasText: string;
  navBg: string;
  navBorder: string;
  // Brand Identity
  brandLogoBg: string;
  brandLogoColor: string;
  brandAccentText: string;
  brandPillBg: string;
  brandPillText: string;
  brandPillBorder: string;
  // Hero Card
  heroCardBg: string;
  heroCardBorder: string;
  heroHeadingColor: string;
  heroSubtextColor: string;
  heroCtaBg: string;
  heroCtaHover: string;
  heroCtaText: string;
  heroCtaShadow: string;
  // Feature Cards
  featureCardBg: string;
  featureCardBorder: string;
  featureCardTitle: string;
  featureCardSubtext: string;
  featureCardHighlight: string;
  // Chat Widget
  chat: {
    headerBg: string;
    headerBorder: string;
    headerTitleColor: string;
    headerSubtitleColor: string;
    avatarBg: string;
    avatarBorder: string;
    streamBg: string;
    userBubbleBg: string;
    userBubbleText: string;
    agentBubbleBg: string;
    agentBubbleBorder: string;
    agentBubbleText: string;
    suggestionBg: string;
    suggestionHover: string;
    suggestionText: string;
    suggestionBorder: string;
    inputBarBg: string;
    inputBg: string;
    inputBorder: string;
    inputText: string;
    sendBtnBg: string;
    sendBtnHover: string;
    sendBtnText: string;
    triggerBtnBg: string;
    triggerBtnHover: string;
    triggerBtnBorder: string;
    triggerBtnText: string;
    triggerBtnGlow: string;
    badgeText: string;
  };
}

export const INDUSTRY_THEMES: Record<string, BusinessTheme> = {
  restaurant: {
    id: 'restaurant',
    businessName: 'The Urban Bistro & Bar',
    category: 'Wood-Fired Kitchen • Mediterranean',
    tagline: 'Artisanal Embers & Mediterranean Heritage',
    browserDomain: 'www.theurbanbistro.com/menu',
    canvasBg: 'bg-gradient-to-b from-[#140f0a] via-[#0d0906] to-[#070503]',
    canvasText: 'text-[#fbf4ea]',
    navBg: 'bg-[#181009]/95 backdrop-blur-md',
    navBorder: 'border-amber-900/50',
    brandLogoBg: 'bg-gradient-to-br from-amber-600 to-amber-900',
    brandLogoColor: 'text-[#fffbeb]',
    brandAccentText: 'text-amber-400',
    brandPillBg: 'bg-amber-950/80',
    brandPillText: 'text-amber-300',
    brandPillBorder: 'border-amber-700/60',
    heroCardBg: 'bg-gradient-to-br from-[#1f150d] via-[#160f09] to-[#0e0a06]',
    heroCardBorder: 'border-amber-800/40',
    heroHeadingColor: 'text-amber-50',
    heroSubtextColor: 'text-amber-200/80',
    heroCtaBg: 'bg-gradient-to-r from-amber-600 to-orange-600',
    heroCtaHover: 'hover:from-amber-500 hover:to-orange-500',
    heroCtaText: 'text-white',
    heroCtaShadow: 'shadow-[0_4px_25px_rgba(217,119,6,0.4)]',
    featureCardBg: 'bg-[#140d08]',
    featureCardBorder: 'border-amber-900/40',
    featureCardTitle: 'text-amber-100',
    featureCardSubtext: 'text-amber-200/70',
    featureCardHighlight: 'text-amber-400',
    chat: {
      headerBg: 'bg-gradient-to-r from-[#24160b] to-[#180e07]',
      headerBorder: 'border-amber-800/60',
      headerTitleColor: 'text-[#fffbeb]',
      headerSubtitleColor: 'text-amber-300',
      avatarBg: 'bg-amber-950',
      avatarBorder: 'border-amber-500/60',
      streamBg: 'bg-[#0a0704]',
      userBubbleBg: 'bg-gradient-to-r from-amber-600 to-orange-600',
      userBubbleText: 'text-white',
      agentBubbleBg: 'bg-[#180f08]',
      agentBubbleBorder: 'border-amber-900/50',
      agentBubbleText: 'text-amber-100',
      suggestionBg: 'bg-[#22140a]',
      suggestionHover: 'hover:bg-amber-800/30',
      suggestionText: 'text-amber-200',
      suggestionBorder: 'border-amber-700/50',
      inputBarBg: 'bg-[#150d07]',
      inputBg: 'bg-[#090604]',
      inputBorder: 'border-amber-900/60',
      inputText: 'text-amber-100',
      sendBtnBg: 'bg-amber-600 hover:bg-amber-500',
      sendBtnHover: 'hover:bg-amber-500',
      sendBtnText: 'text-white',
      triggerBtnBg: 'bg-gradient-to-r from-amber-600 to-orange-600',
      triggerBtnHover: 'hover:from-amber-500 hover:to-orange-500',
      triggerBtnBorder: 'border-amber-500/60',
      triggerBtnText: 'text-white',
      triggerBtnGlow: 'shadow-[0_0_25px_rgba(217,119,6,0.5)]',
      badgeText: 'Table Booking & Sommelier'
    }
  },
  hotel: {
    id: 'hotel',
    businessName: 'Azure Grand Hotel & Coastal Villas',
    category: 'Oceanfront Luxury Suites & Spa',
    tagline: 'Refined Coastal Suites & Executive Concierge',
    browserDomain: 'www.azuregrandhotel.com/suites',
    canvasBg: 'bg-gradient-to-b from-[#051820] via-[#041117] to-[#020a0e]',
    canvasText: 'text-[#e6f7f8]',
    navBg: 'bg-[#09222c]/90',
    navBorder: 'border-[#134050]',
    brandLogoBg: 'bg-gradient-to-br from-teal-500 to-cyan-700',
    brandLogoColor: 'text-[#f0fdfa]',
    brandAccentText: 'text-teal-400',
    brandPillBg: 'bg-teal-950/80',
    brandPillText: 'text-teal-300',
    brandPillBorder: 'border-teal-700/50',
    heroCardBg: 'bg-gradient-to-br from-[#0c2b36] via-[#081e26] to-[#05141a]',
    heroCardBorder: 'border-teal-800/40',
    heroHeadingColor: 'text-[#f0fdfa]',
    heroSubtextColor: 'text-[#99f6e4]/80',
    heroCtaBg: 'bg-gradient-to-r from-teal-600 to-cyan-600',
    heroCtaHover: 'hover:from-teal-500 hover:to-cyan-500',
    heroCtaText: 'text-white',
    heroCtaShadow: 'shadow-[0_4px_20px_rgba(13,148,136,0.35)]',
    featureCardBg: 'bg-[#071d24]',
    featureCardBorder: 'border-[#113d4b]',
    featureCardTitle: 'text-[#ccfbf1]',
    featureCardSubtext: 'text-[#2dd4bf]',
    featureCardHighlight: 'text-teal-300',
    chat: {
      headerBg: 'bg-gradient-to-r from-[#0d313d] to-[#082029]',
      headerBorder: 'border-teal-800/60',
      headerTitleColor: 'text-[#f0fdfa]',
      headerSubtitleColor: 'text-teal-300',
      avatarBg: 'bg-teal-950',
      avatarBorder: 'border-teal-500/50',
      streamBg: 'bg-[#030d12]',
      userBubbleBg: 'bg-gradient-to-r from-teal-600 to-cyan-600',
      userBubbleText: 'text-white',
      agentBubbleBg: 'bg-[#09222a]',
      agentBubbleBorder: 'border-teal-800/40',
      agentBubbleText: 'text-[#ccfbf1]',
      suggestionBg: 'bg-[#0c2933]',
      suggestionHover: 'hover:bg-teal-700/30',
      suggestionText: 'text-teal-200',
      suggestionBorder: 'border-teal-700/40',
      inputBarBg: 'bg-[#061820]',
      inputBg: 'bg-[#020b0e]',
      inputBorder: 'border-teal-900/50',
      inputText: 'text-teal-100',
      sendBtnBg: 'bg-teal-600 hover:bg-teal-500',
      sendBtnHover: 'hover:bg-teal-500',
      sendBtnText: 'text-white',
      triggerBtnBg: 'bg-gradient-to-r from-teal-700 to-cyan-700',
      triggerBtnHover: 'hover:from-teal-600 hover:to-cyan-600',
      triggerBtnBorder: 'border-teal-400/60',
      triggerBtnText: 'text-white',
      triggerBtnGlow: 'shadow-[0_0_25px_rgba(20,184,166,0.45)]',
      badgeText: 'Guest Concierge 24/7'
    }
  },
  salon: {
    id: 'salon',
    businessName: 'Velvet Hair & Beauty Atelier',
    category: 'Hair Styling, Color Bar & Spa Care',
    tagline: 'Master Styling & Organic Beauty Sanctuary',
    browserDomain: 'www.velvetatelier.com/services',
    canvasBg: 'bg-gradient-to-b from-[#1c0c1e] via-[#140816] to-[#0c040d]',
    canvasText: 'text-[#fdf2f8]',
    navBg: 'bg-[#251028]/90',
    navBorder: 'border-[#4a1c50]',
    brandLogoBg: 'bg-gradient-to-br from-rose-500 to-pink-700',
    brandLogoColor: 'text-[#fff1f2]',
    brandAccentText: 'text-rose-400',
    brandPillBg: 'bg-rose-950/80',
    brandPillText: 'text-rose-300',
    brandPillBorder: 'border-rose-700/50',
    heroCardBg: 'bg-gradient-to-br from-[#2f1334] via-[#220c26] to-[#18081c]',
    heroCardBorder: 'border-rose-900/40',
    heroHeadingColor: 'text-[#fff1f2]',
    heroSubtextColor: 'text-[#fbcfe8]/80',
    heroCtaBg: 'bg-gradient-to-r from-rose-600 to-pink-600',
    heroCtaHover: 'hover:from-rose-500 hover:to-pink-500',
    heroCtaText: 'text-white',
    heroCtaShadow: 'shadow-[0_4px_20px_rgba(225,29,72,0.35)]',
    featureCardBg: 'bg-[#200b24]',
    featureCardBorder: 'border-[#42164a]',
    featureCardTitle: 'text-[#ffe4e6]',
    featureCardSubtext: 'text-[#fb7185]',
    featureCardHighlight: 'text-rose-300',
    chat: {
      headerBg: 'bg-gradient-to-r from-[#341239] to-[#240b28]',
      headerBorder: 'border-rose-800/60',
      headerTitleColor: 'text-[#fff1f2]',
      headerSubtitleColor: 'text-rose-300',
      avatarBg: 'bg-rose-950',
      avatarBorder: 'border-rose-500/50',
      streamBg: 'bg-[#0f0410]',
      userBubbleBg: 'bg-gradient-to-r from-rose-600 to-pink-600',
      userBubbleText: 'text-white',
      agentBubbleBg: 'bg-[#250d29]',
      agentBubbleBorder: 'border-rose-800/40',
      agentBubbleText: 'text-[#fce7f3]',
      suggestionBg: 'bg-[#2c1032]',
      suggestionHover: 'hover:bg-rose-700/30',
      suggestionText: 'text-rose-200',
      suggestionBorder: 'border-rose-700/40',
      inputBarBg: 'bg-[#1b081e]',
      inputBg: 'bg-[#0b030d]',
      inputBorder: 'border-rose-900/50',
      inputText: 'text-rose-100',
      sendBtnBg: 'bg-rose-600 hover:bg-rose-500',
      sendBtnHover: 'hover:bg-rose-500',
      sendBtnText: 'text-white',
      triggerBtnBg: 'bg-gradient-to-r from-rose-700 to-pink-700',
      triggerBtnHover: 'hover:from-rose-600 hover:to-pink-600',
      triggerBtnBorder: 'border-rose-400/60',
      triggerBtnText: 'text-white',
      triggerBtnGlow: 'shadow-[0_0_25px_rgba(225,29,72,0.45)]',
      badgeText: 'Appointments & Prices'
    }
  },
  realestate: {
    id: 'realestate',
    businessName: 'Summit Prime Properties & Advisory',
    category: 'Commercial & Luxury Residential',
    tagline: 'Architectural Property Advisors & Brokerage',
    browserDomain: 'www.summitprimeproperties.com/listings',
    canvasBg: 'bg-gradient-to-b from-[#081812] via-[#05110d] to-[#020906]',
    canvasText: 'text-[#eefdf5]',
    navBg: 'bg-[#0e241c]/90',
    navBorder: 'border-[#1b4a3a]',
    brandLogoBg: 'bg-gradient-to-br from-emerald-600 to-teal-800',
    brandLogoColor: 'text-[#ecfdf5]',
    brandAccentText: 'text-emerald-400',
    brandPillBg: 'bg-emerald-950/80',
    brandPillText: 'text-emerald-300',
    brandPillBorder: 'border-emerald-700/50',
    heroCardBg: 'bg-gradient-to-br from-[#123126] via-[#0c221a] to-[#071611]',
    heroCardBorder: 'border-emerald-800/40',
    heroHeadingColor: 'text-[#ecfdf5]',
    heroSubtextColor: 'text-[#a7f3d0]/80',
    heroCtaBg: 'bg-gradient-to-r from-emerald-600 to-teal-600',
    heroCtaHover: 'hover:from-emerald-500 hover:to-teal-500',
    heroCtaText: 'text-white',
    heroCtaShadow: 'shadow-[0_4px_20px_rgba(16,185,129,0.35)]',
    featureCardBg: 'bg-[#091e17]',
    featureCardBorder: 'border-[#154636]',
    featureCardTitle: 'text-[#d1fae5]',
    featureCardSubtext: 'text-[#34d399]',
    featureCardHighlight: 'text-emerald-300',
    chat: {
      headerBg: 'bg-gradient-to-r from-[#13372b] to-[#0c241c]',
      headerBorder: 'border-emerald-800/60',
      headerTitleColor: 'text-[#ecfdf5]',
      headerSubtitleColor: 'text-emerald-300',
      avatarBg: 'bg-emerald-950',
      avatarBorder: 'border-emerald-500/50',
      streamBg: 'bg-[#030d09]',
      userBubbleBg: 'bg-gradient-to-r from-emerald-600 to-teal-600',
      userBubbleText: 'text-white',
      agentBubbleBg: 'bg-[#0d271e]',
      agentBubbleBorder: 'border-emerald-800/40',
      agentBubbleText: 'text-[#d1fae5]',
      suggestionBg: 'bg-[#113327]',
      suggestionHover: 'hover:bg-emerald-700/30',
      suggestionText: 'text-emerald-200',
      suggestionBorder: 'border-emerald-700/40',
      inputBarBg: 'bg-[#081a14]',
      inputBg: 'bg-[#020b08]',
      inputBorder: 'border-emerald-900/50',
      inputText: 'text-emerald-100',
      sendBtnBg: 'bg-emerald-600 hover:bg-emerald-500',
      sendBtnHover: 'hover:bg-emerald-500',
      sendBtnText: 'text-white',
      triggerBtnBg: 'bg-gradient-to-r from-emerald-700 to-teal-700',
      triggerBtnHover: 'hover:from-emerald-600 hover:to-teal-600',
      triggerBtnBorder: 'border-emerald-400/60',
      triggerBtnText: 'text-white',
      triggerBtnGlow: 'shadow-[0_0_25px_rgba(16,185,129,0.45)]',
      badgeText: 'Listings & Broker Connect'
    }
  }
};

