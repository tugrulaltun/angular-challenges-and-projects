import { InjectionToken } from '@angular/core';

export interface TranslationFiles {
  en: string;
  es: string;
  de: string;
  [key: string]: string;
}

export const TRANSLATION_FILES = new InjectionToken<TranslationFiles>('translationFiles');
