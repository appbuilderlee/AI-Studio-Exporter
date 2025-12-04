import React from 'react';
import { DEPLOYMENT_GUIDES } from '../constants';
import { Language } from '../types';

interface DeploymentGuideProps {
  lang: Language;
}

const DeploymentGuide: React.FC<DeploymentGuideProps> = ({ lang }) => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white mb-2">
          {lang === 'zh' ? '部署指南' : 'Deployment Guide'}
        </h2>
        <p className="text-slate-400 font-light">
          {lang === 'zh' ? '選擇您的目標平台' : 'Choose your target platform'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {DEPLOYMENT_GUIDES.map((guide) => (
          <div key={guide.id} className="relative bg-slate-900 rounded-xl border border-slate-800 p-6 flex flex-col h-full hover:border-slate-600 transition-colors">
            
            {/* Header */}
            <div className="flex items-center mb-6 space-x-3">
              <div className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center text-lg font-bold text-slate-300 font-mono border border-slate-700">
                {guide.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{guide.name}</h3>
            </div>

            {/* Steps */}
            <div className="space-y-6 flex-grow">
              {guide.steps.map((step, idx) => (
                <div key={idx} className="relative pl-6 border-l border-slate-800">
                  <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-slate-800 border border-slate-600"></div>
                  <div className="mb-1 text-xs font-bold text-cyan-500 uppercase tracking-wider">
                    {step.label}
                  </div>
                  <p className="text-sm text-slate-400 mb-2 leading-relaxed">
                    {step.description}
                  </p>
                  {step.command && (
                    <code className="block bg-black/50 p-2 rounded text-xs font-mono text-green-400 break-words border border-slate-800">
                      {step.command}
                    </code>
                  )}
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default DeploymentGuide;