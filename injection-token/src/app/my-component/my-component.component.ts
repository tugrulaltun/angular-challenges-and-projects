import {Component, Inject} from '@angular/core';
import {API_ENDPOINT} from "../api-endpoints.token";
import {APP_SETTINGS, AppSettings} from "../app-settings.token";
import {FEATURE_FLAGS, FeatureFlags} from "../feature-flags.token";
import {AUTH_TOKEN} from "../auth-token.token";
import {LIBRARY_CONFIG, LibraryConfig} from "../library-config.token";
import {THEME_CONFIG, ThemeConfig} from "../theme.token";
import {NgStyle} from "@angular/common";
import {TRANSLATION_FILES, TranslationFiles} from "../translation-files.token";
import {loadTranslations} from "@angular-devkit/build-angular/src/utils/i18n-options";
import {LOGGER_CONFIG, LoggerConfig} from "../logger-config.token";
import {CONNECTION_CONFIG, ConnectionConfig} from "../connection-config.token";
import {PERFORMANCE_CONFIG, PerformanceConfig} from "../performance-config.token";

@Component({
  standalone: true,
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css',
  imports: [
    NgStyle
  ]
})
export class MyComponentComponent {
  theme: ThemeConfig;
  translationFiles: TranslationFiles;
  loggerConfig: LoggerConfig;
  connectionConfig: ConnectionConfig;
  private performanceConfig: PerformanceConfig;

  constructor(
    @Inject(API_ENDPOINT) private apiEndpoint: string,
    @Inject(APP_SETTINGS) private appSettings: AppSettings,
    @Inject(FEATURE_FLAGS) private featureFlags: FeatureFlags,
    @Inject(AUTH_TOKEN) private authToken: string,
    @Inject(LIBRARY_CONFIG) private libraryConfig: LibraryConfig,
    @Inject(THEME_CONFIG) themeConfig: ThemeConfig,
    @Inject(TRANSLATION_FILES) translationFiles: TranslationFiles,
    @Inject(LOGGER_CONFIG) loggerConfig: LoggerConfig,
    @Inject(CONNECTION_CONFIG) connectionConfig: ConnectionConfig,
    @Inject(PERFORMANCE_CONFIG) performanceConfig: PerformanceConfig
  ) {
    console.log('API Endpoint:', this.apiEndpoint);
    console.log('Application Title:', this.appSettings.appTitle);
    console.log('Default Language:', this.appSettings.defaultLanguage);
    console.log('Page Size:', this.appSettings.pageSize);

    if (this.featureFlags.newDashboard) {
      console.log('New Dashboard Enabled');
    }

    if (this.featureFlags.darkMode) {
      console.log('Mode:', this.featureFlags.darkMode ? 'Dark' : 'Light');
    }

    console.log('Auth Token:', this.authToken);
    console.log('Google Maps API Key:', this.libraryConfig.googleMapsApiKey);
    console.log('Analytics Tracking ID:', this.libraryConfig.analyticsTrackingId);
    this.theme = themeConfig;
    this.translationFiles = translationFiles;
    this.loadTranslations(this.appSettings.defaultLanguage);
    this.loggerConfig = loggerConfig;
    this.log('MyComponentComponent initialized');
    this.connectionConfig = connectionConfig;
    console.log('Database URL:', this.connectionConfig.databaseUrl);
    console.log('Username:', this.connectionConfig.username);
    console.log('Password:', this.connectionConfig.password);
    this.performanceConfig = performanceConfig;
    console.log('Cache Size:', this.performanceConfig.cacheSize);
    console.log('Timeout:', this.performanceConfig.timeout);
  }

  loadTranslations(language: string): void {
    const translationFile = this.translationFiles[language];
    console.log(`Loading ${language} translations from ${translationFile}`);
  }

  log(message: string): void {
    if (this.loggerConfig.level === 'debug') {
      console.log(message);
    }
  }
}
