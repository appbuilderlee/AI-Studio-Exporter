import React from 'react';
import { ProcessStage } from '../utils/zipHandler';
import { Language } from '../types';

interface ConversionProgressProps {
  stage: ProcessStage;
  message?: string;
  lang: Language;
  onReset: () => void;
}

const ConversionProgress: React.FC<ConversionProgressProps> = ({ stage, message, lang, onReset }) => {
  
  // Map stages to progress percentage
  const getProgress = () => {
    switch (stage) {
      case 'idle': return 0;
      case 'reading': return 10;
      case 'analyzing': return 30;
      case 'patching': return 60;
      case 'compressing': return 90;
      case 'done': return 100;
      case 'error': return 100;
      default: return 0;
    }
  };

  const isError = stage === 'error';
  const isDone = stage === 'done';

  return (
    <div className="w-full h-full min-h-[360px] flex flex-col items-center justify-center p-8 text-center bg-slate-950 relative overflow-hidden">
      
      {/* Background Pulse for Active State */}
      {!isDone && !isError && (
        <div className="absolute inset-0 bg-tech-accent/5 animate-pulse-slow pointer-events-none"></div>
      )}

      {/* Main Icon Area */}
      <div className="mb-8 relative z-10">
        {isError ? (
          <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 border border-red-500/20">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        ) : isDone ? (
          <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 border border-green-500/20 animate-bounce">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        ) : (
          <div className="w-20 h-20 relative flex items-center justify-center">
             <div className="absolute inset-0 border-4 border-slate-800 rounded-full"></div>
             <div className="absolute inset-0 border-4 border-tech-accent rounded-full border-t-transparent animate-spin"></div>
             <span className="text-xs font-mono text-tech-accent">{getProgress()}%</span>
          </div>
        )}
      </div>

      {/* Text Info */}
      <div className="z-10 space-y-2 mb-8 max-w-xs mx-auto">
        <h3 className={`text-2xl font-bold ${isError ? 'text-red-500' : isDone ? 'text-green-400' : 'text-white'}`}>
          {isError 
            ? (lang === 'zh' ? '處理失敗' : 'Failed')
            : isDone 
              ? (lang === 'zh' ? '完成！' : 'Success!')
              : (lang === 'zh' ? '處理中...' : 'Processing...')}
        </h3>
        <p className="text-slate-400 text-sm font-mono h-6 overflow-hidden text-ellipsis whitespace-nowrap">
          {message || '...'}
        </p>
      </div>

      {/* Progress Bar (Visual only) */}
      {!isDone && !isError && (
        <div className="w-full max-w-[200px] h-1 bg-slate-800 rounded-full overflow-hidden mb-8 z-10">
          <div 
            className="h-full bg-tech-accent shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all duration-300 ease-out"
            style={{ width: `${getProgress()}%` }}
          ></div>
        </div>
      )}

      {/* Reset Button */}
      {(isDone || isError) && (
        <button 
          onClick={onReset}
          className="z-10 px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-all border border-slate-700 hover:border-slate-500 text-sm font-medium"
        >
          {lang === 'zh' ? '處理其他檔案' : 'Convert Another File'}
        </button>
      )}
      
      {isDone && (
        <p className="absolute bottom-6 left-0 w-full text-center text-xs text-slate-500">
          {lang === 'zh' ? '下載已自動開始' : 'Download started automatically'}
        </p>
      )}
    </div>
  );
};

export default ConversionProgress;