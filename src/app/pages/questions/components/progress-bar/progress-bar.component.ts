import { Component, Input } from '@angular/core';
import { Question } from '../../../core/models/question';
import { AnswersService } from '../../services/answers.service';
import { Answer } from '../../../core/models/answer';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {

  @Input() questionList: Question[];

  @Input() question: Question;

  currentNumberOfQuestion: number;

  get currentNumber() {
    return this.questionList.findIndex((value) => value.id === this.question.id);
  }


  constructor(private answersService: AnswersService) {
  }

  answer(item: Question): Answer {
    return this.answersService.getAnswers().find((value) => value.questionId === item.id) || {} as Answer;
  }


  trackByFn(i) {
    return i;
  }

}
