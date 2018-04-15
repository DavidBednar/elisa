import { Component } from '@angular/core';

import { elisaAnimations } from '@elisa/animations';

import { ProfileService } from '../../profile.service';

@Component({
    selector   : 'elisa-profile-about',
    templateUrl: './about.component.html',
    styleUrls  : ['./about.component.scss'],
    animations : elisaAnimations
})
export class ElisaProfileAboutComponent
{
    about: any;

    constructor(private profileService: ProfileService)
    {
        this.profileService.aboutOnChanged.subscribe(about => {
            this.about = about;
        });
    }
}
