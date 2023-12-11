import { InjectionToken } from '@angular/core';

export interface LoggerConfig {
  level: 'debug' | 'info' | 'warn' | 'error';
  format: 'json' | 'text';
}

export const LOGGER_CONFIG = new InjectionToken<LoggerConfig>('loggerConfig');
