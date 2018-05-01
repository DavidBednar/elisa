import { Component, ElementRef, HostBinding, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { style, animate, AnimationBuilder, AnimationPlayer } from '@angular/animations';
import { Subscription } from 'rxjs/Subscription';

import { elisaAnimations } from '@elisa/animations';
import { ElisaConfigService } from '@elisa/services/config.service';
import { ElisaNavigationService } from '@elisa/components/navigation/navigation.service';

import { navigation } from 'app/navigation/navigation';

@Component({
    selector   : 'elisa-theme-options',
    templateUrl: './theme-options.component.html',
    styleUrls  : ['./theme-options.component.scss'],
    animations : elisaAnimations
})
export class ElisaThemeOptionsComponent implements OnInit, OnDestroy
{
    @ViewChild('openButton') openButton;
    @ViewChild('panel') panel;
    @ViewChild('overlay') overlay: ElementRef;

    public player: AnimationPlayer;
    config: any;

    onConfigChanged: Subscription;

    @HostBinding('class.bar-closed') barClosed: boolean;

    constructor(
        private animationBuilder: AnimationBuilder,
        private elisaConfig: ElisaConfigService,
        private navigationService: ElisaNavigationService,
        private renderer: Renderer2
    )
    {
        this.barClosed = true;

        this.onConfigChanged =
            this.elisaConfig.onConfigChanged
                .subscribe(
                    (newConfig) => {
                        this.config = newConfig;
                    }
                );

        // Get the nav model and add customize nav item
        // that opens the bar programmatically
        const nav: any = navigation;

        nav.push({
            'id'      : 'customization',
            'title'   : 'Customization',
            'type'    : 'group',
            'children': [
                {
                    'id'      : 'customize',
                    'title'   : 'Customize',
                    'type'    : 'item',
                    'icon'    : 'settings',
                    'function': () => {
                        this.openBar();
                    }
                }
            ]
        });
    }

    ngOnInit()
    {
        this.renderer.listen(this.overlay.nativeElement, 'click', () => {
            this.closeBar();
        });
    }

    ngOnDestroy()
    {
        this.onConfigChanged.unsubscribe();
    }

    onSettingsChange()
    {
        this.elisaConfig.setConfig(this.config);
    }

    closeBar()
    {
        this.player =
            this.animationBuilder
                .build([
                    style({transform: 'translate3d(0,0,0)'}),
                    animate('400ms ease', style({transform: 'translate3d(100%,0,0)'}))
                ]).create(this.panel.nativeElement);

        this.player.play();

        this.player.onDone(() => {
            this.barClosed = true;
        });
    }

    openBar()
    {
        this.barClosed = false;

        this.player =
            this.animationBuilder
                .build([
                    style({transform: 'translate3d(100%,0,0)'}),
                    animate('400ms ease', style({transform: 'translate3d(0,0,0)'}))
                ]).create(this.panel.nativeElement);

        this.player.play();
    }
}
