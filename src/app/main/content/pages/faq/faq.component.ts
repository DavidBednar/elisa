import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { ElisaUtils } from '@elisa/utils';

import { FaqService } from './faq.service';

@Component({
    selector   : 'elisa-faq',
    templateUrl: './faq.component.html',
    styleUrls  : ['./faq.component.scss']
})
export class ElisaFaqComponent implements OnInit, OnDestroy
{
    faqs: any;
    faqsFiltered: any;
    step = 0;
    searchInput;
    onFaqsChanged: Subscription;

    constructor(private faqService: FaqService)
    {
        this.searchInput = new FormControl('');
    }

    ngOnInit()
    {
        this.onFaqsChanged =
            this.faqService.onFaqsChanged
                .subscribe(response => {
                    this.faqs = response;
                    this.faqsFiltered = response;
                });

        this.searchInput.valueChanges
            .debounceTime(300)
            .distinctUntilChanged()
            .subscribe(searchText => {
                this.faqsFiltered = ElisaUtils.filterArrayByString(this.faqs, searchText);
            });
    }

    ngOnDestroy()
    {
        this.onFaqsChanged.unsubscribe();
    }

    setStep(index: number)
    {
        this.step = index;
    }

    nextStep()
    {
        this.step++;
    }

    prevStep()
    {
        this.step--;
    }
}
