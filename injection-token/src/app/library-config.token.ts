import { InjectionToken } from '@angular/core';

export interface LibraryConfig {
  googleMapsApiKey: string;
  analyticsTrackingId: string;
}

export const LIBRARY_CONFIG = new InjectionToken<LibraryConfig>('libraryConfig');
