import React, { useState } from 'react';
import { DEMO_INDUSTRIES } from '../data/content';
import { INDUSTRY_THEMES } from '../data/industryThemes';
import { BusinessWebsiteCanvas } from './BusinessWebsiteCanvas';
import {
  Send,
  Sparkles,
  Minimize2,
  RefreshCw,
  Bot,
  ChevronRight,
  Utensils,
  Building,
  Scissors,
  Home
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'agent';
  text: string;
  timestamp: string;
}

export const InteractiveAgentDemo: React.FC = () => {
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>('restaurant');
  const [isChatOpen, setIsChatOpen] = useState<boolean>(true);
  const [inputVal, setInputVal] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const activeIndustry =
    DEMO_INDUSTRIES.find((ind) => ind.id === selectedIndustryId) || DEMO_INDUSTRIES[0];
  const activeTheme = INDUSTRY_THEMES[selectedIndustryId] || INDUSTRY_THEMES.restaurant;

  // Initial messages state tailored to active industry
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'agent',
      text: activeIndustry.chatPreset.greeting,
      timestamp: 'Just now'
    },
    {
      id: '2',
      sender: 'user',
      text: 'What services do you offer?',
      timestamp: 'Just now'
    },
    {
      id: '3',
      sender: 'agent',
      text: activeIndustry.chatPreset.qaPairs[0]?.answer || 'We offer full-service solutions.',
      timestamp: 'Just now'
    }
  ]);

  // When industry changes, reset conversation
  const handleSelectIndustry = (id: string) => {
    setSelectedIndustryId(id);
    const ind = DEMO_INDUSTRIES.find((item) => item.id === id) || DEMO_INDUSTRIES[0];
    setMessages([
      {
        id: '1',
        sender: 'agent',
        text: ind.chatPreset.greeting,
        timestamp: 'Just now'
      },
      {
        id: '2',
        sender: 'user',
        text: 'What services do you offer?',
        timestamp: 'Just now'
      },
      {
        id: '3',
        sender: 'agent',
        text: ind.chatPreset.qaPairs[0]?.answer || 'We provide complete business services.',
        timestamp: 'Just now'
      }
    ]);
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputVal).trim();
    if (!text) return;

    // Add user message
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      timestamp: 'Just now'
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);

    // Simulate Agent response based on question matching
    setTimeout(() => {
      const lower = text.toLowerCase();
      let answerText =
        "Thank you for asking! I can provide full details or connect you directly with our manager on WhatsApp right now.";

      const matchedPair = activeIndustry.chatPreset.qaPairs.find((qa) =>
        lower.includes(qa.question.toLowerCase().split(' ')[0]) ||
        lower.includes('order') ||
        lower.includes('service') ||
        lower.includes('hours') ||
        lower.includes('price') ||
        lower.includes('book')
      );

      if (matchedPair) {
        answerText = matchedPair.answer;
      } else if (lower.includes('order')) {
        answerText =
          "We can process your order immediately! What items would you like to request?";
      } else if (lower.includes('contact') || lower.includes('phone') || lower.includes('speak')) {
        answerText =
          "You can reach our team directly via WhatsApp at +252 687083529 for instant service!";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'agent',
          text: answerText,
          timestamp: 'Just now'
        }
      ]);
      setIsTyping(false);
    }, 450);
  };

  // Industry-specific icon
  const getIndustryIcon = () => {
    switch (selectedIndustryId) {
      case 'restaurant':
        return <Utensils className="w-4 h-4" />;
      case 'hotel':
        return <Building className="w-4 h-4" />;
      case 'salon':
        return <Scissors className="w-4 h-4" />;
      case 'realestate':
        return <Home className="w-4 h-4" />;
      default:
        return <Bot className="w-4 h-4" />;
    }
  };

  return (
    <section
      id="agent-demo"
      className="py-20 lg:py-28 relative bg-[#030712] border-t border-blue-950/60 overflow-hidden w-full max-w-full"
    >
      {/* Background subtle radial glow rigidly clipped to viewport */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-blue-600/10 rounded-full blur-[170px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Interactive On-Site Simulation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            See How Your Agent{' '}
            <span className="text-blue-400">Works Inside Your Website</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Every business website we create has its <strong>own distinctive design, color palette, and character</strong>.
            Switch between real-world industries below to see how the website look and on-site agent adapt completely to each business type.
          </p>
        </div>

        {/* Industry Switcher Tabs - Styled to reflect distinct industry themes */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          <span className="text-xs text-slate-400 mr-1 inline-block font-medium">Select Business Type:</span>
          {DEMO_INDUSTRIES.map((ind) => {
            const isSelected = selectedIndustryId === ind.id;
            const theme = INDUSTRY_THEMES[ind.id] || INDUSTRY_THEMES.restaurant;
            return (
              <button
                key={ind.id}
                onClick={() => handleSelectIndustry(ind.id)}
                className={`flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 border ${
                  isSelected
                    ? `${theme.heroCtaBg} text-white ${theme.heroCardBorder} shadow-lg ring-2 ring-white/20 scale-[1.02]`
                    : 'bg-[#081024] text-slate-300 hover:text-white border-blue-950 hover:bg-[#0e1b3d]'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-white' : 'bg-slate-400'}`} />
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Realistic Browser Frame with Embedded Website & Chat Widget */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#060c1d] border border-blue-900/60 shadow-[0_20px_60px_rgba(0,0,0,0.95)] overflow-hidden">
          {/* Browser Window Header */}
          <div className="bg-[#091226] px-4 py-3 border-b border-blue-950 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="text-xs text-slate-300 ml-2 font-medium hidden sm:inline">
                Simulated Client Website Preview
              </span>
            </div>

            {/* URL Search bar reflecting the exact business domain */}
            <div className="flex-1 max-w-md mx-auto flex items-center justify-center px-4 py-1.5 rounded-lg bg-[#040816] border border-blue-950 text-xs text-slate-300 font-mono truncate shadow-inner">
              <span className="text-emerald-400 mr-2 text-[11px]">&#128274; https://</span>
              <span className="truncate font-semibold text-slate-200">
                {activeTheme.browserDomain}
              </span>
            </div>

            <div className="flex items-center gap-2 text-slate-400">
              <button
                onClick={() => handleSelectIndustry(selectedIndustryId)}
                title="Reset preview conversation"
                className="p-1 hover:text-white transition-colors"
                aria-label="Reset demo"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Browser Screen Content - FULLY STYLED BESPOKE BUSINESS WEBSITE */}
          <div className={`relative min-h-[580px] sm:min-h-[640px] ${activeTheme.canvasBg} ${activeTheme.canvasText} p-4 sm:p-7 overflow-hidden transition-colors duration-300`}>
            {/* The Dedicated Business Website Canvas */}
            <div className="max-w-4xl pb-16">
              <BusinessWebsiteCanvas
                industryId={selectedIndustryId}
                onOpenChat={(msg) => {
                  setIsChatOpen(true);
                  if (msg) handleSendMessage(msg);
                }}
              />
            </div>

            {/* FLOATING AGENT CHAT WIDGET - STYLED TO MATCH THIS BUSINESS'S BRANDING */}
            <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 z-30 flex flex-col items-end max-w-[calc(100%-1.5rem)] sm:max-w-none">
              {/* The Opened Chat Window */}
              {isChatOpen && (
                <div className={`w-[calc(100vw-3.5rem)] max-w-[340px] sm:w-[350px] h-[390px] sm:h-[460px] rounded-3xl ${activeTheme.chat.headerBg} border ${activeTheme.chat.headerBorder} shadow-2xl flex flex-col overflow-hidden mb-2 sm:mb-3 animate-in fade-in zoom-in-95 duration-200 ring-1 ring-white/10`}>
                  {/* Chat Window Header */}
                  <div className={`${activeTheme.chat.headerBg} p-3.5 border-b ${activeTheme.chat.headerBorder} flex items-center justify-between`}>
                    <div className="flex items-center gap-2.5">
                      <div className={`relative w-8 h-8 rounded-full ${activeTheme.chat.avatarBg} border ${activeTheme.chat.avatarBorder} flex items-center justify-center font-bold text-xs shadow-md p-1`}>
                        {getIndustryIcon()}
                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-black" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className={`text-xs font-extrabold ${activeTheme.chat.headerTitleColor}`}>
                            {activeTheme.businessName}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-[10px] opacity-80">
                          <span className={activeTheme.chat.headerSubtitleColor}>Upper Agent</span>
                          <span>&bull;</span>
                          <span className="text-emerald-400 font-bold">Online 24/7</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => setIsChatOpen(false)}
                        className="p-1 rounded-md opacity-70 hover:opacity-100 hover:bg-black/20 transition-all text-white"
                        title="Minimize"
                      >
                        <Minimize2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Chat Messages Scrollable Stream */}
                  <div className={`flex-1 p-3.5 space-y-3 overflow-y-auto ${activeTheme.chat.streamBg} text-xs`}>
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        {msg.sender === 'agent' && (
                          <div className={`w-6 h-6 rounded-full ${activeTheme.chat.avatarBg} border ${activeTheme.chat.avatarBorder} flex items-center justify-center p-0.5 mr-2 shrink-0 self-end overflow-hidden text-xs`}>
                            {getIndustryIcon()}
                          </div>
                        )}
                        <div
                          className={`max-w-[82%] rounded-2xl px-3.5 py-2 text-xs leading-relaxed ${
                            msg.sender === 'user'
                              ? `${activeTheme.chat.userBubbleBg} ${activeTheme.chat.userBubbleText} font-medium rounded-br-xs shadow-md`
                              : `${activeTheme.chat.agentBubbleBg} ${activeTheme.chat.agentBubbleText} border ${activeTheme.chat.agentBubbleBorder} rounded-bl-xs`
                          }`}
                        >
                          <p>{msg.text}</p>
                          <span className="block text-[9px] mt-1 opacity-60 text-right font-mono">
                            {msg.timestamp}
                          </span>
                        </div>
                      </div>
                    ))}

                    {/* Typing Indicator */}
                    {isTyping && (
                      <div className="flex items-center gap-2 text-xs opacity-80">
                        <div className={`w-6 h-6 rounded-full ${activeTheme.chat.avatarBg} border ${activeTheme.chat.avatarBorder} flex items-center justify-center p-0.5 shrink-0 text-xs`}>
                          {getIndustryIcon()}
                        </div>
                        <div className={`${activeTheme.chat.agentBubbleBg} border ${activeTheme.chat.agentBubbleBorder} rounded-2xl px-3 py-2 flex items-center gap-1`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-current animate-bounce" />
                          <span
                            className="w-1.5 h-1.5 rounded-full bg-current animate-bounce"
                            style={{ animationDelay: '150ms' }}
                          />
                          <span
                            className="w-1.5 h-1.5 rounded-full bg-current animate-bounce"
                            style={{ animationDelay: '300ms' }}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Suggestion Chips - Styled with business accents */}
                  <div className={`px-3 py-2 ${activeTheme.chat.headerBg} border-t ${activeTheme.chat.headerBorder} overflow-x-auto no-scrollbar flex items-center gap-1.5`}>
                    {activeIndustry.chatPreset.suggestions.slice(0, 3).map((sugg, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(sugg)}
                        className={`whitespace-nowrap px-2.5 py-1 rounded-full ${activeTheme.chat.suggestionBg} ${activeTheme.chat.suggestionHover} text-[10px] ${activeTheme.chat.suggestionText} border ${activeTheme.chat.suggestionBorder} transition-colors font-medium`}
                      >
                        {sugg}
                      </button>
                    ))}
                  </div>

                  {/* Message Input Box */}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSendMessage(inputVal);
                    }}
                    className={`p-2.5 ${activeTheme.chat.inputBarBg} border-t ${activeTheme.chat.headerBorder} flex items-center gap-2`}
                  >
                    <input
                      type="text"
                      value={inputVal}
                      onChange={(e) => setInputVal(e.target.value)}
                      placeholder="Ask a question or place order..."
                      className={`flex-1 ${activeTheme.chat.inputBg} text-xs ${activeTheme.chat.inputText} placeholder-slate-500 px-3 py-2 rounded-xl border ${activeTheme.chat.inputBorder} focus:outline-none`}
                    />
                    <button
                      type="submit"
                      disabled={!inputVal.trim()}
                      className={`p-2 rounded-xl ${activeTheme.chat.sendBtnBg} ${activeTheme.chat.sendBtnText} disabled:opacity-40 transition-colors font-bold shadow`}
                      aria-label="Send message"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                </div>
              )}

              {/* The Floating Bubble Button Trigger - Themed to match the business */}
              <button
                id="floating-demo-widget-btn"
                onClick={() => setIsChatOpen(!isChatOpen)}
                className={`group relative flex items-center gap-2 px-4 py-3 rounded-full ${activeTheme.chat.triggerBtnBg} ${activeTheme.chat.triggerBtnHover} ${activeTheme.chat.triggerBtnText} font-bold text-xs sm:text-sm ${activeTheme.chat.triggerBtnGlow} transition-all duration-200 active:scale-95 border ${activeTheme.chat.triggerBtnBorder}`}
                aria-label="Open support agent"
              >
                <div className="relative">
                  <Bot className="w-5 h-5 text-white" />
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-black animate-pulse" />
                </div>
                <span>{isChatOpen ? 'Close Assistant' : `Ask ${activeTheme.businessName.split(' ')[0]} Assistant`}</span>
              </button>
            </div>
          </div>

          {/* Demonstration Footer Info Bar */}
          <div className="bg-[#091226] px-5 py-3.5 border-t border-blue-950 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
              <span>
                <strong>Tailored Brand Identity:</strong> Notice how the website theme, palette, and assistant
                styling match this specific business type, rather than Upper Agent's main navy theme.
              </span>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-extrabold underline underline-offset-4 shrink-0"
            >
              <span>Build this design for my business</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

