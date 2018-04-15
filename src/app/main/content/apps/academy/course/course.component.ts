import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, QueryList, ViewChildren, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ElisaPerfectScrollbarDirective } from '@elisa/directives/elisa-perfect-scrollbar/elisa-perfect-scrollbar.directive';
import { elisaAnimations } from '@elisa/animations';

import { AcademyCourseService } from '../course.service';

@Component({
    selector     : 'elisa-academy-course',
    templateUrl  : './course.component.html',
    styleUrls    : ['./course.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : elisaAnimations
})
export class ElisaAcademyCourseComponent implements OnInit, OnDestroy, AfterViewInit
{
    course: any;
    courseSubscription: Subscription;
    currentStep = 0;
    courseStepContent;
    animationDirection: 'left' | 'right' | 'none' = 'none';
    @ViewChildren(ElisaPerfectScrollbarDirective) elisaScrollbarDirectives: QueryList<ElisaPerfectScrollbarDirective>;

    constructor(
        private courseService: AcademyCourseService,
        private changeDetectorRef: ChangeDetectorRef
    )
    {

    }

    ngOnInit()
    {
        // Subscribe to courses
        this.courseSubscription =
            this.courseService.onCourseChanged
                .subscribe(course => {
                    this.course = course;
                });
    }

    ngAfterViewInit()
    {
        this.courseStepContent = this.elisaScrollbarDirectives.find((elisaScrollbarDirective) => {
            return elisaScrollbarDirective.element.nativeElement.id === 'course-step-content';
        });
    }

    ngOnDestroy()
    {
        this.courseSubscription.unsubscribe();
    }

    gotoStep(step)
    {
        // Decide the animation direction
        this.animationDirection = this.currentStep < step ? 'left' : 'right';

        // Run change detection so the change
        // in the animation direction registered
        this.changeDetectorRef.detectChanges();

        // Set the current step
        this.currentStep = step;
    }

    gotoNextStep()
    {
        if ( this.currentStep === this.course.totalSteps - 1 )
        {
            return;
        }

        // Set the animation direction
        this.animationDirection = 'left';

        // Run change detection so the change
        // in the animation direction registered
        this.changeDetectorRef.detectChanges();

        // Increase the current step
        this.currentStep++;
    }

    gotoPreviousStep()
    {
        if ( this.currentStep === 0 )
        {
            return;
        }

        // Set the animation direction
        this.animationDirection = 'right';

        // Run change detection so the change
        // in the animation direction registered
        this.changeDetectorRef.detectChanges();

        // Decrease the current step
        this.currentStep--;
    }
}