import React from 'react';
import { PlatformGuide, FeatureItem } from './types';

// Icons using simple SVG paths as constants to avoid external deps
export const Icons = {
  Zip: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  Fix: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  ),
  Shield: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  ),
  Globe: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
};

export const FEATURES: FeatureItem[] = [
  {
    zh: "只支援 Google AI Studio 專案 ZIP",
    en: "Google AI Studio ZIP only",
    icon: Icons.Zip
  },
  {
    zh: "自動修正 PWA 與部署路徑",
    en: "Auto-fix PWA & static hosting paths",
    icon: Icons.Fix
  },
  {
    zh: "純客戶端處理，安全隱私",
    en: "Client-side processing, secure & private",
    icon: Icons.Shield
  },
  {
    zh: "支援四大主流平台",
    en: "Ready for 4 major platforms",
    icon: Icons.Globe
  }
];

export const DEPLOYMENT_GUIDES: PlatformGuide[] = [
  {
    id: 'cloudflare',
    name: 'Cloudflare Pages',
    icon: 'CP',
    steps: [
      {
        label: 'Connect',
        description: 'Connect your GitHub repository in the dashboard.',
      },
      {
        label: 'Build',
        command: 'npm run build',
        description: 'Set the build command.',
      },
      {
        label: 'Output',
        command: 'dist',
        description: 'Set the build output directory.',
      }
    ]
  },
  {
    id: 'github',
    name: 'GitHub Pages',
    icon: 'GH',
    steps: [
      {
        label: 'Branch',
        description: 'Push to main, go to Settings > Pages, select main (or gh-pages).',
      },
      {
        label: 'Config',
        command: "base: '/your-repo-name/'",
        description: 'Add this base path to vite.config.ts.',
      }
    ]
  },
  {
    id: 'vercel',
    name: 'Vercel',
    icon: 'VC',
    steps: [
      {
        label: 'Build',
        command: 'npm run build',
        description: 'Default build command.',
      },
      {
        label: 'Output',
        command: 'dist',
        description: 'Default output directory.',
      }
    ]
  },
  {
    id: 'netlify',
    name: 'Netlify',
    icon: 'NF',
    steps: [
      {
        label: 'Build',
        command: 'npm run build',
        description: 'Standard build command.',
      },
      {
        label: 'Output',
        command: 'dist',
        description: 'Standard publish directory.',
      }
    ]
  }
];