import React, { useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import DeploymentGuide from './components/DeploymentGuide';
import { Language } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('zh');

  const toggleLang = () => {
    setLang(prev => prev === 'zh' ? 'en' : 'zh');
  };

  return (
    <div className="min-h-screen text-slate-200 selection:bg-cyan-500/30">
      
      {/* Navigation / Header */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded"></div>
            <span className="font-bold text-lg tracking-tight text-white">AI Studio Exporter</span>
          </div>
          
          <button 
            onClick={toggleLang}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 hover:border-cyan-500/50 transition-all text-xs font-medium text-slate-300"
          >
            <span className={lang === 'zh' ? 'text-cyan-400' : 'text-slate-500'}>中文</span>
            <span className="w-px h-3 bg-slate-600"></span>
            <span className={lang === 'en' ? 'text-cyan-400' : 'text-slate-500'}>EN</span>
          </button>
        </div>
      </nav>

      <main>
        <Hero lang={lang} />
        <Features />
        <DeploymentGuide lang={lang} />
      </main>

      <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center">
        <div className="max-w-7xl mx-auto px-6 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} AI Studio Project Exporter. {lang === 'zh' ? '專注於技術' : 'Focused on Tech'}.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;