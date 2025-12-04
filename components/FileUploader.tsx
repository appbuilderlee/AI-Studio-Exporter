import React, { useCallback, useState } from 'react';
import { Icons } from '../constants';
import { Language } from '../types';

interface FileUploaderProps {
  onFileSelect: (file: File) => void;
  lang: Language;
  disabled?: boolean;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onFileSelect, lang, disabled }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragging(true);
    } else if (e.type === 'dragleave') {
      setIsDragging(false);
    }
  }, []);

  const validateAndUpload = (file: File) => {
    setError(null);
    // Check MIME type or extension. Some browsers might not detect zip MIME correctly.
    if (file.type === 'application/zip' || file.type === 'application/x-zip-compressed' || file.name.endsWith('.zip')) {
      onFileSelect(file);
    } else {
      setError(lang === 'zh' ? '錯誤：僅支援 ZIP 格式' : 'Error: Only ZIP files supported');
    }
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (disabled) return;

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndUpload(e.dataTransfer.files[0]);
    }
  }, [disabled, lang]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      validateAndUpload(e.target.files[0]);
    }
  };

  return (
    <div 
      className={`relative w-full h-full min-h-[360px] flex flex-col items-center justify-center p-8 transition-all duration-300
        ${isDragging 
          ? 'bg-tech-accent/10' 
          : 'bg-transparent hover:bg-slate-900/50'
        }
      `}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <input 
        type="file" 
        accept=".zip"
        onChange={handleChange}
        disabled={disabled}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20 disabled:cursor-not-allowed"
      />
      
      {/* Border SVG for dashed effect */}
      <div className={`absolute inset-4 border-2 border-dashed rounded-xl transition-colors duration-300 pointer-events-none
        ${isDragging ? 'border-tech-accent' : 'border-slate-800'}
        ${error ? 'border-red-500/50' : ''}
      `}></div>

      <div className={`z-10 transition-transform duration-300 ${isDragging ? 'scale-110' : 'scale-100'}`}>
        <div className={`w-20 h-20 mb-6 mx-auto rounded-2xl flex items-center justify-center transition-colors duration-300
          ${isDragging ? 'bg-tech-accent text-slate-950' : 'bg-slate-800 text-tech-accent'}
        `}>
          {Icons.Zip}
        </div>
      </div>

      <div className="z-10 text-center space-y-3 pointer-events-none">
        <h3 className="text-xl font-bold text-white">
          {lang === 'zh' ? '拖放 ZIP 檔案' : 'Drag & Drop ZIP'}
        </h3>
        <p className="text-sm text-slate-400">
          {lang === 'zh' ? '或點擊畫面選擇檔案' : 'or click anywhere to browse'}
        </p>
      </div>

      {error && (
        <div className="absolute bottom-8 left-0 w-full text-center z-20 pointer-events-none">
          <span className="inline-block text-red-400 text-xs font-bold bg-red-950/80 px-4 py-2 rounded-full border border-red-500/30 backdrop-blur-sm animate-pulse">
            {error}
          </span>
        </div>
      )}
    </div>
  );
};

export default FileUploader;