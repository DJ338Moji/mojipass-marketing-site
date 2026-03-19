import React from 'react';
import Logo from '../components/Logo';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-300 font-sans p-8 md:p-16">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 flex items-center justify-between">
            <Logo textColor="text-white" />
            <a href="/" className="text-emerald-400 hover:text-emerald-300 flex items-center gap-2 font-medium">
                <ArrowLeftIcon className="w-4 h-4" /> Back to Home
            </a>
        </div>
        
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        <p className="mb-6">Effective Date: March 2026</p>

        <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-emerald-400">1. Information We Collect</h2>
            <p>When you install the Mojipass® Shopify App, we are automatically able to access certain types of information from your Shopify account:</p>
            <ul className="list-disc pl-6 space-y-2">
                <li><strong>Customer Order Details:</strong> We read checkout objects to properly attribute zero-friction campaign trials and align commission payouts to our Network Partners.</li>
                <li><strong>Store Information:</strong> We store your Shopify primary email and store domain to create your Mojipass® Merchant identity.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-emerald-400 mt-12">2. How We Use Your Information</h2>
            <p>We use the data collected strictly for the operational functionality of the Mojipass® platform, including:</p>
            <ul className="list-disc pl-6 space-y-2">
                <li>Detecting successful conversions driven by the Mojipass® Partner Network.</li>
                <li>Calculating analytics and budget drawdowns for Sponsoring Brands safely.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-emerald-400 mt-12">3. Your Data Rights (GDPR / CCPA)</h2>
            <p>If you wish to have your data, or any customer data, completely redacted from the Mojipass® ecosystem, you may easily do so by uninstalling the application. Our automated webhooks will immediately purge your identity and campaign associations from our databases.</p>
            
            <p className="pt-8 text-sm text-slate-500">For further inquiries regarding privacy, please contact privacy@mojipass.com</p>
        </section>
      </div>
    </div>
  );
}
