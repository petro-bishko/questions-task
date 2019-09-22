import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../../../core/models/question';
import { FormPositionType } from '../../../core/enum/form-postion-type';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  @Input() questionList: Question[];
  @Input() question: Question;

  formPositionType = FormPositionType;

  constructor() {
  }

  ngOnInit() {
  }

  trackByFn(i) {
    return i;
  }

}
