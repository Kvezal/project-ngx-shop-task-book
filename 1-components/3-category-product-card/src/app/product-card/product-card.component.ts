import {
  Component,
  ChangeDetectionStrategy, Input, EventEmitter, Output,
} from '@angular/core';
import {IProduct, oneProduct} from '../../../../../shared/mocks/1-components/product';

@Component({
  selector: 'ngx-shop-content-product',
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryProductComponent {
  @Output()
  public addToCart: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  public goToProduct: EventEmitter<void> = new EventEmitter<void>();

  @Input()
  public product: IProduct = {} as IProduct;

  public addToBasket(): void {
    this.addToCart.emit();
  }

  public redirectTo(): void {
    this.goToProduct.emit();
  }
}
