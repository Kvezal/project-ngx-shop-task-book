import {IProduct} from '../../../../../shared/mocks/4-services/products';

export interface IList<T> {
  items: T[];
  quantity: number;
}
