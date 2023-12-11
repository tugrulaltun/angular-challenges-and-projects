import {InjectionToken} from '@angular/core';

export interface FeatureFlags {
  newDashboard: boolean;
  experimentalFeature: boolean;
  darkMode: boolean;
}

export const FEATURE_FLAGS = new InjectionToken<FeatureFlags>('featureFlags');
