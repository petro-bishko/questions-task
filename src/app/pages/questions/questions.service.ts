import { Injectable } from '@angular/core';
import { Question } from '../core/models/question';
import { FormPositionType } from '../core/enum/form-postion-type';
import { FormControlType } from '../core/enum/form-control-type';
import { FormValidatorType } from '../core/enum/form-validator-type';
import { Observable, of } from 'rxjs';

@Injectable()
export class QuestionsService {


  private questions: Question[] = [
    {
      id: 1,
      title: 'Question 1',
      htmlLeftQuestionContent: '<img src="./assets/img/main-page-bg.png">',
      htmlRightQuestionContent: '<p>Question 1 how to do it?</p>',
      formPosition: FormPositionType.right,
      formControl: [
        {
          type: FormControlType.radioButton,
          validator: [FormValidatorType.required],
          htmlContent: 'Answer 1',
        },
        {
          type: FormControlType.radioButton,
          validator: [FormValidatorType.required],
          htmlContent: 'Answer 2',
        },
        {
          type: FormControlType.radioButton,
          validator: [FormValidatorType.required],
          htmlContent: 'Answer 3',
        },
        {
          type: FormControlType.radioButton,
          validator: [FormValidatorType.required],
          htmlContent: 'Answer 4',
        }
      ]

    },
    {
      id: 2,
      title: 'Question 2',
      htmlLeftQuestionContent: null,
      htmlRightQuestionContent: '<p>Question 2 how to do it?</p>',
      formPosition: FormPositionType.left,
      formControl: [
        {
          type: FormControlType.radioButton,
          htmlContent: '<img src="./assets/img/main-page-bg.png">',
        },
        {
          type: FormControlType.radioButton,
          htmlContent: '<img src="./assets/img/main-page-bg.png">',
        },
        {
          type: FormControlType.radioButton,
          htmlContent: '<img src="./assets/img/main-page-bg.png">',
        },
        {
          type: FormControlType.radioButton,
          htmlContent: '<img src="./assets/img/main-page-bg.png">',
        }
      ]

    },
    {
      id: 3,
      title: 'Question 3',
      htmlLeftQuestionContent: '<video src="some-url"></video>',
      htmlRightQuestionContent: null,
      formPosition: FormPositionType.left,
      formControl: [
        {
          type: FormControlType.checkBox,
          htmlContent: 'Answer 1',
        },
        {
          type: FormControlType.checkBox,
          htmlContent: 'Answer 2',
        },
        {
          type: FormControlType.checkBox,
          htmlContent: 'Answer 3',
        },
        {
          type: FormControlType.checkBox,
          htmlContent: 'Answer 4',
        }
      ]

    }
  ];

  constructor() {
  }

  getQuestions(): Observable<Question[]> {
    return of(this.questions);
  }

  getQuestionByID(id: number): Observable<Question> {
    return of(this.questions.find((value) => value.id === id));
  }
}
