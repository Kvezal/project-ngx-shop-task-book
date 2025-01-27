import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ICategory} from '../../../../../shared/mocks/3-directives/categories';

@Component({
  selector: 'ngx-shop-category-dropdown',
  templateUrl: './category-dropdown.component.html',
})
export class CategoryDropdownComponent {
  @Output()
  public subCategorySelectEvent: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  public categories: ICategory[] = [];

  public currentIndex: number = null;

  public currentCategory = '';

  public showSubCategories(index: number): void {
    this.currentIndex = index;
  }

  public subCategorySelect(subCategoryName: string): void {
    this.subCategorySelectEvent.emit(subCategoryName);
  }
}
