import { InjectionToken } from '@angular/core';

export interface ConnectionConfig {
  databaseUrl: string;
  username: string;
  password: string;
}

export const CONNECTION_CONFIG = new InjectionToken<ConnectionConfig>('connectionConfig');
