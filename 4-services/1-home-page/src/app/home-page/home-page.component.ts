import {Component, Input} from '@angular/core';
import {ICategory} from '../../../../../shared/mocks/4-services/categories';
import {IProduct} from '../../../../../shared/mocks/4-services/products';

@Component({
  selector: 'ngx-shop-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass'],
})
// @ts-ignore
export class HomePageComponent {
  @Input()
  public products: IProduct[] = null;

  @Input()
  public categories: ICategory[] = null;

  public goToBasket(): void {

  }

  public goToProduct(): void {

  }

  public redirectTo(): void {

  }
}
