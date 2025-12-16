import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { Award, ChevronRight, Clock, Instagram, Linkedin, LucideAngularModule, Menu, MessageCircle, Sparkles, Users, X } from 'lucide-angular';
import { Facebook } from 'lucide-angular/src/icons';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(
      LucideAngularModule.pick({ 
        Menu, X, Instagram, Facebook, Linkedin, MessageCircle,
        Sparkles, ChevronRight, Award, Clock, Users
      })
    )
  ]
};
