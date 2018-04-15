import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { ELISA_CONFIG, ElisaConfigService } from '@elisa/services/config.service';
import { ElisaCopierService } from '@elisa/services/copier.service';
import { ElisaMatchMediaService } from '@elisa/services/match-media.service';
import { ElisaMatSidenavHelperService } from '@elisa/directives/elisa-mat-sidenav/elisa-mat-sidenav.service';
import { ElisaNavigationService } from '@elisa/components/navigation/navigation.service';
import { ElisaSidebarService } from '@elisa/components/sidebar/sidebar.service';
import { ElisaSplashScreenService } from '@elisa/services/splash-screen.service';
import { ElisaTranslationLoaderService } from '@elisa/services/translation-loader.service';

@NgModule({
    entryComponents: [],
    providers      : [
        ElisaConfigService,
        ElisaCopierService,
        ElisaMatchMediaService,
        ElisaMatSidenavHelperService,
        ElisaNavigationService,
        ElisaSidebarService,
        ElisaSplashScreenService,
        ElisaTranslationLoaderService
    ]
})
export class ElisaModule
{
    constructor(@Optional() @SkipSelf() parentModule: ElisaModule)
    {
        if ( parentModule )
        {
            throw new Error('ElisaModule is already loaded. Import it in the AppModule only!');
        }
    }

    static forRoot(config): ModuleWithProviders
    {
        return {
            ngModule : ElisaModule,
            providers: [
                {
                    provide : ELISA_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
