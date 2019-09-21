import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Question } from '../../../core/models/question';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit, OnChanges {

  @Input() questionList: Question[];

  @Input() currentQuestion: Question;

  currentNumberOfQuestion: number;

  constructor() {
  }

  ngOnInit() {
    this.getCurrentNumber();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.currentQuestion.firstChange && changes.currentQuestion.currentValue) {
      this.getCurrentNumber();
    }
  }

  getCurrentNumber() {
    this.currentNumberOfQuestion = this.questionList.findIndex((value) => value.id === this.currentQuestion.id);
  }

  trackByFn(i) {
    return i;
  }

}
