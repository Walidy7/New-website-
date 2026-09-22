import {
  ServiceItem,
  DemoIndustry,
  PortfolioProject,
  StepItem,
  ChannelCard,
  IndustryCategory,
  FaqItem,
  WhatWeDoPillar
} from '../types';

export const CONTACT_INFO = {
  name: 'Upper Agent',
  tagline: 'Your Business, Upgraded.',
  subtagline: 'Websites and intelligent customer experiences built for modern businesses.',
  phoneDisplay: '+252 687083529',
  phoneRaw: '252687083529',
  defaultMessage: 'Hello Upper Agent, I would like to learn more about upgrading my website and customer communication system.',
  websiteBuildingMessage: 'Hello Upper Agent, I want to discuss building or upgrading a website for my business.',
  agentMessage: 'Hello Upper Agent, I am interested in adding an intelligent business agent directly to my website.',
};

export function getWhatsAppUrl(customMessage?: string): string {
  const text = encodeURIComponent(customMessage || CONTACT_INFO.defaultMessage);
  return `https://wa.me/${CONTACT_INFO.phoneRaw}?text=${text}`;
}

export const WHAT_WE_DO_PILLARS: WhatWeDoPillar[] = [
  {
    id: 'build-websites',
    title: 'Professional Website Building',
    tagline: 'Engineered for speed, authority, and conversions',
    description: 'We design and develop bespoke, high-performance websites from the ground up. Crafted to look established, work flawlessly on mobile devices, and turn casual visitors into paying clients.',
    iconName: 'Globe',
    badge: 'Flagship Craft',
    deliverables: [
      'Tailored architectural design reflecting your exact industry standards',
      'Mobile-first performance tested across iOS & Android smartphones',
      'High-contrast visual hierarchy that commands trust instantly',
      'Frictionless contact & conversion funnels (WhatsApp, calls, forms)'
    ],
    highlight: 'Instant brand credibility & rapid loading speeds with zero template bloat'
  },
  {
    id: 'upgrade-websites',
    title: 'Existing Website Upgrades',
    tagline: 'Modernize without starting from scratch',
    description: 'Already have a website that feels outdated, slow, or difficult to use on phones? We overhaul your visual presentation, fix responsiveness, and upgrade performance with zero downtime.',
    iconName: 'RefreshCw',
    badge: 'Modernization',
    deliverables: [
      'Complete aesthetic redesign aligned with modern digital standards',
      'Mobile user experience (UX) repair and navigation simplification',
      'Performance tune-up for faster load times on cellular connections',
      'Integration of modern inquiry workflows and direct communication'
    ],
    highlight: 'Retain your existing domain and business history while gaining a modern edge'
  },
  {
    id: 'business-agents',
    title: 'Intelligent Business Agents',
    tagline: '24/7 on-site concierge that never misses a customer',
    description: 'We embed a custom, intelligent agent directly into your website. It answers customer questions, provides pricing and service info, handles order requests, and syncs seamlessly with WhatsApp and Telegram.',
    iconName: 'Bot',
    badge: 'Competitive Advantage',
    deliverables: [
      'Discreet, elegant on-site assistant widget tailored to your branding',
      'Trained accurately on your business FAQs, catalog, and policies',
      'Captures customer orders, table bookings, and consultation leads',
      'Unified multi-channel routing into WhatsApp Business and Telegram'
    ],
    highlight: 'Answers customer inquiries in 3 seconds, day or night, even while you sleep'
  }
];

export const WHY_BUSINESSES_NEED_THIS = [
  {
    metric: '78%',
    label: 'Buy From First Responder',
    headline: 'Slow Replies Cost You Deals',
    description: 'When potential clients reach out, they rarely wait hours for an answer. An intelligent on-site and WhatsApp agent answers questions in seconds and captures the lead before they check your competitor.'
  },
  {
    metric: '84%',
    label: 'Judge Credibility by Design',
    headline: 'Outdated Websites Hurt Trust',
    description: 'Your website is your storefront. An outdated, slow, or clunky mobile site makes customers question your business quality. Upper Agent builds modern experiences that command immediate authority.'
  },
  {
    metric: '24/7',
    label: 'Continuous Customer Capture',
    headline: 'Inquiries Happen After Hours',
    description: 'Over 40% of customer research happens in the evening or on weekends. Upper Agent keeps your business working around the clock—answering queries, detailing prices, and collecting order details.'
  },
  {
    metric: '1-Tap',
    label: 'Direct Channel Connection',
    headline: 'Customers Want Everyday Messaging',
    description: 'Visitors do not want complicated forms. We connect your web visitors directly into your WhatsApp and Telegram channels with organized, pre-formatted inquiries that make closing sales effortless.'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'what-does-upper-agent-do',
    category: 'General',
    question: 'What does Upper Agent do for my business?',
    answer: 'Upper Agent is a digital agency that builds modern, high-performance business websites, upgrades existing outdated sites, and embeds custom 24/7 intelligent business agents. Our agents live directly on your website and can also connect through WhatsApp and Telegram to answer client questions, handle orders, and capture leads automatically.'
  },
  {
    id: 'improve-existing-site',
    category: 'Websites',
    question: 'Can you improve my existing website without rebuilding it completely from scratch?',
    answer: 'Yes! We specialize in both new website creation and website modernization. If you already have a domain and content, we can redesign the visual interface, fix mobile responsiveness, speed up load times, and integrate our intelligent agent without disrupting your existing operations.'
  },
  {
    id: 'how-agent-works',
    category: 'Business Agents',
    question: 'How does the business agent know about my specific business?',
    answer: 'During setup, we train your agent on your exact business information: your service menu, pricing structure, opening hours, location, delivery policies, and frequently asked questions. It speaks in a professional tone that accurately reflects your business brand.'
  },
  {
    id: 'orders-and-bookings',
    category: 'Business Agents',
    question: 'Can the agent handle customer orders, quotes, or appointment requests?',
    answer: 'Yes. The agent is structured to collect required details from customers (such as chosen items, preferred date/time, name, and contact details). It organizes this information and immediately routes it to your phone via WhatsApp or email so you can fulfill the order or confirm the booking with zero confusion.'
  },
  {
    id: 'whatsapp-telegram',
    category: 'Channels',
    question: 'How does the agent connect to WhatsApp and Telegram?',
    answer: 'We configure a unified communication system. Visitors on your website can chat with the embedded agent directly, or tap a button to continue the conversation in WhatsApp with all context pre-filled. We also configure dedicated automated agents directly for WhatsApp Business and Telegram.'
  },
  {
    id: 'preview-before-launch',
    category: 'Process',
    question: 'Can I test and preview the website and agent before it goes live?',
    answer: 'Absolutely. We provide a private live preview link. You can open the website on your phone, test every page, talk to the agent, test the buttons, and request any adjustments. You only approve the final launch when you are 100% satisfied.'
  },
  {
    id: 'turnaround-time',
    category: 'Timeline',
    question: 'How fast can Upper Agent build and deliver my project?',
    answer: 'Most standard business websites and agent integrations are ready for private preview within 3 to 5 business days. Once you test and approve the preview, we handle domain connection and public launch immediately.'
  },
  {
    id: 'support-and-updates',
    category: 'Support',
    question: 'What kind of support do I receive after launch?',
    answer: 'You have direct founder contact via WhatsApp (+252 687083529). Whenever you need to update prices, add new services, adjust opening hours, or update agent answers, we handle adjustments promptly with no agency red tape.'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-dev',
    title: 'Website Development',
    tagline: 'High-performance websites tailored to your business',
    description: 'We design and engineer bespoke, modern business websites that showcase your products, capture inquiries, and build instant trust with every visitor.',
    iconName: 'Globe',
    badge: 'Core Service',
    features: [
      'Custom design tailored to your specific industry',
      'Mobile-first layout optimized for WhatsApp visitors',
      'Fast loading speeds with zero bloat',
      'Clear contact, booking, and inquiry forms'
    ]
  },
  {
    id: 'web-redesign',
    title: 'Website Redesign',
    tagline: 'Transform outdated pages into high-converting experiences',
    description: 'Upgrade your existing outdated website with a fresh, contemporary design, improved structure, and a modern customer journey that reflects the true caliber of your work.',
    iconName: 'RefreshCw',
    badge: 'Modernization',
    features: [
      'Complete visual overhaul and brand alignment',
      'Fix mobile responsiveness and slow load times',
      'Re-organize navigation so visitors find what they need in seconds',
      'Seamless transition with zero downtime'
    ]
  },
  {
    id: 'web-improvement',
    title: 'Website Improvement',
    tagline: 'Continuous speed, usability, and conversion upgrades',
    description: 'Enhance your current online presence without starting from scratch. We refine user experience, polish mobile usability, and implement high-conversion contact funnels.',
    iconName: 'TrendingUp',
    features: [
      'Mobile user experience (UX) enhancement',
      'Direct WhatsApp and click-to-call integrations',
      'Product and service catalog presentation polish',
      'Speed optimization and technical tune-ups'
    ]
  },
  {
    id: 'business-agent',
    title: 'Business Agent',
    tagline: '24/7 intelligent customer communication built for your business',
    description: 'An automated customer-support assistant tailored directly to your products, pricing, frequently asked questions, and booking policies.',
    iconName: 'Bot',
    badge: 'High Impact',
    features: [
      'Trained specifically on your business information',
      'Answers customer questions accurately in seconds',
      'Never misses an inquiry, even when you are asleep',
      'Seamlessly transfers complex queries to your human staff'
    ]
  },
  {
    id: 'website-agent',
    title: 'Website Agent',
    tagline: 'An on-site assistant guiding visitors into paying customers',
    description: 'A discreet, elegant assistant widget embedded directly into your website. It guides browsing visitors, answers doubts, and collects lead details before they leave.',
    iconName: 'MessageSquareText',
    features: [
      'Modern, non-intrusive floating chat widget',
      'Instant answers to pricing, services, and location',
      'Interactive service guidance and quote collection',
      'Matches your brand typography and colors perfectly'
    ]
  },
  {
    id: 'messaging-agent',
    title: 'WhatsApp & Telegram Agent',
    tagline: 'Automate customer conversations where your clients already chat',
    description: 'Meet your clients directly on WhatsApp and Telegram. Provide instant automated replies, product catalogs, and inquiry collection in everyday chat apps.',
    iconName: 'Send',
    badge: 'Popular',
    features: [
      'Official WhatsApp Business and Telegram compatibility',
      'Instant answers to repetitive customer DMs',
      'Automatic order detail and appointment inquiry collection',
      'Keeps your customer communication organized and responsive'
    ]
  },
  {
    id: 'customer-communication',
    title: 'Customer Communication',
    tagline: 'Unified customer inquiry management',
    description: 'Bridge the gap between visitor curiosity and confirmed orders. We build systems that make it effortless for customers to reach you and for you to close deals.',
    iconName: 'UsersRound',
    features: [
      'Direct one-tap WhatsApp routing from any web page',
      'Pre-formatted inquiry messages that save client time',
      'Lead notifications sent straight to your phone',
      'Eliminates lost customer messages across fragmented channels'
    ]
  }
];

export const DEMO_INDUSTRIES: DemoIndustry[] = [
  {
    id: 'restaurant',
    name: 'Restaurant & Café',
    businessName: 'The Urban Bistro',
    category: 'Food & Dining',
    heroHeadline: 'Artisan Wood-Fired Kitchen & Espresso Bar',
    heroSubheadline: 'Handmade pasta, seasonal Mediterranean small plates, and roasted craft coffees.',
    accentColor: '#3b82f6',
    chatPreset: {
      greeting: 'Welcome to The Urban Bistro! I can assist you with our menu, tonight\'s table reservations, or private dining.',
      suggestions: [
        'What services do you offer?',
        'I want to place an order.',
        'What are your opening hours?',
        'Can I book a table for 4 tonight?'
      ],
      qaPairs: [
        {
          question: 'What services do you offer?',
          answer: 'We offer dine-in reservations, takeaway pickup orders, catering for private celebrations, and weekly chef tasting menus.'
        },
        {
          question: 'I want to place an order.',
          answer: 'Sure! What would you like to order? You can choose from our wood-fired pizzas, fresh pasta, or chef specials. I can take your order right now or connect you to our kitchen via WhatsApp.'
        },
        {
          question: 'What are your opening hours?',
          answer: 'We are open Tuesday through Sunday from 11:30 AM to 10:30 PM. We are closed on Mondays for kitchen prep.'
        },
        {
          question: 'Can I book a table for 4 tonight?',
          answer: 'Yes! We have tables available at 7:00 PM and 8:30 PM tonight. Would you like me to reserve the 7:00 PM slot under your name?'
        }
      ]
    }
  },
  {
    id: 'hotel',
    name: 'Hotel & Suites',
    businessName: 'Azure Grand Hotel',
    category: 'Hospitality',
    heroHeadline: 'Refined Coastal Suites & Executive Comfort',
    heroSubheadline: 'Experience understated luxury with ocean view terraces, executive suites, and concierge hospitality.',
    accentColor: '#2563eb',
    chatPreset: {
      greeting: 'Hello from Azure Grand Concierge. How may I assist your stay or reservation today?',
      suggestions: [
        'What room types are available?',
        'What are check-in times?',
        'Do you offer airport transfer?',
        'How do I book a stay?'
      ],
      qaPairs: [
        {
          question: 'What room types are available?',
          answer: 'We offer Deluxe King Suites, Panoramic Oceanfront Rooms, and 2-Bedroom Executive Penthouse apartments.'
        },
        {
          question: 'What are check-in times?',
          answer: 'Check-in begins at 2:00 PM and check-out is at 11:00 AM. Early check-in or late check-out is complimentary upon request subject to availability.'
        },
        {
          question: 'Do you offer airport transfer?',
          answer: 'Yes, we provide private executive airport pickup and drop-off 24/7. Simply share your flight details and our driver will meet you at arrivals.'
        },
        {
          question: 'How do I book a stay?',
          answer: 'You can select your arrival dates and preferred suite here, and I will prepare a direct booking confirmation with our best direct-rate guarantee.'
        }
      ]
    }
  },
  {
    id: 'salon',
    name: 'Salon & Spa',
    businessName: 'Velvet Hair & Beauty Studio',
    category: 'Personal Care',
    heroHeadline: 'Premium Hair Styling, Color Bar & Spa Care',
    heroSubheadline: 'Personalized master styling, organic treatments, and bridal beauty services.',
    accentColor: '#60a5fa',
    chatPreset: {
      greeting: 'Hi there! Velvet Studio assistant here. I can answer questions about our treatments, pricing, or book your next styling session.',
      suggestions: [
        'What services do you offer?',
        'What is the price for hair coloring?',
        'How do I book an appointment?',
        'Are walk-ins accepted?'
      ],
      qaPairs: [
        {
          question: 'What services do you offer?',
          answer: 'We specialize in precision haircuts, custom balayage and coloring, keratin smoothing treatments, and full bridal/event styling packages.'
        },
        {
          question: 'What is the price for hair coloring?',
          answer: 'Full color starts at $65, and signature custom balayage starts at $120 including consultation, toner, and blowout finish.'
        },
        {
          question: 'How do I book an appointment?',
          answer: 'You can book your appointment right here or send us a quick WhatsApp message. What day and time works best for you?'
        },
        {
          question: 'Are walk-ins accepted?',
          answer: 'We warmly welcome walk-ins whenever a stylist is free, though we recommend reserving your spot to ensure zero wait time.'
        }
      ]
    }
  },
  {
    id: 'realestate',
    name: 'Real Estate Agency',
    businessName: 'Summit Prime Properties',
    category: 'Property & Real Estate',
    heroHeadline: 'Commercial & Residential Property Advisors',
    heroSubheadline: 'Helping individuals, investors, and businesses buy, sell, and lease verified properties with confidence.',
    accentColor: '#3b82f6',
    chatPreset: {
      greeting: 'Welcome to Summit Prime Properties. Looking to purchase, lease, or list a property?',
      suggestions: [
        'What listings are currently available?',
        'Can I schedule a property viewing?',
        'Do you assist with commercial rentals?',
        'How can I speak to an agent?'
      ],
      qaPairs: [
        {
          question: 'What listings are currently available?',
          answer: 'We have 18 verified listings this week, including modern city apartments, private residential villas, and prime high-street commercial retail units.'
        },
        {
          question: 'Can I schedule a property viewing?',
          answer: 'Certainly! Tell me which listing code or neighborhood you are interested in, and I will coordinate an in-person or live video tour with our lead broker.'
        },
        {
          question: 'Do you assist with commercial rentals?',
          answer: 'Yes, we represent commercial offices, retail storefronts, and industrial storage facilities across major business hubs.'
        },
        {
          question: 'How can I speak to an agent?',
          answer: 'I can connect you directly with one of our licensed agents on WhatsApp or have them call you within 15 minutes.'
        }
      ]
    }
  }
];

export const HOW_IT_WORKS: StepItem[] = [
  {
    number: '01',
    title: 'Tell Us About Your Business',
    description: 'Share what your business does, what services or products you offer, and how you currently receive customer inquiries.',
    detail: 'A quick, simple conversation on WhatsApp or email — no confusing technical questionnaires or agency bureaucracy.'
  },
  {
    number: '02',
    title: 'We Build Your Website',
    description: 'We craft a clean, high-performance, mobile-optimized website designed to highlight your credibility and guide visitors to action.',
    detail: 'Engineered with premium typography, fast loading speeds, and clear visual hierarchy so every visitor immediately understands your value.'
  },
  {
    number: '03',
    title: 'Preview & Review',
    description: 'You receive a private live preview link to explore your website on your phone and computer before anything goes public.',
    detail: 'Review every page, test every button, and request any adjustments. We refine it until you are completely satisfied.'
  },
  {
    number: '04',
    title: 'Add Your Intelligent Agent',
    description: 'We train and embed your custom customer assistant on your website, WhatsApp, and Telegram with your business FAQs and pricing.',
    detail: 'Test the agent yourself: ask questions, simulate orders, and ensure it represents your business voice accurately.'
  },
  {
    number: '05',
    title: 'Launch & Start Connecting',
    description: 'Your new website and agent go live. Add your website link to your WhatsApp Business profile and start converting visitors effortlessly.',
    detail: 'We provide continuous support and adjustments as your business grows and adds new products or services.'
  }
];

export const PREVIEW_STEPS: { step: number; title: string; desc: string }[] = [
  {
    step: 1,
    title: 'Tell Us What Your Business Needs',
    desc: 'You explain your business goals, target clients, and current bottlenecks.'
  },
  {
    step: 2,
    title: 'We Build The Complete Website',
    desc: 'Our team crafts the full website structure, copywriting, and visual assets.'
  },
  {
    step: 3,
    title: 'You Receive a Private Live Preview',
    desc: 'You can open the real working website directly on your smartphone and laptop.'
  },
  {
    step: 4,
    title: 'You Review & Request Revisions',
    desc: 'Check details, text, images, and contact buttons. Tell us what to adjust.'
  },
  {
    step: 5,
    title: 'We Refine & Polish',
    desc: 'We incorporate your feedback with precision and verify performance.'
  },
  {
    step: 6,
    title: 'Your Final Website is Ready to Launch',
    desc: 'Approved by you, connected to your custom domain, and ready for customers.'
  }
];

export const MULTI_CHANNELS: ChannelCard[] = [
  {
    id: 'website',
    name: 'Your Business Website',
    subtitle: 'On-Site Customer Concierge',
    description: 'Greets visitors as soon as they land, guides them through your offerings, and stops them from bouncing without taking action.',
    badge: '24/7 On-Site',
    icon: 'Globe',
    benefits: [
      'Answers questions instantly right on your web pages',
      'Collects name, phone number, and inquiry details',
      'Directly links visitors into WhatsApp when ready'
    ]
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp Business',
    subtitle: 'Everyday Messaging for Real Customers',
    description: 'Connect directly on the app your customers open 30 times a day. Instant responses to incoming inquiries with zero delay.',
    badge: 'Highest Engagement',
    icon: 'MessageCircle',
    benefits: [
      'Responds instantly even when staff are busy or away',
      'Shares menu items, catalogs, or service pricing',
      'Eliminates the risk of losing impatient customers'
    ]
  },
  {
    id: 'telegram',
    name: 'Telegram & Other Channels',
    subtitle: 'Broad Accessibility Across Platforms',
    description: 'Empower clients who prefer Telegram with the same knowledge base, automated booking workflows, and responsive customer care.',
    badge: 'Multi-Channel',
    icon: 'Send',
    benefits: [
      'Synchronized knowledge across all platforms',
      'Supports automated announcements and inquiries',
      'One unified intelligence representing your business'
    ]
  }
];

export const WHY_UPPER_AGENT = [
  {
    title: 'Professional Appearance',
    description: 'We build websites that look established, trustworthy, and premium, giving your business immediate authority in your market.'
  },
  {
    title: 'Better Customer Experience',
    description: 'Your customers find what they need in seconds, with zero confusion, slow loading times, or broken layouts.'
  },
  {
    title: 'Mobile-Friendly by Default',
    description: 'Over 80% of your visitors will arrive via WhatsApp on smartphones. Every layout is obsessively tuned for mobile screens.'
  },
  {
    title: 'Easy Customer Communication',
    description: 'We make it effortless for visitors to reach you via one-tap WhatsApp buttons, call triggers, and intuitive inquiry forms.'
  },
  {
    title: 'Business-Specific Solutions',
    description: 'No generic cookie-cutter templates. We design around your specific business model, customer questions, and local reality.'
  },
  {
    title: 'Preview Before Final Delivery',
    description: 'You inspect, test, and approve your live working website before launch. You are never left paying for something you cannot see.'
  },
  {
    title: 'Modern Technology, Simple Language',
    description: 'We handle all hosting, mobile performance, security, and automation without overwhelming you with complex technical jargon.'
  },
  {
    title: 'Direct WhatsApp Support',
    description: 'No ticket queues. You talk directly with Upper Agent on WhatsApp (+252 687083529) whenever you need assistance or updates.'
  }
];
