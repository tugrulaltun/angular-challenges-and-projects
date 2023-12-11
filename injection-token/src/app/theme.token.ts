import { InjectionToken } from '@angular/core';

export interface ThemeConfig {
  primaryColor: string;
  accentColor: string;
  fontFamily: string;
}

export const THEME_CONFIG = new InjectionToken<ThemeConfig>('themeConfig');
