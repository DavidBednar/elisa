import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatOptionModule, MatRadioModule, MatSelectModule, MatSlideToggleModule } from '@angular/material';

import { ElisaMaterialColorPickerModule } from '@elisa/components/material-color-picker/material-color-picker.module';
import { ElisaThemeOptionsComponent } from '@elisa/components/theme-options/theme-options.component';

@NgModule({
    declarations: [
        ElisaThemeOptionsComponent
    ],
    imports     : [
        CommonModule,
        FormsModule,

        FlexLayoutModule,

        MatButtonModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatOptionModule,
        MatRadioModule,
        MatSelectModule,
        MatSlideToggleModule,

        ElisaMaterialColorPickerModule
    ],
    exports     : [
        ElisaThemeOptionsComponent
    ]
})
export class ElisaThemeOptionsModule
{
}
