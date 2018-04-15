import { Directive, Input, OnInit, HostListener, OnDestroy, HostBinding } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { ObservableMedia } from '@angular/flex-layout';
import { Subscription } from 'rxjs/Subscription';

import { ElisaMatchMediaService } from '@elisa/services/match-media.service';
import { ElisaMatSidenavHelperService } from '@elisa/directives/elisa-mat-sidenav/elisa-mat-sidenav.service';

@Directive({
    selector: '[elisaMatSidenavHelper]'
})
export class ElisaMatSidenavHelperDirective implements OnInit, OnDestroy
{
    matchMediaSubscription: Subscription;
    @HostBinding('class.mat-is-locked-open') isLockedOpen = true;
    @Input('elisaMatSidenavHelper') id: string;
    @Input('mat-is-locked-open') matIsLockedOpenBreakpoint: string;

    constructor(
        private elisaMatSidenavService: ElisaMatSidenavHelperService,
        private elisaMatchMedia: ElisaMatchMediaService,
        private observableMedia: ObservableMedia,
        private matSidenav: MatSidenav
    )
    {
    }

    ngOnInit()
    {
        this.elisaMatSidenavService.setSidenav(this.id, this.matSidenav);

        if ( this.observableMedia.isActive(this.matIsLockedOpenBreakpoint) )
        {
            this.isLockedOpen = true;
            this.matSidenav.mode = 'side';
            this.matSidenav.toggle(true);
        }
        else
        {
            this.isLockedOpen = false;
            this.matSidenav.mode = 'over';
            this.matSidenav.toggle(false);
        }

        this.matchMediaSubscription = this.elisaMatchMedia.onMediaChange.subscribe(() => {
            if ( this.observableMedia.isActive(this.matIsLockedOpenBreakpoint) )
            {
                this.isLockedOpen = true;
                this.matSidenav.mode = 'side';
                this.matSidenav.toggle(true);
            }
            else
            {
                this.isLockedOpen = false;
                this.matSidenav.mode = 'over';
                this.matSidenav.toggle(false);
            }
        });
    }

    ngOnDestroy()
    {
        this.matchMediaSubscription.unsubscribe();
    }
}

@Directive({
    selector: '[elisaMatSidenavToggler]'
})
export class ElisaMatSidenavTogglerDirective
{
    @Input('elisaMatSidenavToggler') id;

    constructor(private elisaMatSidenavService: ElisaMatSidenavHelperService)
    {
    }

    @HostListener('click')
    onClick()
    {
        this.elisaMatSidenavService.getSidenav(this.id).toggle();
    }
}
