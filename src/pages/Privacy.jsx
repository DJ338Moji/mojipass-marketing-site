import React from 'react';
import Logo from '../components/Logo';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function Privacy() {
  const theme = document.documentElement.getAttribute('data-theme');

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-theme font-sans p-8 md:p-16 transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 flex items-center justify-between">
          <Logo textColor="text-theme" theme={theme} />
          <a href="/" className="text-emerald-400 hover:text-emerald-300 flex items-center gap-2 font-bold uppercase tracking-widest text-xs">
            <ArrowLeftIcon className="w-4 h-4" /> Back to Home
          </a>
        </div>

        <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-[2rem] p-8 md:p-12 shadow-2xl backdrop-blur-xl">
          <h1 className="text-4xl md:text-5xl font-black text-theme mb-4 tracking-tighter">Privacy Policy</h1>
          <p className="text-theme-muted mb-12 font-medium">Last Updated: March 31, 2026</p>

          <section className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-emerald-400 mb-4">1. The Mojipass® Commitment</h2>
              <p className="leading-relaxed">Mojipass® is built on the foundation of transparency and performance. We value the privacy of our Brands, Merchants, and Partners. This policy outlines how we handle data across our ecosystem, including the Shopify App and our various management portals.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-emerald-400 mb-4">2. Data We Collect via Shopify</h2>
              <p className="mb-4 leading-relaxed">When a Merchant installs the Mojipass® Shopify App, we access data required to power the "Zero-Friction" reward engine:</p>
              <ul className="list-disc pl-6 space-y-3 text-theme-muted">
                <li><strong className="text-theme">Customer Order Telemetry:</strong> We process checkout events to properly attribute sponsored trials and calculate partner commissions.</li>
                <li><strong className="text-theme">Store Metadata:</strong> We store store name, primary email, and domain to facilitate your Merchant identity on our network.</li>
                <li><strong className="text-theme">Product Data:</strong> We read product IDs to ensure "Synergy Matching" between your inventory and sponsoring Brand rewards.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-emerald-400 mb-4">3. Data Usage & Security</h2>
              <p className="mb-4 leading-relaxed">We utilize data strictly for operational performance. We do not sell data to third-party brokers. Data usage includes:</p>
              <ul className="list-disc pl-6 space-y-3 text-theme-muted">
                <li>Calculating real-time analytics for Sponsoring Brands.</li>
                <li>Generating verified attribution ledgers for Creators and Partners.</li>
                <li>Optimizing the Bayesian Reward Engine to maximize shopper happiness.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-emerald-400 mb-4">4. Data Retention and Deletion</h2>
              <p className="leading-relaxed text-theme-muted">Mojipass® respects your "Right to be Forgotten." Uninstalling the Shopify App triggers an automated webhook that redacts your store data from our active processing units. Merchants and Partners can request a full data audit or purge at any time.</p>
            </div>

            <div className="pt-12 border-t border-[var(--card-border)]">
              <p className="text-sm text-theme-muted">For privacy-related inquiries, please contact our Data Privacy Officer at <span className="text-emerald-400 font-bold">privacy@mojipass.com</span></p>
              <p className="text-xs text-theme-muted mt-4 opacity-50 italic">Note: Mojipass® uses AES-256 encryption for all data at rest and TLS 1.3 for all data in transit.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
