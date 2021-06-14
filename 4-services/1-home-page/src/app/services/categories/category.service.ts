import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {ICategory} from '../../../../../../shared/mocks/4-services/categories';

@Injectable()
export class CategoriesService {
  constructor(private httpClient: HttpClient) {}

  public getCategories(): Observable<ICategory[]> {
    return this.httpClient.get<ICategory[]>('api/categories');
  }
}
