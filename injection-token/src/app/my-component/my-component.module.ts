import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {API_ENDPOINT} from "../api-endpoints.token";
import {environment} from "../../environments/environment";
import {MyComponentComponent} from "./my-component.component";
import {APP_SETTINGS, AppSettings} from "../app-settings.token";
import {FEATURE_FLAGS, FeatureFlags} from "../feature-flags.token";
import {AUTH_TOKEN} from "../auth-token.token";
import {LIBRARY_CONFIG, LibraryConfig} from "../library-config.token";
import {THEME_CONFIG, ThemeConfig} from "../theme.token";
import {TRANSLATION_FILES, TranslationFiles} from "../translation-files.token";
import {LOGGER_CONFIG, LoggerConfig} from "../logger-config.token";
import {CONNECTION_CONFIG, ConnectionConfig} from "../connection-config.token";
import {PERFORMANCE_CONFIG, PerformanceConfig} from "../performance-config.token";

const appSettingsValue: AppSettings = {
  pageSize: 10,
  appTitle: 'My Angular App',
  defaultLanguage: 'en'
};

const featureFlagsValue: FeatureFlags = {
  newDashboard: true,
  experimentalFeature: false,
  darkMode: true
};

const authTokenValue = 'your-auth-token';

const libraryConfigValue: LibraryConfig = {
  googleMapsApiKey: 'your-google-maps-api-key',
  analyticsTrackingId: 'your-analytics-tracking-id'
};

const themeConfigValue: ThemeConfig = {
  primaryColor: '#007bff',
  accentColor: '#ffc107',
  fontFamily: 'Arial, sans-serif'
};

const translationFilesValue: TranslationFiles = {
  en: '/assets/i18n/en.json',
  es: '/assets/i18n/es.json',
  de: '/assets/i18n/de.json',
  tr: '/assets/i18n/tr.json'
};

const loggerConfigValue: LoggerConfig = {
  level: 'debug',
  format: 'json'
};

const connectionConfigValue: ConnectionConfig = {
  databaseUrl: 'https://your-database-url.com',
  username: 'yourUsername',
  password: 'yourPassword'
};

const performanceConfigValue: PerformanceConfig = {
  cacheSize: 1000,
  timeout: 3000
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MyComponentComponent
  ],
  exports: [
    MyComponentComponent
  ],
  providers: [
    {provide: API_ENDPOINT, useValue: environment.apiEndpoint},
    {provide: APP_SETTINGS, useValue: appSettingsValue},
    {provide: FEATURE_FLAGS, useValue: featureFlagsValue},
    {provide: AUTH_TOKEN, useValue: authTokenValue},
    {provide: LIBRARY_CONFIG, useValue: libraryConfigValue},
    {provide: THEME_CONFIG, useValue: themeConfigValue},
    {provide: TRANSLATION_FILES, useValue: translationFilesValue},
    {provide: LOGGER_CONFIG, useValue: loggerConfigValue},
    {provide: CONNECTION_CONFIG, useValue: connectionConfigValue},
    {provide: PERFORMANCE_CONFIG, useValue: performanceConfigValue}
  ]
})
export class MyComponentModule {
}
