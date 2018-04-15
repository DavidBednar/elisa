import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ElisaConfigService } from '@elisa/services/config.service';
import { elisaAnimations } from '@elisa/animations';

@Component({
    selector   : 'elisa-coming-soon',
    templateUrl: './coming-soon.component.html',
    styleUrls  : ['./coming-soon.component.scss'],
    animations : elisaAnimations
})
export class ElisaComingSoonComponent implements OnInit
{
    comingSoonForm: FormGroup;
    comingSoonFormErrors: any;

    constructor(
        private elisaConfig: ElisaConfigService,
        private formBuilder: FormBuilder
    )
    {
        this.elisaConfig.setConfig({
            layout: {
                navigation: 'none',
                toolbar   : 'none',
                footer    : 'none'
            }
        });

        this.comingSoonFormErrors = {
            email: {}
        };
    }

    ngOnInit()
    {
        this.comingSoonForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]]
        });

        this.comingSoonForm.valueChanges.subscribe(() => {
            this.onRegisterFormValuesChanged();
        });
    }

    onRegisterFormValuesChanged()
    {
        for ( const field in this.comingSoonFormErrors )
        {
            if ( !this.comingSoonFormErrors.hasOwnProperty(field) )
            {
                continue;
            }

            // Clear previous errors
            this.comingSoonFormErrors[field] = {};

            // Get the control
            const control = this.comingSoonForm.get(field);

            if ( control && control.dirty && !control.valid )
            {
                this.comingSoonFormErrors[field] = control.errors;
            }
        }
    }
}
