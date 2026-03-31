import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircle, ShieldCheck, Zap, BarChart3 } from 'lucide-react';
import VideoPlayer from './VideoPlayer';

const tutorials = [
  {
    id: 1,
    title: "The Shopper Journey",
    category: "Consumer",
    image: "/assets/shopper_journey.png",
    description: "Visualizing the frictionless 1-click reward activation for buyers.",
    icon: Zap
  },
  {
    id: 2,
    title: "Merchant Integration",
    category: "Merchant",
    image: "/assets/merchant_journey.png",
    description: "The 1-click setup and AI-driven synergy matching for store owners.",
    icon: ShieldCheck
  },
  {
    id: 3,
    title: "Partner & Creator Hub",
    category: "Partner",
    image: "/assets/partner_journey.png",
    description: "Tracking unique reward links, attributed trials, and commissions.",
    icon: BarChart3
  },
  {
    id: 4,
    title: "Brand Sponsorship",
    category: "Brand",
    image: "/assets/brand_journey.png",
    description: "Scaling audience reach through performance-based trial sponsorship.",
    icon: PlayCircle,
    isSponsored: true
  }
];

const categoryGuides = {
  Consumer: "/assets/guides/shopper_onboarding_guide.pdf",
  Merchant: "/assets/guides/merchant_onboarding_guide.pdf",
  Partner: "/assets/guides/partner_onboarding_guide.pdf",
  Brand: "/assets/guides/brand_onboarding_guide.pdf"
};

export default function TutorialGrid() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Consumer', 'Merchant', 'Partner', 'Brand'];

  const filteredTutorials = filter === 'All'
    ? tutorials
    : tutorials.filter(t => t.category === filter);

  const activeGuide = filter !== 'All' ? categoryGuides[filter] : null;

  return (
    <div className="space-y-12">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === cat
              ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
              : 'bg-white/5 text-slate-400 hover:bg-white/10'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Instructional PDF Banner */}
      <AnimatePresence mode="wait">
        {activeGuide && (
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-4xl mx-auto p-1 rounded-3xl bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border border-white/10"
          >
            <div className="bg-[#020617] rounded-[22px] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center border border-emerald-500/20 shadow-inner">
                  <span className="text-3xl">📄</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{filter} Instructions</h3>
                  <p className="text-slate-400 text-sm font-medium">Download the official {filter} Onboarding Playbook (PDF)</p>
                </div>
              </div>
              <a
                href={activeGuide}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto px-8 py-4 bg-emerald-500 text-white rounded-xl text-sm font-black uppercase tracking-widest hover:brightness-110 transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
              >
                Download PDF
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
        <AnimatePresence mode="popLayout">
          {filteredTutorials.map((tutorial) => (
            <motion.div
              key={tutorial.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className={`group relative bg-white/5 border rounded-3xl overflow-hidden transition-all hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/10 ${tutorial.isSponsored ? 'border-amber-500/30' : 'border-white/10'
                }`}
            >
              <a href={tutorial.image} target="_blank" rel="noopener noreferrer" className="block relative aspect-video overflow-hidden">
                <img
                  src={tutorial.image}
                  alt={tutorial.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-bold uppercase tracking-widest">
                    View Full Infographic
                  </span>
                </div>
                {tutorial.isSponsored && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-amber-500 text-black text-[10px] font-black rounded-full uppercase tracking-wider shadow-lg">
                    Priority
                  </span>
                )}
              </a>

              <div className="p-8">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-2xl ${tutorial.isSponsored ? 'bg-amber-500/10' : 'bg-emerald-500/10'}`}>
                    <tutorial.icon className={`w-6 h-6 ${tutorial.isSponsored ? 'text-amber-400' : 'text-emerald-400'}`} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{tutorial.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed font-medium">{tutorial.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
