import { Component, Input, OnDestroy, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ElisaPerfectScrollbarDirective } from '@elisa/directives/elisa-perfect-scrollbar/elisa-perfect-scrollbar.directive';
import { ElisaSidebarService } from '@elisa/components/sidebar/sidebar.service';

import { navigation } from 'app/navigation/navigation';
import { ElisaNavigationService } from '@elisa/components/navigation/navigation.service';

@Component({
    selector     : 'elisa-navbar',
    templateUrl  : './navbar.component.html',
    styleUrls    : ['./navbar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ElisaNavbarComponent implements OnDestroy
{
    private elisaPerfectScrollbar: ElisaPerfectScrollbarDirective;

    @ViewChild(ElisaPerfectScrollbarDirective) set directive(theDirective: ElisaPerfectScrollbarDirective)
    {
        if ( !theDirective )
        {
            return;
        }

        this.elisaPerfectScrollbar = theDirective;

        this.navigationServiceWatcher =
            this.navigationService.onItemCollapseToggled.subscribe(() => {
                this.elisaPerfectScrollbarUpdateTimeout = setTimeout(() => {
                    this.elisaPerfectScrollbar.update();
                }, 310);
            });
    }

    @Input() layout;
    navigation: any;
    navigationServiceWatcher: Subscription;
    elisaPerfectScrollbarUpdateTimeout;

    constructor(
        private sidebarService: ElisaSidebarService,
        private navigationService: ElisaNavigationService
    )
    {
        // Navigation data
        this.navigation = navigation;

        // Default layout
        this.layout = 'vertical';
    }

    ngOnDestroy()
    {
        if ( this.elisaPerfectScrollbarUpdateTimeout )
        {
            clearTimeout(this.elisaPerfectScrollbarUpdateTimeout);
        }

        if ( this.navigationServiceWatcher )
        {
            this.navigationServiceWatcher.unsubscribe();
        }
    }

    toggleSidebarOpened(key)
    {
        this.sidebarService.getSidebar(key).toggleOpen();
    }

    toggleSidebarFolded(key)
    {
        this.sidebarService.getSidebar(key).toggleFold();
    }
}
