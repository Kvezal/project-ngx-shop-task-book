import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IProduct} from '../../../../../shared/mocks/3-directives/product-information';

@Component({
  selector: 'ngx-shop-information',
  templateUrl: './information.component.html',
})
export class InformationComponent {
  @Output()
  public addToCart: EventEmitter<void> = new EventEmitter<void>();

  @Input()
  public product: IProduct = null;

  public isShow: boolean = false;

  public addToBasket(): void {
    this.addToCart.emit();
  }

  public show(): void {
    this.isShow = !this.isShow;
  }
}
