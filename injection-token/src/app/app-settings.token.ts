import { InjectionToken } from '@angular/core';

export interface AppSettings {
  pageSize: number;
  appTitle: string;
  defaultLanguage: string;
}

export const APP_SETTINGS = new InjectionToken<AppSettings>('appSettings');
