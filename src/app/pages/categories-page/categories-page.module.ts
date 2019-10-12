import { NgModule } from '@angular/core';

import { CategoriesPageComponent } from './categories-page.component';
import { RgMultiSelectModule } from 'src/app/components/rg-multi-select/rg-multi-select.module';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesResolver } from './services/categories-resolver.service';
import { CategoriesService } from './services/categories.service';

const routes: Routes = [
    {
      path: '**',
      component: CategoriesPageComponent,
      resolve: {
        categories: CategoriesResolver
      }
    }
  ];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        RgMultiSelectModule
    ],
    declarations: [
        CategoriesPageComponent,
    ],
    exports: [
        CategoriesPageComponent,
    ],
    providers: [
        CategoriesService,
        CategoriesResolver
    ]
})
export class CategoriesPageModule {

}
