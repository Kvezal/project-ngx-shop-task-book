import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ICartProduct} from '../../../../../shared/mocks/1-components/cart-product';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
})

export class ShopCardComponent {
  @Output()
  public increment: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  public decrement: EventEmitter<void> = new EventEmitter<void>();

  @Input()
  public product: ICartProduct = {} as ICartProduct;


  public decrementProductInCart(): void {
    this.decrement.emit();
  }

  public incrementProductInCart(): void {
    this.increment.emit();
  }

  public getTotalPrice(): number {
    const {price, count = 1} = this.product;
    return price * count;
  }
}
