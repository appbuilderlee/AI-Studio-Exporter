import React from 'react';

export type Language = 'zh' | 'en';

export interface DeploymentStep {
  label: string;
  command?: string;
  description: string;
}

export interface PlatformGuide {
  id: string;
  name: string;
  steps: DeploymentStep[];
  icon: string; // Using simple text or SVG path representation logic in component
}

export interface FeatureItem {
  zh: string;
  en: string;
  icon: React.ReactNode;
}