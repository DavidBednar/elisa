import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule, MatIconModule, MatMenuModule, MatRippleModule } from '@angular/material';

import { ElisaPipesModule } from '@elisa/pipes/pipes.module';

import { ElisaMaterialColorPickerComponent } from '@elisa/components/material-color-picker/material-color-picker.component';

@NgModule({
    declarations: [
        ElisaMaterialColorPickerComponent
    ],
    imports: [
        CommonModule,

        FlexLayoutModule,

        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatRippleModule,

        ElisaPipesModule
    ],
    exports: [
        ElisaMaterialColorPickerComponent
    ],
})
export class ElisaMaterialColorPickerModule
{
}
