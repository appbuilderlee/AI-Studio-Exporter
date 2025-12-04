import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900/50 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="group p-6 bg-slate-800/40 rounded-xl border border-slate-700/50 hover:bg-slate-800 hover:border-cyan-500/30 transition-all duration-300">
              <div className="w-12 h-12 mb-4 rounded-lg bg-cyan-900/20 flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-slate-200 border-l-2 border-cyan-500 pl-3">
                  {feature.zh}
                </p>
                <p className="text-xs text-slate-400 font-mono pl-3">
                  {feature.en}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;