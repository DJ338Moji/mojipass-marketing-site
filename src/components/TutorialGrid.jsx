import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircle, ShieldCheck, Zap, BarChart3 } from 'lucide-react';
import VideoPlayer from './VideoPlayer';

const tutorials = [
  {
    id: 1,
    title: "The Consumer Journey",
    category: "Brand",
    videoId: "dQw4w9WgXcQ", // Placeholder
    description: "Learn how Mojipass bridges influencers and direct shoppers.",
    icon: Zap
  },
  {
    id: 2,
    title: "Merchant Onboarding",
    category: "Merchant",
    videoId: "dQw4w9WgXcQ", // Placeholder
    description: "Setting up your first sponsored trial campaign.",
    icon: ShieldCheck
  },
  {
    id: 3,
    title: "Partner Analytics",
    category: "Partner",
    videoId: "dQw4w9WgXcQ", // Placeholder
    description: "How to track and optimize your unique reward links.",
    icon: BarChart3
  },
  // Brand Sponsored Placeholder
  {
    id: 4,
    title: "Case Study: Premium Rewards",
    category: "Sponsored",
    videoId: "dQw4w9WgXcQ", // Placeholder
    description: "See how leading brands use Mojipass to drive LTV.",
    icon: PlayCircle,
    isSponsored: true
  }
];

export default function TutorialGrid() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Brand', 'Merchant', 'Partner', 'Sponsored'];

  const filteredTutorials = filter === 'All' 
    ? tutorials 
    : tutorials.filter(t => t.category === filter);

  return (
    <div className="space-y-12">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              filter === cat 
                ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' 
                : 'bg-white/5 text-slate-400 hover:bg-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredTutorials.map((tutorial) => (
            <motion.div
              key={tutorial.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className={`bg-white/5 border rounded-2xl p-6 transition-all ${
                tutorial.isSponsored ? 'border-amber-500/30' : 'border-white/10'
              }`}
            >
              <div className="mb-6 relative">
                 <VideoPlayer videoId={tutorial.videoId} title={tutorial.title} />
                 {tutorial.isSponsored && (
                   <span className="absolute top-2 right-2 px-2 py-1 bg-amber-500 text-black text-[10px] font-bold rounded uppercase tracking-wider">
                     Sponsored
                   </span>
                 )}
              </div>
              
              <div className="flex items-start gap-4">
                <div className={`p-2 rounded-lg ${tutorial.isSponsored ? 'bg-amber-500/10' : 'bg-emerald-500/10'}`}>
                  <tutorial.icon className={`w-5 h-5 ${tutorial.isSponsored ? 'text-amber-400' : 'text-emerald-400'}`} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">{tutorial.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{tutorial.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
