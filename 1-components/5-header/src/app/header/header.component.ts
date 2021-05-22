import {Component, ChangeDetectionStrategy, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'ngx-shop-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Output()
  public goToBasket: EventEmitter<void> = new EventEmitter<void>();

  public counter: number = 5;

  public redirectTo(): void {
    this.goToBasket.emit();
  }
}
