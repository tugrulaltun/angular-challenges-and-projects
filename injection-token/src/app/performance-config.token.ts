import { InjectionToken } from '@angular/core';

export interface PerformanceConfig {
  cacheSize: number;
  timeout: number;
}

export const PERFORMANCE_CONFIG = new InjectionToken<PerformanceConfig>('performanceConfig');
