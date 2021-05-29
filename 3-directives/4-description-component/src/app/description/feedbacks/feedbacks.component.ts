import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IFeedback} from '../../../../../../shared/mocks/3-directives/interfaces';

@Component({
  selector: 'ngx-shop-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.sass'],
})
export class FeedbacksComponent {
  @Output()
  public addFeedbackEvent: EventEmitter<void> = new EventEmitter<void>();

  @Input()
  public feedbacks: IFeedback[] = [];

  public addNewFeedback(): void {
    this.addFeedbackEvent.emit();
  }
}
