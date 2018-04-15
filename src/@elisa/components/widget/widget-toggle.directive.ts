import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[elisaWidgetToggle]'
})
export class ElisaWidgetToggleDirective
{
    constructor(public el: ElementRef)
    {
    }
}
