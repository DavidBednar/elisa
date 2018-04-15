import { Component } from '@angular/core';

import { elisaAnimations } from '@elisa/animations';

import { ProfileService } from '../../profile.service';

@Component({
    selector   : 'elisa-profile-timeline',
    templateUrl: './timeline.component.html',
    styleUrls  : ['./timeline.component.scss'],
    animations : elisaAnimations
})
export class ElisaProfileTimelineComponent
{
    timeline: any;

    constructor(private profileService: ProfileService)
    {
        this.profileService.timelineOnChanged.subscribe(timeline => {
            this.timeline = timeline;
        });
    }
}
