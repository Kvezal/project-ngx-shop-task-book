import {Component, OnInit} from '@angular/core';
import {IProduct} from '../../../../shared/mocks/4-services/products';
import {ICategory} from '../../../../shared/mocks/4-services/categories';
import {CategoriesService} from './services/categories/category.service';
import {ProductsService} from './services/products/products.service';
import {IList} from './interfaces/product-response.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
// @ts-ignore
export class AppComponent implements OnInit {
  public title = 'Компонент домашней страницы';
  public products: IProduct[] = null;
  public categories: ICategory[] = null;

  constructor(
    private categoriesService: CategoriesService,
    private productsService: ProductsService,
  ) {}

  ngOnInit() {
    this.categoriesService.getCategories()
      .subscribe((categories: ICategory[]) => this.categories = categories);

    this.productsService.getProducts()
      .subscribe((list: IList<IProduct>) => {
        this.products = list.items;
      });
  }


}
