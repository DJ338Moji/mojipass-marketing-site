import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  ExternalLink, 
  ShoppingBag, 
  Gift, 
  Search, 
  Sparkles,
  Zap
} from 'lucide-react';

const JourneyStep = ({ icon: Icon, title, description, delay, colorClass }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={`flex flex-col items-center text-center p-6 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl backdrop-blur-md hover:border-${colorClass}/40 transition-shadow hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.2)] group relative overflow-hidden`}
    >
      <div className={`w-16 h-16 bg-${colorClass}/10 rounded-2xl flex items-center justify-center mb-6 border border-${colorClass}/20 group-hover:bg-${colorClass}/20 transition-all relative z-10`}>
        <Icon className={`w-8 h-8 text-${colorClass}`} />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0, 0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`absolute inset-0 bg-${colorClass}/30 rounded-2xl blur-xl`}
        ></motion.div>
      </div>
      <h4 className="text-xl font-bold text-white mb-3 tracking-tight z-10">{title}</h4>
      <p className="text-slate-400 text-sm leading-relaxed z-10">{description}</p>
      
      {/* Decorative inner glow */}
      <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-${colorClass}/5 blur-3xl rounded-full group-hover:bg-${colorClass}/10 transition-all`}></div>
    </motion.div>
  );
};

const FlowLine = ({ colorClass }) => (
  <div className="absolute top-[32px] left-8 right-8 h-[2px] hidden lg:block -z-10">
    <div className={`w-full h-full bg-gradient-to-r from-transparent via-${colorClass}/20 to-transparent`}></div>
    <motion.div 
      initial={{ left: "-10%" }}
      animate={{ left: "110%" }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      className={`absolute top-1/2 -translate-y-1/2 w-40 h-[2px] bg-gradient-to-r from-transparent via-${colorClass} to-transparent shadow-[0_0_15px_${colorClass === 'emerald-400' ? '#10b981' : '#3b82f6'}]`}
    ></motion.div>
  </div>
);

export default function ConsumerJourney() {
  return (
    <section id="consumer" className="py-24 px-6 relative overflow-hidden selection:bg-emerald-500 selection:text-white">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full -z-10 animate-float"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Zap className="w-3 h-3 fill-current" />
            <span>Interactive Workflow</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 font-display tracking-tight leading-tight">
            The Zero-Friction Funnel
          </h2>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            Watch how Mojipass® drives value across the retail loop—from influencer discovery to the ultimate gift at checkout.
          </p>
        </div>

        <div className="space-y-32">
          {/* Path 1: Influencer Driven */}
          <div className="relative">
            <div className="flex items-center gap-4 mb-12">
               <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center font-bold text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                 01
               </div>
               <h3 className="text-2xl font-bold text-white tracking-tight">The Creator-Powered Bridge</h3>
            </div>
            
            <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <FlowLine colorClass="emerald-400" />
              <JourneyStep 
                icon={Users}
                title="Discovery"
                description="A shopper engages with a creator's unique 'Smart Pass' link on social media."
                delay={0.1}
                colorClass="emerald-400"
              />
              <JourneyStep 
                icon={ShoppingBag}
                title="Seamless Checkout"
                description="They proceed to purchase on the Shopify store—exactly as they normally would."
                delay={0.3}
                colorClass="emerald-400"
              />
              <JourneyStep 
                icon={Gift}
                title="Gift Unlocked"
                description="The 'Pass' reveals a premium sponsored reward, driving delight and retention."
                delay={0.5}
                colorClass="emerald-400"
              />
            </div>
          </div>

          {/* Path 2: Merchant Native */}
          <div className="relative">
            <div className="flex items-center gap-4 mb-12">
               <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center font-bold text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                 02
               </div>
               <h3 className="text-2xl font-bold text-white tracking-tight">Merchant Native Activation</h3>
            </div>
            
            <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <FlowLine colorClass="blue-400" />
              <JourneyStep 
                icon={Search}
                title="Organic Visit"
                description="Consumer arrives at the store directly via search or brand loyalty."
                delay={0.2}
                colorClass="blue-400"
              />
              <JourneyStep 
                icon={Sparkles}
                title="AI Recognition"
                description="Mojipass® matches the transaction with high-value sponsorship opportunities."
                delay={0.4}
                colorClass="blue-400"
              />
              <JourneyStep 
                icon={ExternalLink}
                title="Conversion Boost"
                description="The surprise reward increases AOV and ensures the shopper returns for more."
                delay={0.6}
                colorClass="blue-400"
              />
            </div>
          </div>
        </div>

        {/* Closing CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-32 text-center p-12 bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-blue-500/5"></div>
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-6 relative z-10 font-display">Ready to see the dashboard in action?</h3>
          <p className="text-slate-400 mb-10 relative z-10 max-w-2xl mx-auto">Experience the live data, attribution ledger, and partner marketplace with our guided demo.</p>
          <button 
            onClick={() => window.location.href = 'https://app.mojipass.com'}
            className="px-10 py-4 bg-white text-black font-black rounded-full hover:bg-emerald-400 hover:text-white transition-all transform hover:scale-110 active:scale-95 relative z-10 uppercase tracking-tighter text-lg shadow-2xl"
          >
            Access Live Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
}
