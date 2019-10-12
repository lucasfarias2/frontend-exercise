import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RgMultiSelectComponent } from './rg-multi-select.component';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MultiSelectItem } from './multi-select-item.model';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RgMultiSelectComponent', () => {

    let component: RgMultiSelectComponent;
    let fixture: ComponentFixture<RgMultiSelectComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                BrowserAnimationsModule,
                RouterTestingModule,
                CommonModule,
                MatInputModule,
                MatListModule,
                MatButtonModule
            ],
            declarations: [
                RgMultiSelectComponent
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RgMultiSelectComponent);
        component = fixture.debugElement.componentInstance;
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should create the component with set input with correct order', () => {
        const dummyItems = [
            new MultiSelectItem('Test 1', false, 0),
            new MultiSelectItem('Test 2', true, 1),
            new MultiSelectItem('Test 3', false, 2),
        ];

        const expected = [
            
            new MultiSelectItem('Test 2', true, 1),
            new MultiSelectItem('Test 3', false, 2),
            new MultiSelectItem('Test 1', false, 0),
        ];
        component.items = dummyItems;
        fixture.detectChanges();
        expect(component.filteredItems).toEqual(expected);
    });

    it('should filter based on search query and selection', () => {
        //TODO
    });

    it('should not show any results when no items are selected or no items match the query', () => {
        //TODO
    });
});
