import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ElisaConfigService } from '@elisa/services/config.service';
import { elisaAnimations } from '@elisa/animations';

@Component({
    selector   : 'elisa-lock',
    templateUrl: './lock.component.html',
    styleUrls  : ['./lock.component.scss'],
    animations : elisaAnimations
})
export class ElisaLockComponent implements OnInit
{
    lockForm: FormGroup;
    lockFormErrors: any;

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

        this.lockFormErrors = {
            username: {},
            password: {}
        };
    }

    ngOnInit()
    {
        this.lockForm = this.formBuilder.group({
            username: [
                {
                    value   : 'Katherine',
                    disabled: true
                }, Validators.required
            ],
            password: ['', Validators.required]
        });

        this.lockForm.valueChanges.subscribe(() => {
            this.onLockFormValuesChanged();
        });
    }

    onLockFormValuesChanged()
    {
        for ( const field in this.lockFormErrors )
        {
            if ( !this.lockFormErrors.hasOwnProperty(field) )
            {
                continue;
            }

            // Clear previous errors
            this.lockFormErrors[field] = {};

            // Get the control
            const control = this.lockForm.get(field);

            if ( control && control.dirty && !control.valid )
            {
                this.lockFormErrors[field] = control.errors;
            }
        }
    }
}
