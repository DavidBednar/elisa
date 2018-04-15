import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ElisaSplashScreenService } from '@elisa/services/splash-screen.service';
import { ElisaTranslationLoaderService } from '@elisa/services/translation-loader.service';
import { ElisaNavigationService } from '@elisa/components/navigation/navigation.service';

import { locale as navigationEnglish } from './navigation/i18n/en';
import { locale as navigationTurkish } from './navigation/i18n/tr';

@Component({
    selector   : 'elisa-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent
{
    constructor(
        private translate: TranslateService,
        private elisaNavigationService: ElisaNavigationService,
        private elisaSplashScreen: ElisaSplashScreenService,
        private elisaTranslationLoader: ElisaTranslationLoaderService
    )
    {
        // Add languages
        this.translate.addLangs(['en', 'tr']);

        // Set the default language
        this.translate.setDefaultLang('en');

        // Set the navigation translations
        this.elisaTranslationLoader.loadTranslations(navigationEnglish, navigationTurkish);

        // Use a language
        this.translate.use('en');
    }
}
