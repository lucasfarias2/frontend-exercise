import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

import { RgMultiSelectComponent } from './rg-multi-select.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        MatInputModule,
        MatListModule,
        MatButtonModule
    ],
    declarations: [
        RgMultiSelectComponent
    ],
    exports: [
        RgMultiSelectComponent
    ]
})
export class RgMultiSelectModule {

}
