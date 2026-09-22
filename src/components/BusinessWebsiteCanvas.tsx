import React from 'react';
import {
  Star,
  MapPin,
  Calendar,
  Clock,
  Compass,
  Sparkles,
  Wifi,
  Coffee,
  Waves,
  Bath,
  Building,
  Key,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Flame,
  UtensilsCrossed,
  Wine
} from 'lucide-react';

interface WebsiteCanvasProps {
  industryId: string;
  onOpenChat: (initialMessage?: string) => void;
}

export const BusinessWebsiteCanvas: React.FC<WebsiteCanvasProps> = ({
  industryId,
  onOpenChat
}) => {
  if (industryId === 'hotel') {
    return (
      <div className="space-y-6 text-slate-100">
        {/* Luxury Hotel Header */}
        <div className="flex items-center justify-between pb-4 border-b border-cyan-900/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-cyan-500/50 bg-gradient-to-br from-cyan-600 via-teal-700 to-blue-900 flex items-center justify-center font-serif text-white font-bold text-sm shadow-md">
              AG
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-serif font-bold text-cyan-50 tracking-wide">
                  Azure Grand Hotel &amp; Coastal Villas
                </h3>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-600/40 text-[10px] text-cyan-300 font-semibold">
                  <Star className="w-3 h-3 text-cyan-400 fill-cyan-400" />
                  5-Star Luxury
                </span>
              </div>
              <span className="text-[10px] sm:text-xs text-cyan-300/80 tracking-widest uppercase font-medium">
                Oceanfront Suites &bull; Private Sandy Beach &bull; Monaco Bay
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenChat('What suite packages and direct-booking perks do you have?')}
              className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
            >
              <Key className="w-3.5 h-3.5" />
              <span>Book Suite</span>
            </button>
          </div>
        </div>

        {/* Editorial Hotel Hero Banner */}
        <div className="relative rounded-2xl overflow-hidden border border-cyan-800/40 bg-gradient-to-br from-[#07242e] via-[#041921] to-[#020e14] p-5 sm:p-7 shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/90 border border-cyan-600/40 text-[10px] font-bold text-cyan-300 uppercase tracking-widest">
              <Waves className="w-3 h-3 text-cyan-400" />
              <span>Private Shoreline Escape</span>
            </div>

            <h2 className="text-xl sm:text-3xl font-serif font-black text-cyan-50 tracking-tight leading-snug">
              Wake Up to Endless Mediterranean Horizons &amp; Unrivaled Butler Service
            </h2>

            <p className="text-xs sm:text-sm text-cyan-100/80 leading-relaxed">
              Every suite features floor-to-ceiling panoramic glass, heated infinity pools, and round-the-clock bespoke concierge coordination.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenChat('Can I check suite availability for next weekend?')}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white font-extrabold text-xs shadow-lg transition-all flex items-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Check Live Rates</span>
              </button>
              <button
                onClick={() => onOpenChat('What amenities and spa treatments are included with the suite?')}
                className="px-3.5 py-2 rounded-xl bg-cyan-950/60 hover:bg-cyan-900/60 text-cyan-200 text-xs font-semibold border border-cyan-700/50 transition-all flex items-center gap-1.5"
              >
                <Compass className="w-3.5 h-3.5 text-cyan-400" />
                <span>Resort Tour &amp; Spa</span>
              </button>
              <span className="text-[11px] text-cyan-300/80 font-medium">
                ★ Best Direct Booking Rate Guaranteed
              </span>
            </div>
          </div>
        </div>

        {/* Curated Suite Showcase Cards */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-cyan-400 block">
                Signature Accommodations
              </span>
              <h4 className="text-xs sm:text-sm font-serif font-bold text-cyan-100">
                Crafted for Discerning Travelers
              </h4>
            </div>
            <span className="text-[11px] text-cyan-300/70 font-mono">3 Suites Available Today</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Room 1 */}
            <div className="rounded-xl bg-[#04161e] border border-cyan-900/50 p-2.5 flex flex-col justify-between hover:border-cyan-600/60 transition-all group">
              <div className="relative rounded-lg overflow-hidden mb-2 aspect-[16/10] bg-black/50">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=500&q=80"
                  alt="Deluxe Ocean Suite"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <span className="absolute top-1.5 right-1.5 px-2 py-0.5 rounded bg-black/80 backdrop-blur-sm text-[10px] font-bold text-cyan-300">
                  From $420 / night
                </span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h5 className="text-xs font-bold text-cyan-100 group-hover:text-cyan-300 transition-colors">
                    Azure Horizon Suite
                  </h5>
                  <span className="text-[10px] text-cyan-400">King Bed</span>
                </div>
                <p className="text-[10px] text-cyan-200/70 leading-relaxed line-clamp-2">
                  75m² terrace overlooking the sea, marble bathroom with soaking tub, complimentary mini-bar.
                </p>
                <div className="pt-1 flex items-center gap-2 text-[9px] text-cyan-300/80">
                  <span className="inline-flex items-center gap-1"><Wifi className="w-2.5 h-2.5" /> High-speed WiFi</span>
                  <span className="inline-flex items-center gap-1"><Coffee className="w-2.5 h-2.5" /> Nespresso</span>
                </div>
              </div>
            </div>

            {/* Room 2 */}
            <div className="rounded-xl bg-[#04161e] border border-cyan-900/50 p-2.5 flex flex-col justify-between hover:border-cyan-600/60 transition-all group">
              <div className="relative rounded-lg overflow-hidden mb-2 aspect-[16/10] bg-black/50">
                <img
                  src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=500&q=80"
                  alt="Penthouse Presidential"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <span className="absolute top-1.5 right-1.5 px-2 py-0.5 rounded bg-black/80 backdrop-blur-sm text-[10px] font-bold text-cyan-300">
                  From $890 / night
                </span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h5 className="text-xs font-bold text-cyan-100 group-hover:text-cyan-300 transition-colors">
                    Presidential Penthouse
                  </h5>
                  <span className="text-[10px] text-cyan-400">2 King Suites</span>
                </div>
                <p className="text-[10px] text-cyan-200/70 leading-relaxed line-clamp-2">
                  140m² top-floor duplex, private heated plunge pool, dedicated butler, private elevator access.
                </p>
                <div className="pt-1 flex items-center gap-2 text-[9px] text-cyan-300/80">
                  <span className="inline-flex items-center gap-1"><Waves className="w-2.5 h-2.5" /> Private Pool</span>
                  <span className="inline-flex items-center gap-1"><Bath className="w-2.5 h-2.5" /> Spa Tub</span>
                </div>
              </div>
            </div>

            {/* Room 3 */}
            <div className="rounded-xl bg-[#04161e] border border-cyan-900/50 p-2.5 flex flex-col justify-between hover:border-cyan-600/60 transition-all group">
              <div className="relative rounded-lg overflow-hidden mb-2 aspect-[16/10] bg-black/50">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=500&q=80"
                  alt="Coastal Beachfront Villa"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <span className="absolute top-1.5 right-1.5 px-2 py-0.5 rounded bg-black/80 backdrop-blur-sm text-[10px] font-bold text-cyan-300">
                  From $1,250 / night
                </span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h5 className="text-xs font-bold text-cyan-100 group-hover:text-cyan-300 transition-colors">
                    Private Beach Villa
                  </h5>
                  <span className="text-[10px] text-cyan-400">Secluded</span>
                </div>
                <p className="text-[10px] text-cyan-200/70 leading-relaxed line-clamp-2">
                  Direct beach access path, private gardens, outdoor dining pavilion, personal chef on demand.
                </p>
                <div className="pt-1 flex items-center gap-2 text-[9px] text-cyan-300/80">
                  <span className="inline-flex items-center gap-1"><Key className="w-2.5 h-2.5" /> Private Gated</span>
                  <span className="inline-flex items-center gap-1"><Waves className="w-2.5 h-2.5" /> Shoreline</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hotel Amenities & Location Strip */}
        <div className="pt-2 border-t border-cyan-900/50 flex flex-wrap items-center justify-between text-[11px] text-cyan-300/80 gap-2">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>450 Boulevard de la Mer, Monaco Bay</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>Check-in: 2:00 PM &bull; Concierge: 24/7</span>
          </span>
          <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Complimentary Airport Chauffeur</span>
          </span>
        </div>
      </div>
    );
  }

  if (industryId === 'salon') {
    return (
      <div className="space-y-6 text-rose-100">
        {/* Salon Luxury Header */}
        <div className="flex items-center justify-between pb-4 border-b border-rose-900/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-rose-500/50 bg-gradient-to-br from-rose-600 via-pink-700 to-purple-950 flex items-center justify-center font-serif text-white font-bold text-sm shadow-md">
              VS
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-serif font-bold text-rose-50 tracking-wide">
                  Velvet Hair &amp; Beauty Atelier
                </h3>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-rose-950/80 border border-rose-600/40 text-[10px] text-rose-300 font-semibold">
                  <Sparkles className="w-3 h-3 text-rose-400" />
                  Organic Hair Sanctuary
                </span>
              </div>
              <span className="text-[10px] sm:text-xs text-rose-300/80 tracking-widest uppercase font-medium">
                Color Lab &bull; Master Balayage &bull; Bridal Couture &bull; Soho NYC
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenChat('I would like to book a balayage and haircut consultation.')}
              className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-400 hover:to-pink-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Stylist</span>
            </button>
          </div>
        </div>

        {/* Editorial Salon Hero */}
        <div className="relative rounded-2xl overflow-hidden border border-rose-800/40 bg-gradient-to-br from-[#260e22] via-[#1a0917] to-[#10050e] p-5 sm:p-7 shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-950/90 border border-rose-600/40 text-[10px] font-bold text-rose-300 uppercase tracking-widest">
              <Sparkles className="w-3 h-3 text-rose-400" />
              <span>Vogue &amp; Elle Featured Stylists</span>
            </div>

            <h2 className="text-xl sm:text-3xl font-serif font-black text-rose-50 tracking-tight leading-snug">
              Bespoke Hair Artistry, Luminous Color, &amp; Restorative Scalp Rituals
            </h2>

            <p className="text-xs sm:text-sm text-rose-200/80 leading-relaxed">
              Tailored consultations using non-toxic botanical toners and French balayage techniques that preserve hair integrity and healthy radiance.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenChat('What are your prices for full balayage and toner?')}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-400 hover:to-pink-500 text-white font-extrabold text-xs shadow-lg transition-all flex items-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>View Treatment Menu &amp; Rates</span>
              </button>
              <button
                onClick={() => onOpenChat('Can I book an appointment for this Saturday?')}
                className="px-3.5 py-2 rounded-xl bg-rose-950/60 hover:bg-rose-900/60 text-rose-200 text-xs font-semibold border border-rose-700/50 transition-all flex items-center gap-1.5"
              >
                <Clock className="w-3.5 h-3.5 text-rose-400" />
                <span>Check Available Slots</span>
              </button>
              <span className="text-[11px] text-rose-300/80 font-medium">
                ★ 4.98 Rating across 620+ Stylings
              </span>
            </div>
          </div>
        </div>

        {/* Featured Signature Salon Treatments */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-rose-400 block">
                Signature Atelier Services
              </span>
              <h4 className="text-xs sm:text-sm font-serif font-bold text-rose-100">
                Personalized Beauty Care
              </h4>
            </div>
            <span className="text-[11px] text-rose-300/70 font-mono">Custom Stylist Matching</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Service 1 */}
            <div className="rounded-xl bg-[#190818] border border-rose-900/50 p-2.5 flex flex-col justify-between hover:border-rose-600/60 transition-all group">
              <div className="relative rounded-lg overflow-hidden mb-2 aspect-[16/10] bg-black/50">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=500&q=80"
                  alt="French Balayage & Gloss"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <span className="absolute top-1.5 right-1.5 px-2 py-0.5 rounded bg-black/80 backdrop-blur-sm text-[10px] font-bold text-rose-300">
                  From $140
                </span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h5 className="text-xs font-bold text-rose-100 group-hover:text-rose-300 transition-colors">
                    Custom French Balayage
                  </h5>
                  <span className="text-[10px] text-rose-400">120 mins</span>
                </div>
                <p className="text-[10px] text-rose-200/70 leading-relaxed line-clamp-2">
                  Hand-painted dimension, bond-building treatment, custom toner, and signature blowout.
                </p>
                <div className="pt-1 flex items-center gap-2 text-[9px] text-rose-300/80">
                  <span className="inline-flex items-center gap-1"><CheckCircle2 className="w-2.5 h-2.5 text-rose-400" /> Bond Protection</span>
                  <span className="inline-flex items-center gap-1"><Sparkles className="w-2.5 h-2.5 text-rose-400" /> Gloss Included</span>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="rounded-xl bg-[#190818] border border-rose-900/50 p-2.5 flex flex-col justify-between hover:border-rose-600/60 transition-all group">
              <div className="relative rounded-lg overflow-hidden mb-2 aspect-[16/10] bg-black/50">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=500&q=80"
                  alt="Precision Haircut & Style"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <span className="absolute top-1.5 right-1.5 px-2 py-0.5 rounded bg-black/80 backdrop-blur-sm text-[10px] font-bold text-rose-300">
                  $85
                </span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h5 className="text-xs font-bold text-rose-100 group-hover:text-rose-300 transition-colors">
                    Precision Cut &amp; Finish
                  </h5>
                  <span className="text-[10px] text-rose-400">60 mins</span>
                </div>
                <p className="text-[10px] text-rose-200/70 leading-relaxed line-clamp-2">
                  Sculpted dry/wet cut customized to facial geometry, botanical scalp wash, and heat styling.
                </p>
                <div className="pt-1 flex items-center gap-2 text-[9px] text-rose-300/80">
                  <span className="inline-flex items-center gap-1"><CheckCircle2 className="w-2.5 h-2.5 text-rose-400" /> Scalp Massage</span>
                  <span className="inline-flex items-center gap-1"><Sparkles className="w-2.5 h-2.5 text-rose-400" /> Custom Styling</span>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="rounded-xl bg-[#190818] border border-rose-900/50 p-2.5 flex flex-col justify-between hover:border-rose-600/60 transition-all group">
              <div className="relative rounded-lg overflow-hidden mb-2 aspect-[16/10] bg-black/50">
                <img
                  src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=500&q=80"
                  alt="Botanical Scalp & Keratin Treatment"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <span className="absolute top-1.5 right-1.5 px-2 py-0.5 rounded bg-black/80 backdrop-blur-sm text-[10px] font-bold text-rose-300">
                  $160
                </span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h5 className="text-xs font-bold text-rose-100 group-hover:text-rose-300 transition-colors">
                    Silk Keratin Infusion
                  </h5>
                  <span className="text-[10px] text-rose-400">90 mins</span>
                </div>
                <p className="text-[10px] text-rose-200/70 leading-relaxed line-clamp-2">
                  Formaldehyde-free organic smoothing treatment eliminating 100% frizz for up to 4 months.
                </p>
                <div className="pt-1 flex items-center gap-2 text-[9px] text-rose-300/80">
                  <span className="inline-flex items-center gap-1"><CheckCircle2 className="w-2.5 h-2.5 text-rose-400" /> Zero Formaldehyde</span>
                  <span className="inline-flex items-center gap-1"><Sparkles className="w-2.5 h-2.5 text-rose-400" /> 4-Month Shine</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Salon Location & Hours Strip */}
        <div className="pt-2 border-t border-rose-900/50 flex flex-wrap items-center justify-between text-[11px] text-rose-300/80 gap-2">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-rose-400" />
            <span>88 Prince Street, Soho, New York</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-rose-400" />
            <span>Tue – Sat: 9:00 AM – 8:00 PM &bull; Sun: 10:00 AM – 6:00 PM</span>
          </span>
          <span className="inline-flex items-center gap-1.5 text-rose-300 font-semibold">
            <Phone className="w-3.5 h-3.5 text-rose-400" />
            <span>Direct WhatsApp Booking Ready</span>
          </span>
        </div>
      </div>
    );
  }

  if (industryId === 'realestate') {
    return (
      <div className="space-y-6 text-emerald-100">
        {/* Real Estate Luxury Header */}
        <div className="flex items-center justify-between pb-4 border-b border-emerald-900/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-emerald-500/50 bg-gradient-to-br from-emerald-600 via-teal-700 to-slate-950 flex items-center justify-center font-serif text-white font-bold text-sm shadow-md">
              SP
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-serif font-bold text-emerald-50 tracking-wide">
                  Summit Prime Properties &amp; Advisory
                </h3>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-600/40 text-[10px] text-emerald-300 font-semibold">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  100% Verified Title Deeds
                </span>
              </div>
              <span className="text-[10px] sm:text-xs text-emerald-300/80 tracking-widest uppercase font-medium">
                Prime Penthouses &bull; Waterfront Estates &bull; Commercial Investments
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenChat('I would like to schedule a private viewing for one of your properties.')}
              className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Schedule Tour</span>
            </button>
          </div>
        </div>

        {/* Editorial Real Estate Hero */}
        <div className="relative rounded-2xl overflow-hidden border border-emerald-800/40 bg-gradient-to-br from-[#0c291f] via-[#071d15] to-[#04120d] p-5 sm:p-7 shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/90 border border-emerald-600/40 text-[10px] font-bold text-emerald-300 uppercase tracking-widest">
              <Building className="w-3 h-3 text-emerald-400" />
              <span>Curated Prime Portfolio</span>
            </div>

            <h2 className="text-xl sm:text-3xl font-serif font-black text-emerald-50 tracking-tight leading-snug">
              Iconic Architectural Living &amp; High-Yield Commercial Assets
            </h2>

            <p className="text-xs sm:text-sm text-emerald-200/80 leading-relaxed">
              Browse pre-inspected luxury residences with complete title verification, high rental yields, and discreet private acquisition advisory.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenChat('What are your latest high-yield investment properties and apartments?')}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-extrabold text-xs shadow-lg transition-all flex items-center gap-2"
              >
                <Building className="w-3.5 h-3.5" />
                <span>Explore Verified Listings</span>
              </button>
              <button
                onClick={() => onOpenChat('Can I connect directly with a licensed broker on WhatsApp?')}
                className="px-3.5 py-2 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/60 text-emerald-200 text-xs font-semibold border border-emerald-700/50 transition-all flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Broker WhatsApp Connect</span>
              </button>
              <span className="text-[11px] text-emerald-300/80 font-medium">
                ★ Over $180M+ Closed Transactions
              </span>
            </div>
          </div>
        </div>

        {/* Featured Real Estate Property Cards */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 block">
                Featured Prime Properties
              </span>
              <h4 className="text-xs sm:text-sm font-serif font-bold text-emerald-100">
                Verified Deeds &bull; Immediate Viewing Available
              </h4>
            </div>
            <span className="text-[11px] text-emerald-300/70 font-mono">18 Active Listings</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Property 1 */}
            <div className="rounded-xl bg-[#071c14] border border-emerald-900/50 p-2.5 flex flex-col justify-between hover:border-emerald-600/60 transition-all group">
              <div className="relative rounded-lg overflow-hidden mb-2 aspect-[16/10] bg-black/50">
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=500&q=80"
                  alt="Modern Glass Architectural Villa"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <span className="absolute top-1.5 right-1.5 px-2 py-0.5 rounded bg-black/80 backdrop-blur-sm text-[10px] font-bold text-emerald-300">
                  $2,450,000
                </span>
                <span className="absolute bottom-1.5 left-1.5 px-1.5 py-0.5 rounded bg-emerald-950/90 text-[9px] font-bold text-emerald-300 border border-emerald-700/60">
                  For Sale &bull; Villa
                </span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h5 className="text-xs font-bold text-emerald-100 group-hover:text-emerald-300 transition-colors">
                    The Bel-Air Horizon
                  </h5>
                  <span className="text-[10px] text-emerald-400">5 Beds &bull; 6 Baths</span>
                </div>
                <p className="text-[10px] text-emerald-200/70 leading-relaxed line-clamp-2">
                  5,800 sq ft, custom infinity pool, smart automation, panoramic hillside vistas.
                </p>
                <div className="pt-1 flex items-center gap-2 text-[9px] text-emerald-300/80">
                  <span className="inline-flex items-center gap-1"><ShieldCheck className="w-2.5 h-2.5 text-emerald-400" /> Clean Title</span>
                  <span className="inline-flex items-center gap-1"><Building className="w-2.5 h-2.5 text-emerald-400" /> Private Gated</span>
                </div>
              </div>
            </div>

            {/* Property 2 */}
            <div className="rounded-xl bg-[#071c14] border border-emerald-900/50 p-2.5 flex flex-col justify-between hover:border-emerald-600/60 transition-all group">
              <div className="relative rounded-lg overflow-hidden mb-2 aspect-[16/10] bg-black/50">
                <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=500&q=80"
                  alt="City Skyline Penthouse"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <span className="absolute top-1.5 right-1.5 px-2 py-0.5 rounded bg-black/80 backdrop-blur-sm text-[10px] font-bold text-emerald-300">
                  $1,280,000
                </span>
                <span className="absolute bottom-1.5 left-1.5 px-1.5 py-0.5 rounded bg-emerald-950/90 text-[9px] font-bold text-emerald-300 border border-emerald-700/60">
                  For Sale &bull; Penthouse
                </span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h5 className="text-xs font-bold text-emerald-100 group-hover:text-emerald-300 transition-colors">
                    Skyline Glass Duplex
                  </h5>
                  <span className="text-[10px] text-emerald-400">3 Beds &bull; 3 Baths</span>
                </div>
                <p className="text-[10px] text-emerald-200/70 leading-relaxed line-clamp-2">
                  Double-height ceiling, wraparound city terrace, 24/7 concierge, private underground parking.
                </p>
                <div className="pt-1 flex items-center gap-2 text-[9px] text-emerald-300/80">
                  <span className="inline-flex items-center gap-1"><ShieldCheck className="w-2.5 h-2.5 text-emerald-400" /> High Rental Yield</span>
                  <span className="inline-flex items-center gap-1"><Building className="w-2.5 h-2.5 text-emerald-400" /> City Core</span>
                </div>
              </div>
            </div>

            {/* Property 3 */}
            <div className="rounded-xl bg-[#071c14] border border-emerald-900/50 p-2.5 flex flex-col justify-between hover:border-emerald-600/60 transition-all group">
              <div className="relative rounded-lg overflow-hidden mb-2 aspect-[16/10] bg-black/50">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=500&q=80"
                  alt="Commercial Office Hub"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <span className="absolute top-1.5 right-1.5 px-2 py-0.5 rounded bg-black/80 backdrop-blur-sm text-[10px] font-bold text-emerald-300">
                  $9,500 / month
                </span>
                <span className="absolute bottom-1.5 left-1.5 px-1.5 py-0.5 rounded bg-emerald-950/90 text-[9px] font-bold text-emerald-300 border border-emerald-700/60">
                  For Lease &bull; Commercial
                </span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h5 className="text-xs font-bold text-emerald-100 group-hover:text-emerald-300 transition-colors">
                    Prime Financial District HQ
                  </h5>
                  <span className="text-[10px] text-emerald-400">3,200 sq ft</span>
                </div>
                <p className="text-[10px] text-emerald-200/70 leading-relaxed line-clamp-2">
                  Fully fitted executive floor, fiber-optic backbone, boardroom, soundproof pods.
                </p>
                <div className="pt-1 flex items-center gap-2 text-[9px] text-emerald-300/80">
                  <span className="inline-flex items-center gap-1"><ShieldCheck className="w-2.5 h-2.5 text-emerald-400" /> Turnkey Ready</span>
                  <span className="inline-flex items-center gap-1"><Building className="w-2.5 h-2.5 text-emerald-400" /> Metro Access</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real Estate Location & Broker Strip */}
        <div className="pt-2 border-t border-emerald-900/50 flex flex-wrap items-center justify-between text-[11px] text-emerald-300/80 gap-2">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>540 Madison Ave, Financial Center, New York</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-emerald-400" />
            <span>Mon – Sat: 8:30 AM – 7:30 PM &bull; Sunday by Appointment</span>
          </span>
          <span className="inline-flex items-center gap-1.5 text-emerald-300 font-semibold">
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span>Private Advisory On WhatsApp 24/7</span>
          </span>
        </div>
      </div>
    );
  }

  // Fallback / Restaurant
  return (
    <div className="space-y-6 text-amber-100">
      {/* Restaurant Luxury Header */}
      <div className="flex items-center justify-between pb-4 border-b border-amber-900/40">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-amber-500/60 bg-gradient-to-br from-amber-600 to-amber-900 flex items-center justify-center font-serif text-amber-100 font-bold text-sm shadow-md">
            UB
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm sm:text-base font-serif font-bold text-amber-50 tracking-wide">
                The Urban Bistro &amp; Bar
              </h3>
              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-600/40 text-[10px] text-emerald-300 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Tables Open Tonight
              </span>
            </div>
            <span className="text-[10px] sm:text-xs text-amber-300/80 tracking-widest uppercase font-medium">
              Wood-Fired Kitchen &bull; Mediterranean Heritage &bull; Soho NYC
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onOpenChat('Can I book a table for 4 guests tonight?')}
            className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Reserve Table</span>
          </button>
        </div>
      </div>

      {/* Editorial Restaurant Hero */}
      <div className="relative rounded-2xl overflow-hidden border border-amber-800/40 bg-gradient-to-br from-[#1f150d] via-[#160f09] to-[#0e0a06] p-5 sm:p-7 shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-3 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/90 border border-amber-700/50 text-[10px] font-bold text-amber-300 uppercase tracking-widest">
            <Flame className="w-3 h-3 text-amber-400" />
            <span>Artisanal Embers &bull; Est. 2021</span>
          </div>

          <h2 className="text-xl sm:text-3xl font-serif font-black text-amber-50 tracking-tight leading-snug">
            Crafted Over Open Flame, Served With Mediterranean Soul
          </h2>

          <p className="text-xs sm:text-sm text-amber-200/80 leading-relaxed">
            Handmade sourdough pizzas, fresh tagliolini, and wild sea harvest paired with natural Tuscan vintages.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenChat('Reserve a table for tonight at 7:15 PM')}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-extrabold text-xs shadow-lg transition-all flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book A Table</span>
            </button>
            <button
              onClick={() => onOpenChat('Show me signature dishes and wine pairings')}
              className="px-3.5 py-2 rounded-xl bg-[#140d07] hover:bg-[#1e140c] text-amber-200 text-xs font-semibold border border-amber-800/40 transition-all flex items-center gap-1.5"
            >
              <UtensilsCrossed className="w-3.5 h-3.5 text-amber-400" />
              <span>Full Tasting Menu</span>
            </button>
            <span className="text-[11px] text-amber-300/80 font-medium">
              ★ 4.9 (480+ Reviews)
            </span>
          </div>
        </div>
      </div>

      {/* Featured Restaurant Dishes */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400 block">
              Signature Wood-Fired Dishes
            </span>
            <h4 className="text-xs sm:text-sm font-serif font-bold text-amber-100">
              Fresh Daily from Local Producers
            </h4>
          </div>
          <span className="text-[11px] text-amber-300/70 font-mono">Seasonal Selection</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Dish 1 */}
          <div className="rounded-xl bg-[#140d08] border border-amber-900/40 p-2.5 flex flex-col justify-between hover:border-amber-700/60 transition-all group">
            <div className="relative rounded-lg overflow-hidden mb-2 aspect-[16/10] bg-black/50">
              <img
                src="https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=500&q=80"
                alt="Truffle Tagliolini"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <span className="absolute top-1.5 right-1.5 px-2 py-0.5 rounded bg-black/80 backdrop-blur-sm text-[10px] font-bold text-amber-300">
                $28
              </span>
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <h5 className="text-xs font-bold text-amber-100 group-hover:text-amber-300 transition-colors">
                  Truffle Tagliolini
                </h5>
                <span className="text-[10px] text-amber-400">Chef Pick</span>
              </div>
              <p className="text-[10px] text-amber-200/70 leading-relaxed line-clamp-2">
                Handmade ribbons, shaved winter black truffle, aged parmigiano reggiano.
              </p>
              <div className="pt-1 flex items-center gap-2 text-[9px] text-amber-300/80">
                <span className="inline-flex items-center gap-1"><Wine className="w-2.5 h-2.5 text-amber-400" /> Brunello Pairing</span>
              </div>
            </div>
          </div>

          {/* Dish 2 */}
          <div className="rounded-xl bg-[#140d08] border border-amber-900/40 p-2.5 flex flex-col justify-between hover:border-amber-700/60 transition-all group">
            <div className="relative rounded-lg overflow-hidden mb-2 aspect-[16/10] bg-black/50">
              <img
                src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=500&q=80"
                alt="Charred Mediterranean Branzino"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <span className="absolute top-1.5 right-1.5 px-2 py-0.5 rounded bg-black/80 backdrop-blur-sm text-[10px] font-bold text-amber-300">
                $36
              </span>
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <h5 className="text-xs font-bold text-amber-100 group-hover:text-amber-300 transition-colors">
                  Charred Branzino
                </h5>
                <span className="text-[10px] text-amber-400">Wild Catch</span>
              </div>
              <p className="text-[10px] text-amber-200/70 leading-relaxed line-clamp-2">
                Wild sea bass, charred Amalfi lemon, caper herb salmoriglio emulsion.
              </p>
              <div className="pt-1 flex items-center gap-2 text-[9px] text-amber-300/80">
                <span className="inline-flex items-center gap-1"><Wine className="w-2.5 h-2.5 text-amber-400" /> Vermentino Pairing</span>
              </div>
            </div>
          </div>

          {/* Dish 3 */}
          <div className="rounded-xl bg-[#140d08] border border-amber-900/40 p-2.5 flex flex-col justify-between hover:border-amber-700/60 transition-all group">
            <div className="relative rounded-lg overflow-hidden mb-2 aspect-[16/10] bg-black/50">
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80"
                alt="Wood-Fired Burrata Pizza"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <span className="absolute top-1.5 right-1.5 px-2 py-0.5 rounded bg-black/80 backdrop-blur-sm text-[10px] font-bold text-amber-300">
                $22
              </span>
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <h5 className="text-xs font-bold text-amber-100 group-hover:text-amber-300 transition-colors">
                  Wood-Fired Pizza
                </h5>
                <span className="text-[10px] text-amber-400">Sourdough</span>
              </div>
              <p className="text-[10px] text-amber-200/70 leading-relaxed line-clamp-2">
                48-hr fermented sourdough, smoked burrata, San Marzano DOP tomatoes.
              </p>
              <div className="pt-1 flex items-center gap-2 text-[9px] text-amber-300/80">
                <span className="inline-flex items-center gap-1"><Flame className="w-2.5 h-2.5 text-amber-400" /> 800° Embers</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Restaurant Location & Hours Strip */}
      <div className="pt-2 border-t border-amber-900/50 flex flex-wrap items-center justify-between text-[11px] text-amber-300/80 gap-2">
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-amber-400" />
          <span>142 Mercer St, Soho, New York</span>
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-amber-400" />
          <span>Tue – Sun: 5:00 PM – 11:30 PM &bull; Monday Closed</span>
        </span>
        <span className="inline-flex items-center gap-1.5 text-amber-300 font-semibold">
          <Phone className="w-3.5 h-3.5 text-amber-400" />
          <span>Host WhatsApp Connect Ready</span>
        </span>
      </div>
    </div>
  );
};
