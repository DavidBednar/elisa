import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatSidenavModule } from '@angular/material';

import { ElisaSharedModule } from '@elisa/shared.module';

import { ElisaAcademyCoursesComponent } from './courses/courses.component';
import { ElisaAcademyCourseComponent } from './course/course.component';
import { AcademyCoursesService } from './courses.service';
import { AcademyCourseService } from './course.service';

const routes = [
    {
        path     : 'courses',
        component: ElisaAcademyCoursesComponent,
        resolve  : {
            academy: AcademyCoursesService
        }
    },
    {
        path     : 'courses/:courseId/:courseSlug',
        component: ElisaAcademyCourseComponent,
        resolve  : {
            academy: AcademyCourseService
        }
    },
    {
        path      : '**',
        redirectTo: 'courses'
    }
];

@NgModule({
    declarations: [
        ElisaAcademyCoursesComponent,
        ElisaAcademyCourseComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatSidenavModule,

        ElisaSharedModule
    ],
    providers   : [
        AcademyCoursesService,
        AcademyCourseService
    ]
})
export class ElisaAcademyModule
{
}
