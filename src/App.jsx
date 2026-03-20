import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import {
  BuildingStorefrontIcon,
  MegaphoneIcon,
  UserGroupIcon,
  SparklesIcon,
  ArrowRightIcon,
  ChartBarIcon,
  BoltIcon,
  GiftIcon
} from '@heroicons/react/24/outline';
import { ArrowTrendingUpIcon, ShieldCheckIcon, GlobeAltIcon } from '@heroicons/react/24/solid';
import Logo from './components/Logo';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import ConsumerJourney from './components/ConsumerJourney';
import Resources from './pages/Resources';
import AiAssistant from './components/AiAssistant';

function Home() {
  const openPortal = (port) => {
    // Determine the subdomain based on the dev port
    const subdomain = port === 5174 ? 'brands' : 'partner';
    
    // In local dev, use localhost. In production, use the official subdomain.
    const isDev = window.location.hostname === 'localhost';
    const targetUrl = isDev 
      ? `http://localhost:${port}` 
      : `https://${subdomain}.mojipass.com`;

    window.location.href = targetUrl;
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative">
        {/* Abstract Background Glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-br from-[var(--color-brand)]/20 via-[var(--color-accent)]/10 to-transparent blur-[var(--glow-blur)] rounded-full pointer-events-none -z-10"></div>

        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl text-sm font-medium text-emerald-400 mb-4 animate-fade-in-up">
            <SparklesIcon className="w-4 h-4" />
            <span>The Shopify Integration is Now Live</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500 leading-tight">
            The Zero-Friction Sponsored <br className="hidden md:block" /> Checkout Network.
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Turn every checkout into a campaign. Connect premium brands, independent Shopify merchants, and high-reach creators into a single, high-converting retail footprint.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => document.getElementById('tri-sided').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-accent)] hover:brightness-110 text-white rounded-full font-bold text-lg shadow-[0_0_40px_-10px_var(--color-brand)] transition-all transform hover:scale-105 flex items-center gap-2"
            >
              Choose Your Portal <ArrowRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <div className="border-y border-white/5 bg-white/5 backdrop-blur-sm py-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-slate-400 font-medium text-sm">
          <div className="flex items-center gap-3">
            <ShieldCheckIcon className="w-6 h-6 text-slate-500" />
            Guaranteed Closed-Loop Attribution
          </div>
          <div className="flexItems-center gap-3">
            <span className="text-emerald-400 font-bold">100%</span> Seamless Shopify Integration
          </div>
          <div className="flex items-center gap-3">
            <GlobeAltIcon className="w-6 h-6 text-slate-500" />
            Universal SDK Incoming
          </div>
        </div>
      </div>

      <ConsumerJourney />

      {/* Bento Box: Tri-Sided Marketplace */}
      <section id="tri-sided" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter">
              MOJIPASS®
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">One Ecosystem. Four Winners.</h2>
            <p className="text-slate-400 text-lg">See how Mojipass® creates value for every player in the retail loop.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Card 1: Brands */}
            <div className="group relative bg-[var(--card-bg)] border border-[var(--card-border)] p-8 rounded-3xl hover:border-[var(--color-brand)]/30 transition-all cursor-pointer overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-brand)]/5 blur-[var(--glow-blur)] rounded-full group-hover:bg-[var(--color-brand)]/10 transition-all"></div>

              <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20">
                <MegaphoneIcon className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[var(--color-text)]">Sponsoring Brands</h3>
              <p className="text-[var(--color-text-muted)] mb-8 leading-relaxed">
                Acquire new customers with zero risk. Distribute samples or sponsored trials directly into the hands of highly-targeted buyers at the exact moment of checkout. Fixed CPAs.
              </p>

              <ul className="space-y-3 mb-8 text-sm text-[var(--color-text-muted)]">
                <li className="flex items-center gap-2"><ArrowTrendingUpIcon className="w-4 h-4 text-[var(--color-brand)]" /> AI Audience Matching</li>
                <li className="flex items-center gap-2"><ArrowTrendingUpIcon className="w-4 h-4 text-[var(--color-brand)]" /> Real-time Analytics Dashboard</li>
              </ul>

              <button
                onClick={() => openPortal(5174)}
                className="w-full py-4 rounded-xl bg-blue-500/10 text-blue-400 font-bold hover:bg-blue-500/20 border border-blue-500/20 transition-all flex justify-center items-center gap-2 group-hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)]"
              >
                Access Brand Portal <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Card 2: Merchants */}
            <div className="group relative bg-[var(--card-bg)] border border-[var(--card-border)] p-8 rounded-3xl hover:border-[var(--color-brand)]/30 transition-all cursor-pointer overflow-hidden transform md:-translate-y-4 shadow-2xl backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-brand)]/5 blur-[var(--glow-blur)] rounded-full group-hover:bg-[var(--color-brand)]/10 transition-all"></div>

              <div className="w-14 h-14 bg-[var(--color-brand)]/10 rounded-2xl flex items-center justify-center mb-6 border border-[var(--color-brand)]/20">
                <BuildingStorefrontIcon className="w-7 h-7 text-[var(--color-brand)]" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[var(--color-text)]">Shopify Merchants</h3>
              <p className="text-[var(--color-text-muted)] mb-8 leading-relaxed">
                Increase your checkout conversion rate and AOV without spending a dime. Offer your customers premium free gifts sponsored entirely by external brands.
              </p>

              <ul className="space-y-3 mb-8 text-sm text-[var(--color-text-muted)]">
                <li className="flex items-center gap-2"><ArrowTrendingUpIcon className="w-4 h-4 text-[var(--color-brand)]" /> 1-Click Shopify Install</li>
                <li className="flex items-center gap-2"><ArrowTrendingUpIcon className="w-4 h-4 text-[var(--color-brand)]" /> Zero Inventory Management</li>
              </ul>

              <button
                onClick={() => alert('This would deep link to the Shopify App Store Listing!')}
                className="w-full py-4 rounded-xl bg-[var(--color-brand)] text-white font-bold hover:brightness-110 transition-all flex justify-center items-center gap-2 shadow-[0_0_20px_-5px_var(--color-brand)]"
              >
                Install Shopify App <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Card 3: Partners */}
            <div className="group relative bg-[var(--card-bg)] border border-[var(--card-border)] p-8 rounded-3xl hover:border-[var(--color-brand)]/30 transition-all cursor-pointer overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-brand)]/5 blur-[var(--glow-blur)] rounded-full group-hover:bg-[var(--color-brand)]/10 transition-all"></div>

              <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/20">
                <UserGroupIcon className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[var(--color-text)]">Creators & Partners</h3>
              <p className="text-[var(--color-text-muted)] mb-8 leading-relaxed">
                Monetize your audience with high-converting brand matches. Share your unique links and get paid the second a consumer rewards themselves.
              </p>

              <ul className="space-y-3 mb-8 text-sm text-[var(--color-text-muted)]">
                <li className="flex items-center gap-2"><ArrowTrendingUpIcon className="w-4 h-4 text-[var(--color-brand)]" /> Instant Link Generation</li>
                <li className="flex items-center gap-2"><ArrowTrendingUpIcon className="w-4 h-4 text-[var(--color-brand)]" /> Guaranteed Ledger Commission</li>
              </ul>

              <button
                onClick={() => openPortal(5175)}
                className="w-full py-4 rounded-xl bg-purple-500/10 text-purple-400 font-bold hover:bg-purple-500/20 border border-purple-500/20 transition-all flex justify-center items-center gap-2 group-hover:shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)]"
              >
                Access Partner Hub <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Card 4: Consumers/Shoppers */}
            <div className="group relative bg-gradient-to-br from-[#1E293B] to-emerald-900/20 border border-emerald-500/20 p-8 rounded-3xl hover:border-emerald-500/40 transition-all cursor-pointer overflow-hidden backdrop-blur-sm md:col-span-3">
              <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-emerald-500/10 blur-[100px] rounded-full group-hover:bg-emerald-500/20 transition-all"></div>

              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1">
                  <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 border border-emerald-500/20">
                    <SparklesIcon className="w-7 h-7 text-emerald-400" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-white">The Everyday Shopper</h3>
                  <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                    The ultimate winner. Shoppers unlock premium, full-sized trials and exclusive gifts from top-tier brands—simply for making a purchase they already planned. No hoops, no friction, just pure delight at checkout.
                  </p>
                  <div className="flex items-center gap-6 text-emerald-400 font-bold">
                    <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/10 tracking-tight text-sm">
                      <BoltIcon className="w-4 h-4" /> Zero Extra Cost
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/10 tracking-tight text-sm">
                      <GiftIcon className="w-4 h-4" /> Full-Sized Rewards
                    </div>
                  </div>
                </div>
                <div className="relative w-full md:w-80 h-48 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md flex items-center justify-center overflow-hidden group-hover:border-emerald-500/30 transition-all">
                  <div className="text-center">
                    <div className="text-xs text-slate-500 uppercase tracking-widest mb-2 font-bold opacity-50">Mojipass® Revealed</div>
                    <div className="text-2xl font-black text-white tracking-tighter">GIFT UNLOCKED</div>
                    <div className="text-emerald-400 text-sm font-bold">Complimentary with Purchase</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

function App() {
  const openPortal = (port) => {
    const subdomain = port === 5174 ? 'brands' : 'partner';
    const isDev = window.location.hostname === 'localhost';
    window.location.href = isDev 
      ? `http://localhost:${port}` 
      : `https://${subdomain}.mojipass.com`;
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-50 selection:bg-emerald-500 selection:text-white font-sans overflow-x-hidden flex flex-col">

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[var(--color-bg)]/80 backdrop-blur-md border-b border-[var(--card-border)]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/">
            <Logo className="h-14 md:h-16" textColor="text-[var(--color-text)]" theme={document.documentElement.getAttribute('data-theme')} />
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--color-text-muted)]">
            <Link to="/#brands" className="hover:text-[var(--color-text)] transition-colors">For Brands</Link>
            <Link to="/#merchants" className="hover:text-[var(--color-text)] transition-colors">For Merchants</Link>
            <Link to="/#partners" className="hover:text-[var(--color-text)] transition-colors">For Partners</Link>
            <Link to="/resources" className="hover:text-[var(--color-text)] transition-colors">Resources</Link>
            <button
              onClick={() => {
                const current = document.documentElement.getAttribute('data-theme');
                document.documentElement.setAttribute('data-theme', current === 'enterprise' ? '' : 'enterprise');
              }}
              className="px-4 py-1.5 rounded-full border border-[var(--card-border)] text-xs hover:bg-[var(--card-bg)] transition-all"
            >
              Toggle V2.0
            </button>
          </div>
          <button
            onClick={() => openPortal(5174)}
            className="px-6 py-2.5 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full text-sm font-semibold transition-all backdrop-blur-sm"
          >
            Log In
          </button>
        </div>
      </nav>

      {/* Main Routing Content */}
      <main className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 text-center text-slate-500 text-sm mt-12 bg-black/20">
        <div className="flex justify-center mb-6 opacity-75 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
          <Link to="/">
            <Logo className="h-10" showText={false} />
          </Link>
        </div>
        <p className="mb-4">© 2026 Mojipass® Ecosystem. The Quad-Winner Marketplace.</p>
        <div className="flex justify-center gap-6">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </footer>

      <AiAssistant />
    </div>
  );
}

export default App;
