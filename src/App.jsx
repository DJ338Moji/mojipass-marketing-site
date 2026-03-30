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

const openPortal = (subdomain) => {
  const isDev = window.location.hostname === 'localhost';
  let port = 5173;
  if (subdomain === 'brand') port = 5174;
  if (subdomain === 'partner') port = 5175;
  if (subdomain === 'app') port = 5176;

  window.location.href = isDev
    ? `http://localhost:${port}`
    : `https://${subdomain}.mojipass.com`;
};


function Home() {
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

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.0] mb-8 drop-shadow-2xl">
            <span className="block text-theme mb-2">THE WORLD'S FIRST</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-azure-400 to-blue-500 pb-2">
              FRICTIONLESS
            </span>
            <span className="block text-theme">CHECKOUT NETWORK.</span>
          </h1>

          <p className="text-xl md:text-2xl text-theme-muted max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            We bridge the gap between Brands, Merchants, and Creators to reward the Shopper—the world's first purely performance-based retail network. <span className="text-emerald-400">We only win when you win.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => document.getElementById('tri-sided').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-accent)] hover:brightness-110 text-theme rounded-full font-bold text-lg shadow-[0_0_40px_-10px_var(--color-brand)] transition-all transform hover:scale-105 flex items-center gap-2"
            >
              Choose Your Portal <ArrowRightIcon className="w-5 h-5" />
            </button>
          </div>

          <div className="pt-8 flex items-center justify-center gap-3 text-theme-muted text-xs font-black uppercase tracking-[0.2em]">
            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981] animate-pulse"></div>
            Purely Performance Periodic Model • Zero Subscription Fees
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <div className="border-y border-white/5 bg-white/5 backdrop-blur-sm py-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-theme-muted font-medium text-sm">
          <div className="flex items-center gap-3">
            <ShieldCheckIcon className="w-6 h-6 text-theme-muted" />
            Guaranteed Closed-Loop Attribution
          </div>
          <div className="flex items-center gap-3">
            <span className="text-emerald-400 font-bold">100%</span> Seamless Shopify Integration
          </div>
          <div className="flex items-center gap-3">
            <GlobeAltIcon className="w-6 h-6 text-theme-muted" />
            Universal SDK Incoming
          </div>
        </div>
      </div>

      <ConsumerJourney />

      {/* Bento Box: Tri-Sided Marketplace */}
      <section id="tri-sided" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-black text-theme mb-8 tracking-tighter">
              MOJIPASS®
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">One Ecosystem. Four Winners.</h2>
            <p className="text-theme-muted text-lg">See how Mojipass® creates value for every player in the retail loop.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Card 1: Brands */}
            <div id="brands" className="group relative bg-[var(--card-bg)] border border-[var(--card-border)] p-8 rounded-3xl hover:border-[var(--color-brand)]/30 transition-all overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-brand)]/5 blur-[var(--glow-blur)] rounded-full group-hover:bg-[var(--color-brand)]/10 transition-all"></div>

              <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20">
                <MegaphoneIcon className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-theme">Sponsoring Brands</h3>
              <p className="text-theme-muted mb-8 leading-relaxed">
                Acquire new customers with zero risk. Distribute samples or sponsored trials directly into the hands of highly-targeted buyers at the exact moment of checkout. Fixed CPAs.
              </p>

              <ul className="space-y-3 mb-8 text-sm text-theme-muted">
                <li className="flex items-center gap-2"><ArrowTrendingUpIcon className="w-4 h-4 text-[var(--color-brand)]" /> AI Audience Matching</li>
                <li className="flex items-center gap-2"><ArrowTrendingUpIcon className="w-4 h-4 text-[var(--color-brand)]" /> Real-time Analytics Dashboard</li>
              </ul>

              <button
                onClick={() => openPortal('brand')}
                className="w-full py-4 rounded-xl bg-blue-500/10 text-blue-400 font-bold hover:bg-blue-500/20 border border-blue-500/20 transition-all flex justify-center items-center gap-2 group-hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)]"
              >
                Access Brand Portal <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Card 2: Merchants */}
            <div id="merchants" className="group relative bg-[var(--card-bg)] border border-[var(--card-border)] p-8 rounded-3xl hover:border-[var(--color-brand)]/30 transition-all overflow-hidden transform md:-translate-y-4 shadow-2xl backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-brand)]/5 blur-[var(--glow-blur)] rounded-full group-hover:bg-[var(--color-brand)]/10 transition-all"></div>

              <div className="w-14 h-14 bg-[var(--color-brand)]/10 rounded-2xl flex items-center justify-center mb-6 border border-[var(--color-brand)]/20">
                <BuildingStorefrontIcon className="w-7 h-7 text-[var(--color-brand)]" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-theme">Shopify Merchants</h3>
              <p className="text-theme-muted mb-8 leading-relaxed">
                Increase your checkout conversion rate and AOV without spending a dime. Offer your customers premium free gifts sponsored entirely by external brands.
              </p>

              <ul className="space-y-3 mb-8 text-sm text-theme-muted">
                <li className="flex items-center gap-2"><ArrowTrendingUpIcon className="w-4 h-4 text-[var(--color-brand)]" /> 1-Click Shopify Install</li>
                <li className="flex items-center gap-2"><ArrowTrendingUpIcon className="w-4 h-4 text-[var(--color-brand)]" /> Zero Inventory Management</li>
              </ul>

              <button
                onClick={() => openPortal('app')}
                className="w-full py-4 rounded-xl bg-[var(--color-brand)] text-theme font-bold hover:brightness-110 transition-all flex justify-center items-center gap-2 shadow-[0_0_20px_-5px_var(--color-brand)]"
              >
                Install Shopify App <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Card 3: Partners */}
            <div id="partners" className="group relative bg-[var(--card-bg)] border border-[var(--card-border)] p-8 rounded-3xl hover:border-[var(--color-brand)]/30 transition-all overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-brand)]/5 blur-[var(--glow-blur)] rounded-full group-hover:bg-[var(--color-brand)]/10 transition-all"></div>

              <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/20">
                <UserGroupIcon className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-theme">Creators & Partners</h3>
              <p className="text-theme-muted mb-8 leading-relaxed">
                Monetize your audience with high-converting brand matches. Share your unique links and get paid the second a consumer rewards themselves.
              </p>

              <ul className="space-y-3 mb-8 text-sm text-theme-muted">
                <li className="flex items-center gap-2"><ArrowTrendingUpIcon className="w-4 h-4 text-[var(--color-brand)]" /> Instant Link Generation</li>
                <li className="flex items-center gap-2"><ArrowTrendingUpIcon className="w-4 h-4 text-[var(--color-brand)]" /> Guaranteed Ledger Commission</li>
              </ul>

              <button
                onClick={() => openPortal('partner')}
                className="w-full py-4 rounded-xl bg-purple-500/10 text-purple-400 font-bold hover:bg-purple-500/20 border border-purple-500/20 transition-all flex justify-center items-center gap-2 group-hover:shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)]"
              >
                Access Partner Hub <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Card 4: Consumers/Shoppers */}
            <div
              className="group relative bg-[var(--card-bg)] border border-[var(--card-border)] p-8 rounded-3xl hover:border-emerald-500/40 transition-all overflow-hidden backdrop-blur-sm md:col-span-3"
            >
              <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-emerald-500/10 blur-[100px] rounded-full group-hover:bg-emerald-500/20 transition-all"></div>

              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1">
                  <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 border border-emerald-500/20">
                    <SparklesIcon className="w-7 h-7 text-emerald-400" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>The Everyday Shopper</h3>
                  <p className="text-lg mb-6 leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                    The ultimate winner. Shoppers unlock premium, full-sized trials and exclusive gifts from top-tier brands—simply for making a purchase they already planned. No hoops, no friction, just pure delight at checkout.
                  </p>
                  <div className="flex items-center gap-6 text-emerald-400 font-bold">
                    <div className="flex items-center gap-2 px-4 py-2 flex-wrap bg-emerald-500/10 rounded-full border border-emerald-500/20 tracking-tight text-sm">
                      <BoltIcon className="w-4 h-4" /> Zero Extra Cost
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 flex-wrap bg-emerald-500/10 rounded-full border border-emerald-500/20 tracking-tight text-sm">
                      <GiftIcon className="w-4 h-4" /> Full-Sized Rewards
                    </div>
                  </div>
                </div>
                <div className="relative w-full md:w-80 h-48 bg-[var(--bg-color)] border border-[var(--card-border)] rounded-2xl backdrop-blur-md flex items-center justify-center overflow-hidden group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all relative z-10">
                  <div className="absolute inset-0 transition-opacity bg-gradient-to-br from-emerald-500/5 to-transparent opacity-50"></div>
                  <div className="text-center relative z-20">
                    <div className="text-xs uppercase tracking-widest mb-2 font-bold" style={{ color: 'var(--color-text-muted)' }}>Mojipass® Revealed</div>
                    <div className="text-2xl font-black tracking-tighter" style={{ color: 'var(--color-text)' }}>GIFT UNLOCKED</div>
                    <div className="text-emerald-500 text-sm font-bold">Complimentary with Purchase</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How it Works / Step-by-Step Playbook */}
      <section className="py-24 px-6 bg-[var(--bg-color)] border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">The Frictionless Playbook.</h2>
            <p className="text-theme-muted text-lg">How to win with Mojipass® in three simple steps.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Brands Playbook */}
            <div className="relative group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px] rounded-full"></div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm border border-blue-500/30">1</span>
                Sponsoring Brands
              </h3>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-500/50 before:via-white/10 before:to-transparent">
                <div className="relative flex items-start gap-4 z-10">
                  <div className="w-10 h-10 rounded-full bg-[var(--card-bg)] border border-blue-500/40 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                    <span className="text-blue-400 font-bold text-sm">A</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-theme mb-1">Set Your CPA</h4>
                    <p className="text-sm text-theme-muted leading-relaxed tracking-wide">Determine your exact Cost-Per-Acquisition budget and upload your campaign creative in seconds.</p>
                  </div>
                </div>
                <div className="relative flex items-start gap-4 z-10">
                  <div className="w-10 h-10 rounded-full bg-[var(--card-bg)] border border-white/10 flex items-center justify-center shrink-0">
                    <span className="text-theme-muted font-bold text-sm">B</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-theme mb-1">AI Matchmaking</h4>
                    <p className="text-sm text-theme-muted leading-relaxed tracking-wide">Our Bayesian Engine instantly matches your offer to high-intent Shopify audiences.</p>
                  </div>
                </div>
                <div className="relative flex items-start gap-4 z-10">
                  <div className="w-10 h-10 rounded-full bg-[var(--card-bg)] border border-white/10 flex items-center justify-center shrink-0">
                    <span className="text-theme-muted font-bold text-sm">C</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-theme mb-1">Acquire & Scale</h4>
                    <p className="text-sm text-theme-muted leading-relaxed tracking-wide">Pay only when a shopper successfully claims your offer. Infinite, risk-free scaling.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Merchants Playbook */}
            <div className="relative group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-brand)]/10 blur-[50px] rounded-full"></div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[var(--color-brand)]/20 text-[var(--color-brand)] flex items-center justify-center text-sm border border-[var(--color-brand)]/30">2</span>
                Shopify Merchants
              </h3>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[var(--color-brand)]/50 before:via-white/10 before:to-transparent">
                <div className="relative flex items-start gap-4 z-10">
                  <div className="w-10 h-10 rounded-full bg-[var(--card-bg)] border border-[var(--color-brand)]/40 flex items-center justify-center shrink-0 shadow-[0_0_15px_var(--color-brand)]">
                    <span className="text-[var(--color-brand)] font-bold text-sm">A</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-theme mb-1">1-Click Install</h4>
                    <p className="text-sm text-theme-muted leading-relaxed tracking-wide">Install the Mojipass app from the Shopify App Store. No coding required.</p>
                  </div>
                </div>
                <div className="relative flex items-start gap-4 z-10">
                  <div className="w-10 h-10 rounded-full bg-[var(--card-bg)] border border-white/10 flex items-center justify-center shrink-0">
                    <span className="text-theme-muted font-bold text-sm">B</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-theme mb-1">Select Rewards</h4>
                    <p className="text-sm text-theme-muted leading-relaxed tracking-wide">Review the AI Synergy scores and toggle on the free gifts you want to offer your shoppers.</p>
                  </div>
                </div>
                <div className="relative flex items-start gap-4 z-10">
                  <div className="w-10 h-10 rounded-full bg-[var(--card-bg)] border border-white/10 flex items-center justify-center shrink-0">
                    <span className="text-theme-muted font-bold text-sm">C</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-theme mb-1">Boost AOV & Earn</h4>
                    <p className="text-sm text-theme-muted leading-relaxed tracking-wide">Shoppers complete checkout, unlock their sponsored gift, and you earn an instant affiliate bounty.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Creators Playbook */}
            <div className="relative group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[50px] rounded-full"></div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm border border-purple-500/30">3</span>
                Creators & Partners
              </h3>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-purple-500/50 before:via-white/10 before:to-transparent">
                <div className="relative flex items-start gap-4 z-10">
                  <div className="w-10 h-10 rounded-full bg-[var(--card-bg)] border border-purple-500/40 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                    <span className="text-purple-400 font-bold text-sm">A</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-theme mb-1">Join the Hub</h4>
                    <p className="text-sm text-theme-muted leading-relaxed tracking-wide">Create your dynamic profile in the Partner Portal to unlock the campaign library.</p>
                  </div>
                </div>
                <div className="relative flex items-start gap-4 z-10">
                  <div className="w-10 h-10 rounded-full bg-[var(--card-bg)] border border-white/10 flex items-center justify-center shrink-0">
                    <span className="text-theme-muted font-bold text-sm">B</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-theme mb-1">Generate Links</h4>
                    <p className="text-sm text-theme-muted leading-relaxed tracking-wide">Grab high-converting tracking links for Mojipass® enabled merchants and brands.</p>
                  </div>
                </div>
                <div className="relative flex items-start gap-4 z-10">
                  <div className="w-10 h-10 rounded-full bg-[var(--card-bg)] border border-white/10 flex items-center justify-center shrink-0">
                    <span className="text-theme-muted font-bold text-sm">C</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-theme mb-1">Monetize Influence</h4>
                    <p className="text-sm text-theme-muted leading-relaxed tracking-wide">Earn guaranteed ledger commissions the second your audience claims a sponsored reward.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Happiness Quotient & Intelligence Engine */}

      <section className="py-24 px-6 border-t border-white/5 relative overflow-hidden bg-black/10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20 text-xs font-black text-emerald-400 uppercase tracking-widest">
              The Happiness Quotient
            </div>
            <div className="h-px flex-grow bg-white/5"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 tracking-tighter text-theme leading-[1.0]">
                POWERED BY THE <span className="text-emerald-400">INTELLIGENCE</span> ENGINE.
              </h2>
              <p className="text-theme-muted text-lg mb-12 leading-relaxed max-w-xl font-medium">
                We've applied complex probabilistic math and psychological dynamics to harmonize the network. Our AI ensures every participant stays giddy with value.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-theme font-bold">
                    <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center border border-emerald-500/20 shadow-lg">
                      <ChartBarIcon className="w-4 h-4 text-emerald-400" />
                    </div>
                    Bayesian Balancer
                  </div>
                  <p className="text-theme-muted text-sm leading-relaxed">Dynamically adjusting rewards to find the perfect efficiency frontier for every CPA.</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-theme font-bold">
                    <div className="w-8 h-8 bg-azure-500/10 rounded-lg flex items-center justify-center border border-azure-500/20 shadow-lg">
                      <SparklesIcon className="w-4 h-4 text-azure-400" />
                    </div>
                    Synergy Logic
                  </div>
                  <p className="text-theme-muted text-sm leading-relaxed">AI-powered brand matches ensure shoppers only see gifts they statistically deserve to love.</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-theme font-bold">
                    <div className="w-8 h-8 bg-purple-500/10 rounded-lg flex items-center justify-center border border-purple-500/20 shadow-lg">
                      <BoltIcon className="w-4 h-4 text-purple-400" />
                    </div>
                    Velocity Tiers
                  </div>
                  <p className="text-theme-muted text-sm leading-relaxed">Unlocking achievement payouts for partners who drive high-quality shopper retention.</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-theme font-bold">
                    <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center border border-emerald-500/20 shadow-lg">
                      <ArrowTrendingUpIcon className="w-4 h-4 text-emerald-400" />
                    </div>
                    Endowed Progress
                  </div>
                  <p className="text-theme-muted text-sm leading-relaxed">Onboarding that helps brands launch their first campaign in record time with 80% pre-filled data.</p>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-azure-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative bg-[#0F172A] border border-white/10 rounded-3xl p-10 shadow-2xl overflow-hidden backdrop-blur-xl">
                <div className="flex items-center justify-between mb-8">
                  <div className="text-[10px] font-black text-theme-muted uppercase tracking-[0.2em]">Network Happiness Matrix v2.0</div>
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
                    <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                  </div>
                </div>
                <div className="h-64 flex items-end gap-2.5 px-2">
                  {[45, 60, 40, 85, 55, 75, 95, 80, 85, 100].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t-sm shadow-inner transition-all hover:scale-105" style={{ height: `${h}%` }}></div>
                  ))}
                </div>
                <div className="mt-10 pt-10 border-t border-white/5 flex justify-between items-center">
                  <div>
                    <div className="text-3xl font-black text-theme tracking-tighter transition-all hover:text-emerald-400">+142%</div>
                    <div className="text-[10px] text-theme-muted uppercase font-black tracking-widest mt-1">Giddy Quotient</div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-black text-emerald-400 tracking-tighter">99.9%</div>
                    <div className="text-[10px] text-theme-muted uppercase font-black tracking-widest mt-1">Synergy Match</div>
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
  const [isLoginOpen, setIsLoginOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-theme selection:bg-emerald-500 selection:text-white font-sans overflow-x-hidden flex flex-col transition-colors duration-500">

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[var(--color-bg)]/80 backdrop-blur-md border-b border-[var(--card-border)]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/">
            <Logo className="h-14 md:h-16" textColor="text-theme" theme={document.documentElement.getAttribute('data-theme')} />
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-theme-muted">
            <a href="#brands" onClick={(e) => { e.preventDefault(); document.getElementById('brands').scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-theme transition-colors">For Brands</a>
            <a href="#merchants" onClick={(e) => { e.preventDefault(); document.getElementById('merchants').scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-theme transition-colors">For Merchants</a>
            <a href="#partners" onClick={(e) => { e.preventDefault(); document.getElementById('partners').scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-theme transition-colors">For Partners</a>
            <Link to="/resources" className="hover:text-theme transition-colors">Resources</Link>
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
          <div className="relative">
            <button
              onClick={() => setIsLoginOpen(!isLoginOpen)}
              onBlur={() => setTimeout(() => setIsLoginOpen(false), 200)}
              className="px-6 py-2.5 bg-[var(--card-bg)] hover:brightness-110 border border-[var(--card-border)] text-theme rounded-full text-sm font-semibold flex items-center gap-2 transition-all shadow-sm"
            >
              Log In
              <svg className={`w-4 h-4 transition-transform ${isLoginOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isLoginOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl shadow-2xl py-2 z-50 animate-fade-in-up">
                <div className="px-4 py-2 text-xs font-black text-theme-muted uppercase tracking-wider border-b border-[var(--card-border)] mb-2">
                  Select Your Portal
                </div>
                <button
                  onClick={() => openPortal('brand')}
                  className="w-full text-left px-4 py-3 hover:bg-[var(--color-text)] hover:bg-opacity-5 text-sm font-bold transition-colors flex flex-col items-start"
                >
                  <span className="text-theme">Brands</span>
                  <span className="text-xs text-theme-muted font-medium mt-0.5">Manage your campaigns</span>
                </button>
                <button
                  onClick={() => openPortal('app')}
                  className="w-full text-left px-4 py-3 hover:bg-[var(--color-text)] hover:bg-opacity-5 text-sm font-bold transition-colors flex flex-col items-start"
                >
                  <span className="text-theme">Merchants</span>
                  <span className="text-xs text-theme-muted font-medium mt-0.5">Access Shopify dashboard</span>
                </button>
                <button
                  onClick={() => openPortal('partner')}
                  className="w-full text-left px-4 py-3 hover:bg-[var(--color-text)] hover:bg-opacity-5 text-sm font-bold transition-colors flex flex-col items-start border-t border-[var(--card-border)] mt-2 pt-3"
                >
                  <span className="text-theme">Partners & Creators</span>
                  <span className="text-xs text-theme-muted font-medium mt-0.5">Track your commissions</span>
                </button>
              </div>
            )}
          </div>
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
      <footer className="border-t border-white/5 py-12 text-center text-theme-muted text-sm mt-12 bg-black/20">
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
