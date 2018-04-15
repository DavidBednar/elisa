import { Component } from '@angular/core';

import { elisaAnimations } from '@elisa/animations';

import { ProfileService } from '../../profile.service';

@Component({
    selector   : 'elisa-profile-photos-videos',
    templateUrl: './photos-videos.component.html',
    styleUrls  : ['./photos-videos.component.scss'],
    animations : elisaAnimations
})
export class ElisaProfilePhotosVideosComponent
{
    photosVideos: any;

    constructor(private profileService: ProfileService)
    {
        this.profileService.photosVideosOnChanged.subscribe(photosVideos => {
            this.photosVideos = photosVideos;
        });
    }
}
