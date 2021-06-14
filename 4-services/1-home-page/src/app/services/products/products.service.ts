import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {IList} from '../../interfaces/product-response.interface';
import {IProduct} from '../../../../../../shared/mocks/4-services/products';

@Injectable()
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<IList<IProduct>> {
    return this.httpClient.get<IList<IProduct>>('api/products/suggestion');
  }
}
