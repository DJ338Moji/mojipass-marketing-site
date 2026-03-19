import React from 'react';
import Logo from '../components/Logo';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-300 font-sans p-8 md:p-16">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 flex items-center justify-between">
            <Logo textColor="text-white" />
            <a href="/" className="text-emerald-400 hover:text-emerald-300 flex items-center gap-2 font-medium">
                <ArrowLeftIcon className="w-4 h-4" /> Back to Home
            </a>
        </div>
        
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
        <p className="mb-6">Effective Date: March 2026</p>

        <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-emerald-400">1. Agreement to Terms</h2>
            <p>By accessing or using the Mojipass® ecosystem (including the Brand Portal, Partner Hub, or Shopify App), you agree to be bound by these Terms of Service.</p>

            <h2 className="text-2xl font-semibold text-emerald-400 mt-12">2. Shopify App Integration</h2>
            <p>You grant Mojipass® permission to process read-only order telemetry from your Shopify storefront specifically to attribute trial activations sponsored by outside Brands. Mojipass® is not responsible for fulfilling or shipping these third-party sponsored products; the liability remains with the fulfilling brand.</p>

            <h2 className="text-2xl font-semibold text-emerald-400 mt-12">3. Partner Network Commission</h2>
            <p>Network Partners (Creators/Publishers) are guaranteed a fixed commission as displayed within the Partner Hub for every verified conversion. Payout schedules are determined on a rolling Net-30 basis.</p>

            <h2 className="text-2xl font-semibold text-emerald-400 mt-12">4. Disclaimers</h2>
            <p>The service is provided "AS IS" without any warranties of any kind. Mojipass® makes no guarantee regarding the volume of trial activations or storefront conversions generated.</p>

            <p className="pt-8 text-sm text-slate-500">For legal inquiries, contact legal@mojipass.com</p>
        </section>
      </div>
    </div>
  );
}
