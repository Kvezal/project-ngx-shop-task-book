import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ICategory} from '../../../../../shared/mocks/3-directives/categories';

@Component({
  selector: 'ngx-shop-side-menu',
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent {
  @Output()
  public categoryChange: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  public categories: ICategory[] = [];

  public currentName: string = null;

  public redirectTo(): void {
    this.categoryChange.emit();
  }

  public hover(subCategory: string): void {
    this.currentName = subCategory;
  }

  public mouseLeave(): void {
    this.currentName = null;
  }
}
