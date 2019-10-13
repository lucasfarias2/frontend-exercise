import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MultiSelectItem } from 'src/app/components/rg-multi-select/multi-select-item.model';

@Component({
    selector: 'categories-page',
    templateUrl: 'categories-page.component.html',
    styleUrls: ['categories-page.component.scss']
})
export class CategoriesPageComponent implements OnInit {

    private readonly LS_SELECTED_CATEGORIES_KEY: string = 'selected-categories';
    public items: MultiSelectItem[] = [];

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        let orderCount = Number.MAX_VALUE;
        const lsCategories = localStorage.getItem(this.LS_SELECTED_CATEGORIES_KEY);
        const selectedCategories: string[] = lsCategories ? JSON.parse(lsCategories) : [];

        this.items = this.route.snapshot.data['categories'].map(a => {
            const isSelected = selectedCategories.indexOf(a) >= 0;
            return new MultiSelectItem(a, isSelected, orderCount--);
        });
    }

    /**
     * Save the items where isChecked is true. Only the values of the items will be saved, not the entire objects.
     * @param items Items to save.
     */
    public savePreferences(items: MultiSelectItem[])
    {
        localStorage.setItem(this.LS_SELECTED_CATEGORIES_KEY, JSON.stringify(items.filter(i => i.isSelected).map(i => i.value)));
    }

}
