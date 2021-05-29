import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'review',
})
// @ts-ignore
export class ReviewPipe implements PipeTransform {
  public transform(countOfReviews: number | undefined): string {
    if (!countOfReviews) {
      return 'Нет отзывов';
    }
    const tenRemainder = countOfReviews % 10;
    const hundredRemainder = countOfReviews % 100;
    if (tenRemainder >= 5 || (hundredRemainder <= 15 && hundredRemainder >= 10) ) {
      return `${countOfReviews} отзывов`;
    }
    if (tenRemainder === 1) {
      return `${countOfReviews} отзыв`;
    }
    if (tenRemainder < 5) {
      return `${countOfReviews} отзыва`;
    }

  }
}
