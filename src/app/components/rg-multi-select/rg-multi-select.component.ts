import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { MatOptionSelectionChange } from '@angular/material/core';
import { MultiSelectItem } from './multi-select-item.model';

@Component({
    selector: 'rg-multi-select',
    templateUrl: 'rg-multi-select.component.html',
    styleUrls: ['rg-multi-select.component.scss']
})
export class RgMultiSelectComponent implements OnInit {

    @Input() public title: string
    @Input() public items: MultiSelectItem[] = [];
    @Input() public searchPlaceholder: string;
    @Input() public applyButtonText: string;
    @Input() public noResultsText: string;

    @Output() onApplyFilterButtonClick: EventEmitter<MultiSelectItem[]> = new EventEmitter();
    
    private lastSearchQuery: string = "";

    public filteredItems: MultiSelectItem[];

    ngOnInit(): void {
        this.filteredItems = this.items;
        this.sortItems();
    }

    /**
     * 
     * @param searchValue Given search query.
     */
    public onSearchChange(searchValue: string): void {
        if (searchValue !== undefined) {
            this.lastSearchQuery = searchValue.trim().toLowerCase();
        }
        this.filteredItems = this.items.filter(a => a.value.trim().toLowerCase().indexOf(this.lastSearchQuery) >= 0 || a.isSelected);
        this.sortItems();
    }

    /**
     * Sort items in a descending order.
     */
    private sortItems() {
        this.filteredItems.sort((a, b) => b.order - a.order);
    }

    /**
     * Event handler of selection of items.
     * @param event The emitted event parameter with the value of the option that got changed.
     */
    public onSelectionChange(event) {
        const item: MultiSelectItem = this.filteredItems.find(a => a.value == event.option.value);
        item.isSelected = !item.isSelected;

        this.onSearchChange(undefined);
        this.sortItems();
    }

    /**
     * Emit `onApplyFilterButtonClick` with current items as event parameter.
     * The entire list of items is returned, so the consumer can decide how to use the items.
     */
    public applyFilter() {
        this.onApplyFilterButtonClick.emit(this.items);
    }
}