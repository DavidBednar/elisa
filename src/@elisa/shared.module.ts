import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { ElisaDirectivesModule } from '@elisa/directives/directives';
import { ElisaPipesModule } from '@elisa/pipes/pipes.module';

@NgModule({
    imports  : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        FlexLayoutModule,

        ElisaDirectivesModule,
        ElisaPipesModule
    ],
    exports  : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        FlexLayoutModule,

        ElisaDirectivesModule,
        ElisaPipesModule
    ]
})
export class ElisaSharedModule
{
}
