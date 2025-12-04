import React, { useState } from 'react';
import { Language } from '../types';
import FileUploader from './FileUploader';
import ConversionProgress from './ConversionProgress';
import { processZip, ProcessStage } from '../utils/zipHandler';

interface HeroProps {
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const [stage, setStage] = useState<ProcessStage>('idle');
  const [message, setMessage] = useState<string>('');

  const handleFileSelect = async (file: File) => {
    setStage('reading');
    setMessage('');
    
    // Small delay to allow UI to update
    setTimeout(async () => {
      await processZip(file, {
        onProgress: (newStage, msg) => {
          setStage(newStage);
          if (msg) setMessage(msg);
        }
      });
    }, 500);
  };

  const handleReset = () => {
    setStage('idle');
    setMessage('');
  };

  return (
    <section className="relative pt-32 pb-20 px-6 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Text Content */}
        <div className="z-10 text-center lg:text-left animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-semibold tracking-widest text-tech-accent uppercase bg-tech-accent/10 rounded-full border border-tech-accent/20">
            <span className="w-1.5 h-1.5 rounded-full bg-tech-accent animate-pulse"></span>
            {lang === 'zh' ? '靜態部署工具' : 'Deployment Tool'}
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            {lang === 'zh' ? (
              <>
                一鍵部署您的 <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-glow to-blue-500">AI Studio</span> 專案
              </>
            ) : (
              <>
                Deploy your <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-glow to-blue-500">AI Studio</span> Apps
              </>
            )}
          </h1>
          
          <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
            {lang === 'zh' 
              ? '自動修正路徑、優化 PWA 設定，並生成 Cloudflare、GitHub Pages 與 Vercel 所需的設定檔。完全在瀏覽器端執行，安全無虞。' 
              : 'Auto-fix paths, optimize PWA configs, and generate necessary headers for Cloudflare, GitHub Pages, and Vercel. 100% Client-side.'}
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm font-mono text-slate-500">
             <div className="flex items-center gap-2 px-4 py-2 rounded bg-slate-900 border border-slate-800">
                <span className="text-green-500">✓</span> No Server
             </div>
             <div className="flex items-center gap-2 px-4 py-2 rounded bg-slate-900 border border-slate-800">
                <span className="text-green-500">✓</span> Secure
             </div>
             <div className="flex items-center gap-2 px-4 py-2 rounded bg-slate-900 border border-slate-800">
                <span className="text-green-500">✓</span> Fast
             </div>
          </div>
        </div>

        {/* Right: Functional Uploader Card */}
        <div className="relative z-10 w-full max-w-lg mx-auto lg:mr-0">
          <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-slate-700 to-slate-900 shadow-2xl shadow-cyan-900/20">
            <div className="bg-slate-950 rounded-2xl overflow-hidden min-h-[360px] relative">
              
              {stage === 'idle' ? (
                <FileUploader onFileSelect={handleFileSelect} lang={lang} />
              ) : (
                <ConversionProgress 
                  stage={stage} 
                  message={message} 
                  lang={lang} 
                  onReset={handleReset} 
                />
              )}

            </div>
          </div>
          
          {/* Background Decor */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-tech-accent/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;