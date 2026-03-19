import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  ExternalLink, 
  ShoppingBag, 
  Gift, 
  Search, 
  ArrowRight,
  Sparkles,
  PlayCircle
} from 'lucide-react';

const JourneyStep = ({ icon: Icon, title, description, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="flex flex-col items-center text-center p-6 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl backdrop-blur-sm hover:border-[var(--color-brand)]/30 transition-all group"
    >
      <div className="w-16 h-16 bg-[var(--color-brand)]/10 rounded-2xl flex items-center justify-center mb-4 border border-[var(--color-brand)]/20 group-hover:bg-[var(--color-brand)]/20 transition-all">
        <Icon className="w-8 h-8 text-[var(--color-brand)]" />
      </div>
      <h4 className="text-lg font-bold text-[var(--color-text)] mb-2">{title}</h4>
      <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

const Connector = ({ delay }) => (
  <motion.div 
    initial={{ scaleX: 0, opacity: 0 }}
    whileInView={{ scaleX: 1, opacity: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: "anticipate" }}
    className="hidden lg:flex flex-1 items-center justify-center min-w-[40px] origin-left"
  >
    <ArrowRight className="text-[var(--color-brand)]/40 w-8 h-8" />
  </motion.div>
);

export default function ConsumerJourney() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-brand)]/5 blur-[var(--glow-blur)] rounded-full -z-10"></div>
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-accent)]/5 blur-[var(--glow-blur)] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-brand)]/10 border border-[var(--color-brand)]/20 text-[var(--color-brand)] text-sm font-medium mb-4"
          >
            <Sparkles className="w-4 h-4" />
            <span>The Magic of Mojipass®</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display tracking-tight">Visualizing the Consumer Journey</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            See how Mojipass® intelligently bridges the gap between influencers, brands, and buyers—ensuring every shopper walks away with an unexpected "thank you."
          </p>
          <div className="mt-8 flex justify-center">
            <a 
              href="/resources" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all text-sm uppercase tracking-widest"
            >
              <PlayCircle className="w-5 h-5 text-emerald-400" />
              Watch Video Version
            </a>
          </div>
        </div>

        <div className="space-y-20">
          {/* Path 1: Influencer Driven */}
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500/50 to-transparent rounded-full lg:hidden"></div>
            <h3 className="text-xl font-bold text-emerald-400 mb-8 flex items-center gap-2 px-4 lg:px-0">
              <span className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-sm">1</span>
              The Influencer Loop
            </h3>
            
            <div className="flex flex-col lg:flex-row gap-6 lg:items-center">
              <JourneyStep 
                icon={Users}
                title="Social Discovery"
                description="Consumer clicks a unique tracked link from their favorite creator."
                delay={0.1}
              />
              <Connector delay={0.4} />
              <JourneyStep 
                icon={ShoppingBag}
                title="Merchant Checkout"
                description="They shop as normal on a partner brand's Shopify storefront."
                delay={0.3}
              />
              <Connector delay={0.6} />
              <JourneyStep 
                icon={Gift}
                title="Rewards Unlocked"
                description="The ultimate win: The consumer receives a full-sized sponsored trial or gift, purely for shopping."
                delay={0.5}
              />
            </div>
          </div>

          {/* Path 2: Direct / Organic */}
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500/50 to-transparent rounded-full lg:hidden"></div>
            <h3 className="text-xl font-bold text-blue-400 mb-8 flex items-center gap-2 px-4 lg:px-0">
              <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-sm">2</span>
              Direct Organic Discovery
            </h3>
            
            <div className="flex flex-col lg:flex-row gap-6 lg:items-center">
              <JourneyStep 
                icon={Search}
                title="Direct Visit"
                description="Consumer arrives at the merchant site via search or direct traffic."
                delay={0.2}
              />
              <Connector delay={0.5} />
              <JourneyStep 
                icon={ShoppingBag}
                title="Intelligent Selection"
                description="Mojipass® identifies the consumer and prepares available sponsor offers."
                delay={0.4}
              />
              <Connector delay={0.7} />
              <JourneyStep 
                icon={ExternalLink}
                title="Consumer Delight"
                description="Exclusive gifts are revealed at checkout, creating a high-value surprise for the shopper."
                delay={0.6}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
