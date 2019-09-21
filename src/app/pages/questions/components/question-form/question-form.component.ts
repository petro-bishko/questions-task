import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../../../core/models/question';
import { FormPositionType } from '../../../core/enum/form-postion-type';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {

  @Input() currentQuestion: Question;
  formPositionType = FormPositionType;

  constructor() {
  }

  ngOnInit() {
  }

  next() {
    console.log('next'); // TODO remove console.log
  }

  submit() {
    console.log('submit'); // TODO remove console.log
  }

}
